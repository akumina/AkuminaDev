---
id: "akumina.digispace.utilities"
title: "Utilities"
sidebar_label: "Utilities"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Utilities](akumina.digispace.utilities.md)

## Hierarchy

* **Utilities**

## Index

### Classes

* [DateTimeManager](akumina.digispace.utilities.datetimemanager.md)

### Methods

* [AllPermissionsNA](akumina.digispace.utilities.md#static-allpermissionsna)
* [AttemptReset](akumina.digispace.utilities.md#static-attemptreset)
* [CheckAppManagerIsLoggedIn](akumina.digispace.utilities.md#static-checkappmanagerisloggedin)
* [ConvertValue](akumina.digispace.utilities.md#static-convertvalue)
* [DeDupArray](akumina.digispace.utilities.md#static-deduparray)
* [FindSearchResultCategory](akumina.digispace.utilities.md#static-findsearchresultcategory)
* [FormatDateStringToJSFormat](akumina.digispace.utilities.md#static-formatdatestringtojsformat)
* [GetCurrentPageId](akumina.digispace.utilities.md#static-getcurrentpageid)
* [GetDashboardGridByInstance](akumina.digispace.utilities.md#static-getdashboardgridbyinstance)
* [GetDateFormatForSiteLocaleId](akumina.digispace.utilities.md#static-getdateformatforsitelocaleid)
* [GetEmployeeDetailUrl](akumina.digispace.utilities.md#static-getemployeedetailurl)
* [GetGuid](akumina.digispace.utilities.md#static-getguid)
* [GetLinkForResult](akumina.digispace.utilities.md#static-getlinkforresult)
* [GetLinkParameter](akumina.digispace.utilities.md#static-getlinkparameter)
* [GetManagerUrl](akumina.digispace.utilities.md#static-getmanagerurl)
* [GetPageGridByInstance](akumina.digispace.utilities.md#static-getpagegridbyinstance)
* [GetPropertyValue](akumina.digispace.utilities.md#static-getpropertyvalue)
* [GetSearchParameter](akumina.digispace.utilities.md#static-getsearchparameter)
* [GetSharepointBarElement](akumina.digispace.utilities.md#static-getsharepointbarelement)
* [GetUrlParameters](akumina.digispace.utilities.md#static-geturlparameters)
* [HandleSharepointBar](akumina.digispace.utilities.md#static-handlesharepointbar)
* [HideSharepointBar](akumina.digispace.utilities.md#static-hidesharepointbar)
* [IsAppManagerLaguageCompatible](akumina.digispace.utilities.md#static-isappmanagerlaguagecompatible)
* [JsonArrayKeyToLower](akumina.digispace.utilities.md#static-jsonarraykeytolower)
* [OpenInterchange](akumina.digispace.utilities.md#static-openinterchange)
* [PageBindCloseWidgets](akumina.digispace.utilities.md#static-pagebindclosewidgets)
* [PageResizeWidgets](akumina.digispace.utilities.md#static-pageresizewidgets)
* [PopUpLink](akumina.digispace.utilities.md#static-popuplink)
* [PromptExitEditMode](akumina.digispace.utilities.md#static-promptexiteditmode)
* [RegisterAppManagerLoggedInCheckHandler](akumina.digispace.utilities.md#static-registerappmanagerloggedincheckhandler)
* [ShowAlertPopup](akumina.digispace.utilities.md#static-showalertpopup)
* [ShowSharepointBar](akumina.digispace.utilities.md#static-showsharepointbar)
* [ToggleDebugger](akumina.digispace.utilities.md#static-toggledebugger)
* [ToggleExistPageBuilderManager](akumina.digispace.utilities.md#static-toggleexistpagebuildermanager)
* [ToggleImpersonator](akumina.digispace.utilities.md#static-toggleimpersonator)
* [ToggleItemManager](akumina.digispace.utilities.md#static-toggleitemmanager)
* [ToggleLiveMode](akumina.digispace.utilities.md#static-togglelivemode)
* [TogglePageBuilderManager](akumina.digispace.utilities.md#static-togglepagebuildermanager)
* [TogglePageManager](akumina.digispace.utilities.md#static-togglepagemanager)
* [ToggleWidgetManager](akumina.digispace.utilities.md#static-togglewidgetmanager)

## Methods

### `Static` AllPermissionsNA

▸ **AllPermissionsNA**(`isPagePropertisPopUp`: boolean | null): *void*

*Defined in [index.d.ts:321](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L321)*

Shows confirmation popup if all permissions are set as NA
It is called from add page tab and page properties update

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isPagePropertisPopUp` | boolean &#124; null | true if called from page properties.  |

**Returns:** *void*

___

### `Static` AttemptReset

▸ **AttemptReset**(): *void*

*Defined in [index.d.ts:325](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L325)*

Called to show confirmation pop up while exiting edit page mode.

**Returns:** *void*

___

### `Static` CheckAppManagerIsLoggedIn

▸ **CheckAppManagerIsLoggedIn**(): *void*

*Defined in [index.d.ts:330](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L330)*

Check if iser is logged into appmanager and set the flag accordingly

**Returns:** *void*

___

### `Static` ConvertValue

▸ **ConvertValue**(`value`: any, `dataType`: string): *boolean | JSON*

*Defined in [index.d.ts:335](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L335)*

Takes string or any value as input & can return it as boolean or JSON
 @param value Any value
 @param dataType Required retrun type "bool", "boolean", "json"

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`dataType` | string |

**Returns:** *boolean | JSON*

___

### `Static` DeDupArray

▸ **DeDupArray**(`array`: any): *any*

*Defined in [index.d.ts:340](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L340)*

Removes duplicate entries from an array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any | Array to be filter  |

**Returns:** *any*

___

### `Static` FindSearchResultCategory

▸ **FindSearchResultCategory**(`result`: any[], `isCurrent`: boolean): *string*

*Defined in [index.d.ts:346](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L346)*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any[] |
`isCurrent` | boolean |

**Returns:** *string*

Returns value of key ListID or SiteTitle(in case of isCurrent true)

___

### `Static` FormatDateStringToJSFormat

▸ **FormatDateStringToJSFormat**(`format`: string, `date`: string): *string*

*Defined in [index.d.ts:353](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L353)*

Convert date string to jsformat date string
 Acceptable formats "mm/dd/yy", "dd/mm/yy", "dd-mm-yy", "mm/dd/yyyy", "dd/mm/yyyy", "dd-mm-yyyy"
 @param format
 @param date
 @returns Converted date string in format "dd/mm/yy" or "mm/dd/yyyy"

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`date` | string |

**Returns:** *string*

___

### `Static` GetCurrentPageId

▸ **GetCurrentPageId**(): *any*

*Defined in [index.d.ts:355](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L355)*

Returns an object with pageId property

**Returns:** *any*

___

### `Static` GetDashboardGridByInstance

▸ **GetDashboardGridByInstance**(`instanceId`: string): *string[]*

*Defined in [index.d.ts:356](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L356)*

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |

**Returns:** *string[]*

___

### `Static` GetDateFormatForSiteLocaleId

▸ **GetDateFormatForSiteLocaleId**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:365](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L365)*

Returns a deffered which will resolve with site specific date format object

**Returns:** *JQueryDeferred‹any›*

deffered resolved with object type: {
"dateformat": "mm/dd/yy",
"momentformat": "MM/DD/YY",
"displayformat": "MM/DD/YYYY",
"languagecode": "en-US"
}

___

### `Static` GetEmployeeDetailUrl

▸ **GetEmployeeDetailUrl**(`id`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:370](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L370)*

Resolves with Employee Detail Url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | UserId  |

**Returns:** *JQueryDeferred‹any›*

___

### `Static` GetGuid

▸ **GetGuid**(): *string*

*Defined in [index.d.ts:374](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L374)*

Get new GUID

**Returns:** *string*

___

### `Static` GetLinkForResult

▸ **GetLinkForResult**(`itemUrl`: string): *string*

*Defined in [index.d.ts:375](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L375)*

**Parameters:**

Name | Type |
------ | ------ |
`itemUrl` | string |

**Returns:** *string*

___

### `Static` GetLinkParameter

▸ **GetLinkParameter**(`itemUrl`: string, `paramToRetrieve`: string, `defaultValue`: string): *string*

*Defined in [index.d.ts:376](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`itemUrl` | string |
`paramToRetrieve` | string |
`defaultValue` | string |

**Returns:** *string*

___

### `Static` GetManagerUrl

▸ **GetManagerUrl**(): *string*

*Defined in [index.d.ts:380](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L380)*

relative path for manager script

**Returns:** *string*

___

### `Static` GetPageGridByInstance

▸ **GetPageGridByInstance**(`instanceId`: string): *string[]*

*Defined in [index.d.ts:385](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L385)*

Returns Page Grid for workspace widget Instancce Id's

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`instanceId` | string | Widget Instance ID  |

**Returns:** *string[]*

___

### `Static` GetPropertyValue

▸ **GetPropertyValue**(`requestIn`: any, `key`: string, `defaultValue`: string, `dataType`: string): *boolean | JSON*

*Defined in [index.d.ts:386](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L386)*

**Parameters:**

Name | Type |
------ | ------ |
`requestIn` | any |
`key` | string |
`defaultValue` | string |
`dataType` | string |

**Returns:** *boolean | JSON*

___

### `Static` GetSearchParameter

▸ **GetSearchParameter**(`itemResults`: any[], `paramToRetrieve`: string, `defaultValue`: string): *string*

*Defined in [index.d.ts:388](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L388)*

Retrive search parameter value from results

**Parameters:**

Name | Type |
------ | ------ |
`itemResults` | any[] |
`paramToRetrieve` | string |
`defaultValue` | string |

**Returns:** *string*

___

### `Static` GetSharepointBarElement

▸ **GetSharepointBarElement**(): *any*

*Defined in [index.d.ts:392](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L392)*

**Returns:** *any*

element of sharepoint bar

___

### `Static` GetUrlParameters

▸ **GetUrlParameters**(): *any*

*Defined in [index.d.ts:396](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L396)*

**Returns:** *any*

object with URL parameters

___

### `Static` HandleSharepointBar

▸ **HandleSharepointBar**(`args`: any): *void*

*Defined in [index.d.ts:397](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L397)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *void*

___

### `Static` HideSharepointBar

▸ **HideSharepointBar**(`setCookie`: boolean): *void*

*Defined in [index.d.ts:402](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L402)*

Hide sharepoint bar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setCookie` | boolean | boolean  |

**Returns:** *void*

___

### `Static` IsAppManagerLaguageCompatible

▸ **IsAppManagerLaguageCompatible**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:403](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L403)*

**Returns:** *JQueryDeferred‹any›*

___

### `Static` JsonArrayKeyToLower

▸ **JsonArrayKeyToLower**(`data`: string): *any[]*

*Defined in [index.d.ts:408](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L408)*

Convert object keys to lowercase
 @param data JSON String of Array of objects
 @returns Array of JSON objects with all keys in lowercase

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *any[]*

___

### `Static` OpenInterchange

▸ **OpenInterchange**(): *void*

*Defined in [index.d.ts:412](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L412)*

Open interchange in new tab

**Returns:** *void*

___

### `Static` PageBindCloseWidgets

▸ **PageBindCloseWidgets**(`args`: any, `grid`: any): *void*

*Defined in [index.d.ts:413](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L413)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`grid` | any |

**Returns:** *void*

___

### `Static` PageResizeWidgets

▸ **PageResizeWidgets**(`args`: any): *void*

*Defined in [index.d.ts:414](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L414)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *void*

___

### `Static` PopUpLink

▸ **PopUpLink**(`link`: string): *void*

*Defined in [index.d.ts:419](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L419)*

Open link in new window/tab.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`link` | string | Link to open  |

**Returns:** *void*

___

### `Static` PromptExitEditMode

▸ **PromptExitEditMode**(): *void*

*Defined in [index.d.ts:421](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L421)*

This method will show confirmation pop-up if user try to exit page edit mode

**Returns:** *void*

___

### `Static` RegisterAppManagerLoggedInCheckHandler

▸ **RegisterAppManagerLoggedInCheckHandler**(): *void*

*Defined in [index.d.ts:423](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L423)*

Register timer to check if user is logged into appmanager every minute

**Returns:** *void*

___

### `Static` ShowAlertPopup

▸ **ShowAlertPopup**(`message`: string, `options`: any, `actioncallback?`: any): *void*

*Defined in [index.d.ts:430](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L430)*

To show message in alert box

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | Message text to show |
`options` | any | Custome options {width} |
`actioncallback?` | any | Method to be called when user click ok  |

**Returns:** *void*

___

### `Static` ShowSharepointBar

▸ **ShowSharepointBar**(`setCookie`: boolean): *void*

*Defined in [index.d.ts:435](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L435)*

Show sharepoint bar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setCookie` | boolean | boolean  |

**Returns:** *void*

___

### `Static` ToggleDebugger

▸ **ToggleDebugger**(): *void*

*Defined in [index.d.ts:439](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L439)*

Toggle Debugger panel

**Returns:** *void*

___

### `Static` ToggleExistPageBuilderManager

▸ **ToggleExistPageBuilderManager**(): *void*

*Defined in [index.d.ts:440](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L440)*

**Returns:** *void*

___

### `Static` ToggleImpersonator

▸ **ToggleImpersonator**(): *void*

*Defined in [index.d.ts:442](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L442)*

Toggle Impersonator mode

**Returns:** *void*

___

### `Static` ToggleItemManager

▸ **ToggleItemManager**(): *void*

*Defined in [index.d.ts:444](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L444)*

Toggle Widget properties edit mode

**Returns:** *void*

___

### `Static` ToggleLiveMode

▸ **ToggleLiveMode**(): *void*

*Defined in [index.d.ts:446](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L446)*

Toggle live preview mode

**Returns:** *void*

___

### `Static` TogglePageBuilderManager

▸ **TogglePageBuilderManager**(): *void*

*Defined in [index.d.ts:448](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L448)*

Toggle page builder (Add new page)

**Returns:** *void*

___

### `Static` TogglePageManager

▸ **TogglePageManager**(): *void*

*Defined in [index.d.ts:450](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L450)*

Toggle page edit mode

**Returns:** *void*

___

### `Static` ToggleWidgetManager

▸ **ToggleWidgetManager**(): *void*

*Defined in [index.d.ts:452](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L452)*

Toggle widget edit mode

**Returns:** *void*
