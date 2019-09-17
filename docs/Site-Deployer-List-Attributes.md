---
id: Site-Deployer-List-Attributes
title: List Attribute Deployments
---

## Overview

The purpose of this article will be to provide insight and data into the XML attributes required to properly structure your deployment file as well as ensure certain Sharepoint properties are set. It's important to keep these notes in mind when deploying lists, as Sharepoint's API does seem to allow some impossible data that is otherwise not possible to create through the UI Experience.


## Separation of Responsibilities

There are two files responsile for deploying lists:

```
Project Directory\SiteDefinitions\ClientNamespace\ListDefinitions\Lists.xml
Project Directory\SiteDefinitions\ClientNamespace\ListDefinitions\Update.xml
```

Lists.xml - This file is used to define the structure of the list and the properties associated with its fields.
Update.xml - This file is used to define the data contained within the list, separated into rows.

A handy way to think about this separation is to relate it to SQL. Tables, like lists, have schema definitions. The columns/fields on each table/list are defined on the table schema. The data contained within is an entirely separate process that is defined elsewhere. This


## List Definitions

An example List definition is displayed below:

```xml
<list name="FoundationTopNavigation_AK" noCrawl="TRUE">  
    <Field Name="ID" DisplayName="ID" Type="Text" />
    <Field Name="NodeType" DisplayName="NodeType" Type="Choice">
        <CHOICES>
          <CHOICE>Root</CHOICE>
          <CHOICE>Category</CHOICE>
          <CHOICE>Item</CHOICE>
        </CHOICES>
        <Default>Root</Default>
    </Field>
    <Field Name="Link" DisplayName="Link" Type="URL" />
    <Field Name="DisplayOrder" DisplayName="DisplayOrder" Type="Number" />
    <Field Name="ParentItem" DisplayName="ParentItem" Type="Lookup" ShowField="Title" List="Self"/>
    <Field Name="ParentItem_x003a_ID" DisplayName="ParentItem:ID" Type="Lookup" ShowField="ID" List="Self" />
    <Field Name="ParentItem_x003a_Title" DisplayName="ParentItem:Title" Type="Lookup" ShowField="Title" List="Self" />
    <Field Name="Active" DisplayName="Active" Type="Boolean">
      <Default>1</Default>
    </Field>
    <Field Name="Open_x0020_With" DisplayName="Open With" Type="Choice">
      <CHOICES>
        <CHOICE>Same Window</CHOICE>
        <CHOICE>New Window</CHOICE>
      </CHOICES>
      <Default>Same Window</Default>
    </Field>
    <Field Name="LinkType" DisplayName="LinkType" Type="Choice">
      <CHOICES>
        <CHOICE>link</CHOICE>
        <CHOICE>formlink</CHOICE>
      </CHOICES>
      <Default>link</Default>
    </Field>
    <Field Name="SPALink" DisplayName="SPALink" Type="Text" />
    <Field Name="FormID" DisplayName="FormID" Type="Number" />
    <Field Name="Icon" DisplayName="Icon" Type="Choice">
      <CHOICES>
        <CHOICE>none</CHOICE>
        <CHOICE>tachometer</CHOICE>
        <CHOICE>sitemap</CHOICE>
        <CHOICE>calendar</CHOICE>
        <CHOICE>photo</CHOICE>
        <CHOICE>comments</CHOICE>
        <CHOICE>question-circle</CHOICE>
        <CHOICE>lock</CHOICE>
        <CHOICE>info-circle</CHOICE>
        <CHOICE>home</CHOICE>
        <CHOICE>newspaper-o</CHOICE>
        <CHOICE>navicon</CHOICE>
        <CHOICE>globe</CHOICE>
        <CHOICE>users</CHOICE>
        <CHOICE>wrench</CHOICE>
      </CHOICES>
      <Default>none</Default>
    </Field>
    <Field Name="Image" DisplayName="Image" Type="URL" />
    <Field Name="TileImage" DisplayName="TileImage" Type="URL" />
    <Field Name="JSFunction" DisplayName="JSFunction" Type="Text" />
    <Field Name="TileBackgroundColor" DisplayName="TileBackgroundColor" Type="Choice">
      <CHOICES>
        <CHOICE>#154675 - Dark Blue</CHOICE>
        <CHOICE>#0058A3 - Medium Blue</CHOICE>
        <CHOICE>#29ABE2 - Light Blue</CHOICE>
      </CHOICES>
      <Default>#154675 - Dark Blue</Default>
    </Field>
  </list>
```
Take note of each Field type and the attributes required on each of them:

### Global Fields
Below are attributes that are required on every field defined on the list:

Field Name  |           Purpose                 |   Values
------------|-----------------------------------|------------
Name        | The Internal name of the field    | Any String
DisplayName | The displayed name of the field, this is not the same as the internal name. | Any String
Type        | The Sharepoint type of the field  | Text, URL, Choice, Lookup, Number, ManagedMetadata

An example of a few basic fields:

```xml
<Field Name="JSFunction" DisplayName="JSFunction" Type="Text" />
<Field Name="Link" DisplayName="Link" Type="URL" />
<Field Name="DisplayOrder" DisplayName="DisplayOrder" Type="Number" />
```

### Choice Fields

Choice Fields have a set of pre-determined values that can be selected by the user. Similar to its implementation in HTML, a selection of possible values must be defined on the list field itself. Each individual value is contained within a [CHOICES] XML Node. Likewise, a default value can also be defined. An example:

```xml
<Field Name="TileBackgroundColor" DisplayName="TileBackgroundColor" Type="Choice">
    <CHOICES>
    <CHOICE>#154675 - Dark Blue</CHOICE>
    <CHOICE>#0058A3 - Medium Blue</CHOICE>
    <CHOICE>#29ABE2 - Light Blue</CHOICE>
    </CHOICES>
    <Default>#154675 - Dark Blue</Default>
</Field>
```


### Lookup Fields

Lookup Fields have a few extra attributes that need to be defined on their XML Nodes. If you recall, a Lookup Field defines a relational link between the source's field and the target's field. For example, if I, as a developer, would like to reference another news article within a blog post, I could set up a Lookup field on my Blog list that points to the Title field of the News list.
This takes full advantage of Sharepoint's functionality to support functional relationships between items and prevents hard-coding. All the data is stored on the list! An example: 

```xml
<Field Name="ParentItem" DisplayName="ParentItem" Type="Lookup" ShowField="Title" List="Self"/>
```

Field Name | Purpose | Values
-----------|---------|---------
ShowField | The target field to surface in the current list | Any field available on the target list
List | The list to create the relationship to | Self for current list, or any other List Name

Please note that it is possible to create a relational link between a List and itself. This is useful for creating a hierarchical structure within a single list. A real world example of this would be the Foundation Top Navigation Widget. The data contained within the list has a relational link to itself to simulate a hierarchical structure