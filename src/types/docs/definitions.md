## Definitions Type

unknown ([Definitions](definitions.md))

# Definitions Definitions

## Definitions group address

Reference this group by using

```json
{"$ref":"undefined#/definitions/address"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group network

Reference this group by using

```json
{"$ref":"undefined#/definitions/network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group policy

Reference this group by using

```json
{"$ref":"undefined#/definitions/policy"}
```

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [gas-price-cap](#gas-price-cap)             | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "undefined#/definitions/policy/properties/gas-price-cap")             |
| [whitelist-receivers](#whitelist-receivers) | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-whitelist-receivers.md "undefined#/definitions/policy/properties/whitelist-receivers") |
| [eip1559-pricing](#eip1559-pricing)         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "undefined#/definitions/policy/properties/eip1559-pricing")         |

### gas-price-cap



`gas-price-cap`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "undefined#/definitions/policy/properties/gas-price-cap")

#### gas-price-cap Type

`integer`

### whitelist-receivers



`whitelist-receivers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-whitelist-receivers.md "undefined#/definitions/policy/properties/whitelist-receivers")

#### whitelist-receivers Type

`string[]`

### eip1559-pricing



`eip1559-pricing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "undefined#/definitions/policy/properties/eip1559-pricing")

#### eip1559-pricing Type

`boolean`

## Definitions group relayer

Reference this group by using

```json
{"$ref":"undefined#/definitions/relayer"}
```

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "undefined#/definitions/relayer/properties/name")                                 |
| [network](#network)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-network.md "undefined#/definitions/relayer/properties/network")                           |
| [min-balance](#min-balance)                   | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "undefined#/definitions/relayer/properties/min-balance")                   |
| [address-from-relayer](#address-from-relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-address-from-relayer.md "undefined#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "undefined#/definitions/relayer/properties/policy")                                                |
| [api-keys](#api-keys)                         | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-api-keys.md "undefined#/definitions/relayer/properties/api-keys")                         |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-name.md "undefined#/definitions/relayer/properties/name")

#### name Type

`string`

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-relayer-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-network.md "undefined#/definitions/relayer/properties/network")

#### network Type

`string` ([Network](definitions-definitions-relayer-properties-network.md))

#### network Constraints

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

### min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-min-balance.md "undefined#/definitions/relayer/properties/min-balance")

#### min-balance Type

`integer`

### address-from-relayer



`address-from-relayer`

*   is optional

*   Type: `object` ([Details](definitions-definitions-relayer-properties-address-from-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-address-from-relayer.md "undefined#/definitions/relayer/properties/address-from-relayer")

#### address-from-relayer Type

`object` ([Details](definitions-definitions-relayer-properties-address-from-relayer.md))

### policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "undefined#/definitions/relayer/properties/policy")

#### policy Type

`object` ([Policy](definitions-definitions-policy.md))

#### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-api-keys.md "undefined#/definitions/relayer/properties/api-keys")

#### api-keys Type

`string[]`

## Definitions group contract

Reference this group by using

```json
{"$ref":"undefined#/definitions/contract"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-name.md "undefined#/definitions/contract/properties/name")         |
| [address](#address)   | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-address.md "undefined#/definitions/contract/properties/address")   |
| [network](#network-1) | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-network.md "undefined#/definitions/contract/properties/network")   |
| [abi](#abi)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-abi.md "undefined#/definitions/contract/properties/abi")           |
| [nat-spec](#nat-spec) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-nat-spec.md "undefined#/definitions/contract/properties/nat-spec") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-name.md "undefined#/definitions/contract/properties/name")

#### name Type

`string`

### address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-contract-properties-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-address.md "undefined#/definitions/contract/properties/address")

#### address Type

`string` ([Address](definitions-definitions-contract-properties-address.md))

#### address Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-contract-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-network.md "undefined#/definitions/contract/properties/network")

#### network Type

`string` ([Network](definitions-definitions-contract-properties-network.md))

#### network Constraints

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

### abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-abi.md "undefined#/definitions/contract/properties/abi")

#### abi Type

`string`

### nat-spec



`nat-spec`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-nat-spec.md "undefined#/definitions/contract/properties/nat-spec")

#### nat-spec Type

`string`

## Definitions group notificationType

Reference this group by using

```json
{"$ref":"undefined#/definitions/notificationType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group datadogConfig

Reference this group by using

```json
{"$ref":"undefined#/definitions/datadogConfig"}
```

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                                        |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [api-key](#api-key)              | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "undefined#/definitions/datadogConfig/properties/api-key")              |
| [metric-p$refix](#metric-prefix) | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "undefined#/definitions/datadogConfig/properties/metric-p$refix") |

### api-key



`api-key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "undefined#/definitions/datadogConfig/properties/api-key")

#### api-key Type

`string`

### metric-p$refix



`metric-p$refix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "undefined#/definitions/datadogConfig/properties/metric-p$refix")

#### metric-p$refix Type

`string`

#### metric-p$refix Constraints

**maximum length**: the maximum number of characters for this string is: `100`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z]+[A-Za-z0-9_\.]*\.$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z%5D%2B%5BA-Za-z0-9_%5C.%5D*%5C.%24 "try regular expression with regexr.com")

## Definitions group urlConfig

Reference this group by using

```json
{"$ref":"undefined#/definitions/urlConfig"}
```

| Property    | Type     | Required | Nullable       | Defined by                                                                                                           |
| :---------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [url](#url) | `string` | Required | cannot be null | [Definitions](definitions-definitions-urlconfig-properties-url.md "undefined#/definitions/urlConfig/properties/url") |

### url



`url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-urlconfig-properties-url.md "undefined#/definitions/urlConfig/properties/url")

#### url Type

`string`

#### url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group telegramBotConfig

Reference this group by using

```json
{"$ref":"undefined#/definitions/telegramBotConfig"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                    |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [bot-token](#bot-token) | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "undefined#/definitions/telegramBotConfig/properties/bot-token") |
| [chat-id](#chat-id)     | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "undefined#/definitions/telegramBotConfig/properties/chat-id")     |

### bot-token



`bot-token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "undefined#/definitions/telegramBotConfig/properties/bot-token")

#### bot-token Type

`string`

### chat-id



`chat-id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "undefined#/definitions/telegramBotConfig/properties/chat-id")

#### chat-id Type

`string`

## Definitions group emailConfig

Reference this group by using

```json
{"$ref":"undefined#/definitions/emailConfig"}
```

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                     |
| :---------------- | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [emails](#emails) | `array` | Required | cannot be null | [Definitions](definitions-definitions-emailconfig-properties-emails.md "undefined#/definitions/emailConfig/properties/emails") |

### emails



`emails`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-emailconfig-properties-emails.md "undefined#/definitions/emailConfig/properties/emails")

#### emails Type

`string[]`

#### emails Default Value

The default value is:

```json
[]
```

## Definitions group notification

Reference this group by using

```json
{"$ref":"undefined#/definitions/notification"}
```

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                               |
| :---------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-notificationtype.md "undefined#/definitions/notification/properties/type") |
| [name](#name-2)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-name.md "undefined#/definitions/notification/properties/name")             |
| [paused](#paused) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-paused.md "undefined#/definitions/notification/properties/paused")         |
| [config](#config) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-config.md "undefined#/definitions/notification/properties/config")         |

### type



`type`

*   is required

*   Type: `string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-notificationtype.md "undefined#/definitions/notification/properties/type")

#### type Type

`string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"slack"`    |             |
| `"email"`    |             |
| `"discord"`  |             |
| `"telegram"` |             |
| `"datadog"`  |             |
| `"webhook"`  |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-name.md "undefined#/definitions/notification/properties/name")

#### name Type

`string`

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-paused.md "undefined#/definitions/notification/properties/paused")

#### paused Type

`boolean`

### config



`config`

*   is required

*   Type: `object` ([Details](definitions-definitions-notification-properties-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-config.md "undefined#/definitions/notification/properties/config")

#### config Type

`object` ([Details](definitions-definitions-notification-properties-config.md))

one (and only one) of

*   [EmailConfig](definitions-definitions-emailconfig.md "check type definition")

*   [TelegramConfig](definitions-definitions-telegramconfig.md "check type definition")

*   [DatadogConfig](definitions-definitions-datadogconfig.md "check type definition")

*   [UrlConfig](definitions-definitions-urlconfig.md "check type definition")

## Definitions group blockSentinel

Reference this group by using

```json
{"$ref":"undefined#/definitions/blockSentinel"}
```

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                           |
| :---------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-3)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-name.md "undefined#/definitions/blockSentinel/properties/name")                       |
| [type](#type-1)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-type.md "undefined#/definitions/blockSentinel/properties/type")                       |
| [network](#network-2)                     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-network.md "undefined#/definitions/blockSentinel/properties/network")                 |
| [addresses](#addresses)                   | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "undefined#/definitions/blockSentinel/properties/addresses")             |
| [abi](#abi-1)                             | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-abi.md "undefined#/definitions/blockSentinel/properties/abi")                         |
| [alert-threshold](#alert-threshold)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-alert-threshold.md "undefined#/definitions/blockSentinel/properties/alert-threshold") |
| [paused](#paused-1)                       | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-paused.md "undefined#/definitions/blockSentinel/properties/paused")                   |
| [autotask-condition](#autotask-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-condition")                              |
| [autotask-trigger](#autotask-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-trigger")                                |
| [confirm-level](#confirm-level)           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "undefined#/definitions/blockSentinel/properties/confirm-level")     |
| [notify-config](#notify-config)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notify-config.md "undefined#/definitions/blockSentinel/properties/notify-config")     |
| [conditions](#conditions)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "undefined#/definitions/blockSentinel/properties/conditions")           |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-name.md "undefined#/definitions/blockSentinel/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-type.md "undefined#/definitions/blockSentinel/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"BLOCK"` |             |

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-blocksentinel-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-network.md "undefined#/definitions/blockSentinel/properties/network")

#### network Type

`string` ([Network](definitions-definitions-blocksentinel-properties-network.md))

#### network Constraints

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

### addresses



`addresses`

*   is required

*   Type: `string[]` ([Address](definitions-definitions-blocksentinel-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "undefined#/definitions/blockSentinel/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-blocksentinel-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-abi.md "undefined#/definitions/blockSentinel/properties/abi")

#### abi Type

`string`

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-alert-threshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-alert-threshold.md "undefined#/definitions/blockSentinel/properties/alert-threshold")

#### alert-threshold Type

`object` ([Details](definitions-definitions-blocksentinel-properties-alert-threshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-paused.md "undefined#/definitions/blockSentinel/properties/paused")

#### paused Type

`boolean`

### autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-condition")

#### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/blockSentinel/properties/autotask-trigger")

#### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "undefined#/definitions/blockSentinel/properties/confirm-level")

#### confirm-level Type

merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-1.md "check type definition")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-notify-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notify-config.md "undefined#/definitions/blockSentinel/properties/notify-config")

#### notify-config Type

`object` ([Details](definitions-definitions-blocksentinel-properties-notify-config.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Details](definitions-definitions-blocksentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "undefined#/definitions/blockSentinel/properties/conditions")

#### conditions Type

`object` ([Details](definitions-definitions-blocksentinel-properties-conditions.md))

## Definitions group fortaSentinel

Reference this group by using

```json
{"$ref":"undefined#/definitions/fortaSentinel"}
```

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                           |
| :------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-4)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-name.md "undefined#/definitions/fortaSentinel/properties/name")                       |
| [type](#type-2)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-type.md "undefined#/definitions/fortaSentinel/properties/type")                       |
| [network](#network-3)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-network.md "undefined#/definitions/fortaSentinel/properties/network")                 |
| [addresses](#addresses-1)                   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "undefined#/definitions/fortaSentinel/properties/addresses")             |
| [abi](#abi-2)                               | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-abi.md "undefined#/definitions/fortaSentinel/properties/abi")                         |
| [alert-threshold](#alert-threshold-1)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-alert-threshold.md "undefined#/definitions/fortaSentinel/properties/alert-threshold") |
| [paused](#paused-2)                         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-paused.md "undefined#/definitions/fortaSentinel/properties/paused")                   |
| [autotask-condition](#autotask-condition-1) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/fortaSentinel/properties/autotask-condition")                              |
| [autotask-trigger](#autotask-trigger-1)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "undefined#/definitions/fortaSentinel/properties/autotask-trigger")                                |
| [notify-config](#notify-config-1)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notify-config.md "undefined#/definitions/fortaSentinel/properties/notify-config")     |
| [conditions](#conditions-1)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "undefined#/definitions/fortaSentinel/properties/conditions")           |
| [forta-node-id](#forta-node-id)             | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "undefined#/definitions/fortaSentinel/properties/forta-node-id")     |
| [agent-ids](#agent-ids)                     | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-agent-ids.md "undefined#/definitions/fortaSentinel/properties/agent-ids")             |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-name.md "undefined#/definitions/fortaSentinel/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-type.md "undefined#/definitions/fortaSentinel/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"FORTA"` |             |

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-fortasentinel-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-network.md "undefined#/definitions/fortaSentinel/properties/network")

#### network Type

`string` ([Network](definitions-definitions-fortasentinel-properties-network.md))

#### network Constraints

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

### addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-fortasentinel-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "undefined#/definitions/fortaSentinel/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-fortasentinel-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-abi.md "undefined#/definitions/fortaSentinel/properties/abi")

#### abi Type

`string`

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([Details](definitions-definitions-fortasentinel-properties-alert-threshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-alert-threshold.md "undefined#/definitions/fortaSentinel/properties/alert-threshold")

#### alert-threshold Type

`object` ([Details](definitions-definitions-fortasentinel-properties-alert-threshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-paused.md "undefined#/definitions/fortaSentinel/properties/paused")

#### paused Type

`boolean`

### autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/fortaSentinel/properties/autotask-condition")

#### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "undefined#/definitions/fortaSentinel/properties/autotask-trigger")

#### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([Details](definitions-definitions-fortasentinel-properties-notify-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notify-config.md "undefined#/definitions/fortaSentinel/properties/notify-config")

#### notify-config Type

`object` ([Details](definitions-definitions-fortasentinel-properties-notify-config.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Details](definitions-definitions-fortasentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "undefined#/definitions/fortaSentinel/properties/conditions")

#### conditions Type

`object` ([Details](definitions-definitions-fortasentinel-properties-conditions.md))

### forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "undefined#/definitions/fortaSentinel/properties/forta-node-id")

#### forta-node-id Type

`string`

### agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-agent-ids.md "undefined#/definitions/fortaSentinel/properties/agent-ids")

#### agent-ids Type

`string[]`

## Definitions group sentinel

Reference this group by using

```json
{"$ref":"undefined#/definitions/sentinel"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group autotask

Reference this group by using

```json
{"$ref":"undefined#/definitions/autotask"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-5)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-name.md "undefined#/definitions/autotask/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-path.md "undefined#/definitions/autotask/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "undefined#/definitions/autotask/properties/relayer")                     |
| [trigger](#trigger) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger.md "undefined#/definitions/autotask/properties/trigger") |
| [paused](#paused-3) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-paused.md "undefined#/definitions/autotask/properties/paused")   |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-name.md "undefined#/definitions/autotask/properties/name")

#### name Type

`string`

### path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-path.md "undefined#/definitions/autotask/properties/path")

#### path Type

`string`

### relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "undefined#/definitions/autotask/properties/relayer")

#### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

#### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### trigger



`trigger`

*   is required

*   Type: `object` ([Details](definitions-definitions-autotask-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger.md "undefined#/definitions/autotask/properties/trigger")

#### trigger Type

`object` ([Details](definitions-definitions-autotask-properties-trigger.md))

one (and only one) of

*   [Untitled undefined type in Definitions](definitions-definitions-autotask-properties-trigger-oneof-0.md "check type definition")

*   [Untitled undefined type in Definitions](definitions-definitions-autotask-properties-trigger-oneof-1.md "check type definition")

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-paused.md "undefined#/definitions/autotask/properties/paused")

#### paused Type

`boolean`
