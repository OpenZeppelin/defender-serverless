## additionalProperties Type

`object` ([Relayer](definitions-definitions-relayer.md))

## additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# additionalProperties Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                 | `string`  | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-name.md "#/definitions/relayer/properties/name")                               |
| [network](#network)                           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-network.md "#/definitions/relayer/properties/network")                                            |
| [min-balance](#min-balance)                   | `integer` | Required | cannot be null | [Definitions](definitions-definitions-relayer-properties-min-balance.md "#/definitions/relayer/properties/min-balance")                 |
| [address-from-relayer](#address-from-relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "#/definitions/relayer/properties/address-from-relayer") |
| [policy](#policy)                             | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-policy.md "#/definitions/relayer/properties/policy")                                              |
| [api-keys](#api-keys)                         | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "#/definitions/relayer/properties/api-keys")                 |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-name.md "#/definitions/relayer/properties/name")

### name Type

`string`

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "#/definitions/relayer/properties/network")

### network Type

`string` ([Network](definitions-definitions-network.md))

### network Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"mainnet"`               |             |
| `"sepolia"`               |             |
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
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base-goerli"`           |             |
| `"linea-goerli"`          |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## min-balance



`min-balance`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-min-balance.md "#/definitions/relayer/properties/min-balance")

### min-balance Type

`integer`

## address-from-relayer



`address-from-relayer`

*   is optional

*   Type: `object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-addressfromrelayer.md "#/definitions/relayer/properties/address-from-relayer")

### address-from-relayer Type

`object` ([AddressFromRelayer](definitions-definitions-relayer-properties-addressfromrelayer.md))

## policy



`policy`

*   is optional

*   Type: `object` ([Policy](definitions-definitions-policy.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy.md "#/definitions/relayer/properties/policy")

### policy Type

`object` ([Policy](definitions-definitions-policy.md))

### policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## api-keys



`api-keys`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer-properties-relayerapikeys.md "#/definitions/relayer/properties/api-keys")

### api-keys Type

`string[]`
