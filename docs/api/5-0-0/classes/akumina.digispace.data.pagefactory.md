---
id: "akumina.digispace.data.pagefactory"
title: "PageFactory"
sidebar_label: "PageFactory"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [PageFactory](akumina.digispace.data.pagefactory.md)

## Hierarchy

* **PageFactory**

## Index

### Constructors

* [constructor](akumina.digispace.data.pagefactory.md#constructor)

### Methods

* [AddPageVersion](akumina.digispace.data.pagefactory.md#addpageversion)
* [AssignPriorityGroupToPageVersion](akumina.digispace.data.pagefactory.md#assignprioritygrouptopageversion)
* [ClonePageVersionFrom](akumina.digispace.data.pagefactory.md#clonepageversionfrom)
* [CreatePage](akumina.digispace.data.pagefactory.md#createpage)
* [CreatePageVersion](akumina.digispace.data.pagefactory.md#createpageversion)
* [DeletePageVersion](akumina.digispace.data.pagefactory.md#deletepageversion)
* [GetAllVersionsForPage](akumina.digispace.data.pagefactory.md#getallversionsforpage)
* [GetPageVersion](akumina.digispace.data.pagefactory.md#getpageversion)
* [MarkPageVersionActive](akumina.digispace.data.pagefactory.md#markpageversionactive)
* [PageVersionExists](akumina.digispace.data.pagefactory.md#pageversionexists)
* [ProvisionPageWidgets](akumina.digispace.data.pagefactory.md#provisionpagewidgets)
* [SetPagePriorityGroups](akumina.digispace.data.pagefactory.md#setpageprioritygroups)
* [GetPageObjectsCacheKey](akumina.digispace.data.pagefactory.md#static-getpageobjectscachekey)
* [GetPageWidgetsCacheKey](akumina.digispace.data.pagefactory.md#static-getpagewidgetscachekey)
* [GetSavedLayoutsCacheKey](akumina.digispace.data.pagefactory.md#static-getsavedlayoutscachekey)

## Constructors

###  constructor

\+ **new PageFactory**(`legacyMode?`: undefined | false | true): *[PageFactory](akumina.digispace.data.pagefactory.md)*

Defined in index.d.ts:906

**Parameters:**

Name | Type |
------ | ------ |
`legacyMode?` | undefined &#124; false &#124; true |

**Returns:** *[PageFactory](akumina.digispace.data.pagefactory.md)*

## Methods

###  AddPageVersion

▸ **AddPageVersion**(`newVersionProperties`: any, `pageWidgets`: any): *JQueryDeferred‹IPageVersion›*

Defined in index.d.ts:919

**Parameters:**

Name | Type |
------ | ------ |
`newVersionProperties` | any |
`pageWidgets` | any |

**Returns:** *JQueryDeferred‹IPageVersion›*

___

###  AssignPriorityGroupToPageVersion

▸ **AssignPriorityGroupToPageVersion**(`pageVersionPriority`: IPageVersionPriorityGroup): *JQueryDeferred‹any›*

Defined in index.d.ts:913

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionPriority` | IPageVersionPriorityGroup |

**Returns:** *JQueryDeferred‹any›*

___

###  ClonePageVersionFrom

▸ **ClonePageVersionFrom**(`pageVersionId`: string, `newPageVersion`: IPageVersionProperties): *JQueryDeferred‹IPageVersion›*

Defined in index.d.ts:912

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionId` | string |
`newPageVersion` | IPageVersionProperties |

**Returns:** *JQueryDeferred‹IPageVersion›*

___

###  CreatePage

▸ **CreatePage**(`createPageRequest`: any): *JQueryDeferred‹any›*

Defined in index.d.ts:908

**Parameters:**

Name | Type |
------ | ------ |
`createPageRequest` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  CreatePageVersion

▸ **CreatePageVersion**(`createPageVersionRequest`: IPageVersionProperties): *JQueryDeferred‹IPageVersionProperties›*

Defined in index.d.ts:909

**Parameters:**

Name | Type |
------ | ------ |
`createPageVersionRequest` | IPageVersionProperties |

**Returns:** *JQueryDeferred‹IPageVersionProperties›*

___

###  DeletePageVersion

▸ **DeletePageVersion**(`pageVersionId`: string): *JQueryDeferred‹IPageVersionProperties›*

Defined in index.d.ts:911

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionId` | string |

**Returns:** *JQueryDeferred‹IPageVersionProperties›*

___

###  GetAllVersionsForPage

▸ **GetAllVersionsForPage**(`pageId`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:917

**Parameters:**

Name | Type |
------ | ------ |
`pageId` | string |

**Returns:** *JQueryDeferred‹any›*

___

###  GetPageVersion

▸ **GetPageVersion**(`pageVersionId`: string): *JQueryDeferred‹IPageVersionProperties›*

Defined in index.d.ts:910

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionId` | string |

**Returns:** *JQueryDeferred‹IPageVersionProperties›*

___

###  MarkPageVersionActive

▸ **MarkPageVersionActive**(`pageVersionId`: string): *JQueryDeferred‹__type›*

Defined in index.d.ts:915

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionId` | string |

**Returns:** *JQueryDeferred‹__type›*

___

###  PageVersionExists

▸ **PageVersionExists**(`pageVersionName`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:918

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionName` | string |

**Returns:** *JQueryDeferred‹any›*

___

###  ProvisionPageWidgets

▸ **ProvisionPageWidgets**(`widgetName`: string, `pageVersion`: any, `pageWidgets`: any[]): *JQueryDeferred‹any›*

Defined in index.d.ts:916

**Parameters:**

Name | Type |
------ | ------ |
`widgetName` | string |
`pageVersion` | any |
`pageWidgets` | any[] |

**Returns:** *JQueryDeferred‹any›*

___

###  SetPagePriorityGroups

▸ **SetPagePriorityGroups**(`pagePriorityGroups`: string[]): *JQueryDeferred‹any›*

Defined in index.d.ts:914

**Parameters:**

Name | Type |
------ | ------ |
`pagePriorityGroups` | string[] |

**Returns:** *JQueryDeferred‹any›*

___

### `Static` GetPageObjectsCacheKey

▸ **GetPageObjectsCacheKey**(): *string*

Defined in index.d.ts:920

**Returns:** *string*

___

### `Static` GetPageWidgetsCacheKey

▸ **GetPageWidgetsCacheKey**(`pageVersionId`: string): *string*

Defined in index.d.ts:922

**Parameters:**

Name | Type |
------ | ------ |
`pageVersionId` | string |

**Returns:** *string*

___

### `Static` GetSavedLayoutsCacheKey

▸ **GetSavedLayoutsCacheKey**(): *string*

Defined in index.d.ts:921

**Returns:** *string*
