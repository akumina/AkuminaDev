---
id: "akumina.basewidget"
title: "BaseWidget"
sidebar_label: "BaseWidget"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [BaseWidget](akumina.basewidget.md)

## Hierarchy

* **BaseWidget**

## Index

### Constructors

* [constructor](akumina.basewidget.md#constructor)

### Properties

* [Properties](akumina.basewidget.md#properties)

### Methods

* [BindTemplate](akumina.basewidget.md#bindtemplate)
* [GetPropertyValue](akumina.basewidget.md#getpropertyvalue)
* [RefreshWidget](akumina.basewidget.md#refreshwidget)

## Constructors

###  constructor

\+ **new BaseWidget**(): *[BaseWidget](akumina.basewidget.md)*

*Defined in [index.d.ts:17](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L17)*

**Returns:** *[BaseWidget](akumina.basewidget.md)*

## Properties

###  Properties

• **Properties**: *any*

*Defined in [index.d.ts:19](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L19)*

## Methods

###  BindTemplate

▸ **BindTemplate**(`templateUri`: string, `data`: any, `targetDiv`: string): *void*

*Defined in [index.d.ts:22](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`templateUri` | string |
`data` | any |
`targetDiv` | string |

**Returns:** *void*

___

###  GetPropertyValue

▸ **GetPropertyValue**(`requestIn`: any, `key`: string, `defaultValue`: any): *any*

*Defined in [index.d.ts:20](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`requestIn` | any |
`key` | string |
`defaultValue` | any |

**Returns:** *any*

___

###  RefreshWidget

▸ **RefreshWidget**(`newProps`: any): *void*

*Defined in [index.d.ts:21](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`newProps` | any |

**Returns:** *void*
