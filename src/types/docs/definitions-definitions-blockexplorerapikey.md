## additionalProperties Type

`object` ([BlockExplorerApiKey](definitions-definitions-blockexplorerapikey.md))

## additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# additionalProperties Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                               |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "#/definitions/blockExplorerApiKey/properties/key") |
| [network](#network) | `string` | Required | cannot be null | [Definitions](definitions-definitions-network.md "#/definitions/blockExplorerApiKey/properties/network")                        |

## key



`key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blockexplorerapikey-properties-key.md "#/definitions/blockExplorerApiKey/properties/key")

### key Type

`string`

## network



`network`

*   is required

*   Type: `string` ([Network](definitions-definitions-network.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-network.md "#/definitions/blockExplorerApiKey/properties/network")

### network Type

`string` ([Network](definitions-definitions-network.md))

### network Constraints

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
