---
id: "akumina.digispace.data.personamanager"
title: "PersonaManager"
sidebar_label: "PersonaManager"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [PersonaManager](akumina.digispace.data.personamanager.md)

## Hierarchy

* **PersonaManager**

## Index

### Methods

* [GetPersonaEnabledLists](akumina.digispace.data.personamanager.md#getpersonaenabledlists)
* [IsPersonaCheckRequiredForList](akumina.digispace.data.personamanager.md#ispersonacheckrequiredforlist)
* [IsPersonaFilteringOn](akumina.digispace.data.personamanager.md#ispersonafilteringon)

## Methods

###  GetPersonaEnabledLists

▸ **GetPersonaEnabledLists**(): *string[]*

*Defined in [index.d.ts:874](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L874)*

Get array of Lists with persona enabled

**Returns:** *string[]*

___

###  IsPersonaCheckRequiredForList

▸ **IsPersonaCheckRequiredForList**(`listName`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:870](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L870)*

Does List reuire persona check

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  IsPersonaFilteringOn

▸ **IsPersonaFilteringOn**(`request?`: any): *any*

*Defined in [index.d.ts:880](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L880)*

Returns object setting filterByPersona property. Or default object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request?` | any |   |

**Returns:** *any*
