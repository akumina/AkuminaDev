---
id: "akumina.digispace.data.widgetmanager"
title: "WidgetManager"
sidebar_label: "WidgetManager"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [WidgetManager](akumina.digispace.data.widgetmanager.md)

## Hierarchy

* **WidgetManager**

## Index

### Methods

* [AddDashboardWidgetInstance](akumina.digispace.data.widgetmanager.md#adddashboardwidgetinstance)
* [AreDashboardContainerWidgets](akumina.digispace.data.widgetmanager.md#aredashboardcontainerwidgets)
* [CopyWidgetInstance](akumina.digispace.data.widgetmanager.md#copywidgetinstance)
* [GetAndInitWidgetsPerJSFile](akumina.digispace.data.widgetmanager.md#getandinitwidgetsperjsfile)
* [GetManualDependencyMap](akumina.digispace.data.widgetmanager.md#getmanualdependencymap)
* [GetNextAkId](akumina.digispace.data.widgetmanager.md#getnextakid)
* [GetSiteId](akumina.digispace.data.widgetmanager.md#getsiteid)
* [GetWidgetInstances](akumina.digispace.data.widgetmanager.md#getwidgetinstances)
* [GetWidgetInstancesOnPage](akumina.digispace.data.widgetmanager.md#getwidgetinstancesonpage)
* [GetWidgetJSArrayFromWidget](akumina.digispace.data.widgetmanager.md#getwidgetjsarrayfromwidget)
* [GetWidgetJSFromDependency](akumina.digispace.data.widgetmanager.md#getwidgetjsfromdependency)
* [GetWidgetManagerApp](akumina.digispace.data.widgetmanager.md#getwidgetmanagerapp)
* [GetWidgetManagerAppAuthorization](akumina.digispace.data.widgetmanager.md#getwidgetmanagerappauthorization)
* [GetWidgetObjsOnPage](akumina.digispace.data.widgetmanager.md#getwidgetobjsonpage)
* [GetWidgetPropertiesForInstances](akumina.digispace.data.widgetmanager.md#getwidgetpropertiesforinstances)
* [GetWidgetViews](akumina.digispace.data.widgetmanager.md#getwidgetviews)
* [InitWidget](akumina.digispace.data.widgetmanager.md#initwidget)
* [InitializeChildWidgetsWithOverride](akumina.digispace.data.widgetmanager.md#initializechildwidgetswithoverride)
* [InitializeWidgets](akumina.digispace.data.widgetmanager.md#initializewidgets)
* [PopulateAutoDependencyMap](akumina.digispace.data.widgetmanager.md#populateautodependencymap)
* [RenderChildWidgets](akumina.digispace.data.widgetmanager.md#renderchildwidgets)

## Methods

###  AddDashboardWidgetInstance

▸ **AddDashboardWidgetInstance**(`dashboardWidgetTitle`: string, `widgetInstance`: any): *JQueryDeferred‹any›*

*Defined in [index.d.ts:560](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L560)*

Add dashboard widget instance

**Parameters:**

Name | Type |
------ | ------ |
`dashboardWidgetTitle` | string |
`widgetInstance` | any |

**Returns:** *JQueryDeferred‹any›*

___

###  AreDashboardContainerWidgets

▸ **AreDashboardContainerWidgets**(`widgetInstanceIds`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:558](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L558)*

Check if widgetinstances are Dashboard Container widgets

**Parameters:**

Name | Type |
------ | ------ |
`widgetInstanceIds` | any[] |

**Returns:** *JQueryDeferred‹any›*

___

###  CopyWidgetInstance

▸ **CopyWidgetInstance**(`widgetInstanceId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:562](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L562)*

Copy Widget Instance

**Parameters:**

Name | Type |
------ | ------ |
`widgetInstanceId` | string |

**Returns:** *JQueryDeferred‹any›*

___

###  GetAndInitWidgetsPerJSFile

▸ **GetAndInitWidgetsPerJSFile**(`item`: any, `widgetDepJsArray`: any[]): *void*

*Defined in [index.d.ts:615](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L615)*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |
`widgetDepJsArray` | any[] |

**Returns:** *void*

___

###  GetManualDependencyMap

▸ **GetManualDependencyMap**(`widgetName`: string): *any[]*

*Defined in [index.d.ts:563](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L563)*

**Parameters:**

Name | Type |
------ | ------ |
`widgetName` | string |

**Returns:** *any[]*

___

###  GetNextAkId

▸ **GetNextAkId**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:565](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L565)*

Resolves with next AkId

**Returns:** *JQueryDeferred‹any›*

___

###  GetSiteId

▸ **GetSiteId**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:567](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L567)*

Resolves with siteId

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetInstances

▸ **GetWidgetInstances**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:571](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L571)*

**Returns:** *JQueryDeferred‹any›*

Resolves with Array with object of all the widget Instances

___

###  GetWidgetInstancesOnPage

▸ **GetWidgetInstancesOnPage**(): *any*

*Defined in [index.d.ts:602](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L602)*

Retrives all the widget instances ID on the current page.

**Returns:** *any*

object with ids: string[] & rel: Array<>

___

###  GetWidgetJSArrayFromWidget

▸ **GetWidgetJSArrayFromWidget**(`widgetName`: string, `widgetToDeps`: any[], `depJsFiles`: any[]): *any[]*

*Defined in [index.d.ts:596](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L596)*

Get js file list for dependent widgets

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetName` | string | - |
`widgetToDeps` | any[] | - |
`depJsFiles` | any[] |   |

**Returns:** *any[]*

___

###  GetWidgetJSFromDependency

▸ **GetWidgetJSFromDependency**(`widgets`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:597](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L597)*

**Parameters:**

Name | Type |
------ | ------ |
`widgets` | any[] |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetManagerApp

▸ **GetWidgetManagerApp**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:579](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L579)*

**Returns:** *JQueryDeferred‹any›*

def Resolves in success with Widget Manager Instance ID

___

###  GetWidgetManagerAppAuthorization

▸ **GetWidgetManagerAppAuthorization**(): *JQueryDeferred‹any›*

*Defined in [index.d.ts:575](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L575)*

**Returns:** *JQueryDeferred‹any›*

def Resolves in success with Object with authorized user groups

___

###  GetWidgetObjsOnPage

▸ **GetWidgetObjsOnPage**(`widgets`: any[]): *any[]*

*Defined in [index.d.ts:607](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L607)*

Get list of widget on current page.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgets` | any[] |   |

**Returns:** *any[]*

___

###  GetWidgetPropertiesForInstances

▸ **GetWidgetPropertiesForInstances**(`widgetInstanceIds`: string[] | null): *JQueryDeferred‹any›*

*Defined in [index.d.ts:589](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L589)*

#MARK - dataType correction

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetInstanceIds` | string[] &#124; null | Array of widget Instance Ids  |

**Returns:** *JQueryDeferred‹any›*

___

###  GetWidgetViews

▸ **GetWidgetViews**(`widgetType`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:584](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L584)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`widgetType` | string | WidgetType |

**Returns:** *JQueryDeferred‹any›*

def Resolves in success with array of objects of widget view of widgetType passed

___

###  InitWidget

▸ **InitWidget**(`item`: any): *void*

*Defined in [index.d.ts:610](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L610)*

Initialize widget passed

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *void*

___

###  InitializeChildWidgetsWithOverride

▸ **InitializeChildWidgetsWithOverride**(`widgetIds`: string[], `pageId`: string, `widgetProps`: any[], `view`: string): *any*

*Defined in [index.d.ts:553](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L553)*

**Parameters:**

Name | Type |
------ | ------ |
`widgetIds` | string[] |
`pageId` | string |
`widgetProps` | any[] |
`view` | string |

**Returns:** *any*

___

###  InitializeWidgets

▸ **InitializeWidgets**(`widgets`: any[]): *JQueryDeferred‹any›*

*Defined in [index.d.ts:613](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L613)*

Initialize widgets passed in array

**Parameters:**

Name | Type |
------ | ------ |
`widgets` | any[] |

**Returns:** *JQueryDeferred‹any›*

___

###  PopulateAutoDependencyMap

▸ **PopulateAutoDependencyMap**(`widgetsWithPropsArray`: any[], `widgetArray`: any[]): *any[]*

*Defined in [index.d.ts:616](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L616)*

**Parameters:**

Name | Type |
------ | ------ |
`widgetsWithPropsArray` | any[] |
`widgetArray` | any[] |

**Returns:** *any[]*

___

###  RenderChildWidgets

▸ **RenderChildWidgets**(`selector`: string, `pageId`: string | null, `mode`: string): *void*

*Defined in [index.d.ts:623](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L623)*

Render Child Widgets

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`selector` | string | - |
`pageId` | string &#124; null | - |
`mode` | string |   |

**Returns:** *void*
