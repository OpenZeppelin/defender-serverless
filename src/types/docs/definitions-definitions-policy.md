## policy Type

`object` ([Policy](definitions-definitions-policy.md))

## policy Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# policy Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [gas-price-cap](#gas-price-cap)             | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "undefined#/definitions/policy/properties/gas-price-cap")             |
| [whitelist-receivers](#whitelist-receivers) | `array`   | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-whitelist-receivers.md "undefined#/definitions/policy/properties/whitelist-receivers") |
| [eip1559-pricing](#eip1559-pricing)         | `boolean` | Optional | cannot be null | [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "undefined#/definitions/policy/properties/eip1559-pricing")         |

## gas-price-cap



`gas-price-cap`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-gas-price-cap.md "undefined#/definitions/policy/properties/gas-price-cap")

### gas-price-cap Type

`integer`

## whitelist-receivers



`whitelist-receivers`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-whitelist-receivers.md "undefined#/definitions/policy/properties/whitelist-receivers")

### whitelist-receivers Type

`string[]`

## eip1559-pricing



`eip1559-pricing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-policy-properties-eip1559-pricing.md "undefined#/definitions/policy/properties/eip1559-pricing")

### eip1559-pricing Type

`boolean`
