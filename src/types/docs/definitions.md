## Definitions Type

unknown ([Definitions](definitions.md))

# Definitions Definitions

## Definitions group address

Reference this group by using

```json
{"$ref":"#/definitions/address"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group risk-category

Reference this group by using

```json
{"$ref":"#/definitions/risk-category"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group network

Reference this group by using

```json
{"$ref":"#/definitions/network"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group policy

Reference this group by using

```json
{"$ref":"#/definitions/policy"}
```

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [gas-price-cap](#gas-price-cap)               | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "#/definitions/policy/properties/gas-price-cap")               |
| [whitelist-receivers](#whitelist-receivers)   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "#/definitions/policy/properties/whitelist-receivers")    |
| [eip1559-pricing](#eip1559-pricing)           | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "#/definitions/policy/properties/eip1559-pricing")           |
| [private-transactions](#private-transactions) | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-private-transactions.md "#/definitions/policy/properties/private-transactions") |

### gas-price-cap



`gas-price-cap`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "#/definitions/policy/properties/gas-price-cap")

#### gas-price-cap Type

`integer`

### whitelist-receivers



`whitelist-receivers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-whitelistreceivers.md "#/definitions/policy/properties/whitelist-receivers")

#### whitelist-receivers Type

`string[]`

### eip1559-pricing



`eip1559-pricing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "#/definitions/policy/properties/eip1559-pricing")

#### eip1559-pricing Type

`boolean`

### private-transactions



`private-transactions`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-private-transactions.md "#/definitions/policy/properties/private-transactions")

#### private-transactions Type

`boolean`

## Definitions group relayer

Reference this group by using

```json
{"$ref":"#/definitions/relayer"}
```

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "#/definitions/relayer/properties/name")                               |
| [network](#network)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-network.md "#/definitions/relayer/properties/network")                         |
| [min-balance](#min-balance)                   | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "#/definitions/relayer/properties/min-balance")                 |
| [address-from-relayer](#address-from-relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "#/definitions/relayer/properties/policy")                                              |
| [api-keys](#api-keys)                         | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "#/definitions/relayer/properties/api-keys")                 |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-name.md "#/definitions/relayer/properties/name")

#### name Type

`string`

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-relayer-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-network.md "#/definitions/relayer/properties/network")

#### network Type

`string` ([Network](definitions-definitions-relayer-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"kovan"`                 |             |
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
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
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
| `"zksync"`                |             |
| `"base"`                  |             |
| `"linea"`                 |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-min-balance.md "#/definitions/relayer/properties/min-balance")

#### min-balance Type

`integer`

### address-from-relayer



`address-from-relayer`

*   is optional

*   Type: `object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "#/definitions/relayer/properties/address-from-relayer")

#### address-from-relayer Type

`object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

### policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "#/definitions/relayer/properties/policy")

#### policy Type

`object` ([Policy](definitions-definitions-policy.md))

#### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "#/definitions/relayer/properties/api-keys")

#### api-keys Type

`string[]`

## Definitions group contract

Reference this group by using

```json
{"$ref":"#/definitions/contract"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-name.md "#/definitions/contract/properties/name")         |
| [address](#address)   | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-address.md "#/definitions/contract/properties/address")   |
| [network](#network-1) | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-network.md "#/definitions/contract/properties/network")   |
| [abi](#abi)           | Merged   | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "#/definitions/contract/properties/abi")                           |
| [nat-spec](#nat-spec) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-nat-spec.md "#/definitions/contract/properties/nat-spec") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-name.md "#/definitions/contract/properties/name")

#### name Type

`string`

### address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-contract-properties-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-address.md "#/definitions/contract/properties/address")

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

*   defined in: [Definitions](definitions-definitions-contract-properties-network.md "#/definitions/contract/properties/network")

#### network Type

`string` ([Network](definitions-definitions-contract-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"alfajores"`             |             |
| `"amoy"`                  |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"avalanche"`             |             |
| `"base"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"celo"`                  |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"fuji"`                  |             |
| `"fuse"`                  |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"kovan"`                 |             |
| `"linea"`                 |             |
| `"linea-goerli"`          |             |
| `"mainnet"`               |             |
| `"matic"`                 |             |
| `"moonbase"`              |             |
| `"moonbeam"`              |             |
| `"moonriver"`             |             |
| `"mumbai"`                |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"sepolia"`               |             |
| `"sokol"`                 |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"xdai"`                  |             |
| `"zksync"`                |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "#/definitions/contract/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### nat-spec



`nat-spec`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-nat-spec.md "#/definitions/contract/properties/nat-spec")

#### nat-spec Type

`string`

## Definitions group notificationType

Reference this group by using

```json
{"$ref":"#/definitions/notificationType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group datadogConfig

Reference this group by using

```json
{"$ref":"#/definitions/datadogConfig"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [api-key](#api-key)             | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "#/definitions/datadogConfig/properties/api-key")             |
| [metric-prefix](#metric-prefix) | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "#/definitions/datadogConfig/properties/metric-prefix") |

### api-key



`api-key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "#/definitions/datadogConfig/properties/api-key")

#### api-key Type

`string`

### metric-prefix



`metric-prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "#/definitions/datadogConfig/properties/metric-prefix")

#### metric-prefix Type

`string`

#### metric-prefix Constraints

**maximum length**: the maximum number of characters for this string is: `100`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z]+[A-Za-z0-9_\.]*\.$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z%5D%2B%5BA-Za-z0-9_%5C.%5D*%5C.%24 "try regular expression with regexr.com")

## Definitions group urlConfig

Reference this group by using

```json
{"$ref":"#/definitions/urlConfig"}
```

| Property    | Type     | Required | Nullable       | Defined by                                                                                                           |
| :---------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [url](#url) | `string` | Required | cannot be null | [Definitions](definitions-definitions-urlconfig-properties-url.md "#/definitions/urlConfig/properties/url") |

### url



`url`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-urlconfig-properties-url.md "#/definitions/urlConfig/properties/url")

#### url Type

`string`

#### url Constraints

**URI**: the string must be a URI, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group telegramBotConfig

Reference this group by using

```json
{"$ref":"#/definitions/telegramBotConfig"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                    |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [bot-token](#bot-token) | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "#/definitions/telegramBotConfig/properties/bot-token") |
| [chat-id](#chat-id)     | `string` | Required | cannot be null | [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "#/definitions/telegramBotConfig/properties/chat-id")     |

### bot-token



`bot-token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-bot-token.md "#/definitions/telegramBotConfig/properties/bot-token")

#### bot-token Type

`string`

### chat-id



`chat-id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-telegramconfig-properties-chat-id.md "#/definitions/telegramBotConfig/properties/chat-id")

#### chat-id Type

`string`

## Definitions group emailConfig

Reference this group by using

```json
{"$ref":"#/definitions/emailConfig"}
```

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                     |
| :---------------- | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [emails](#emails) | `array` | Required | cannot be null | [Definitions](definitions-definitions-emailconfig-properties-emails.md "#/definitions/emailConfig/properties/emails") |

### emails



`emails`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-emailconfig-properties-emails.md "#/definitions/emailConfig/properties/emails")

#### emails Type

`string[]`

#### emails Default Value

The default value is:

```json
[]
```

## Definitions group opsgenieUserType

Reference this group by using

```json
{"$ref":"#/definitions/opsgenieUserType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgeniePriorityLevel

Reference this group by using

```json
{"$ref":"#/definitions/opsgeniePriorityLevel"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgenieInstanceLocation

Reference this group by using

```json
{"$ref":"#/definitions/opsgenieInstanceLocation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group opsgenieUser

Reference this group by using

```json
{"$ref":"#/definitions/opsgenieUser"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [username](#username) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-username.md "#/definitions/opsgenieUser/properties/username")     |
| [fullName](#fullname) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "#/definitions/opsgenieUser/properties/fullName")     |
| [id](#id)             | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-id.md "#/definitions/opsgenieUser/properties/id")                 |
| [type](#type)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md "#/definitions/opsgenieUser/properties/type") |

### username



`username`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-username.md "#/definitions/opsgenieUser/properties/username")

#### username Type

`string`

### fullName



`fullName`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-fullname.md "#/definitions/opsgenieUser/properties/fullName")

#### fullName Type

`string`

### id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-id.md "#/definitions/opsgenieUser/properties/id")

#### id Type

`string`

### type



`type`

*   is required

*   Type: `string` ([opsgenieUserType](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md "#/definitions/opsgenieUser/properties/type")

#### type Type

`string` ([opsgenieUserType](definitions-definitions-opsgenieuser-properties-opsgenieusertype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"team"`       |             |
| `"user"`       |             |
| `"escalation"` |             |
| `"schedule"`   |             |

## Definitions group opsgenieConfig

Reference this group by using

```json
{"$ref":"#/definitions/opsgenieConfig"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [apiKey](#apikey)                     | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "#/definitions/opsgenieConfig/properties/apiKey")                             |
| [instanceLocation](#instancelocation) | `string` | Required | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md "#/definitions/opsgenieConfig/properties/instanceLocation") |
| [alias](#alias)                       | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "#/definitions/opsgenieConfig/properties/alias")                               |
| [responders](#responders)             | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-responders.md "#/definitions/opsgenieConfig/properties/responders")                     |
| [visibleTo](#visibleto)               | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-visibleto.md "#/definitions/opsgenieConfig/properties/visibleTo")                       |
| [actions](#actions)                   | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-actions.md "#/definitions/opsgenieConfig/properties/actions")                           |
| [tags](#tags)                         | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-tags.md "#/definitions/opsgenieConfig/properties/tags")                                 |
| [details](#details)                   | `object` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-details.md "#/definitions/opsgenieConfig/properties/details")                           |
| [entity](#entity)                     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "#/definitions/opsgenieConfig/properties/entity")                             |
| [priority](#priority)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md "#/definitions/opsgenieConfig/properties/priority")            |
| [note](#note)                         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "#/definitions/opsgenieConfig/properties/note")                                 |

### apiKey



`apiKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-apikey.md "#/definitions/opsgenieConfig/properties/apiKey")

#### apiKey Type

`string`

### instanceLocation



`instanceLocation`

*   is required

*   Type: `string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md "#/definitions/opsgenieConfig/properties/instanceLocation")

#### instanceLocation Type

`string` ([OpsgenieInstanceLocation](definitions-definitions-opsgenieconfig-properties-opsgenieinstancelocation.md))

#### instanceLocation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"US"` |             |
| `"EU"` |             |

### alias



`alias`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-alias.md "#/definitions/opsgenieConfig/properties/alias")

#### alias Type

`string`

#### alias Constraints

**maximum length**: the maximum number of characters for this string is: `512`

### responders



`responders`

*   is optional

*   Type: `object[]` ([Details](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-responders.md "#/definitions/opsgenieConfig/properties/responders")

#### responders Type

`object[]` ([Details](definitions-definitions-opsgenieuser.md))

### visibleTo



`visibleTo`

*   is optional

*   Type: `object[]` ([Details](definitions-definitions-opsgenieuser.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-visibleto.md "#/definitions/opsgenieConfig/properties/visibleTo")

#### visibleTo Type

`object[]` ([Details](definitions-definitions-opsgenieuser.md))

### actions



`actions`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-actions.md "#/definitions/opsgenieConfig/properties/actions")

#### actions Type

`string[]`

#### actions Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

### tags



`tags`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-tags.md "#/definitions/opsgenieConfig/properties/tags")

#### tags Type

`string[]`

#### tags Constraints

**maximum number of items**: the maximum number of items for this array is: `10`

### details



`details`

*   is optional

*   Type: `object` ([Details](definitions-definitions-opsgenieconfig-properties-details.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-details.md "#/definitions/opsgenieConfig/properties/details")

#### details Type

`object` ([Details](definitions-definitions-opsgenieconfig-properties-details.md))

### entity



`entity`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-entity.md "#/definitions/opsgenieConfig/properties/entity")

#### entity Type

`string`

#### entity Constraints

**maximum length**: the maximum number of characters for this string is: `512`

### priority



`priority`

*   is optional

*   Type: `string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md "#/definitions/opsgenieConfig/properties/priority")

#### priority Type

`string` ([OpsgeniePriorityLevel](definitions-definitions-opsgenieconfig-properties-opsgenieprioritylevel.md))

#### priority Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"P1"` |             |
| `"P2"` |             |
| `"P3"` |             |
| `"P4"` |             |
| `"P5"` |             |

### note



`note`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-opsgenieconfig-properties-note.md "#/definitions/opsgenieConfig/properties/note")

#### note Type

`string`

#### note Constraints

**maximum length**: the maximum number of characters for this string is: `25000`

## Definitions group pagerDutyEventType

Reference this group by using

```json
{"$ref":"#/definitions/pagerDutyEventType"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutyEventAction

Reference this group by using

```json
{"$ref":"#/definitions/pagerDutyEventAction"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutySeverity

Reference this group by using

```json
{"$ref":"#/definitions/pagerDutySeverity"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group pagerDutyConfig

Reference this group by using

```json
{"$ref":"#/definitions/pagerDutyConfig"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [token](#token)                 | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "#/definitions/pagerDutyConfig/properties/token")                      |
| [eventType](#eventtype)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md "#/definitions/pagerDutyConfig/properties/eventType")     |
| [routingKey](#routingkey)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "#/definitions/pagerDutyConfig/properties/routingKey")            |
| [eventAction](#eventaction)     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md "#/definitions/pagerDutyConfig/properties/eventAction") |
| [dedupKey](#dedupkey)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "#/definitions/pagerDutyConfig/properties/dedupKey")                |
| [severity](#severity)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md "#/definitions/pagerDutyConfig/properties/severity")       |
| [component](#component)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "#/definitions/pagerDutyConfig/properties/component")              |
| [group](#group)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "#/definitions/pagerDutyConfig/properties/group")                      |
| [class](#class)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "#/definitions/pagerDutyConfig/properties/class")                      |
| [customDetails](#customdetails) | `object` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-customdetails.md "#/definitions/pagerDutyConfig/properties/customDetails")      |

### token



`token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "#/definitions/pagerDutyConfig/properties/token")

#### token Type

`string`

### eventType



`eventType`

*   is required

*   Type: `string` ([PagerDutyEventType](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md "#/definitions/pagerDutyConfig/properties/eventType")

#### eventType Type

`string` ([PagerDutyEventType](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventtype.md))

#### eventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"change"` |             |
| `"alert"`  |             |

### routingKey



`routingKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "#/definitions/pagerDutyConfig/properties/routingKey")

#### routingKey Type

`string`

#### routingKey Constraints

**maximum length**: the maximum number of characters for this string is: `32`

**minimum length**: the minimum number of characters for this string is: `32`

### eventAction



`eventAction`

*   is optional

*   Type: `string` ([PagerDutyEventAction](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md "#/definitions/pagerDutyConfig/properties/eventAction")

#### eventAction Type

`string` ([PagerDutyEventAction](definitions-definitions-pagerdutyconfig-properties-pagerdutyeventaction.md))

#### eventAction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"trigger"`     |             |
| `"acknowledge"` |             |
| `"resolve"`     |             |

### dedupKey



`dedupKey`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "#/definitions/pagerDutyConfig/properties/dedupKey")

#### dedupKey Type

`string`

#### dedupKey Constraints

**maximum length**: the maximum number of characters for this string is: `255`

### severity



`severity`

*   is optional

*   Type: `string` ([PagerDutySeverity](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md "#/definitions/pagerDutyConfig/properties/severity")

#### severity Type

`string` ([PagerDutySeverity](definitions-definitions-pagerdutyconfig-properties-pagerdutyseverity.md))

#### severity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"critical"` |             |
| `"error"`    |             |
| `"warning"`  |             |
| `"info"`     |             |

### component



`component`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "#/definitions/pagerDutyConfig/properties/component")

#### component Type

`string`

### group



`group`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "#/definitions/pagerDutyConfig/properties/group")

#### group Type

`string`

### class



`class`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "#/definitions/pagerDutyConfig/properties/class")

#### class Type

`string`

### customDetails



`customDetails`

*   is optional

*   Type: `object` ([Details](definitions-definitions-pagerdutyconfig-properties-customdetails.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-customdetails.md "#/definitions/pagerDutyConfig/properties/customDetails")

#### customDetails Type

`object` ([Details](definitions-definitions-pagerdutyconfig-properties-customdetails.md))

## Definitions group notification

Reference this group by using

```json
{"$ref":"#/definitions/notification"}
```

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                               |
| :---------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type-1)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-notificationtype.md "#/definitions/notification/properties/type") |
| [name](#name-2)   | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-name.md "#/definitions/notification/properties/name")             |
| [paused](#paused) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-paused.md "#/definitions/notification/properties/paused")         |
| [config](#config) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-config.md "#/definitions/notification/properties/config")         |

### type



`type`

*   is required

*   Type: `string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-notificationtype.md "#/definitions/notification/properties/type")

#### type Type

`string` ([NotificationType](definitions-definitions-notification-properties-notificationtype.md))

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"slack"`      |             |
| `"email"`      |             |
| `"discord"`    |             |
| `"telegram"`   |             |
| `"datadog"`    |             |
| `"webhook"`    |             |
| `"opsgenie"`   |             |
| `"pager-duty"` |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-name.md "#/definitions/notification/properties/name")

#### name Type

`string`

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-paused.md "#/definitions/notification/properties/paused")

#### paused Type

`boolean`

### config



`config`

*   is required

*   Type: `object` ([Config](definitions-definitions-notification-properties-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-config.md "#/definitions/notification/properties/config")

#### config Type

`object` ([Config](definitions-definitions-notification-properties-config.md))

one (and only one) of

*   [EmailConfig](definitions-definitions-emailconfig.md "check type definition")

*   [TelegramConfig](definitions-definitions-telegramconfig.md "check type definition")

*   [DatadogConfig](definitions-definitions-datadogconfig.md "check type definition")

*   [UrlConfig](definitions-definitions-urlconfig.md "check type definition")

*   [OpsgenieConfig](definitions-definitions-opsgenieconfig.md "check type definition")

*   [PagerDutyConfig](definitions-definitions-pagerdutyconfig.md "check type definition")

## Definitions group category

Reference this group by using

```json
{"$ref":"#/definitions/category"}
```

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-3)                     | `string` | Required | cannot be null | [Definitions](definitions-definitions-category-properties-name.md "#/definitions/category/properties/name")                       |
| [description](#description)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-description.md "#/definitions/category/properties/description")         |
| [notificationIds](#notificationids) | `array`  | Optional | cannot be null | [Definitions](definitions-definitions-category-properties-notificationids.md "#/definitions/category/properties/notificationIds") |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-name.md "#/definitions/category/properties/name")

#### name Type

`string`

### description



`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-description.md "#/definitions/category/properties/description")

#### description Type

`string`

### notificationIds



`notificationIds`

*   is optional

*   Type: `object[]` ([Notification](definitions-definitions-notification.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category-properties-notificationids.md "#/definitions/category/properties/notificationIds")

#### notificationIds Type

`object[]` ([Notification](definitions-definitions-notification.md))

## Definitions group blockSentinel

Reference this group by using

```json
{"$ref":"#/definitions/blockSentinel"}
```

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                          |
| :---------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-4)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-name.md "#/definitions/blockSentinel/properties/name")                      |
| [type](#type-2)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-type.md "#/definitions/blockSentinel/properties/type")                      |
| [network](#network-2)                     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-network.md "#/definitions/blockSentinel/properties/network")                |
| [addresses](#addresses)                   | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "#/definitions/blockSentinel/properties/addresses")            |
| [abi](#abi-1)                             | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "#/definitions/blockSentinel/properties/abi")                                             |
| [alert-threshold](#alert-threshold)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-alertthreshold.md "#/definitions/blockSentinel/properties/alert-threshold") |
| [paused](#paused-1)                       | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-paused.md "#/definitions/blockSentinel/properties/paused")                  |
| [autotask-condition](#autotask-condition) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/blockSentinel/properties/autotask-condition")                             |
| [autotask-trigger](#autotask-trigger)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/blockSentinel/properties/autotask-trigger")                               |
| [confirm-level](#confirm-level)           | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "#/definitions/blockSentinel/properties/confirm-level")    |
| [notify-config](#notify-config)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig.md "#/definitions/blockSentinel/properties/notify-config")     |
| [conditions](#conditions)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "#/definitions/blockSentinel/properties/conditions")          |
| [risk-category](#risk-category)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-riskcategory.md "#/definitions/blockSentinel/properties/risk-category")     |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-name.md "#/definitions/blockSentinel/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-type.md "#/definitions/blockSentinel/properties/type")

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

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-network.md "#/definitions/blockSentinel/properties/network")

#### network Type

`string` ([Network](definitions-definitions-blocksentinel-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"alfajores"`             |             |
| `"amoy"`                  |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"avalanche"`             |             |
| `"base"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"celo"`                  |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"fuji"`                  |             |
| `"fuse"`                  |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"kovan"`                 |             |
| `"linea"`                 |             |
| `"linea-goerli"`          |             |
| `"mainnet"`               |             |
| `"matic"`                 |             |
| `"moonbase"`              |             |
| `"moonbeam"`              |             |
| `"moonriver"`             |             |
| `"mumbai"`                |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"sepolia"`               |             |
| `"sokol"`                 |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"xdai"`                  |             |
| `"zksync"`                |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### addresses



`addresses`

*   is required

*   Type: `string[]` ([Address](definitions-definitions-blocksentinel-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-addresses.md "#/definitions/blockSentinel/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-blocksentinel-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "#/definitions/blockSentinel/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-blocksentinel-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-alertthreshold.md "#/definitions/blockSentinel/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-blocksentinel-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-paused.md "#/definitions/blockSentinel/properties/paused")

#### paused Type

`boolean`

### autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/blockSentinel/properties/autotask-condition")

#### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/blockSentinel/properties/autotask-trigger")

#### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### confirm-level



`confirm-level`

*   is optional

*   Type: merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-confirm-level.md "#/definitions/blockSentinel/properties/confirm-level")

#### confirm-level Type

merged type ([Details](definitions-definitions-blocksentinel-properties-confirm-level.md))

one (and only one) of

*   [Untitled string in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-0.md "check type definition")

*   [Untitled integer in Definitions](definitions-definitions-blocksentinel-properties-confirm-level-oneof-1.md "check type definition")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-blocksentinel-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig.md "#/definitions/blockSentinel/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-blocksentinel-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-blocksentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-conditions.md "#/definitions/blockSentinel/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-blocksentinel-properties-conditions.md))

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-blocksentinel-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-riskcategory.md "#/definitions/blockSentinel/properties/risk-category")

#### risk-category Type

`string` ([RiskCategory](definitions-definitions-blocksentinel-properties-riskcategory.md))

#### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |

## Definitions group fortaSentinel

Reference this group by using

```json
{"$ref":"#/definitions/fortaSentinel"}
```

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                          |
| :------------------------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-5)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-name.md "#/definitions/fortaSentinel/properties/name")                      |
| [type](#type-3)                             | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-type.md "#/definitions/fortaSentinel/properties/type")                      |
| [network](#network-3)                       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-network.md "#/definitions/fortaSentinel/properties/network")                |
| [addresses](#addresses-1)                   | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "#/definitions/fortaSentinel/properties/addresses")            |
| [abi](#abi-2)                               | Merged    | Optional | cannot be null | [Definitions](definitions-definitions-abitype.md "#/definitions/fortaSentinel/properties/abi")                                             |
| [alert-threshold](#alert-threshold-1)       | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-alertthreshold.md "#/definitions/fortaSentinel/properties/alert-threshold") |
| [paused](#paused-2)                         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-paused.md "#/definitions/fortaSentinel/properties/paused")                  |
| [autotask-condition](#autotask-condition-1) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-condition")                             |
| [autotask-trigger](#autotask-trigger-1)     | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-trigger")                               |
| [notify-config](#notify-config-1)           | `object`  | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig.md "#/definitions/fortaSentinel/properties/notify-config")     |
| [conditions](#conditions-1)                 | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "#/definitions/fortaSentinel/properties/conditions")          |
| [forta-node-id](#forta-node-id)             | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "#/definitions/fortaSentinel/properties/forta-node-id")    |
| [agent-ids](#agent-ids)                     | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-agentids.md "#/definitions/fortaSentinel/properties/agent-ids")             |
| [risk-category](#risk-category-1)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-riskcategory.md "#/definitions/fortaSentinel/properties/risk-category")     |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-name.md "#/definitions/fortaSentinel/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-type.md "#/definitions/fortaSentinel/properties/type")

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

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-network.md "#/definitions/fortaSentinel/properties/network")

#### network Type

`string` ([Network](definitions-definitions-fortasentinel-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"alfajores"`             |             |
| `"amoy"`                  |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"avalanche"`             |             |
| `"base"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"celo"`                  |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"fuji"`                  |             |
| `"fuse"`                  |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"kovan"`                 |             |
| `"linea"`                 |             |
| `"linea-goerli"`          |             |
| `"mainnet"`               |             |
| `"matic"`                 |             |
| `"moonbase"`              |             |
| `"moonbeam"`              |             |
| `"moonriver"`             |             |
| `"mumbai"`                |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"sepolia"`               |             |
| `"sokol"`                 |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"xdai"`                  |             |
| `"zksync"`                |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### addresses



`addresses`

*   is optional

*   Type: `string[]` ([Address](definitions-definitions-fortasentinel-properties-addresses-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-addresses.md "#/definitions/fortaSentinel/properties/addresses")

#### addresses Type

`string[]` ([Address](definitions-definitions-fortasentinel-properties-addresses-address.md))

### abi



`abi`

*   is optional

*   Type: merged type ([AbiType](definitions-definitions-abitype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-abitype.md "#/definitions/fortaSentinel/properties/abi")

#### abi Type

merged type ([AbiType](definitions-definitions-abitype.md))

any of

*   [StringABI](definitions-definitions-abitype-anyof-stringabi.md "check type definition")

*   [ArrayABI](definitions-definitions-abitype-anyof-arrayabi.md "check type definition")

### alert-threshold



`alert-threshold`

*   is optional

*   Type: `object` ([AlertThreshold](definitions-definitions-fortasentinel-properties-alertthreshold.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-alertthreshold.md "#/definitions/fortaSentinel/properties/alert-threshold")

#### alert-threshold Type

`object` ([AlertThreshold](definitions-definitions-fortasentinel-properties-alertthreshold.md))

### paused



`paused`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-paused.md "#/definitions/fortaSentinel/properties/paused")

#### paused Type

`boolean`

### autotask-condition



`autotask-condition`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-condition")

#### autotask-condition Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-condition Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### autotask-trigger



`autotask-trigger`

*   is optional

*   Type: `object` ([Autotask](definitions-definitions-autotask.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask.md "#/definitions/fortaSentinel/properties/autotask-trigger")

#### autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

#### autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### notify-config



`notify-config`

*   is required

*   Type: `object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig.md "#/definitions/fortaSentinel/properties/notify-config")

#### notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

### conditions



`conditions`

*   is optional

*   Type: `object` ([Conditions](definitions-definitions-fortasentinel-properties-conditions.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-conditions.md "#/definitions/fortaSentinel/properties/conditions")

#### conditions Type

`object` ([Conditions](definitions-definitions-fortasentinel-properties-conditions.md))

### forta-node-id



`forta-node-id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-forta-node-id.md "#/definitions/fortaSentinel/properties/forta-node-id")

#### forta-node-id Type

`string`

### agent-ids



`agent-ids`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-agentids.md "#/definitions/fortaSentinel/properties/agent-ids")

#### agent-ids Type

`string[]`

### risk-category



`risk-category`

*   is optional

*   Type: `string` ([RiskCategory](definitions-definitions-fortasentinel-properties-riskcategory.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-riskcategory.md "#/definitions/fortaSentinel/properties/risk-category")

#### risk-category Type

`string` ([RiskCategory](definitions-definitions-fortasentinel-properties-riskcategory.md))

#### risk-category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"NONE"`           |             |
| `"GOVERNANCE"`     |             |
| `"ACCESS-CONTROL"` |             |
| `"SUSPICIOUS"`     |             |
| `"FINANCIAL"`      |             |
| `"TECHNICAL"`      |             |

## Definitions group sentinel

Reference this group by using

```json
{"$ref":"#/definitions/sentinel"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group autotask

Reference this group by using

```json
{"$ref":"#/definitions/autotask"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-6)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-name.md "#/definitions/autotask/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-path.md "#/definitions/autotask/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "#/definitions/autotask/properties/relayer")                     |
| [trigger](#trigger) | `object`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger.md "#/definitions/autotask/properties/trigger") |
| [paused](#paused-3) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-paused.md "#/definitions/autotask/properties/paused")   |

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-name.md "#/definitions/autotask/properties/name")

#### name Type

`string`

### path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-path.md "#/definitions/autotask/properties/path")

#### path Type

`string`

### relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "#/definitions/autotask/properties/relayer")

#### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

#### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

### trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](definitions-definitions-autotask-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger.md "#/definitions/autotask/properties/trigger")

#### trigger Type

`object` ([Trigger](definitions-definitions-autotask-properties-trigger.md))

### paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-paused.md "#/definitions/autotask/properties/paused")

#### paused Type

`boolean`

## Definitions group deploymentConfig

Reference this group by using

```json
{"$ref":"#/definitions/deploymentConfig"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                     |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------- |
| [relayer](#relayer-1) | `object` | Required | cannot be null | [Definitions](definitions-definitions-relayer.md "#/definitions/deploymentConfig/properties/relayer") |

### relayer



`relayer`

*   is required

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "#/definitions/deploymentConfig/properties/relayer")

#### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

#### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group blockExplorerApiKey

Reference this group by using

```json
{"$ref":"#/definitions/blockExplorerApiKey"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key)           | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "#/definitions/blockExplorerApiKey/properties/key")         |
| [network](#network-4) | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-network.md "#/definitions/blockExplorerApiKey/properties/network") |

### key



`key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "#/definitions/blockExplorerApiKey/properties/key")

#### key Type

`string`

### network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-blockexplorerapikey-properties-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-network.md "#/definitions/blockExplorerApiKey/properties/network")

#### network Type

`string` ([Network](definitions-definitions-blockexplorerapikey-properties-network.md))

#### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"alfajores"`             |             |
| `"amoy"`                  |             |
| `"arbitrum"`              |             |
| `"arbitrum-nova"`         |             |
| `"arbitrum-rinkeby"`      |             |
| `"aurora"`                |             |
| `"auroratest"`            |             |
| `"avalanche"`             |             |
| `"base"`                  |             |
| `"bsc"`                   |             |
| `"bsctest"`               |             |
| `"celo"`                  |             |
| `"fantom"`                |             |
| `"fantomtest"`            |             |
| `"fuji"`                  |             |
| `"fuse"`                  |             |
| `"harmony-s0"`            |             |
| `"harmony-test-s0"`       |             |
| `"hedera"`                |             |
| `"hederatest"`            |             |
| `"kovan"`                 |             |
| `"linea"`                 |             |
| `"linea-goerli"`          |             |
| `"mainnet"`               |             |
| `"matic"`                 |             |
| `"moonbase"`              |             |
| `"moonbeam"`              |             |
| `"moonriver"`             |             |
| `"mumbai"`                |             |
| `"optimism"`              |             |
| `"optimism-kovan"`        |             |
| `"rinkeby"`               |             |
| `"ropsten"`               |             |
| `"sepolia"`               |             |
| `"sokol"`                 |             |
| `"x-dfk-avax-chain"`      |             |
| `"x-dfk-avax-chain-test"` |             |
| `"xdai"`                  |             |
| `"zksync"`                |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## Definitions group abi

Reference this group by using

```json
{"$ref":"#/definitions/abi"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
