---
id: "akumina.digispace.data.datafactory"
title: "DataFactory"
sidebar_label: "DataFactory"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [DataFactory](akumina.digispace.data.datafactory.md)

## Hierarchy

* **DataFactory**

## Index

### Constructors

* [constructor](akumina.digispace.data.datafactory.md#constructor)

### Methods

* [AddOrEditConfiguration](akumina.digispace.data.datafactory.md#addoreditconfiguration)
* [AddPageWidgets](akumina.digispace.data.datafactory.md#addpagewidgets)
* [CanUserSetItemPermissions](akumina.digispace.data.datafactory.md#canusersetitempermissions)
* [ClearAppManagerCacheByKey](akumina.digispace.data.datafactory.md#clearappmanagercachebykey)
* [CreateList](akumina.digispace.data.datafactory.md#createlist)
* [CreateListWithContentType](akumina.digispace.data.datafactory.md#createlistwithcontenttype)
* [DeleteListItem](akumina.digispace.data.datafactory.md#deletelistitem)
* [GetAllList](akumina.digispace.data.datafactory.md#getalllist)
* [GetGroupsForSite](akumina.digispace.data.datafactory.md#getgroupsforsite)
* [GetItemsFromListByTitle](akumina.digispace.data.datafactory.md#getitemsfromlistbytitle)
* [GetList](akumina.digispace.data.datafactory.md#getlist)
* [GetListEffectiveBasePermissions](akumina.digispace.data.datafactory.md#getlisteffectivebasepermissions)
* [GetListFields](akumina.digispace.data.datafactory.md#getlistfields)
* [GetListPosition](akumina.digispace.data.datafactory.md#getlistposition)
* [GetListsByContentType](akumina.digispace.data.datafactory.md#getlistsbycontenttype)
* [GetPagesFromPageUrlList](akumina.digispace.data.datafactory.md#getpagesfrompageurllist)
* [GetPermissionForListItem](akumina.digispace.data.datafactory.md#getpermissionforlistitem)
* [GetSavedLayout](akumina.digispace.data.datafactory.md#getsavedlayout)
* [GetSiteProperties](akumina.digispace.data.datafactory.md#getsiteproperties)
* [GetTermsFromTermSet](akumina.digispace.data.datafactory.md#gettermsfromtermset)
* [GetUser](akumina.digispace.data.datafactory.md#getuser)
* [GetWidgetsForPage](akumina.digispace.data.datafactory.md#getwidgetsforpage)
* [LoadLibrarySettings](akumina.digispace.data.datafactory.md#loadlibrarysettings)
* [LoadTermSet](akumina.digispace.data.datafactory.md#loadtermset)
* [LoadTermSetByColumnName](akumina.digispace.data.datafactory.md#loadtermsetbycolumnname)
* [ProvisionPageObject](akumina.digispace.data.datafactory.md#provisionpageobject)
* [ProvisionPageWidgets](akumina.digispace.data.datafactory.md#provisionpagewidgets)
* [ProvisionSavedLayout](akumina.digispace.data.datafactory.md#provisionsavedlayout)
* [Search](akumina.digispace.data.datafactory.md#search)
* [SetContextUrl](akumina.digispace.data.datafactory.md#setcontexturl)
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

Defined in index.d.ts:675

**Parameters:**

Name | Type |
------ | ------ |
`legacyMode?` | undefined &#124; false &#124; true |

**Returns:** *[DataFactory](akumina.digispace.data.datafactory.md)*

## Methods

###  AddOrEditConfiguration

▸ **AddOrEditConfiguration**(`configItem`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:897

Load all list fields

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configItem` | any | Key value pair of item which needs to be updated or added  |

**Returns:** *JQueryDeferred‹any›*

___

###  AddPageWidgets

▸ **AddPageWidgets**(`listName`: any, `pageId`: any, `widgetName`: any, `pageWidgets`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:903

**Parameters:**

Name | Type |
------ | ------ |
`listName` | any |
`pageId` | any |
`widgetName` | any |
`pageWidgets` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  CanUserSetItemPermissions

▸ **CanUserSetItemPermissions**(`listName`: string, `useRootWeb`: boolean): *JQueryDeferred‹any›*

Defined in index.d.ts:715

Returns List of permissions for current user for passed list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`useRootWeb` | boolean | Boolean flag  |

**Returns:** *JQueryDeferred‹any›*

___

###  ClearAppManagerCacheByKey

▸ **ClearAppManagerCacheByKey**(`cacheKey`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:891

Clears the cache for given cacheKey

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cacheKey` | string | cacheKey to clear the cache  |

**Returns:** *JQueryDeferred‹any›*

___

###  CreateList

▸ **CreateList**(`siteUrl`: string, `siteTitle`: string, `templateType`: string, `fieldsList`: any[]): *JQueryDeferred‹any›*

Defined in index.d.ts:809

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

###  CreateListWithContentType

▸ **CreateListWithContentType**(`listName`: string, `contentType`: string, `isDefaultContentType`: boolean, `createMLEnabledList`: boolean, `isRoot`: boolean | undefined): *JQueryDeferred‹__type›*

Defined in index.d.ts:879

Load all list fields

**Parameters:**

Name | Type |
------ | ------ |
`listName` | string |
`contentType` | string |
`isDefaultContentType` | boolean |
`createMLEnabledList` | boolean |
`isRoot` | boolean &#124; undefined |

**Returns:** *JQueryDeferred‹__type›*

___

###  DeleteListItem

▸ **DeleteListItem**(`listName`: string, `itemid`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:850

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

Defined in index.d.ts:763

Get All lists from the site. By default it fetechs from root site

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useRoot` | boolean &#124; undefined |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetGroupsForSite

▸ **GetGroupsForSite**(`listName`: string, `useRootWeb`: boolean, `searchUniqueValue`: any, `currentPage`: number, `pageLimit`: number): *any*

Defined in index.d.ts:819

Get all user groups for site

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | - |
`useRootWeb` | boolean | - |
`searchUniqueValue` | any | - |
`currentPage` | number | - |
`pageLimit` | number |   |

**Returns:** *any*

___

###  GetItemsFromListByTitle

▸ **GetItemsFromListByTitle**(`listName`: string, `searchTerm`: string, `isroot`: boolean): *JQueryDeferred‹any›*

Defined in index.d.ts:811

**Parameters:**

Name | Type |
------ | ------ |
`listName` | string |
`searchTerm` | string |
`isroot` | boolean |

**Returns:** *JQueryDeferred‹any›*

___

###  GetList

▸ **GetList**(`request`: IGetListRequest): *Promise‹any›*

Defined in index.d.ts:689

Get list from SharePoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | IGetListRequest |   |

**Returns:** *Promise‹any›*

___

###  GetListEffectiveBasePermissions

▸ **GetListEffectiveBasePermissions**(`listName`: string, `useRootWeb`: boolean): *JQueryDeferred‹__type›*

Defined in index.d.ts:856

Get Permissin on list for current user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName  to fetch permission of  |
`useRootWeb` | boolean | - |

**Returns:** *JQueryDeferred‹__type›*

___

###  GetListFields

▸ **GetListFields**(`listName`: string, `useRootWeb`: boolean): *JQueryDeferred‹__type›*

Defined in index.d.ts:867

Load all list fields

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName to fetch fields  |
`useRootWeb` | boolean | - |

**Returns:** *JQueryDeferred‹__type›*

___

###  GetListPosition

▸ **GetListPosition**(): *JQueryDeferred‹any›*

Defined in index.d.ts:766

Get List position

**Returns:** *JQueryDeferred‹any›*

___

###  GetListsByContentType

▸ **GetListsByContentType**(`contenttype`: string, `isroot`: boolean | undefined): *JQueryDeferred‹__type›*

Defined in index.d.ts:873

Load all list fields

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contenttype` | string | contenttype name based on which lists will be fetched  |
`isroot` | boolean &#124; undefined | - |

**Returns:** *JQueryDeferred‹__type›*

___

###  GetPagesFromPageUrlList

▸ **GetPagesFromPageUrlList**(`searchText`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:721

Get matching pages from Page Url List

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchText` | string | Text to search existing pages  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPermissionForListItem

▸ **GetPermissionForListItem**(`listName`: string, `useRootWeb`: boolean, `itemId`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:729

Get permissions set for list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | Name of list |
`useRootWeb` | boolean | use site absolute url vs. web absolute url |
`itemId` | string | List Item id  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSavedLayout

▸ **GetSavedLayout**(`layoutName`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:702

Get saved layout from Sharepoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layoutName` | string | Layout Name  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSiteProperties

▸ **GetSiteProperties**(`request`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:778

Get Site Properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetTermsFromTermSet

▸ **GetTermsFromTermSet**(`termsetId`: any): *JQueryDeferred‹__type›*

Defined in index.d.ts:885

Load all list fields

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`termsetId` | any | termsetId for which we have fetch terms  |

**Returns:** *JQueryDeferred‹__type›*

___

###  GetUser

▸ **GetUser**(`userPrincipal`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:901

Get User Props

**Parameters:**

Name | Type |
------ | ------ |
`userPrincipal` | string |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetsForPage

▸ **GetWidgetsForPage**(`pageId`: string, `legacy?`: undefined | false | true): *JQueryDeferred‹any›*

Defined in index.d.ts:696

Get widgets for page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageId` | string | - |
`legacy?` | undefined &#124; false &#124; true |   |

**Returns:** *JQueryDeferred‹any›*

___

###  LoadLibrarySettings

▸ **LoadLibrarySettings**(`listName`: string, `isroot`: boolean, `getdefaultItemOpenSetting`: boolean): *JQueryDeferred‹__type›*

Defined in index.d.ts:861

Load library settings

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | listName to load settings  |
`isroot` | boolean | - |
`getdefaultItemOpenSetting` | boolean | - |

**Returns:** *JQueryDeferred‹__type›*

___

###  LoadTermSet

▸ **LoadTermSet**(`termSetName?`: string | null, `columnName?`: string | null, `columnValue?`: string | null): *JQueryDeferred‹any›*

Defined in index.d.ts:800

**Parameters:**

Name | Type |
------ | ------ |
`termSetName?` | string &#124; null |
`columnName?` | string &#124; null |
`columnValue?` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  LoadTermSetByColumnName

▸ **LoadTermSetByColumnName**(`request`: IGetListRequest, `columnName`: string, `columnValue?`: string | null): *JQueryDeferred‹any›*

Defined in index.d.ts:801

**Parameters:**

Name | Type |
------ | ------ |
`request` | IGetListRequest |
`columnName` | string |
`columnValue?` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageObject

▸ **ProvisionPageObject**(`pageObject`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:790

Add new page to list

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageObject` | any | JSON object with properties for page  |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageWidgets

▸ **ProvisionPageWidgets**(`widgetName`: string, `pageId`: string, `pageVersionId`: string, `pageWidgets`: any[]): *JQueryDeferred‹any›*

Defined in index.d.ts:798

Add/Save new widgets to page

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetName` | string | - |
`pageId` | string | - |
`pageVersionId` | string | - |
`pageWidgets` | any[] |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionSavedLayout

▸ **ProvisionSavedLayout**(`layoutObject`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:708

Save custom layout

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layoutObject` | any | JSON object having layout details  |

**Returns:** *JQueryDeferred‹any›*

___

###  Search

▸ **Search**(`request`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:772

Search in sharepoint list based on request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  SetContextUrl

▸ **SetContextUrl**(`siteCOntextUrl`: string): *void*

Defined in index.d.ts:683

**Parameters:**

Name | Type |
------ | ------ |
`siteCOntextUrl` | string |

**Returns:** *void*

___

###  SetImpl

▸ **SetImpl**(`implementation`: string): *void*

Defined in index.d.ts:681

#MARK - Not currently used.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`implementation` | string |   |

**Returns:** *void*

___

###  SetPermissionsForListItem

▸ **SetPermissionsForListItem**(`listName`: string, `itemId`: string, `editgroup`: any, `readgroup`: any, `useRootWeb`: boolean): *JQueryDeferred‹any›*

Defined in index.d.ts:757

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

Defined in index.d.ts:738

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

Defined in index.d.ts:747

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

Defined in index.d.ts:843

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

Defined in index.d.ts:784

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

Defined in index.d.ts:799

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

Defined in index.d.ts:826

Check user permission on list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageTypeList` | string | listName to which item belongs |
`pageId` | string |   |

**Returns:** *JQueryDeferred‹any›*

▸ **UserPermissionsForListItem**(`pageReferenceList`: any, `pageId`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:835

Check if user have edit permission on list item.

**Parameters:**

Name | Type |
------ | ------ |
`pageReferenceList` | any |
`pageId` | string |

**Returns:** *JQueryDeferred‹any›*

Resolves with {ReadPermission: bool, EditPermission: bool}
