## 2 Type

`object` ([DatadogConfig](definitions-definitions-datadogconfig.md))

## 2 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 2 Properties

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                                                        |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [api-key](#api-key)              | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "undefined#/definitions/datadogConfig/properties/api-key")              |
| [metric-p$refix](#metric-prefix) | `string` | Required | cannot be null | [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "undefined#/definitions/datadogConfig/properties/metric-p$refix") |

## api-key



`api-key`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-api-key.md "undefined#/definitions/datadogConfig/properties/api-key")

### api-key Type

`string`

## metric-p$refix



`metric-p$refix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-datadogconfig-properties-metric-prefix.md "undefined#/definitions/datadogConfig/properties/metric-p$refix")

### metric-p$refix Type

`string`

### metric-p$refix Constraints

**maximum length**: the maximum number of characters for this string is: `100`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z]+[A-Za-z0-9_\.]*\.$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z%5D%2B%5BA-Za-z0-9_%5C.%5D*%5C.%24 "try regular expression with regexr.com")
