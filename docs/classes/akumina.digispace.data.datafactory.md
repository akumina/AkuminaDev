---
id: "akumina.digispace.data.datafactory"
title: "DataFactory"
sidebar_label: "DataFactory"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [DataFactory](akumina.digispace.data.datafactory.md)

## Hierarchy

* **DataFactory**

## Index

### Constructors

* [constructor](akumina.digispace.data.datafactory.md#constructor)

### Methods

* [CanUserSetItemPermissions](akumina.digispace.data.datafactory.md#canusersetitempermissions)
* [CreateList](akumina.digispace.data.datafactory.md#createlist)
* [DeleteListItem](akumina.digispace.data.datafactory.md#deletelistitem)
* [GetAllList](akumina.digispace.data.datafactory.md#getalllist)
* [GetGroupsForSite](akumina.digispace.data.datafactory.md#getgroupsforsite)
* [GetItemsFromListByTitle](akumina.digispace.data.datafactory.md#getitemsfromlistbytitle)
* [GetList](akumina.digispace.data.datafactory.md#getlist)
* [GetListEffectiveBasePermissions](akumina.digispace.data.datafactory.md#getlisteffectivebasepermissions)
* [GetListPosition](akumina.digispace.data.datafactory.md#getlistposition)
* [GetPagesFromPageUrlList](akumina.digispace.data.datafactory.md#getpagesfrompageurllist)
* [GetPermissionForListItem](akumina.digispace.data.datafactory.md#getpermissionforlistitem)
* [GetSavedLayout](akumina.digispace.data.datafactory.md#getsavedlayout)
* [GetSiteProperties](akumina.digispace.data.datafactory.md#getsiteproperties)
* [GetWidgetsForPage](akumina.digispace.data.datafactory.md#getwidgetsforpage)
* [LoadTermSet](akumina.digispace.data.datafactory.md#loadtermset)
* [LoadTermSetByColumnName](akumina.digispace.data.datafactory.md#loadtermsetbycolumnname)
* [ProvisionPageObject](akumina.digispace.data.datafactory.md#provisionpageobject)
* [ProvisionPageWidgets](akumina.digispace.data.datafactory.md#provisionpagewidgets)
* [ProvisionSavedLayout](akumina.digispace.data.datafactory.md#provisionsavedlayout)
* [Search](akumina.digispace.data.datafactory.md#search)
* [SetImpl](akumina.digispace.data.datafactory.md#setimpl)
* [SetPermissionsForListItem](akumina.digispace.data.datafactory.md#setpermissionsforlistitem)
* [SetPersonasForItem](akumina.digispace.data.datafactory.md#setpersonasforitem)
* [SetTagsForItem](akumina.digispace.data.datafactory.md#settagsforitem)
* [UpdateListItem](akumina.digispace.data.datafactory.md#updatelistitem)
* [UpdatePageObjectsItem](akumina.digispace.data.datafactory.md#updatepageobjectsitem)
* [UpdatePageUrlsItem](akumina.digispace.data.datafactory.md#updatepageurlsitem)
* [UserPermissionsForListItem](akumina.digispace.data.datafactory.md#userpermissionsforlistitem)

## Constructors

###  constructor

\+ **new DataFactory**(`legacyMode?`: undefined | false | true): *[DataFactory](akumina.digispace.data.datafactory.md)*

*Defined in [index.d.ts:626](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L626)*

**Parameters:**

Name | Type |
------ | ------ |
`legacyMode?` | undefined &#124; false &#124; true |

**Returns:** *[DataFactory](akumina.digispace.data.datafactory.md)*

## Methods

###  CanUserSetItemPermissions

▸ **CanUserSetItemPermissions**(`listName`: string, `useRootWeb`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:664](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L664)*

Returns List of permissions for current user for passed list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`useRootWeb` | boolean | Boolean flag  |

**Returns:** *JQueryDeferred‹any›*

___

###  CreateList

▸ **CreateList**(`siteUrl`: string, `siteTitle`: string, `templateType`: string, `fieldsList`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:757](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L757)*

Create new list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`siteUrl` | string | - |
`siteTitle` | string | - |
`templateType` | string | - |
`fieldsList` | any[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  DeleteListItem

▸ **DeleteListItem**(`listName`: string, `itemid`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:798](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L798)*

Delete list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName to which item belongs |
`itemid` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetAllList

▸ **GetAllList**(`useRoot`: boolean | undefined): *JQueryDeferred‹any›*

*Defined in [index.d.ts:711](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L711)*

Get All lists from the site. By default it fetechs from root site

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useRoot` | boolean &#124; undefined |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetGroupsForSite

▸ **GetGroupsForSite**(`searchUniqueValue`: any, `currentPage`: number, `pageLimit`: number): *any*

*Defined in [index.d.ts:767](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L767)*

Get all user groups for site

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchUniqueValue` | any | - |
`currentPage` | number | - |
`pageLimit` | number |   |

**Returns:** *any*

___

###  GetItemsFromListByTitle

▸ **GetItemsFromListByTitle**(`listName`: string, `searchTerm`: string, `isroot`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:759](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L759)*

**Parameters:**

Name | Type |
------ | ------ |
`listName` | string |
`searchTerm` | string |
`isroot` | boolean |

**Returns:** *JQueryDeferred‹any›*

___

###  GetList

▸ **GetList**(`request`: [IGetListRequest](../interfaces/igetlistrequest.md)): *Promise‹any›*

*Defined in [index.d.ts:638](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L638)*

Get list from SharePoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [IGetListRequest](../interfaces/igetlistrequest.md) |   |

**Returns:** *Promise‹any›*

___

###  GetListEffectiveBasePermissions

▸ **GetListEffectiveBasePermissions**(`listName`: string): *JQueryDeferred‹__type›*

*Defined in [index.d.ts:804](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L804)*

Get Permissin on list for current user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName  to fetch permission of  |

**Returns:** *JQueryDeferred‹__type›*

___

###  GetListPosition

▸ **GetListPosition**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:714](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L714)*

Get List position

**Returns:** *JQueryDeferred‹any›*

___

###  GetPagesFromPageUrlList

▸ **GetPagesFromPageUrlList**(`searchText`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:670](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L670)*

Get matching pages from Page Url List

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchText` | string | Text to search existing pages  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPermissionForListItem

▸ **GetPermissionForListItem**(`listName`: string, `itemId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:677](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L677)*

Get permissions set for list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`itemId` | string | List Item id  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSavedLayout

▸ **GetSavedLayout**(`layoutName`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:651](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L651)*

Get saved layout from Sharepoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layoutName` | string | Layout Name  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSiteProperties

▸ **GetSiteProperties**(`request`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:726](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L726)*

Get Site Properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetsForPage

▸ **GetWidgetsForPage**(`pageId`: string, `legacy?`: undefined | false | true): *JQueryDeferred‹any›*

*Defined in [index.d.ts:645](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L645)*

Get widgets for page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string | - |
`legacy?` | undefined &#124; false &#124; true |   |

**Returns:** *JQueryDeferred‹any›*

___

###  LoadTermSet

▸ **LoadTermSet**(`termSetName?`: string | null, `columnName?`: string | null, `columnValue?`: string | null): *JQueryDeferred‹any›*

*Defined in [index.d.ts:748](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L748)*

**Parameters:**

Name | Type |
------ | ------ |
`termSetName?` | string &#124; null |
`columnName?` | string &#124; null |
`columnValue?` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  LoadTermSetByColumnName

▸ **LoadTermSetByColumnName**(`request`: [IGetListRequest](../interfaces/igetlistrequest.md), `columnName`: string, `columnValue?`: string | null): *JQueryDeferred‹any›*

*Defined in [index.d.ts:749](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L749)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [IGetListRequest](../interfaces/igetlistrequest.md) |
`columnName` | string |
`columnValue?` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageObject

▸ **ProvisionPageObject**(`pageObject`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:738](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L738)*

Add new page to list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageObject` | any | JSON object with properties for page  |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageWidgets

▸ **ProvisionPageWidgets**(`widgetName`: string, `pageId`: string, `pageWidgets`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:746](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L746)*

Add/Save new widgets to page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetName` | string | - |
`pageId` | string | - |
`pageWidgets` | any[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionSavedLayout

▸ **ProvisionSavedLayout**(`layoutObject`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:657](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L657)*

Save custom layout

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layoutObject` | any | JSON object having layout details  |

**Returns:** *JQueryDeferred‹any›*

___

###  Search

▸ **Search**(`request`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:720](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L720)*

Search in sharepoint list based on request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SetImpl

▸ **SetImpl**(`implementation`: string): *void*

*Defined in [index.d.ts:632](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L632)*

#MARK - Not currently used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`implementation` | string |   |

**Returns:** *void*

___

###  SetPermissionsForListItem

▸ **SetPermissionsForListItem**(`listName`: string, `itemId`: string, `editgroup`: any, `readgroup`: any, `useRootWeb`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:705](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L705)*

Set permissions for list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | - |
`itemId` | string | - |
`editgroup` | any | Array User groups for edit permission |
`readgroup` | any | Array User groups for read permission |
`useRootWeb` | boolean |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SetPersonasForItem

▸ **SetPersonasForItem**(`listName`: string, `itemId`: number, `personaList`: any, `columnName?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:686](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L686)*

Set personas for list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | ListName of which item belongs |
`itemId` | number | ID of item to set persona. |
`personaList` | any | Semicolon seprated List of persona to set for item |
`columnName?` | undefined &#124; string | column Name for persona  |

**Returns:** *JQueryDeferred‹any›*

___

###  SetTagsForItem

▸ **SetTagsForItem**(`listName`: string, `itemId`: string, `columnName`: string, `tagList`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:695](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L695)*

Set Tags for list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | List Name |
`itemId` | string | Item Id |
`columnName` | string | Coloumn Name for tags |
`tagList` | any | semicolon seprated list of tags  |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdateListItem

▸ **UpdateListItem**(`listName`: string, `itemid`: string, `queryParams`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:791](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L791)*

Updates list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName to which item belongs |
`itemid` | string | - |
`queryParams` | any | data that needs to updated as an object  |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdatePageObjectsItem

▸ **UpdatePageObjectsItem**(`pageTypeList`: string, `pageObject`: any, `pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:732](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L732)*

Update page object Items

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageTypeList` | string | - |
`pageObject` | any |   |
`pageId` | string | - |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdatePageUrlsItem

▸ **UpdatePageUrlsItem**(`pageObject`: any, `pageId`: string, `pageTypeList?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:747](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L747)*

**Parameters:**

Name | Type |
------ | ------ |
`pageObject` | any |
`pageId` | string |
`pageTypeList?` | undefined &#124; string |

**Returns:** *JQueryDeferred‹any›*

___

###  UserPermissionsForListItem

▸ **UserPermissionsForListItem**(`pageTypeList`: string, `pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:774](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L774)*

Check user permission on list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageTypeList` | string | listName to which item belongs |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

▸ **UserPermissionsForListItem**(`pageReferenceList`: any, `pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:783](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L783)*

Check if user have edit permission on list item.

**Parameters:**

Name | Type |
------ | ------ |
`pageReferenceList` | any |
`pageId` | string |

**Returns:** *JQueryDeferred‹any›*

Resolves with {ReadPermission: bool, EditPermission: bool}
