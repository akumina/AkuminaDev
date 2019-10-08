---
id: "akumina.digispace.data.sharepoint"
title: "SharePoint"
sidebar_label: "SharePoint"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [SharePoint](akumina.digispace.data.sharepoint.md)

## Hierarchy

* **SharePoint**

## Index

### Methods

* [CreateItem](akumina.digispace.data.sharepoint.md#createitem)
* [CreateList](akumina.digispace.data.sharepoint.md#createlist)
* [GetAppInstances](akumina.digispace.data.sharepoint.md#getappinstances)
* [GetCurrentSiteId](akumina.digispace.data.sharepoint.md#getcurrentsiteid)
* [GetList](akumina.digispace.data.sharepoint.md#getlist)
* [GetSPGroupUsersByGroupName](akumina.digispace.data.sharepoint.md#getspgroupusersbygroupname)
* [GetSPUserGroups](akumina.digispace.data.sharepoint.md#getspusergroups)
* [GetSiteIdByUrl](akumina.digispace.data.sharepoint.md#getsiteidbyurl)
* [GetSiteSPGroups](akumina.digispace.data.sharepoint.md#getsitespgroups)
* [LoadTermSet](akumina.digispace.data.sharepoint.md#loadtermset)
* [LoadTermSetById](akumina.digispace.data.sharepoint.md#loadtermsetbyid)
* [UpdatePageObjectsItem](akumina.digispace.data.sharepoint.md#updatepageobjectsitem)
* [UpdatePageUrlsItem](akumina.digispace.data.sharepoint.md#updatepageurlsitem)

## Methods

###  CreateItem

▸ **CreateItem**(`createItemRequest`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:829](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L829)*

Create new list item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`createItemRequest` | any |   |

**Returns:** *JQueryDeferred‹any›*

___

###  CreateList

▸ **CreateList**(`siteUrl`: string, `siteTitle`: string, `templateType`: string, `fieldsList`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:837](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L837)*

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

###  GetAppInstances

▸ **GetAppInstances**(`successCallback`: any, `errorCallback`: any): *void*

*Defined in [index.d.ts:839](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L839)*

**Parameters:**

Name | Type |
------ | ------ |
`successCallback` | any |
`errorCallback` | any |

**Returns:** *void*

___

###  GetCurrentSiteId

▸ **GetCurrentSiteId**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:843](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L843)*

Get SiteID of current site

**Returns:** *JQueryDeferred‹any›*

___

###  GetList

▸ **GetList**(`request`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:845](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L845)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSPGroupUsersByGroupName

▸ **GetSPGroupUsersByGroupName**(`authorizationGroups`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:859](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L859)*

Get list of users under user groups

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`authorizationGroups` | any[] | List of authorization Groups  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSPUserGroups

▸ **GetSPUserGroups**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:863](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L863)*

Get User Groups current user belongs to

**Returns:** *JQueryDeferred‹any›*

___

###  GetSiteIdByUrl

▸ **GetSiteIdByUrl**(`siteUrl`: string, `useRootWeb`: boolean): *JQueryDeferred‹any›*

*Defined in [index.d.ts:849](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L849)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`siteUrl` | string | Absolute path  |
`useRootWeb` | boolean | - |

**Returns:** *JQueryDeferred‹any›*

___

###  GetSiteSPGroups

▸ **GetSiteSPGroups**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:854](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L854)*

Get all SP user groups

**Returns:** *JQueryDeferred‹any›*

Resolves with array of {id, displayName, type, description}

___

###  LoadTermSet

▸ **LoadTermSet**(`termSetName`: string, `columnName`: string | null, `columnValue`: string | null): *JQueryDeferred‹any›*

*Defined in [index.d.ts:809](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L809)*

**Parameters:**

Name | Type |
------ | ------ |
`termSetName` | string |
`columnName` | string &#124; null |
`columnValue` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  LoadTermSetById

▸ **LoadTermSetById**(`termSetId`: string, `columnName`: string, `columnValue?`: string | null): *JQueryDeferred‹any›*

*Defined in [index.d.ts:810](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L810)*

**Parameters:**

Name | Type |
------ | ------ |
`termSetId` | string |
`columnName` | string |
`columnValue?` | string &#124; null |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdatePageObjectsItem

▸ **UpdatePageObjectsItem**(`pageTypeList`: string, `pageObject`: any, `pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:817](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L817)*

Update Page object item

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageTypeList` | string | List Name |
`pageObject` | any | Page object to be updated |
`pageId` | string | Item Id of page list item  |

**Returns:** *JQueryDeferred‹any›*

___

###  UpdatePageUrlsItem

▸ **UpdatePageUrlsItem**(`pageObject`: any, `pageId`: string, `pageTypeList?`: undefined | string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:823](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L823)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageObject` | any | - |
`pageId` | string | - |
`pageTypeList?` | undefined &#124; string |   |

**Returns:** *JQueryDeferred‹any›*
