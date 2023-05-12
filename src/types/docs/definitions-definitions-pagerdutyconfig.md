## 5 Type

unknown ([PagerDutyConfig](definitions-definitions-pagerdutyconfig.md))

## 5 Constraints

**URI reference**: the string must be a URI reference, according to [RFC 3986](https://tools.ietf.org/html/rfc3986 "check the specification")

# 5 Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                           |
| :------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [token](#token)                 | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "#/definitions/pagerDutyConfig/properties/token")                 |
| [eventType](#eventtype)         | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyeventtype.md "#/definitions/pagerDutyConfig/properties/eventType")                           |
| [routingKey](#routingkey)       | `string` | Required | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "#/definitions/pagerDutyConfig/properties/routingKey")       |
| [eventAction](#eventaction)     | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyeventaction.md "#/definitions/pagerDutyConfig/properties/eventAction")                       |
| [dedupKey](#dedupkey)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "#/definitions/pagerDutyConfig/properties/dedupKey")           |
| [severity](#severity)           | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyseverity.md "#/definitions/pagerDutyConfig/properties/severity")                             |
| [component](#component)         | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "#/definitions/pagerDutyConfig/properties/component")         |
| [group](#group)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "#/definitions/pagerDutyConfig/properties/group")                 |
| [class](#class)                 | `string` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "#/definitions/pagerDutyConfig/properties/class")                 |
| [customDetails](#customdetails) | `object` | Optional | cannot be null | [Definitions](definitions-definitions-pagerdutyconfig-properties-customdetails.md "#/definitions/pagerDutyConfig/properties/customDetails") |

## token



`token`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-token.md "#/definitions/pagerDutyConfig/properties/token")

### token Type

`string`

## eventType



`eventType`

*   is required

*   Type: `string` ([PagerDutyEventType](definitions-definitions-pagerdutyeventtype.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyeventtype.md "#/definitions/pagerDutyConfig/properties/eventType")

### eventType Type

`string` ([PagerDutyEventType](definitions-definitions-pagerdutyeventtype.md))

### eventType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"change"` |             |
| `"alert"`  |             |

## routingKey



`routingKey`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-routingkey.md "#/definitions/pagerDutyConfig/properties/routingKey")

### routingKey Type

`string`

### routingKey Constraints

**maximum length**: the maximum number of characters for this string is: `32`

**minimum length**: the minimum number of characters for this string is: `32`

## eventAction



`eventAction`

*   is optional

*   Type: `string` ([PagerDutyEventAction](definitions-definitions-pagerdutyeventaction.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyeventaction.md "#/definitions/pagerDutyConfig/properties/eventAction")

### eventAction Type

`string` ([PagerDutyEventAction](definitions-definitions-pagerdutyeventaction.md))

### eventAction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"trigger"`     |             |
| `"acknowledge"` |             |
| `"resolve"`     |             |

## dedupKey



`dedupKey`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-dedupkey.md "#/definitions/pagerDutyConfig/properties/dedupKey")

### dedupKey Type

`string`

### dedupKey Constraints

**maximum length**: the maximum number of characters for this string is: `255`

## severity



`severity`

*   is optional

*   Type: `string` ([PagerDutySeverity](definitions-definitions-pagerdutyseverity.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyseverity.md "#/definitions/pagerDutyConfig/properties/severity")

### severity Type

`string` ([PagerDutySeverity](definitions-definitions-pagerdutyseverity.md))

### severity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"critical"` |             |
| `"error"`    |             |
| `"warning"`  |             |
| `"info"`     |             |

## component



`component`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-component.md "#/definitions/pagerDutyConfig/properties/component")

### component Type

`string`

## group



`group`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-group.md "#/definitions/pagerDutyConfig/properties/group")

### group Type

`string`

## class



`class`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-class.md "#/definitions/pagerDutyConfig/properties/class")

### class Type

`string`

## customDetails



`customDetails`

*   is optional

*   Type: `object` ([Details](definitions-definitions-pagerdutyconfig-properties-customdetails.md))

*   cannot be null

*   defined in: [Definitions](definitions-definitions-pagerdutyconfig-properties-customdetails.md "#/definitions/pagerDutyConfig/properties/customDetails")

### customDetails Type

`object` ([Details](definitions-definitions-pagerdutyconfig-properties-customdetails.md))
