## trigger Type

`object` ([Trigger](definitions-definitions-autotask-properties-trigger.md))

one (and only one) of

*   [TriggerCron](definitions-definitions-autotask-properties-trigger-oneof-triggercron.md "check type definition")

*   [TriggerFrequency](definitions-definitions-autotask-properties-trigger-oneof-triggerfrequency.md "check type definition")

*   [TriggerToken](definitions-definitions-autotask-properties-trigger-oneof-triggertoken.md "check type definition")

# trigger Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string`  | Required | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger-properties-triggertype.md "#/definitions/autotask/properties/trigger/properties/type")    |
| [cron](#cron)           | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger-properties-cron.md "#/definitions/autotask/properties/trigger/properties/cron")           |
| [frequency](#frequency) | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger-properties-frequency.md "#/definitions/autotask/properties/trigger/properties/frequency") |
| [token](#token)         | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-autotask-properties-trigger-properties-token.md "#/definitions/autotask/properties/trigger/properties/token")         |

## type



`type`

*   is required

*   Type: `string` ([TriggerType](definitions-definitions-autotask-properties-trigger-properties-triggertype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger-properties-triggertype.md "#/definitions/autotask/properties/trigger/properties/type")

### type Type

`string` ([TriggerType](definitions-definitions-autotask-properties-trigger-properties-triggertype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"schedule"` |             |
| `"webhook"`  |             |

## cron



`cron`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger-properties-cron.md "#/definitions/autotask/properties/trigger/properties/cron")

### cron Type

`string`

## frequency



`frequency`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger-properties-frequency.md "#/definitions/autotask/properties/trigger/properties/frequency")

### frequency Type

`integer`

## token



`token`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-autotask-properties-trigger-properties-token.md "#/definitions/autotask/properties/trigger/properties/token")

### token Type

`string`
