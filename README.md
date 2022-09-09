# Defender Serverless Plugin

Defender Serverless is a Serverless Framework plugin for automated resource management on Defender.

## Installation

You can initialise your Serverless project directly using our pre-configured template:

```
sls install --url https://github.com/OpenZeppelin/defender-serverless/tree/main/template -n my-service
```

Alternatively, you can install it directly into an existing project with:

`yarn install defender-serverless`

## Setup

This plugin allows you to define Autotasks, Sentinels, Notifications, Relayers, Contracts, Policies and Secrets declaratively from a `serverless.yml` and provision them via the CLI using `serverless deploy`. An example template below with an autotask, a relayer, a policy and a single relayer API key defined:

```yaml
service: defender-serverless-template
configValidationMode: error
frameworkVersion: '3'

provider:
  name: defender
  stage: ${opt:stage, 'dev'}
  stackName: 'mystack'
  ssot: false

defender:
  key: '${env:TEAM_API_KEY}'
  secret: '${env:TEAM_API_SECRET}'

functions:
  autotask-example-1:
    name: 'Hello world from serverless'
    path: './autotasks/hello-world'
    relayer: ${self:resources.Resources.relayers.relayer-1}
    trigger:
      type: 'schedule'
      frequency: 1500
    paused: false

resources:
  Resources:
    policies:
      policy-1:
        gas-price-cap: 1000
        whitelist-receivers:
          - '0x0f06aB75c7DD497981b75CD82F6566e3a5CAd8f2'
        eip1559-pricing: true

    relayers:
      relayer-1:
        name: 'Test Relayer 1'
        network: 'rinkeby'
        min-balance: 1000
        policy: ${self:resources.Resources.policies.policy-1}
        api-keys:
          - key1

plugins:
  - defender-serverless
```

This requires setting the `key` and `secret` under the `defender` property of the YAML file. We recommend using environment variables or a secure (gitignored) configuration file to retrieve these values. Modify the `serverless.yml` accordingly.

Ensure the Defender Team API Keys are setup with all appropriate API capabilities.

The `stackName` (e.g. mystack) is combined with the resource key (e.g. relayer-1) to uniquely identify each resource. This identifier is called the `stackResourceId` (e.g. mystack.relayer-1) and allows you to manage multiple deployments within the same Defender team.

> A caveat is when `ssot` (single source of truth) is enabled, all resources on your account that do not belong to the current stack are removed upon deployment.

## Commands

### Deploy

You can use `sls deploy` to deploy your current stack to Defender.

The deploy takes in an optional `--stage` flag, which is defaulted to `dev` when installed from the template above.

Moreover, the `serverless.yml` must contain a `ssot` property, which stands for Single Source of Truth.
When enabled, will use the resources defined in the template as the single source of truth, removing Defender resources which do not exist in the template, with the exception of Relayers (given these _could_ contain funds).

This command will append a log entry in the `.defender` folder of the current working directory. Additionally, if any new relayer keys are created, these will be stored as JSON objects in the `.defender/relayer-keys` folder.

> When installed from the template, we ensure the `.defender` folder is ignored from any git commits. However, when installing directly, make sure to add this folder it your `.gitignore` file.

### Info

You can use `sls info` to retrieve information on every resource defined in the `serverless.yml` file, including unique identifiers, and properties unique to each Defender component.

### Remove

You can use `sls remove` to remove all defender resources defined in the `serverless.yml` file.

> Due to the nature of Relayers, these can only be deleted from the Defender UI directly, with the exception of relayer API keys.

### Logs

You can use `sls logs --function <stack_resource_id> --data {...}` to retrieve the latest autotask logs for a given autotask identifier (e.g. mystack.autotask-example-1). This command will run continiously and retrieve logs every 2 seconds. The `--data` flag is optional.

### Invoke

You can use `sls invoke --function <stack_resource_id>` to manually run an autotask, given its identifier (e.g. mystack.autotask-example-1).

> Each command has a standard output to a JSON object.
