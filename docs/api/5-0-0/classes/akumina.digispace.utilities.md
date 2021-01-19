---
id: "akumina.digispace.utilities"
title: "Utilities"
sidebar_label: "Utilities"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Utilities](akumina.digispace.utilities.md)

## Hierarchy

* **Utilities**

## Index

### Classes

* [DateTimeManager](akumina.digispace.utilities.datetimemanager.md)

### Methods

* [AllPermissionsNA](akumina.digispace.utilities.md#static-allpermissionsna)
* [ArePersonasDefined](akumina.digispace.utilities.md#static-arepersonasdefined)
* [AttemptReset](akumina.digispace.utilities.md#static-attemptreset)
* [AzureADEnabledOrAppManagerLoggedIn](akumina.digispace.utilities.md#static-azureadenabledorappmanagerloggedin)
* [CheckAppManagerIsLoggedIn](akumina.digispace.utilities.md#static-checkappmanagerisloggedin)
* [ConvertValue](akumina.digispace.utilities.md#static-convertvalue)
* [CreatePageLink](akumina.digispace.utilities.md#static-createpagelink)
* [DeDupArray](akumina.digispace.utilities.md#static-deduparray)
* [ExitEditModeAndRefreshPage](akumina.digispace.utilities.md#static-exiteditmodeandrefreshpage)
* [FindSearchResultCategory](akumina.digispace.utilities.md#static-findsearchresultcategory)
* [FormatDateStringToJSFormat](akumina.digispace.utilities.md#static-formatdatestringtojsformat)
* [GetCurrentPageId](akumina.digispace.utilities.md#static-getcurrentpageid)
* [GetDashboardGridByInstance](akumina.digispace.utilities.md#static-getdashboardgridbyinstance)
* [GetDateFormatForSiteLocaleId](akumina.digispace.utilities.md#static-getdateformatforsitelocaleid)
* [GetEmployeeDetailUrl](akumina.digispace.utilities.md#static-getemployeedetailurl)
* [GetGuid](akumina.digispace.utilities.md#static-getguid)
* [GetLinkForResult](akumina.digispace.utilities.md#static-getlinkforresult)
* [GetLinkParameter](akumina.digispace.utilities.md#static-getlinkparameter)
* [GetPageGridByInstance](akumina.digispace.utilities.md#static-getpagegridbyinstance)
* [GetPropertyValue](akumina.digispace.utilities.md#static-getpropertyvalue)
* [GetSearchParameter](akumina.digispace.utilities.md#static-getsearchparameter)
* [GetSharepointBarElement](akumina.digispace.utilities.md#static-getsharepointbarelement)
* [GetStickyNoteMessage](akumina.digispace.utilities.md#static-getstickynotemessage)
* [GetUrlParameters](akumina.digispace.utilities.md#static-geturlparameters)
* [HandleSharepointBar](akumina.digispace.utilities.md#static-handlesharepointbar)
* [HideSharepointBar](akumina.digispace.utilities.md#static-hidesharepointbar)
* [IsAppManagerLaguageCompatible](akumina.digispace.utilities.md#static-isappmanagerlaguagecompatible)
* [IsLoggedinToAppManager](akumina.digispace.utilities.md#static-isloggedintoappmanager)
* [IsSignInAccount](akumina.digispace.utilities.md#static-issigninaccount)
* [JsonArrayKeyToLower](akumina.digispace.utilities.md#static-jsonarraykeytolower)
* [LoginToAppmanagerHtml](akumina.digispace.utilities.md#static-logintoappmanagerhtml)
* [OnSpaLinkClick](akumina.digispace.utilities.md#static-onspalinkclick)
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

Defined in index.d.ts:360

Shows confirmation popup if all permissions are set as NA
It is called from add page tab and page properties update

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isPagePropertisPopUp` | boolean &#124; null | true if called from page properties.  |

**Returns:** *void*

___

### `Static` ArePersonasDefined

▸ **ArePersonasDefined**(): *boolean*

Defined in index.d.ts:492

**Returns:** *boolean*

___

### `Static` AttemptReset

▸ **AttemptReset**(`callback`: any): *void*

Defined in index.d.ts:364

Called to show confirmation pop up while exiting edit page mode.

**Parameters:**

Name | Type |
------ | ------ |
`callback` | any |

**Returns:** *void*

___

### `Static` AzureADEnabledOrAppManagerLoggedIn

▸ **AzureADEnabledOrAppManagerLoggedIn**(): *boolean*

Defined in index.d.ts:490

**Returns:** *boolean*

___

### `Static` CheckAppManagerIsLoggedIn

▸ **CheckAppManagerIsLoggedIn**(): *void*

Defined in index.d.ts:369

Check if iser is logged into appmanager and set the flag accordingly

**Returns:** *void*

___

### `Static` ConvertValue

▸ **ConvertValue**(`value`: any, `dataType`: string): *boolean | JSON*

Defined in index.d.ts:374

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

### `Static` CreatePageLink

▸ **CreatePageLink**(`url`: string): *string*

Defined in index.d.ts:496

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Static` DeDupArray

▸ **DeDupArray**(`array`: any): *any*

Defined in index.d.ts:379

Removes duplicate entries from an array

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | any | Array to be filter  |

**Returns:** *any*

___

### `Static` ExitEditModeAndRefreshPage

▸ **ExitEditModeAndRefreshPage**(): *void*

Defined in index.d.ts:491

**Returns:** *void*

___

### `Static` FindSearchResultCategory

▸ **FindSearchResultCategory**(`result`: any[], `isCurrent`: boolean): *string*

Defined in index.d.ts:385

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

Defined in index.d.ts:392

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

Defined in index.d.ts:394

Returns an object with pageId property

**Returns:** *any*

___

### `Static` GetDashboardGridByInstance

▸ **GetDashboardGridByInstance**(`instanceId`: string): *string[]*

Defined in index.d.ts:395

**Parameters:**

Name | Type |
------ | ------ |
`instanceId` | string |

**Returns:** *string[]*

___

### `Static` GetDateFormatForSiteLocaleId

▸ **GetDateFormatForSiteLocaleId**(): *JQueryDeferred‹any›*

Defined in index.d.ts:404

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

Defined in index.d.ts:409

Resolves with Employee Detail Url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | UserId  |

**Returns:** *JQueryDeferred‹any›*

___

### `Static` GetGuid

▸ **GetGuid**(): *string*

Defined in index.d.ts:413

Get new GUID

**Returns:** *string*

___

### `Static` GetLinkForResult

▸ **GetLinkForResult**(`itemUrl`: string): *string*

Defined in index.d.ts:414

**Parameters:**

Name | Type |
------ | ------ |
`itemUrl` | string |

**Returns:** *string*

___

### `Static` GetLinkParameter

▸ **GetLinkParameter**(`itemUrl`: string, `paramToRetrieve`: string, `defaultValue`: string): *string*

Defined in index.d.ts:415

**Parameters:**

Name | Type |
------ | ------ |
`itemUrl` | string |
`paramToRetrieve` | string |
`defaultValue` | string |

**Returns:** *string*

___

### `Static` GetPageGridByInstance

▸ **GetPageGridByInstance**(`instanceId`: string): *string[]*

Defined in index.d.ts:420

Returns Page Grid for workspace widget Instancce Id's

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`instanceId` | string | Widget Instance ID  |

**Returns:** *string[]*

___

### `Static` GetPropertyValue

▸ **GetPropertyValue**(`requestIn`: any, `key`: string, `defaultValue`: string, `dataType`: string): *any*

Defined in index.d.ts:421

**Parameters:**

Name | Type |
------ | ------ |
`requestIn` | any |
`key` | string |
`defaultValue` | string |
`dataType` | string |

**Returns:** *any*

___

### `Static` GetSearchParameter

▸ **GetSearchParameter**(`itemResults`: any[], `paramToRetrieve`: string, `defaultValue`: string): *string*

Defined in index.d.ts:423

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

Defined in index.d.ts:427

**Returns:** *any*

element of sharepoint bar

___

### `Static` GetStickyNoteMessage

▸ **GetStickyNoteMessage**(): *string*

Defined in index.d.ts:493

**Returns:** *string*

___

### `Static` GetUrlParameters

▸ **GetUrlParameters**(): *any*

Defined in index.d.ts:431

**Returns:** *any*

object with URL parameters

___

### `Static` HandleSharepointBar

▸ **HandleSharepointBar**(`args`: any): *void*

Defined in index.d.ts:432

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *void*

___

### `Static` HideSharepointBar

▸ **HideSharepointBar**(`setCookie`: boolean): *void*

Defined in index.d.ts:437

Hide sharepoint bar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setCookie` | boolean | boolean  |

**Returns:** *void*

___

### `Static` IsAppManagerLaguageCompatible

▸ **IsAppManagerLaguageCompatible**(): *JQueryDeferred‹any›*

Defined in index.d.ts:438

**Returns:** *JQueryDeferred‹any›*

___

### `Static` IsLoggedinToAppManager

▸ **IsLoggedinToAppManager**(): *void*

Defined in index.d.ts:488

**Returns:** *void*

___

### `Static` IsSignInAccount

▸ **IsSignInAccount**(): *boolean*

Defined in index.d.ts:494

**Returns:** *boolean*

___

### `Static` JsonArrayKeyToLower

▸ **JsonArrayKeyToLower**(`data`: string): *any[]*

Defined in index.d.ts:443

Convert object keys to lowercase
 @param data JSON String of Array of objects
 @returns Array of JSON objects with all keys in lowercase

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *any[]*

___

### `Static` LoginToAppmanagerHtml

▸ **LoginToAppmanagerHtml**(): *void*

Defined in index.d.ts:489

**Returns:** *void*

___

### `Static` OnSpaLinkClick

▸ **OnSpaLinkClick**(`pageRoute`: string, `openInNewWindow`: boolean): *void*

Defined in index.d.ts:495

**Parameters:**

Name | Type |
------ | ------ |
`pageRoute` | string |
`openInNewWindow` | boolean |

**Returns:** *void*

___

### `Static` OpenInterchange

▸ **OpenInterchange**(): *void*

Defined in index.d.ts:447

Open interchange in new tab

**Returns:** *void*

___

### `Static` PageBindCloseWidgets

▸ **PageBindCloseWidgets**(`args`: any, `grid`: any): *void*

Defined in index.d.ts:448

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |
`grid` | any |

**Returns:** *void*

___

### `Static` PageResizeWidgets

▸ **PageResizeWidgets**(`args`: any): *void*

Defined in index.d.ts:449

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *void*

___

### `Static` PopUpLink

▸ **PopUpLink**(`link`: string): *void*

Defined in index.d.ts:454

Open link in new window/tab.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`link` | string | Link to open  |

**Returns:** *void*

___

### `Static` PromptExitEditMode

▸ **PromptExitEditMode**(): *void*

Defined in index.d.ts:456

This method will show confirmation pop-up if user try to exit page edit mode

**Returns:** *void*

___

### `Static` RegisterAppManagerLoggedInCheckHandler

▸ **RegisterAppManagerLoggedInCheckHandler**(): *void*

Defined in index.d.ts:458

Register timer to check if user is logged into appmanager every minute

**Returns:** *void*

___

### `Static` ShowAlertPopup

▸ **ShowAlertPopup**(`message`: string, `options`: any, `actioncallback?`: any): *void*

Defined in index.d.ts:465

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

Defined in index.d.ts:470

Show sharepoint bar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`setCookie` | boolean | boolean  |

**Returns:** *void*

___

### `Static` ToggleDebugger

▸ **ToggleDebugger**(): *void*

Defined in index.d.ts:474

Toggle Debugger panel

**Returns:** *void*

___

### `Static` ToggleExistPageBuilderManager

▸ **ToggleExistPageBuilderManager**(): *void*

Defined in index.d.ts:475

**Returns:** *void*

___

### `Static` ToggleImpersonator

▸ **ToggleImpersonator**(): *void*

Defined in index.d.ts:477

Toggle Impersonator mode

**Returns:** *void*

___

### `Static` ToggleItemManager

▸ **ToggleItemManager**(): *void*

Defined in index.d.ts:479

Toggle Widget properties edit mode

**Returns:** *void*

___

### `Static` ToggleLiveMode

▸ **ToggleLiveMode**(): *void*

Defined in index.d.ts:481

Toggle live preview mode

**Returns:** *void*

___

### `Static` TogglePageBuilderManager

▸ **TogglePageBuilderManager**(): *void*

Defined in index.d.ts:483

Toggle page builder (Add new page)

**Returns:** *void*

___

### `Static` TogglePageManager

▸ **TogglePageManager**(): *void*

Defined in index.d.ts:485

Toggle page edit mode

**Returns:** *void*

___

### `Static` ToggleWidgetManager

▸ **ToggleWidgetManager**(): *void*

Defined in index.d.ts:487

Toggle widget edit mode

**Returns:** *void*
