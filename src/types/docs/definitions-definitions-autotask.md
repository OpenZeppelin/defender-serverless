## autotask Type

`object` ([Autotask](definitions-definitions-autotask.md))

# autotask Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-name.md "#/definitions/autotask/properties/name")       |
| [path](#path)       | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-path.md "#/definitions/autotask/properties/path")       |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-relayer.md "#/definitions/autotask/properties/relayer")                     |
| [trigger](#trigger) | `object`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger.md "#/definitions/autotask/properties/trigger") |
| [paused](#paused)   | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-paused.md "#/definitions/autotask/properties/paused")   |

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-name.md "#/definitions/autotask/properties/name")

### name Type

`string`

## path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-path.md "#/definitions/autotask/properties/path")

### path Type

`string`

## relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-relayer.md "#/definitions/autotask/properties/relayer")

### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](definitions-definitions-autotask-properties-trigger.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger.md "#/definitions/autotask/properties/trigger")

### trigger Type

`object` ([Trigger](definitions-definitions-autotask-properties-trigger.md))

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-paused.md "#/definitions/autotask/properties/paused")

### paused Type

`boolean`
