---
id: AK-Virtual-Page-Builder
title: Akumina Virtual Page Builder
---

## Overview

The Akumina Virtual Page Builder was created to alleviate the burden of a developer on creating a virtual page in the Akumina Framework. The implementation of this process streamlines the process and decouples the rigid Sharepoint model from the developer-facing object model that is used to create the page. Likewise, the separation from Sharepoint allows a fair amount of customization in the language used between clients to better suit their own needs (e.g. a transaction can mean different things to different clients and end-users).

The Akumina Virtual Page Builder is integrated into the project and is available via NPM, similar to the Akumina Widget Builder. Please keep in mind that this page is currently under construction and any and all information is subject to change. 

## JSON File Format

The structure of the JSON File is clearly defined and all properties are mandatory. It is possible to generate custom mapping between the JSON File Model and the Sharepoint Model. Please contact an Akumina representative for assistance in custom aliasing.
The format of the file is listed below with default naming convention:

```json
{
    "Name": "name",
    "Id": "ec27b5b0-5e34-4cb6-8b83-af0d69fe36cc",
    "Type": "GenericPage",
    "List": "GenericPages_AK",
    "AdditionalSelectColumns": "",
    "Url": "/Pages/name.aspx",
    "Personas": ["All"],
    "PageDefinition": {
        "Containers": [
            {
                "id": "container1",
                "layoutid": "1 Column",
                "zones": [
                    {
                        "id": "zone1",
                        "widgets": [
                            {
                                "Title": "",
                                "WidgetInstanceId": "",
                                "Properties": [],
                                "Name": "",
                                "Icon": "",
                                "Description": "",
                                "Options": "",
                                "DisplayOrder": "0",
                                "Grid": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "IsLegacyMode": false //Denotes whether site is 4.1 or 4.5, more information below
}
```

### Object Definitions

There are certain properties that must conform to a standard. Below lists these properties and a definition of their properties as well as a list of possible values:

* LayoutID - Possible values:
```json
{ "1 Column" },
{ "2 Column" },
{ "3 Column" },
{ "4 Column" },
{ "2 Container 2 Column" },
{ "3 Container 3 Column" },
{ "4 Container 4 Column" }
```

## Generator Process

As previously stated, the Virtual Page Generator is similar to the Widget Builder. From the terminal, simply type the following to start the process:

```bash
npm run vpstub <name>
```
**Note**: If the above does not work, please make sure the following line is included in your package.json file under the "scripts" node:

```json
"vpstub": "akumina-virtualpage-builder stub"
```

The <name> parameter is optional and, if used, will generate a skeleton JSON file with some default properties initialized as can be seen above. If the <name> parameter is omitted, the user will go through the normal virtual page generator experience and be guided through the creation of a (mostly) complete virtual page file. An example user experience is displayed below:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/virtualpageterminalout.PNG)


## JSON File Properties

There is currently a limitation on certain properties tied to the Widgets object defined in the Virtual Page JSON file. This limitation is between [WidgetInstanceId] and [Properties] on the Widget object. It's important to note the purpose of these properties and why this limitation is being set:

WidgetInstanceId is used to make a connection between the Widget placed on the page and an instance of that widget stored in App Manager. An instance of a widget is a pre-defined property bag, view, and js file meant to be used in multiple locations on the site for a common purpose. Intuitively, the Properties object is a stringified JSON object containing the properties of that widget.

The limitation is that both of these properties can neither be populated nor empty at the same time. One of these properties must be defined while the other remains empty. The reason for this is because of page properties. The declaration of these properties denotes that a Page Property is being defined or a pre-existing widget instance is being referenced. It is not allowed to use page properties and a widget instance at the same time

### What is a page specific widget property? 

A page-specific widget property can be imagined as an instance of a widget that is defined on the page and stored on the page definition, not globally in a sharepoint list. The possible use-cases for this would be one-off scenarios in which you need to define a widget for a single purpose on a single page that is not going to be used multiple times throughout multiple pages.
Another good way to think of widget instances is to imagine them as being global variables. By definition, global variables are available to all underlying functions, whether those functions need them or not, and are ever-present. It would be far more efficient to allocate resources to a variable when/if it's needed instead of using those resources to simply be around at all times.

Example: 
I, as a developer, need to define a calendar to show events on the Sharepoint site. I have several subsites which also need to display a calendar widget to display events for those individual departments. For this purpose, I would create an instance of the Calendar Widget in App Manager, to be stored in sharepoint, to be re-used across the multiple pages upon which this Calendar needs to be displayed.

Another Example:
I, as a developer, need to define a calendar to show events on my events page. There is currently no plan to show this calendar on any other page and this is the only area/department which needs to display a calendar of events. For this purpose, I would create a page with a calendar widget and define the widget properties on the page. Since this would be the only page this particular widget is used on, there is no need to create a widget instance.

Please note that creating a widget instance means that instance is stored in a Sharepoint List and managed through App Manager, which does increase work load for App Manager. For efficiency reasons, it is a good idea to be mindful of how much processing App Manager needs to do whenever a widget needs to be managed through the back-end UI. Additionally, if working with a code repository, each instance is stored in the config.json file of the associated widget. This file can grow and, when deployed, needs to be processed and pushed to the Sharepoint API. Large config files holding a large number of instances can increase deploy time.

**Please Note:** We will be documenting how to go about page specific properties at a later date.


## Manual Data Entry

With the current implementation, certain properties have to be entered in manually by the user. This is a known caveat and is planned to be implemented at a later date. The list of properties that need to be entered manually is displayed below:

* Widget Properties
    * The Widget Properties is saved as an array of key:value paired objects. An example is shown below:
```json
"Properties": [
    {
        "name": "prop1",
        "value": "value1"
    },
    {
        "name": "prop2",
        "value": "value2"
    }
]
```
* Widget Instance ID
* IsLegacyMode
    * IsLegacyMode denotes that you are deploying to an Akumina Sharepoint site of version 4.5.0.0 or earlier. There are certain List Columns that are not present in earlier versions that will break the deploy process if an attempt is made to populate non-existant columns.
    * In the user experience, there is no prompt to choose whether the flag is set or not. The user must manually make this change.
    * The default value for this property is false.

## Other Features

Previously, it was not possible to redeploy a Virtual Page that was already deployed through the tooling. The reason for this is because while there was a check to see if the page and its associated list entries existed, there was no functionality to update these items or otherwise alter them. To fix this, the following features were included:

* PageWidgets_AK
    * The entries inserted into this list, found by quering exact matches on Page ID and Title, are truncated and re-added. This prevents orphaned widgets and promotes clean data storage.
* GenericPages_AK
* PageUrls_AK
    * Using the same method employed for PageWidgets_AK, the existing records are retrieved but not deleted, only updated.