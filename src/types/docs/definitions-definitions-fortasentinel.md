## 1 Type

`object` ([FortaSentinel](definitions-definitions-fortasentinel.md))

any of

*   [Untitled  type in Definitions](definitions-definitions-fortasentinel-anyof-0.md "check type definition")

*   [Untitled  type in Definitions](definitions-definitions-fortasentinel-anyof-1.md "check type definition")

## 1 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 1 Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                          |
| :---------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-name.md "#/definitions/fortaSentinel/properties/name")                      |
| [type](#type)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-type.md "#/definitions/fortaSentinel/properties/type")                      |
| [network](#network)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-network.md "#/definitions/fortaSentinel/properties/network")                                         |
| [addresses](#addresses)                   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "#/definitions/fortaSentinel/properties/addresses")            |
| [abi](#abi)                               | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-abi.md "#/definitions/fortaSentinel/properties/abi")                        |
| [alert-threshold](#alert-threshold)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-alertthreshold.md "#/definitions/fortaSentinel/properties/alert-threshold") |
| [paused](#paused)                         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-paused.md "#/definitions/fortaSentinel/properties/paused")                  |
| [autotask-condition](#autotask-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-condition")                             |
| [autotask-trigger](#autotask-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-trigger")                               |
| [notify-config](#notify-config)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig.md "#/definitions/fortaSentinel/properties/notify-config")     |
| [conditions](#conditions)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "#/definitions/fortaSentinel/properties/conditions")          |
| [forta-node-id](#forta-node-id)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "#/definitions/fortaSentinel/properties/forta-node-id")    |
| [agent-ids](#agent-ids)                   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-agentids.md "#/definitions/fortaSentinel/properties/agent-ids")             |
| [risk-category](#risk-category)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-riskcategory.md "#/definitions/fortaSentinel/properties/risk-category")                              |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-name.md "#/definitions/fortaSentinel/properties/name")

### name Type

`string`

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-type.md "#/definitions/fortaSentinel/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"FORTA"` |             |

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "#/definitions/fortaSentinel/properties/network")

### network Type

`string` ([Network](definitions-definitions-network.md))

### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"kovan"`                 |             |
| `"goerli"`                |             |
| `"xdai"`                  |             |
| `"sokol"`                 |             |
| `"fuse"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"moonbase"`              |             |
| `"moonriver"`             |             |
| `"moonbeam"`              |             |
| `"matic"`                 |             |
| `"mumbai"`                |             |
| `"avalanche"`             |             |
| `"fuji"`                  |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"optimism-goerli"`       |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"arbitrum-goerli"`       |             |
| `"celo"`                  |             |
| `"alfajores"`             |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"zksync-goerli"`         |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "#/definitions/fortaSentinel/properties/addresses")

### addresses Type

`string[]` ([Address](definitions-definitions-address.md))

## abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-abi.md "#/definitions/fortaSentinel/properties/abi")

### abi Type

`string`

## alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-fortasentinel-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-alertthreshold.md "#/definitions/fortaSentinel/properties/alert-threshold")

### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-fortasentinel-properties-alertthreshold.md))

## paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-paused.md "#/definitions/fortaSentinel/properties/paused")

### paused Type

`boolean`

## autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-condition")

### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-trigger")

### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig.md "#/definitions/fortaSentinel/properties/notify-config")

### notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

## conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-fortasentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "#/definitions/fortaSentinel/properties/conditions")

### conditions Type

`object` ([Conditions](definitions-definitions-fortasentinel-properties-conditions.md))

## forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "#/definitions/fortaSentinel/properties/forta-node-id")

### forta-node-id Type

`string`

## agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-agentids.md "#/definitions/fortaSentinel/properties/agent-ids")

### agent-ids Type

`string[]`

## risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-riskcategory.md "#/definitions/fortaSentinel/properties/risk-category")

### risk-category Type

`string` ([RiskCategory](definitions-definitions-riskcategory.md))

### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |
