---
id: "akumina.digispace.data.interchange"
title: "Interchange"
sidebar_label: "Interchange"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [Interchange](akumina.digispace.data.interchange.md)

## Hierarchy

* **Interchange**

## Index

### Methods

* [AppPart](akumina.digispace.data.interchange.md#apppart)
* [CheckAssignedLicenses](akumina.digispace.data.interchange.md#checkassignedlicenses)
* [DecryptData](akumina.digispace.data.interchange.md#decryptdata)
* [EncryptData](akumina.digispace.data.interchange.md#encryptdata)
* [GetActivatedFeatures](akumina.digispace.data.interchange.md#getactivatedfeatures)
* [GetAppManagerLanguageId](akumina.digispace.data.interchange.md#getappmanagerlanguageid)
* [GetAppManagerVersion](akumina.digispace.data.interchange.md#getappmanagerversion)
* [GetApps](akumina.digispace.data.interchange.md#getapps)
* [GetConfiguration](akumina.digispace.data.interchange.md#getconfiguration)
* [GetDashboardWidgets](akumina.digispace.data.interchange.md#getdashboardwidgets)
* [GetFacets](akumina.digispace.data.interchange.md#getfacets)
* [GetListsForContentType](akumina.digispace.data.interchange.md#getlistsforcontenttype)
* [GetMenuApps](akumina.digispace.data.interchange.md#getmenuapps)
* [GetMyAppsCacheKey](akumina.digispace.data.interchange.md#getmyappscachekey)
* [GetPageObjectForPageUrl](akumina.digispace.data.interchange.md#getpageobjectforpageurl)
* [GetPermissionForListItemForCurrentUser](akumina.digispace.data.interchange.md#getpermissionforlistitemforcurrentuser)
* [GetSPGroupUsersAndUserGroupsList](akumina.digispace.data.interchange.md#getspgroupusersandusergroupslist)
* [GetUserAccessibleApps](akumina.digispace.data.interchange.md#getuseraccessibleapps)
* [GetUserGroups](akumina.digispace.data.interchange.md#getusergroups)
* [GetUserGroupsFromAppManager](akumina.digispace.data.interchange.md#getusergroupsfromappmanager)
* [GetUserPersonas](akumina.digispace.data.interchange.md#getuserpersonas)
* [GetUsersData](akumina.digispace.data.interchange.md#getusersdata)
* [GetWidgetJS](akumina.digispace.data.interchange.md#getwidgetjs)
* [IsLoggedIntoAppManager](akumina.digispace.data.interchange.md#isloggedintoappmanager)
* [IsWorkspaceMarkedAsDeleted](akumina.digispace.data.interchange.md#isworkspacemarkedasdeleted)
* [MarkWorkspaceAsDeleted](akumina.digispace.data.interchange.md#markworkspaceasdeleted)
* [PerformChangeSite](akumina.digispace.data.interchange.md#performchangesite)
* [ProvisionPageWidgets](akumina.digispace.data.interchange.md#provisionpagewidgets)
* [RefreshAkToken](akumina.digispace.data.interchange.md#refreshaktoken)
* [UpdatePageObjectsCache](akumina.digispace.data.interchange.md#updatepageobjectscache)
* [UpdatePageProperties](akumina.digispace.data.interchange.md#updatepageproperties)
* [UpdateWidgetInstanceCache](akumina.digispace.data.interchange.md#updatewidgetinstancecache)
* [ValidateAkToken](akumina.digispace.data.interchange.md#validateaktoken)

## Methods

###  AppPart

▸ **AppPart**(`referenceList`: string, `itemId`: string): *any*

*Defined in [index.d.ts:903](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L903)*

**Parameters:**

Name | Type |
------ | ------ |
`referenceList` | string |
`itemId` | string |

**Returns:** *any*

___

###  CheckAssignedLicenses

▸ **CheckAssignedLicenses**(`memberids`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1002](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1002)*

Check licenses assigned to members

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`memberids` | string | string  |

**Returns:** *JQueryDeferred‹any›*

___

###  DecryptData

▸ **DecryptData**(`data`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1070](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1070)*

Send data to decrypt

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  EncryptData

▸ **EncryptData**(`data`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1064](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1064)*

Send data to encrypt

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetActivatedFeatures

▸ **GetActivatedFeatures**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1008](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1008)*

Get activated Features on site.

**Returns:** *JQueryDeferred‹any›*

Resolves in success with JSON object

___

###  GetAppManagerLanguageId

▸ **GetAppManagerLanguageId**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1053](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1053)*

**Returns:** *JQueryDeferred‹any›*

Resolves with language ID {number}

___

###  GetAppManagerVersion

▸ **GetAppManagerVersion**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1058](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1058)*

**Returns:** *JQueryDeferred‹any›*

Def Resolves in success with Version Object {FileVersion: string, ProductVersion: string}

___

###  GetApps

▸ **GetApps**(`listName`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:953](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L953)*

Get list of apps available for user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | String  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetConfiguration

▸ **GetConfiguration**(): *any*

*Defined in [index.d.ts:887](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L887)*

Get Configuration object

**Returns:** *any*

___

###  GetDashboardWidgets

▸ **GetDashboardWidgets**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1019](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1019)*

**Returns:** *JQueryDeferred‹any›*

resolves with array of widget objects

___

###  GetFacets

▸ **GetFacets**(`facetObj`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:984](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L984)*

Get Facets from interchange

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`facetObj` | any[] | List of facets object  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetListsForContentType

▸ **GetListsForContentType**(`contenttype`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:929](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L929)*

Get sharepoint lists associated with the passed content type

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contenttype` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetMenuApps

▸ **GetMenuApps**(): *any*

*Defined in [index.d.ts:899](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L899)*

**Returns:** *any*

___

###  GetMyAppsCacheKey

▸ **GetMyAppsCacheKey**(`attribute`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:978](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L978)*

Get myapps cache key for the current user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`attribute` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageObjectForPageUrl

▸ **GetPageObjectForPageUrl**(`relativePageUrl`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:917](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L917)*

Get page object from pageURL

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`relativePageUrl` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPermissionForListItemForCurrentUser

▸ **GetPermissionForListItemForCurrentUser**(`listName`: string, `itemId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:935](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L935)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string | SharePoint List name ex. GenericPages_AK |
`itemId` | string | Item Id for which permissions need to be checked  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSPGroupUsersAndUserGroupsList

▸ **GetSPGroupUsersAndUserGroupsList**(`authorization`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:972](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L972)*

Get UserGroup list based of type of authoristion

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`authorization` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetUserAccessibleApps

▸ **GetUserAccessibleApps**(`groups`: null, `appsData`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:966](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L966)*

Filter user accessible apps from list of apps.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`groups` | null | User Groups #MARK currently not used. |
`appsData` | any[] | List of apps  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetUserGroups

▸ **GetUserGroups**(`model`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1048](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1048)*

Get user groups

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  GetUserGroupsFromAppManager

▸ **GetUserGroupsFromAppManager**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:959](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L959)*

Get groups the current user is added to.

**Returns:** *JQueryDeferred‹any›*

def resolves in success with Array of names of User Groups of current user.

___

###  GetUserPersonas

▸ **GetUserPersonas**(`userId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:947](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L947)*

To get personas assigned to a user

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** *JQueryDeferred‹any›*

deferred resolves with array of presonas string

___

###  GetUsersData

▸ **GetUsersData**(`currentUserName`: string, `filters`: any, `pageSize`: number, `pageNumber`: number, `orderByField`: string, `sortDirection`: string): *any*

*Defined in [index.d.ts:898](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L898)*

Get Users Data List

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`currentUserName` | string | - |
`filters` | any | - |
`pageSize` | number | - |
`pageNumber` | number | - |
`orderByField` | string | - |
`sortDirection` | string |   |

**Returns:** *any*

___

###  GetWidgetJS

▸ **GetWidgetJS**(`widgets`: any[], `widgetNames`: string[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1042](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1042)*

Fetches widgets js

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgets` | any[] | Array of widget objects |
`widgetNames` | string[] | Array of widget names  |

**Returns:** *JQueryDeferred‹any›*

___

###  IsLoggedIntoAppManager

▸ **IsLoggedIntoAppManager**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:940](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L940)*

Check if user is logged into appManager

**Returns:** *JQueryDeferred‹any›*

___

###  IsWorkspaceMarkedAsDeleted

▸ **IsWorkspaceMarkedAsDeleted**(`workspaceId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:996](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L996)*

Check if workspace is marked for delete

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`workspaceId` | string | string  |

**Returns:** *JQueryDeferred‹any›*

___

###  MarkWorkspaceAsDeleted

▸ **MarkWorkspaceAsDeleted**(`workspaceId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:990](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L990)*

Marks workspace as deleted

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`workspaceId` | string | workspace id  |

**Returns:** *JQueryDeferred‹any›*

___

###  PerformChangeSite

▸ **PerformChangeSite**(`selectedSiteId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1025](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1025)*

Resolves with siteID

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selectedSiteId` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageWidgets

▸ **ProvisionPageWidgets**(`pageWidgetsRequest`: [ISavePageWidgetRequest](../interfaces/isavepagewidgetrequest.md)): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1076](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1076)*

Save page widgets

**Parameters:**

Name | Type |
------ | ------ |
`pageWidgetsRequest` | [ISavePageWidgetRequest](../interfaces/isavepagewidgetrequest.md) |

**Returns:** *JQueryDeferred‹any›*

___

###  RefreshAkToken

▸ **RefreshAkToken**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1035](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1035)*

**Returns:** *JQueryDeferred‹any›*

Resolves in success with boolean value

___

###  UpdatePageObjectsCache

▸ **UpdatePageObjectsCache**(`pageObjects`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:923](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L923)*

Update Page object Cache

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageObjects` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdatePageProperties

▸ **UpdatePageProperties**(`referenceList`: string, `itemId`: string, `data`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:911](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L911)*

Update Page properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`referenceList` | string | - |
`itemId` | string | - |
`data` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdateWidgetInstanceCache

▸ **UpdateWidgetInstanceCache**(`widgetInstanceId?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1014](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1014)*

Updates widget instance cache

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetInstanceId?` | undefined &#124; string | Optional  |

**Returns:** *JQueryDeferred‹any›*

___

###  ValidateAkToken

▸ **ValidateAkToken**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1030](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1030)*

**Returns:** *JQueryDeferred‹any›*

Resolves in success with boolean value
