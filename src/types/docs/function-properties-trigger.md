## trigger Type

`object` ([Trigger](function-properties-trigger.md))

one (and only one) of

*   [Untitled  type in Function](function-properties-trigger-oneof-0.md "check type definition")

*   [Untitled  type in Function](function-properties-trigger-oneof-1.md "check type definition")

*   [Untitled  type in Function](function-properties-trigger-oneof-2.md "check type definition")

# trigger Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :---------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string`  | Required | cannot be null | [Function](function-properties-trigger-properties-triggertype.md "#/properties/trigger/properties/type")           |
| [cron](#cron)           | `string`  | Optional | cannot be null | [Function](function-properties-trigger-properties-triggercron.md "#/properties/trigger/properties/cron")           |
| [frequency](#frequency) | `integer` | Optional | cannot be null | [Function](function-properties-trigger-properties-triggerfrequency.md "#/properties/trigger/properties/frequency") |
| [token](#token)         | `string`  | Optional | cannot be null | [Function](function-properties-trigger-properties-triggertoken.md "#/properties/trigger/properties/token")         |

## type



`type`

*   is required

*   Type: `string` ([TriggerType](function-properties-trigger-properties-triggertype.md))

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-triggertype.md "#/properties/trigger/properties/type")

### type Type

`string` ([TriggerType](function-properties-trigger-properties-triggertype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"schedule"` |             |
| `"webhook"`  |             |

## cron



`cron`

*   is optional

*   Type: `string` ([TriggerCron](function-properties-trigger-properties-triggercron.md))

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-triggercron.md "#/properties/trigger/properties/cron")

### cron Type

`string` ([TriggerCron](function-properties-trigger-properties-triggercron.md))

## frequency



`frequency`

*   is optional

*   Type: `integer` ([TriggerFrequency](function-properties-trigger-properties-triggerfrequency.md))

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-triggerfrequency.md "#/properties/trigger/properties/frequency")

### frequency Type

`integer` ([TriggerFrequency](function-properties-trigger-properties-triggerfrequency.md))

## token



`token`

*   is optional

*   Type: `string` ([TriggerToken](function-properties-trigger-properties-triggertoken.md))

*   cannot be null

*   defined in: [Function](function-properties-trigger-properties-triggertoken.md "#/properties/trigger/properties/token")

### token Type

`string` ([TriggerToken](function-properties-trigger-properties-triggertoken.md))
