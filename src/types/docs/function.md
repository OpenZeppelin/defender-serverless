## Function Type

`object` ([Function](function.md))

# Function Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                     |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------- |
| [path](#path)       | `string`  | Required | cannot be null | [Function](function-properties-path.md "#/properties/path")           |
| [relayer](#relayer) | `object`  | Optional | cannot be null | [Function](definitions-definitions-relayer.md "#/properties/relayer") |
| [trigger](#trigger) | Merged    | Required | cannot be null | [Function](function-properties-trigger.md "#/properties/trigger")     |
| [paused](#paused)   | `boolean` | Required | cannot be null | [Function](function-properties-paused.md "#/properties/paused")       |

## path



`path`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Function](function-properties-path.md "#/properties/path")

### path Type

`string`

## relayer



`relayer`

*   is optional

*   Type: `object` ([Relayer](definitions-definitions-relayer.md))

*   cannot be null

*   defined in: [Function](definitions-definitions-relayer.md "#/properties/relayer")

### relayer Type

`object` ([Relayer](definitions-definitions-relayer.md))

### relayer Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## trigger



`trigger`

*   is required

*   Type: `object` ([Trigger](function-properties-trigger.md))

*   cannot be null

*   defined in: [Function](function-properties-trigger.md "#/properties/trigger")

### trigger Type

`object` ([Trigger](function-properties-trigger.md))

one (and only one) of

*   [Cron](function-properties-trigger-oneof-cron.md "check type definition")

*   [Frequecy](function-properties-trigger-oneof-frequecy.md "check type definition")

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Function](function-properties-paused.md "#/properties/paused")

### paused Type

`boolean`
