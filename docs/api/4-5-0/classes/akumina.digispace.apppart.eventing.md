---
id: "akumina.digispace.apppart.eventing"
title: "Eventing"
sidebar_label: "Eventing"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [AppPart](../modules/akumina.digispace.apppart.md) › [Eventing](akumina.digispace.apppart.eventing.md)

## Hierarchy

* **Eventing**

## Index

### Constructors

* [constructor](akumina.digispace.apppart.eventing.md#constructor)

### Methods

* [Publish](akumina.digispace.apppart.eventing.md#static-publish)
* [Subscribe](akumina.digispace.apppart.eventing.md#static-subscribe)

## Constructors

###  constructor

\+ **new Eventing**(): *[Eventing](akumina.digispace.apppart.eventing.md)*

*Defined in [index.d.ts:526](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L526)*

**Returns:** *[Eventing](akumina.digispace.apppart.eventing.md)*

## Methods

### `Static` Publish

▸ **Publish**(`t`: string, `data?`: any): *void*

*Defined in [index.d.ts:529](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | string |
`data?` | any |

**Returns:** *void*

___

### `Static` Subscribe

▸ **Subscribe**(`e`: string, `func`: any, `caller?`: any): *void*

*Defined in [index.d.ts:528](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L528)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | string |
`func` | any |
`caller?` | any |

**Returns:** *void*
