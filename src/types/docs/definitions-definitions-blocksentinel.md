## 0 Type

`object` ([BlockSentinel](definitions-definitions-blocksentinel.md))

## 0 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 0 Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                           |
| :---------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-name.md "undefined#/definitions/blockSentinel/properties/name")                       |
| [type](#type)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-type.md "undefined#/definitions/blockSentinel/properties/type")                       |
| [network](#network)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-network.md "undefined#/definitions/blockSentinel/properties/network")                                          |
| [addresses](#addresses)                   | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "undefined#/definitions/blockSentinel/properties/addresses")             |
| [abi](#abi)                               | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-abi.md "undefined#/definitions/blockSentinel/properties/abi")                         |
| [alert-threshold](#alert-threshold)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-alert-threshold.md "undefined#/definitions/blockSentinel/properties/alert-threshold") |
| [paused](#paused)                         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-paused.md "undefined#/definitions/blockSentinel/properties/paused")                   |
| [autotask-condition](#autotask-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-condition")                              |
| [autotask-trigger](#autotask-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-trigger")                                |
| [confirm-level](#confirm-level)           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "undefined#/definitions/blockSentinel/properties/confirm-level")     |
| [notify-config](#notify-config)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notify-config.md "undefined#/definitions/blockSentinel/properties/notify-config")     |
| [conditions](#conditions)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "undefined#/definitions/blockSentinel/properties/conditions")           |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-name.md "undefined#/definitions/blockSentinel/properties/name")

### name Type

`string`

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-type.md "undefined#/definitions/blockSentinel/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"BLOCK"` |             |

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "undefined#/definitions/blockSentinel/properties/network")

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

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## addresses



`addresses`

*   is required

*   Type: `string[]` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "undefined#/definitions/blockSentinel/properties/addresses")

### addresses Type

`string[]` ([Address](definitions-definitions-address.md))

## abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-abi.md "undefined#/definitions/blockSentinel/properties/abi")

### abi Type

`string`

## alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-alert-threshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-alert-threshold.md "undefined#/definitions/blockSentinel/properties/alert-threshold")

### alert-threshold Type

`object` ([Details](definitions-definitions-blocksentinel-properties-alert-threshold.md))

## paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-paused.md "undefined#/definitions/blockSentinel/properties/paused")

### paused Type

`boolean`

## autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-condition")

### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-trigger")

### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "undefined#/definitions/blockSentinel/properties/confirm-level")

### confirm-level Type

merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-1.md "check type definition")

## notify-config



`notify-config`

*   is required

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-notify-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notify-config.md "undefined#/definitions/blockSentinel/properties/notify-config")

### notify-config Type

`object` ([Details](definitions-definitions-blocksentinel-properties-notify-config.md))

## conditions



`conditions`

*   is optional

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "undefined#/definitions/blockSentinel/properties/conditions")

### conditions Type

`object` ([Details](definitions-definitions-blocksentinel-properties-conditions.md))
