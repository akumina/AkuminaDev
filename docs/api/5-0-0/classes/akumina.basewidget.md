---
id: "akumina.basewidget"
title: "BaseWidget"
sidebar_label: "BaseWidget"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [BaseWidget](akumina.basewidget.md)

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

Defined in index.d.ts:17

**Returns:** *[BaseWidget](akumina.basewidget.md)*

## Properties

###  Properties

• **Properties**: *any*

Defined in index.d.ts:19

## Methods

###  BindTemplate

▸ **BindTemplate**(`templateUri`: string, `data`: any, `targetDiv`: string): *void*

Defined in index.d.ts:22

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

Defined in index.d.ts:20

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

Defined in index.d.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`newProps` | any |

**Returns:** *void*
