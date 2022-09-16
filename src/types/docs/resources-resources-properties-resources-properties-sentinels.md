## sentinels Type

`object` ([Sentinels](resources-resources-properties-resources-properties-sentinels.md))

# sentinels Properties

| Property              | Type   | Required | Nullable       | Defined by                                                                                                                             |
| :-------------------- | :----- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| Additional Properties | Merged | Optional | cannot be null | [Resources](definitions-definitions-sentinel.md "#/resources/properties/Resources/properties/sentinels/additionalProperties") |

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: `object` ([Sentinel](definitions-definitions-sentinel.md))

*   cannot be null

*   defined in: [Resources](definitions-definitions-sentinel.md "#/resources/properties/Resources/properties/sentinels/additionalProperties")

### additionalProperties Type

`object` ([Sentinel](definitions-definitions-sentinel.md))

one (and only one) of

*   [BlockSentinel](definitions-definitions-blocksentinel.md "check type definition")

*   any of

    *   [Untitled  type in Definitions](definitions-definitions-fortasentinel-anyof-0.md "check type definition")

    *   [Untitled  type in Definitions](definitions-definitions-fortasentinel-anyof-1.md "check type definition")

### additionalProperties Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")
