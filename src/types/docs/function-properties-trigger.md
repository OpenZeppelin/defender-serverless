## trigger Type

`object` ([Trigger](function-properties-trigger.md))

one (and only one) of

*   [Cron](function-properties-trigger-oneof-cron.md "check type definition")

*   [Frequecy](function-properties-trigger-oneof-frequecy.md "check type definition")

# trigger Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                           |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string`  | Required | cannot be null | [Function](function-properties-trigger-properties-type.md "#/properties/trigger/properties/type")           |
| [cron](#cron)           | `string`  | Optional | cannot be null | [Function](function-properties-trigger-properties-cron.md "#/properties/trigger/properties/cron")           |
| [frequency](#frequency) | `integer` | Optional | cannot be null | [Function](function-properties-trigger-properties-frequency.md "#/properties/trigger/properties/frequency") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-type.md "#/properties/trigger/properties/type")

### type Type

`string`

## cron



`cron`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-cron.md "#/properties/trigger/properties/cron")

### cron Type

`string`

## frequency



`frequency`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-frequency.md "#/properties/trigger/properties/frequency")

### frequency Type

`integer`
