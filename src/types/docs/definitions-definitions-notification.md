## items Type

`object` ([Notification](definitions-definitions-notification.md))

## items Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# items Properties

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                       |
| :---------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notificationtype.md "#/definitions/notification/properties/type")                 |
| [name](#name)     | `string`  | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-name.md "#/definitions/notification/properties/name")     |
| [paused](#paused) | `boolean` | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-paused.md "#/definitions/notification/properties/paused") |
| [config](#config) | Merged    | Required | cannot be null | [Definitions](definitions-definitions-notification-properties-config.md "#/definitions/notification/properties/config") |

## type



`type`

*   is required

*   Type: `string` ([NotificationType](definitions-definitions-notificationtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notificationtype.md "#/definitions/notification/properties/type")

### type Type

`string` ([NotificationType](definitions-definitions-notificationtype.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"slack"`    |             |
| `"email"`    |             |
| `"discord"`  |             |
| `"telegram"` |             |
| `"datadog"`  |             |
| `"webhook"`  |             |

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-name.md "#/definitions/notification/properties/name")

### name Type

`string`

## paused



`paused`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-paused.md "#/definitions/notification/properties/paused")

### paused Type

`boolean`

## config



`config`

*   is required

*   Type: `object` ([Config](definitions-definitions-notification-properties-config.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-notification-properties-config.md "#/definitions/notification/properties/config")

### config Type

`object` ([Config](definitions-definitions-notification-properties-config.md))

one (and only one) of

*   [EmailConfig](definitions-definitions-emailconfig.md "check type definition")

*   [TelegramConfig](definitions-definitions-telegramconfig.md "check type definition")

*   [DatadogConfig](definitions-definitions-datadogconfig.md "check type definition")

*   [UrlConfig](definitions-definitions-urlconfig.md "check type definition")
