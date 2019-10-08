---
id: "akumina.addin.utilities"
title: "Utilities"
sidebar_label: "Utilities"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [AddIn](../modules/akumina.addin.md) › [Utilities](akumina.addin.utilities.md)

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

*Defined in [index.d.ts:1363](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1363)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Static` GetIcon

▸ **GetIcon**(`iconName`: string): *string*

*Defined in [index.d.ts:1368](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1368)*

**Parameters:**

Name | Type |
------ | ------ |
`iconName` | string |

**Returns:** *string*

___

### `Static` IsNullOrEmpty

▸ **IsNullOrEmpty**(`value`: string): *boolean*

*Defined in [index.d.ts:1362](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1362)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

### `Static` ItemExpired

▸ **ItemExpired**(`date`: string): *boolean*

*Defined in [index.d.ts:1366](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1366)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | string |

**Returns:** *boolean*

___

### `Static` TryParseInt

▸ **TryParseInt**(`val`: any, `defaultValue`: any): *number | null*

*Defined in [index.d.ts:1367](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1367)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | any |
`defaultValue` | any |

**Returns:** *number | null*

___

### `Static` addRecurringEvents

▸ **addRecurringEvents**(`data`: any, `month`: number, `year`: number): *any*

*Defined in [index.d.ts:1370](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1370)*

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

*Defined in [index.d.ts:1361](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1361)*

**Returns:** *boolean*

___

### `Static` getQueryStringParameter

▸ **getQueryStringParameter**(`url`: string): *string*

*Defined in [index.d.ts:1364](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1364)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

### `Static` isInDST

▸ **isInDST**(`date`: Date): *boolean*

*Defined in [index.d.ts:1369](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1369)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

### `Static` isInMonth

▸ **isInMonth**(`item`: any, `month`: number, `year`: number): *any*

*Defined in [index.d.ts:1371](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1371)*

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

*Defined in [index.d.ts:1372](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1372)*

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

*Defined in [index.d.ts:1365](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1365)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`maxChar` | number |

**Returns:** *string*
