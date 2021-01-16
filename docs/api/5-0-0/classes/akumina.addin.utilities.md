---
id: "akumina.addin.utilities"
title: "Utilities"
sidebar_label: "Utilities"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [AddIn](../modules/akumina.addin.md) › [Utilities](akumina.addin.utilities.md)

## Hierarchy

* **Utilities**

## Index

### Methods

* [GetFriendlyUrl](akumina.addin.utilities.md#static-getfriendlyurl)
* [GetIcon](akumina.addin.utilities.md#static-geticon)
* [IsNullOrEmpty](akumina.addin.utilities.md#static-isnullorempty)
* [ItemExpired](akumina.addin.utilities.md#static-itemexpired)
* [TryParseInt](akumina.addin.utilities.md#static-tryparseint)
* [addRecurringEvents](akumina.addin.utilities.md#static-addrecurringevents)
* [getEditMode](akumina.addin.utilities.md#static-geteditmode)
* [getQueryStringParameter](akumina.addin.utilities.md#static-getquerystringparameter)
* [isInDST](akumina.addin.utilities.md#static-isindst)
* [isInMonth](akumina.addin.utilities.md#static-isinmonth)
* [setDateValues](akumina.addin.utilities.md#static-setdatevalues)
* [substring](akumina.addin.utilities.md#static-substring)

## Methods

### `Static` GetFriendlyUrl

▸ **GetFriendlyUrl**(`url`: string): *string*

Defined in index.d.ts:1506

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Static` GetIcon

▸ **GetIcon**(`iconName`: string): *string*

Defined in index.d.ts:1511

**Parameters:**

Name | Type |
------ | ------ |
`iconName` | string |

**Returns:** *string*

___

### `Static` IsNullOrEmpty

▸ **IsNullOrEmpty**(`value`: string): *boolean*

Defined in index.d.ts:1505

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

### `Static` ItemExpired

▸ **ItemExpired**(`date`: string): *boolean*

Defined in index.d.ts:1509

**Parameters:**

Name | Type |
------ | ------ |
`date` | string |

**Returns:** *boolean*

___

### `Static` TryParseInt

▸ **TryParseInt**(`val`: any, `defaultValue`: any): *number | null*

Defined in index.d.ts:1510

**Parameters:**

Name | Type |
------ | ------ |
`val` | any |
`defaultValue` | any |

**Returns:** *number | null*

___

### `Static` addRecurringEvents

▸ **addRecurringEvents**(`data`: any, `month`: number, `year`: number): *any*

Defined in index.d.ts:1513

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`month` | number |
`year` | number |

**Returns:** *any*

___

### `Static` getEditMode

▸ **getEditMode**(): *boolean*

Defined in index.d.ts:1504

**Returns:** *boolean*

___

### `Static` getQueryStringParameter

▸ **getQueryStringParameter**(`url`: string, `ret?`: string | null): *string*

Defined in index.d.ts:1507

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`ret?` | string &#124; null |

**Returns:** *string*

___

### `Static` isInDST

▸ **isInDST**(`date`: Date): *boolean*

Defined in index.d.ts:1512

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

### `Static` isInMonth

▸ **isInMonth**(`item`: any, `month`: number, `year`: number): *any*

Defined in index.d.ts:1514

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |
`month` | number |
`year` | number |

**Returns:** *any*

___

### `Static` setDateValues

▸ **setDateValues**(`data`: any, `startDate`: Date, `endDate`: Date): *any*

Defined in index.d.ts:1515

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`startDate` | Date |
`endDate` | Date |

**Returns:** *any*

___

### `Static` substring

▸ **substring**(`str`: string, `maxChar`: number): *string*

Defined in index.d.ts:1508

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`maxChar` | number |

**Returns:** *string*
