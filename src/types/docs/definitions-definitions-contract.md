## additionalProperties Type

`object` ([Contract](definitions-definitions-contract.md))

## additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# additionalProperties Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-contract-properties-name.md "#/definitions/contract/properties/name")         |
| [address](#address)   | `string` | Required | cannot be null | [Definitions](definitions-definitions-address.md "#/definitions/contract/properties/address")                       |
| [network](#network)   | `string` | Required | cannot be null | [Definitions](definitions-definitions-network.md "#/definitions/contract/properties/network")                       |
| [abi](#abi)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-abi.md "#/definitions/contract/properties/abi")           |
| [nat-spec](#nat-spec) | `string` | Optional | cannot be null | [Definitions](definitions-definitions-contract-properties-nat-spec.md "#/definitions/contract/properties/nat-spec") |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-name.md "#/definitions/contract/properties/name")

### name Type

`string`

## address



`address`

*   is required

*   Type: `string` ([Address](definitions-definitions-address.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-address.md "#/definitions/contract/properties/address")

### address Type

`string` ([Address](definitions-definitions-address.md))

### address Constraints

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 "try regular expression with regexr.com")

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "#/definitions/contract/properties/network")

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
| `"zksync"`                |             |
| `"zksync-goerli"`         |             |
| `"base-goerli"`           |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## abi



`abi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-abi.md "#/definitions/contract/properties/abi")

### abi Type

`string`

## nat-spec



`nat-spec`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-contract-properties-nat-spec.md "#/definitions/contract/properties/nat-spec")

### nat-spec Type

`string`
