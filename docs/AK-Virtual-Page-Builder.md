---
id: AK-Virtual-Page-Builder
title: Akumina Virtual Page Builder
---

## Overview

The Akumina Virtual Page Builder was created to alleviate the burden of a developer on creating a virtual page in the Akumina Framework. The implementation of this process streamlines the process and decouples the rigid Sharepoint model from the developer-facing object model that is used to create the page. Likewise, the separation from Sharepoint allows a fair amount of customization in the language used between clients to better suit their own needs (e.g. a transaction can mean different things to different clients and end-users).

The Akumina Virtual Page Builder is integrated into the project and is available via NPM, similar to the Akumina Widget Builder. Please keep in mind that this page is currently under construction and any and all information is subject to change. 

## Virtual Page Deployment

There are three steps required to successfully deploy a Virtual Page to your Sharepoint Classic Site. This section assumes a fully configured Akumina Sharepoint Site is already set up. These steps include:

1. Generation of the Virtual Page File (explained in below sections)
2. Deployment of Virtual Page File
3. Deployment of Sharepoint ASPX Page

In your Akumina Project Directory, ensure your Virtual Page JSON file is located in the appropriate location. The file should be in the [/SiteDefinitions/<client namespace>/VirtualPages] directory. This file is deployed to the Sharepoint Site using the "virtualpages" deployment option in your akumina.sitedeployer.config.json file. Simply set the "virtualpages" option to true and run the following command to deploy the Virtual Page file:

```bash
npm run deploy
```

A physical ASPX page is also required to hold your Virtual Page. The reason for this is because the Virtual Page JSON file is simply the definition of the page and its contents. However, in Sharepoint Classic, there is no way to display this definition without a container. The Virtual Page Definition is read and displayed via the Virtual Page Widget. As one might expect, a widget must be housed on a page in order to be displayed. This dependency-chain illustrates the necessity for this extra step.

Under [/SiteDefinitions/<client namespace>/Pages], create a file named "Elements.xml" if it does not already exist. The basic structure of the file should mimic the following:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<pages>
</pages>
```

Pages/Elements.xml holds the definition for the ASPX page we want to deploy. It's defined as a XML node with the following properties:

* layoutfolder
* name
* layout
* title

"layoutfolder" is an attribute that defines the Folder containing the Layout files being referenced. By default, this value should be set to "AkuminaFoundation" unless custom layouts are being used. The folder should be contained in Site Contents -> Site Settings -> Master Pages and Page Layouts.
Create a new page node similar to the following:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<pages>
<page layoutfolder="AkuminaFoundation" name="mycustompage.aspx" layout="DigitalWorkspaceDepartment1ColPageLayout.aspx" title="Akumina Rocks!"/>
</pages>
```

Once we've defined the page, we now need to define the contents of the page. Under [/SiteDefinitions/<client namespace>/PageContent], create a new file named "pages.xml" if it does not already exist. This file contains the contents for previously defined pages contained in Pages/Elements.xml. The structure of the file should match the following:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<pages xmlns:ak="http://www.w3.org/ak"> 
</pages>
```

Similar to the Elements.xml file, we'll create a new page content node with the Virtual Page Widget instance being the only content:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<pages xmlns:ak="http://www.w3.org/ak"> 
    <page name="mycustompage.aspx">
        <zone name="WebPartZone1">
            <contenteditor name="ContentEditor [1]">
                <div  rel="VirtualPageWidget stub instance" class="ak-widget" id="2656b679-1a51-9966-0170-14e8a3584975"></div>
            </contenteditor>
        </zone>
    </page>
</pages>
```

Take note that the "name" attribute on the page node must match its corresponding value contained within Pages/Elements.xml. Mismatching these values may produce errors and may prevent your new Virtual Page from displaying. The above Virtual Page Widget Instance ID is the default value shipped with the Akumina Foundation Site Package, however, be sure to double-check the value by comparing with App Manager.

Once both of these files are set up, save them both. Navigate back to akumina.sitedeployer.config.json and set the following options to true:

* pages 
* controls

The "pages" option will scan the Pages/Elements.xml file and create the corresponding ASPX pages on the Sharepoint site. The "controls" options will scan PageContent/pages.xml and add the page contents to their associated ASPX pages. Once the options are set, save the file and run the following command to deploy the full ASPX page:

```bash
npm run deploy
```

Once the page has successfully deployed, navigate to your Sharepoint Classic Site and expand the Site Tray, then jump into App Manager. Once App Manager has loaded, click on "Management Apps" at the top, then "Widget Manager". After the page loads, click on the "Cache Page Objects" button. Lastly, go back to your Sharepoint Classic Site, open Site Contents, open the Pages folder, and click on your newly created page to navigate to it.

Your new Virtual Page, and its contents, should now be displayed on your Sharepoint Classic Site!

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
        ],
        "RailModel": { // See below for details
            "RailType": "3",
            "RailConfig": {
                "leftRailWidth": "3",
                "rightRailWidth": "3",
                "centerZoneWidth": "6"
            },
            "Widgets": [
                {
                    "rail": "left",
                    "id": "c7269a1c-4782-48b2-d95c-b006101268de"
                },
                {
                    "rail": "right",
                    "id": "fae7328c-b701-179c-f00e-40fb977182af"
                }
            ],
            "cssClasses": [
                {
                    "rail": "centerfocus", 
                    "leftcolumn" : "columns medium-12 large-3 left-column",
                    "rightcolumn": "columns medium-12 large-3 right-column",
                    "centercolumn": "columns medium-12 large-6 center-column"
                }
            ]
        }
    },
    "IsLegacyMode": false //Denotes whether site is 4.1 or 4.5, more information below
}
```

### Object Definitions

There are certain properties that must conform to a standard. Below lists these properties and a definition of their properties as well as a list of possible values:

* **LayoutID - Possible values**:
```json
[1] { "1 Column" },
[2] { "2 Column" },
[3] { "2 Column Large Right" },
[4] { "2 Column Large Left" },
[5] { "2 Column Medium Right" },
[6] { "2 Column Medium Left" },
[7] { "3 Column" },
[8] { "3 Column Medium Middle" },
[9] { "3 Column Large Middle" },
[10] { "4 Column" },
[11] { "3 Column Medium Right" },
[12] { "3 Column Medium Left" },
[13] { "3 Column Large Right" },
[14] { "3 Column Large Left" },
[15] { "4 Column Large Right" },
[16] { "4 Column Large Left" },
[17] { "6 Column" }
```

Below is an image denoting the Layout Alias and their visual representation:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/vp_layout.PNG)

It's important to pay special attention to the terminology being used for the virtual page layout. The JSON file uses the terms Container and Zones. These equate to Rows and Columns, respectively. For instance, a page that has 1 Container and 3 Zones would effectively have 1 Row and 3 Columns. Below is an illustration for the more visually inclined:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/containerzoneexample.PNG)

The widgets are all contained in the same Container/Row. The Container/Row has 2 Zones/Columns. In the above example, Important Dates and Quick Links Widgets are contained in the only Container/Row and in the 2nd Zone/Column. The News Widget is contained in the only ContainerRow and in the 1st Zone/Column

* **Rail Layout**

The Rail Layout properties are a recent addition to the Virtual Page Experience. By setting the Rail Layout Properties, one is able to more specifically control the layout of the page, the style of the page, and what widgets can be placed in which areas of the page. Let's review the Rail Layout object:

```json
"RailModel": {
            "RailType": "3",
            "RailConfig": {
                "leftRailWidth": "3",
                "rightRailWidth": "3",
                "centerZoneWidth": "6"
            },
            "Widgets": [
                {
                    "rail": "left",
                    "id": "c7269a1c-4782-48b2-d95c-b006101268de"
                },
                {
                    "rail": "right",
                    "id": "fae7328c-b701-179c-f00e-40fb977182af"
                }
            ],
            "cssClasses": [
                {
                    "rail": "centerfocus", 
                    "leftcolumn" : "columns medium-12 large-3 activity-stream-left-column",
                    "rightcolumn": "columns medium-12 large-3 activity-stream-right-column",
                    "centercolumn": "columns medium-12 large-6 activity-stream-center-column"
                }
            ]
        }
```

* Rail Type

This enum value controls the Rail Layout type associated with the page.

1 = left focus
2 = right focus
3 = center focus

* Rail Config

Similar to the Bootstrap 12 column page layout, setting the properties within this object will allow you to control the width of each of the 3 columns

* Widgets

This array of objects contains the widgets which can be placed into each designated column.

* CSS Classes

This array contains the css classes to be applied to each of the column containers. 

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