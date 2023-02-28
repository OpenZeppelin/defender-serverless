## notify-config Type

`object` ([NotifyConfig](definitions-definitions-fortasentinel-properties-notifyconfig.md))

# notify-config Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [timeout](#timeout)   | `integer` | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-timeout.md "#/definitions/fortaSentinel/properties/notify-config/properties/timeout")   |
| [message](#message)   | `string`  | Optional | cannot be null | [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-message.md "#/definitions/fortaSentinel/properties/notify-config/properties/message")   |
| [category](#category) | `object`  | Optional | cannot be null | [Definitions](definitions-definitions-category.md "#/definitions/fortaSentinel/properties/notify-config/properties/category")                                                  |
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

## category



`category`

*   is optional

*   Type: `object` ([Category](definitions-definitions-category.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-category.md "#/definitions/fortaSentinel/properties/notify-config/properties/category")

### category Type

`object` ([Category](definitions-definitions-category.md))

### category Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## channels



`channels`

*   is required

*   Type: `object[]` ([Notification](definitions-definitions-notification.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-fortasentinel-properties-notifyconfig-properties-channels.md "#/definitions/fortaSentinel/properties/notify-config/properties/channels")

### channels Type

`object[]` ([Notification](definitions-definitions-notification.md))
