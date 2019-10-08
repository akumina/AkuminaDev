---
id: "akumina.digispace.data.pagemanager"
title: "PageManager"
sidebar_label: "PageManager"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [PageManager](akumina.digispace.data.pagemanager.md)

## Hierarchy

* **PageManager**

## Index

### Methods

* [AddPageForGroup](akumina.digispace.data.pagemanager.md#addpageforgroup)
* [AddPagesForGroup](akumina.digispace.data.pagemanager.md#addpagesforgroup)
* [CanUserSetPagePermissions](akumina.digispace.data.pagemanager.md#canusersetpagepermissions)
* [ExecuteAsyncQuery](akumina.digispace.data.pagemanager.md#executeasyncquery)
* [GetAvailableWorkspaceTypes](akumina.digispace.data.pagemanager.md#getavailableworkspacetypes)
* [GetContainersForView](akumina.digispace.data.pagemanager.md#getcontainersforview)
* [GetDashboardPageForUser](akumina.digispace.data.pagemanager.md#getdashboardpageforuser)
* [GetDashboardWidgetsViaAppManager](akumina.digispace.data.pagemanager.md#getdashboardwidgetsviaappmanager)
* [GetLayoutsForToolBar](akumina.digispace.data.pagemanager.md#getlayoutsfortoolbar)
* [GetPageActiveView](akumina.digispace.data.pagemanager.md#getpageactiveview)
* [GetPageAvailableViews](akumina.digispace.data.pagemanager.md#getpageavailableviews)
* [GetPageChildWidgets](akumina.digispace.data.pagemanager.md#getpagechildwidgets)
* [GetPageLayouts](akumina.digispace.data.pagemanager.md#getpagelayouts)
* [GetPageObject](akumina.digispace.data.pagemanager.md#getpageobject)
* [GetPageObjectForPageUrl](akumina.digispace.data.pagemanager.md#getpageobjectforpageurl)
* [GetPageTypeInfo](akumina.digispace.data.pagemanager.md#getpagetypeinfo)
* [GetPageWidget](akumina.digispace.data.pagemanager.md#getpagewidget)
* [GetPageWidgets](akumina.digispace.data.pagemanager.md#getpagewidgets)
* [GetPagesFromPageUrlList](akumina.digispace.data.pagemanager.md#getpagesfrompageurllist)
* [GetPermissionForPage](akumina.digispace.data.pagemanager.md#getpermissionforpage)
* [GetSavedLayout](akumina.digispace.data.pagemanager.md#getsavedlayout)
* [GetWidgetsForPage](akumina.digispace.data.pagemanager.md#getwidgetsforpage)
* [GetWidgetsForToolbar](akumina.digispace.data.pagemanager.md#getwidgetsfortoolbar)
* [IsDashBoardOrPageWidgetOrContainer](akumina.digispace.data.pagemanager.md#isdashboardorpagewidgetorcontainer)
* [IsDashboardOrPageWidgetOrContainerType](akumina.digispace.data.pagemanager.md#isdashboardorpagewidgetorcontainertype)
* [IsGroupTypeCustom](akumina.digispace.data.pagemanager.md#isgrouptypecustom)
* [LoadNewPage](akumina.digispace.data.pagemanager.md#loadnewpage)
* [ProvisionDashboardPageForUser](akumina.digispace.data.pagemanager.md#provisiondashboardpageforuser)
* [ProvisionPageObject](akumina.digispace.data.pagemanager.md#provisionpageobject)
* [ProvisionPageWidgets](akumina.digispace.data.pagemanager.md#provisionpagewidgets)
* [ProvisionSavedLayout](akumina.digispace.data.pagemanager.md#provisionsavedlayout)
* [RemoveGroupPage](akumina.digispace.data.pagemanager.md#removegrouppage)
* [RemoveGroupPageMapping](akumina.digispace.data.pagemanager.md#removegrouppagemapping)
* [RemoveGroupWidgetProperties](akumina.digispace.data.pagemanager.md#removegroupwidgetproperties)
* [RemovePagesForGroup](akumina.digispace.data.pagemanager.md#removepagesforgroup)
* [SaveDashboardPage](akumina.digispace.data.pagemanager.md#savedashboardpage)
* [SavePage](akumina.digispace.data.pagemanager.md#savepage)
* [SetPageContents](akumina.digispace.data.pagemanager.md#setpagecontents)
* [SetPermissionsForPage](akumina.digispace.data.pagemanager.md#setpermissionsforpage)
* [SetPersonasForPage](akumina.digispace.data.pagemanager.md#setpersonasforpage)
* [SetTagsForPage](akumina.digispace.data.pagemanager.md#settagsforpage)
* [getGrid](akumina.digispace.data.pagemanager.md#getgrid)

## Methods

###  AddPageForGroup

▸ **AddPageForGroup**(`pageModel`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1281](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1281)*

Add Page for groups

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageModel` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  AddPagesForGroup

▸ **AddPagesForGroup**(`model`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1299](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1299)*

Add pages for group

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  CanUserSetPagePermissions

▸ **CanUserSetPagePermissions**(`listName`: string, `useRootWeb`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1131](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1131)*

Returns List of permissions for current user for passed list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`useRootWeb` | boolean | Boolean flag  |

**Returns:** *JQueryDeferred‹any›*

___

###  ExecuteAsyncQuery

▸ **ExecuteAsyncQuery**(`clientContext`: any, `collListItem`: any, `def`: JQueryDeferred‹any›, `idArray`: any[], `columnName`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1339](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1339)*

Execute Share point query

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`clientContext` | any | - |
`collListItem` | any | - |
`def` | JQueryDeferred‹any› | - |
`idArray` | any[] | - |
`columnName` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetAvailableWorkspaceTypes

▸ **GetAvailableWorkspaceTypes**(`groupType`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1287](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1287)*

Get Available Workspace Types

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupType` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetContainersForView

▸ **GetContainersForView**(`viewTemplateUrl`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1232](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1232)*

Get containers for view

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`viewTemplateUrl` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetDashboardPageForUser

▸ **GetDashboardPageForUser**(`userId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1208](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1208)*

Get Dashboard Page for User

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** *JQueryDeferred‹any›*

resolves with dashboard page for user {title, userId, pageId}

___

###  GetDashboardWidgetsViaAppManager

▸ **GetDashboardWidgetsViaAppManager**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1195](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1195)*

Get Dashboard widgets

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetLayoutsForToolBar

▸ **GetLayoutsForToolBar**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1244](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1244)*

Get Layouts For ToolBar

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageActiveView

▸ **GetPageActiveView**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1226](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1226)*

Get Page Active View

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageAvailableViews

▸ **GetPageAvailableViews**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1220](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1220)*

Retrives available page views

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageChildWidgets

▸ **GetPageChildWidgets**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1238](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1238)*

Get Page Child widgets

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageLayouts

▸ **GetPageLayouts**(): *any[]*

*Defined in [index.d.ts:1085](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1085)*

Get default page layouts

**Returns:** *any[]*

Array of page layout object
{displayOrder:, layoutId:, layoutImage:, layoutTemplate:, layoutTitle:, selectedLayout:, spPageLayoutId: }

___

###  GetPageObject

▸ **GetPageObject**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1092](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1092)*

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageObjectForPageUrl

▸ **GetPageObjectForPageUrl**(`relativePageurl`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1091](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1091)*

Get page object from pageURL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`relativePageurl` | string | relative page URL  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageTypeInfo

▸ **GetPageTypeInfo**(`pageTypeParam`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1168](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1168)*

Returns page type information

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageTypeParam` | string | Page Type  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageWidget

▸ **GetPageWidget**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1201](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1201)*

Retrive page widget

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageWidgets

▸ **GetPageWidgets**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1183](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1183)*

Resolves with all the page widgets

**Returns:** *JQueryDeferred‹any›*

___

###  GetPagesFromPageUrlList

▸ **GetPagesFromPageUrlList**(`searchText`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1124](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1124)*

Get matching pages from Page Url List

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchText` | string | Text to search existing pages  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPermissionForPage

▸ **GetPermissionForPage**(`listName`: string, `itemId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1138](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1138)*

Get permissions for Page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`itemId` | string | Page Id  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSavedLayout

▸ **GetSavedLayout**(`Title?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1098](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1098)*

Get saved layout from Sharepoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`Title?` | undefined &#124; string | Layout Name  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetsForPage

▸ **GetWidgetsForPage**(`pageId`: string, `legacy?`: undefined | false | true): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1111](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1111)*

Get widgets for page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string | - |
`legacy?` | undefined &#124; false &#124; true |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetsForToolbar

▸ **GetWidgetsForToolbar**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1249](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1249)*

Get Widgets For Toolbar

**Returns:** *JQueryDeferred‹any›*

___

###  IsDashBoardOrPageWidgetOrContainer

▸ **IsDashBoardOrPageWidgetOrContainer**(`widgetInstances`: any): *boolean*

*Defined in [index.d.ts:1305](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1305)*

Returns true if widget instance is either Dashboard, PageWidget or Container

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetInstances` | any | string of widget Type  |

**Returns:** *boolean*

___

###  IsDashboardOrPageWidgetOrContainerType

▸ **IsDashboardOrPageWidgetOrContainerType**(`widgetType`: any): *boolean*

*Defined in [index.d.ts:1163](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1163)*

Returns true if widget type passed is either Dashboard, PageWidget or Container Type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetType` | any | string of widget Type  |

**Returns:** *boolean*

___

###  IsGroupTypeCustom

▸ **IsGroupTypeCustom**(`type`: string): *boolean*

*Defined in [index.d.ts:1293](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1293)*

Check if group type is custom

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string |   |

**Returns:** *boolean*

___

###  LoadNewPage

▸ **LoadNewPage**(`pageRouteInfo`: any): *void*

*Defined in [index.d.ts:1189](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1189)*

Loads a new page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageRouteInfo` | any | JSON object with page routing information  |

**Returns:** *void*

___

###  ProvisionDashboardPageForUser

▸ **ProvisionDashboardPageForUser**(`userId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1214](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1214)*

Save dashboard page for user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageObject

▸ **ProvisionPageObject**(`pageObject`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1255](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1255)*

Save update page objects

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageObject` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageWidgets

▸ **ProvisionPageWidgets**(`widgetName`: string, `pageId`: string, `pageWidgets`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1263](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1263)*

Save page widgets

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetName` | string | - |
`pageId` | string | - |
`pageWidgets` | any[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionSavedLayout

▸ **ProvisionSavedLayout**(`data`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1104](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1104)*

Save custom layout

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  RemoveGroupPage

▸ **RemoveGroupPage**(`pageIds`: string[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1323](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1323)*

Remove Group Page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageIds` | string[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  RemoveGroupPageMapping

▸ **RemoveGroupPageMapping**(`groupId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1317](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1317)*

Remmove group page mapping

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  RemoveGroupWidgetProperties

▸ **RemoveGroupWidgetProperties**(`widgetInstanceIds`: string[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1329](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1329)*

Remove Group WIdget properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetInstanceIds` | string[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  RemovePagesForGroup

▸ **RemovePagesForGroup**(`groupId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1311](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1311)*

Remove pages for group

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groupId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SaveDashboardPage

▸ **SaveDashboardPage**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1275](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1275)*

Save dashboard page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SavePage

▸ **SavePage**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1264](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1264)*

**Parameters:**

Name | Type |
------ | ------ |
`pageId` | string |

**Returns:** *JQueryDeferred‹any›*

___

###  SetPageContents

▸ **SetPageContents**(`pageId`: string, `data`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1118](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1118)*

Save page contents(widgets)

**Parameters:**

Name | Type |
------ | ------ |
`pageId` | string |
`data` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  SetPermissionsForPage

▸ **SetPermissionsForPage**(`listName`: string, `itemId`: string, `editgroup`: string[], `readgroup`: string[], `useRootWeb`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1178](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1178)*

Set permissions for Page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | - |
`itemId` | string | Page item Id |
`editgroup` | string[] | Array User groups for edit permission |
`readgroup` | string[] | Array User groups for read permission |
`useRootWeb` | boolean |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SetPersonasForPage

▸ **SetPersonasForPage**(`listName`: string, `itemId`: string, `personaList`: any, `columnName?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1147](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1147)*

Set personas for page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | ListName of which item belongs |
`itemId` | string | ID of item to set persona. |
`personaList` | any | Semicolon seprated List of persona to set for item |
`columnName?` | undefined &#124; string | Coloumn Name  |

**Returns:** *JQueryDeferred‹any›*

___

###  SetTagsForPage

▸ **SetTagsForPage**(`listName`: string, `itemId`: string, `columnName`: string, `list`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1157](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1157)*

Set Tags for Page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | List Name |
`itemId` | string | Item Id of page |
`columnName` | string | Coloumn Name to be updated for tags |
`list` | any | semicolon seprated list of tags  |

**Returns:** *JQueryDeferred‹any›*

___

###  getGrid

▸ **getGrid**(): *any[]*

*Defined in [index.d.ts:1269](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1269)*

Provide grid details

**Returns:** *any[]*
