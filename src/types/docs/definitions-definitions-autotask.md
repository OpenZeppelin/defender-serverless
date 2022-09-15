## autotask-trigger Type

`object` ([Autotask](definitions-definitions-autotask.md))

## autotask-trigger Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# autotask-trigger Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-name.md "undefined#/definitions/autotask/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-path.md "undefined#/definitions/autotask/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "undefined#/definitions/autotask/properties/relayer")                     |
| [trigger](#trigger) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger.md "undefined#/definitions/autotask/properties/trigger") |
| [paused](#paused)   | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-paused.md "undefined#/definitions/autotask/properties/paused")   |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-name.md "undefined#/definitions/autotask/properties/name")

### name Type

`string`

## path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-path.md "undefined#/definitions/autotask/properties/path")

### path Type

`string`

## relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "undefined#/definitions/autotask/properties/relayer")

### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## trigger



`trigger`

*   is required

*   Type: `object` ([Details](definitions-definitions-autotask-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger.md "undefined#/definitions/autotask/properties/trigger")

### trigger Type

`object` ([Details](definitions-definitions-autotask-properties-trigger.md))

one (and only one) of

*   [Untitled undefined type in Definitions](definitions-definitions-autotask-properties-trigger-oneof-0.md "check type definition")

*   [Untitled undefined type in Definitions](definitions-definitions-autotask-properties-trigger-oneof-1.md "check type definition")

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-paused.md "undefined#/definitions/autotask/properties/paused")

### paused Type

`boolean`
