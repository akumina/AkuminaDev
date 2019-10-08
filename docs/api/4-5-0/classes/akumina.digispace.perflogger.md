---
id: "akumina.digispace.perflogger"
title: "PerfLogger"
sidebar_label: "PerfLogger"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [PerfLogger](akumina.digispace.perflogger.md)

## Hierarchy

* **PerfLogger**

## Index

### Methods

* [AddLoaderStartMark](akumina.digispace.perflogger.md#static-addloaderstartmark)
* [AddLoaderStopMark](akumina.digispace.perflogger.md#static-addloaderstopmark)
* [AddMark](akumina.digispace.perflogger.md#static-addmark)
* [CompareMarks](akumina.digispace.perflogger.md#static-comparemarks)
* [GetColor](akumina.digispace.perflogger.md#static-getcolor)
* [GetLoaderMarks](akumina.digispace.perflogger.md#static-getloadermarks)
* [GetMark](akumina.digispace.perflogger.md#static-getmark)
* [GetMarks](akumina.digispace.perflogger.md#static-getmarks)

## Methods

### `Static` AddLoaderStartMark

▸ **AddLoaderStartMark**(`mark`: string, `type`: string): *void*

*Defined in [index.d.ts:480](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L480)*

Add LoaderMark and mark it start

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mark` | string | String Name of mark to be added as Start |
`type` | string | String  |

**Returns:** *void*

___

### `Static` AddLoaderStopMark

▸ **AddLoaderStopMark**(`mark`: string): *void*

*Defined in [index.d.ts:485](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L485)*

Mark Stop of a LoaderMark

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mark` | string | String Name of mark to be marked as Stop  |

**Returns:** *void*

___

### `Static` AddMark

▸ **AddMark**(`mark`: string): *void*

*Defined in [index.d.ts:490](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L490)*

To add a new mark

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mark` | string | String name of mark  |

**Returns:** *void*

___

### `Static` CompareMarks

▸ **CompareMarks**(`mark1`: string, `mark2`: string): *any*

*Defined in [index.d.ts:513](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L513)*

Measure Performance between two marks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mark1` | string | Name of mark to compare |
`mark2` | string | Name of mark to compare |

**Returns:** *any*

PerformanceMeasure Object

___

### `Static` GetColor

▸ **GetColor**(`time`: number, `type`: string): *string*

*Defined in [index.d.ts:520](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L520)*

Gets color from time

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`time` | number | time in ms |
`type` | string | short,medium,long |

**Returns:** *string*

yellow green or red

___

### `Static` GetLoaderMarks

▸ **GetLoaderMarks**(): *any[]*

*Defined in [index.d.ts:506](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L506)*

Get list of all Loader Marks

**Returns:** *any[]*

Array of Loader marks object

___

### `Static` GetMark

▸ **GetMark**(`mark`: string): *any*

*Defined in [index.d.ts:496](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L496)*

Get a mark object by mark name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mark` | string | string name of mark |

**Returns:** *any*

object of mark {name: "string", startTime: decimal}

___

### `Static` GetMarks

▸ **GetMarks**(): *any[]*

*Defined in [index.d.ts:501](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L501)*

Get List of marks added

**Returns:** *any[]*

Array of mark objects [{name: "string", startTime: decimal}]
