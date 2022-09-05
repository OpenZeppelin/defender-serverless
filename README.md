# Defender Provider Serverless Framework

:warning: This is a proof of concept. **Do not use in production**. :warning:

Proof of concept for a Defender plugin for the Serverless framework. Goal is to be able to define Autotasks (and more) declaratively from a `serverless.yaml` and provision them via the CLI using `serverless deploy`.

```yaml
service: defender-test-project

frameworkVersion: '3'

provider:
  name: defender

functions:
  hello:
    name: 'Hello world from serverless'
    path: './hello-world'

plugins:
  - ../defender-serverless
```

Requires setting the `API_KEY` and `API_SECRET` environment variables to a Defender Team API Key with Autotask management capabilities.