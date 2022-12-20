## notify-config Type

`object` ([NotifyConfig](definitions-definitions-blocksentinel-properties-notifyconfig.md))

# notify-config Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)   | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-timeout.md "#/definitions/blockSentinel/properties/notify-config/properties/timeout")   |
| [message](#message)   | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-message.md "#/definitions/blockSentinel/properties/notify-config/properties/message")   |
| [category](#category) | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-category.md "#/definitions/blockSentinel/properties/notify-config/properties/category") |
| [channels](#channels) | `array`   | Required | cannot be null | [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-channels.md "#/definitions/blockSentinel/properties/notify-config/properties/channels") |

## timeout



`timeout`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-timeout.md "#/definitions/blockSentinel/properties/notify-config/properties/timeout")

### timeout Type

`integer`

## message



`message`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-message.md "#/definitions/blockSentinel/properties/notify-config/properties/message")

### message Type

`string`

## category



`category`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-category.md "#/definitions/blockSentinel/properties/notify-config/properties/category")

### category Type

`string`

## channels



`channels`

*   is required

*   Type: `object[]` ([Notification](definitions-definitions-notification.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-blocksentinel-properties-notifyconfig-properties-channels.md "#/definitions/blockSentinel/properties/notify-config/properties/channels")

### channels Type

`object[]` ([Notification](definitions-definitions-notification.md))
