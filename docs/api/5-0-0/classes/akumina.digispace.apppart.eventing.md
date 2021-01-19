---
id: "akumina.digispace.apppart.eventing"
title: "Eventing"
sidebar_label: "Eventing"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [AppPart](../modules/akumina.digispace.apppart.md) › [Eventing](akumina.digispace.apppart.eventing.md)

## Hierarchy

* **Eventing**

## Index

### Constructors

* [constructor](akumina.digispace.apppart.eventing.md#constructor)

### Methods

* [ClearSubscribedAndPublished](akumina.digispace.apppart.eventing.md#static-clearsubscribedandpublished)
* [Publish](akumina.digispace.apppart.eventing.md#static-publish)
* [ResetTrackedEvents](akumina.digispace.apppart.eventing.md#static-resettrackedevents)
* [Subscribe](akumina.digispace.apppart.eventing.md#static-subscribe)
* [UnSubscribe](akumina.digispace.apppart.eventing.md#static-unsubscribe)

## Constructors

###  constructor

\+ **new Eventing**(): *[Eventing](akumina.digispace.apppart.eventing.md)*

Defined in index.d.ts:572

**Returns:** *[Eventing](akumina.digispace.apppart.eventing.md)*

## Methods

### `Static` ClearSubscribedAndPublished

▸ **ClearSubscribedAndPublished**(`e`: string): *void*

Defined in index.d.ts:577

**Parameters:**

Name | Type |
------ | ------ |
`e` | string |

**Returns:** *void*

___

### `Static` Publish

▸ **Publish**(`t`: string, `data?`: any): *void*

Defined in index.d.ts:575

**Parameters:**

Name | Type |
------ | ------ |
`t` | string |
`data?` | any |

**Returns:** *void*

___

### `Static` ResetTrackedEvents

▸ **ResetTrackedEvents**(`widgetsOnPage`: string[]): *void*

Defined in index.d.ts:578

**Parameters:**

Name | Type |
------ | ------ |
`widgetsOnPage` | string[] |

**Returns:** *void*

___

### `Static` Subscribe

▸ **Subscribe**(`e`: string, `func`: any, `caller?`: any): *void*

Defined in index.d.ts:574

**Parameters:**

Name | Type |
------ | ------ |
`e` | string |
`func` | any |
`caller?` | any |

**Returns:** *void*

___

### `Static` UnSubscribe

▸ **UnSubscribe**(`e`: string, `func`: any, `caller?`: any): *void*

Defined in index.d.ts:576

**Parameters:**

Name | Type |
------ | ------ |
`e` | string |
`func` | any |
`caller?` | any |

**Returns:** *void*
