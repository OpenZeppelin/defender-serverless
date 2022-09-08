# Defender Provider Serverless Framework

A Defender plugin for the Serverless framework.

## Installation

`sls install --url https://github.com/OpenZeppelin/defender-serverless/template`

## Setup

This plugin allows you to define Autotasks, Sentinels, Notifications, Relayers, Contracts, Policies and Secrets declaratively from a `serverless.yaml` and provision them via the CLI using `serverless deploy`.

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

This requires setting the `TEAM_API_KEY` and `TEAN_API_SECRET`, either in your environment variables or through a configuration file. Modify the `serverless.yaml` accordingly.
Ensure the Defender Team API Keys are setup with all API capabilities.
