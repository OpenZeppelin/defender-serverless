# Defender Serverless Framework

A Defender plugin for the Serverless framework.

## Installation

`sls install --url https://github.com/OpenZeppelin/defender-serverless/tree/main/template -n my-service`

## Setup

This plugin allows you to define Autotasks, Sentinels, Notifications, Relayers, Contracts, Policies and Secrets declaratively from a `serverless.yml` and provision them via the CLI using `serverless deploy`.

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

This requires setting the `TEAM_API_KEY` and `TEAN_API_SECRET`, either in your environment variables or through a configuration file. Modify the `serverless.yml` accordingly.
Ensure the Defender Team API Keys are setup with all API capabilities.

The `stackName` is combined with the resource key to uniquely identify each resource. This allows you to deploy, remove and update various stacks within Defender.
A caveat is when `ssot` is enabled, this will remove resources on your account that do not belong to the current stack.

## Commands

### Deploy

You can use `sls deploy` to deploy your current stack to Defender.
The deploy takes in an optional `--stage` flag, which is defaulted to `dev`. Moreover, the `serverless.yml` contains a required `ssot` property, which stands for Single Source of Truth.
When enabled, this will use the resources defined in the template as the single source of truth, removing Defender resources which do not exist in the template, with the exception of Relayers (given these _could_ contain funds).
:warning: This command _will_ create a log entry and _might_ create a `relayer-keys` folder in the `.defender` folder of the current working directory. The `.defender` folder _should_ be in the `.gitignore` file, as it could contain sensitive information, such as relayer keys and secrets.

### Info

You can use `sls info` to retrieve information on every resource defined in the `serverless.yml` file, including unique identifiers, and properties unique to each Defender component.

### Remove

You can use `sls remove` to remove all defender resources defined in the `serverless.yml` file, with the exception of Relayers.

### Logs

You can use `sls logs --function <stack_resource_id> --data {...}` to retrieve the latest autotask logs for a given autotask stack resource ID (e.g. mystack.autotask-example-1). This command will run continiously and retrieve logs every 2 seconds. The `--data` flag is optional.

### Invoke

You can use `sls invoke --function <stack_resource_id>` to manually run an autotask, given its stack resource ID (e.g. mystack.autotask-example-1).

Each command has a standard output to a JSON object.
