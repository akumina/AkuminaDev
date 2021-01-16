---
id: "akumina.digispace.data.personamanager"
title: "PersonaManager"
sidebar_label: "PersonaManager"
---

[@types/akumina-core - v5.0.0](../index.md) › [Globals](../globals.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [PersonaManager](akumina.digispace.data.personamanager.md)

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

Defined in index.d.ts:992

Get array of Lists with persona enabled

**Returns:** *string[]*

___

###  IsPersonaCheckRequiredForList

▸ **IsPersonaCheckRequiredForList**(`listName`: string): *JQueryDeferred‹any›*

Defined in index.d.ts:988

Does List reuire persona check

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`listName` | string |   |

**Returns:** *JQueryDeferred‹any›*

___

###  IsPersonaFilteringOn

▸ **IsPersonaFilteringOn**(`request?`: any): *any*

Defined in index.d.ts:998

Returns object setting filterByPersona property. Or default object

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request?` | any |   |

**Returns:** *any*
