## notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

# notify-config Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)   | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-timeout.md "#/definitions/fortaSentinel/properties/notify-config/properties/timeout")   |
| [message](#message)   | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-message.md "#/definitions/fortaSentinel/properties/notify-config/properties/message")   |
| [channels](#channels) | `array`   | Required | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-channels.md "#/definitions/fortaSentinel/properties/notify-config/properties/channels") |

## timeout



`timeout`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-timeout.md "#/definitions/fortaSentinel/properties/notify-config/properties/timeout")

### timeout Type

`integer`

## message



`message`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-message.md "#/definitions/fortaSentinel/properties/notify-config/properties/message")

### message Type

`string`

## channels



`channels`

*   is required

*   Type: `object[]` ([Notification](definitions-definitions-notification.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-channels.md "#/definitions/fortaSentinel/properties/notify-config/properties/channels")

### channels Type

`object[]` ([Notification](definitions-definitions-notification.md))
