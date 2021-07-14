---
id: AK-Virtual-Page-Layout-Builder
title: Using Virtual Page Layouts
---

## Overview

Following the [Akumina Virtual Page Builder](/docs/AK-Virtual-Page-Builder), the Akumina Virtual Page Layout Builder was created to alleviate the burden of a developer on creating and distributing virtual page layouts. The process aims to provide a seamless, effortless, and intuitive experience through which the JSON structure for a virtual page layout is generated and easily available for viewing, editing, and sharing.

The Akumina Virtual Page Layout Generator is integrated into the Akumina Virtual Page Builder NPM package and is currently available via NPM. From the terminal, type in the following to gain access to the rich suite of features offered by this product:

```
npm install akumina-virtualpage-builder
```

## JSON File Format

Similar to the Virtual Page JSON file, the Virtual Page Layout JSON file is almost an identical extrapolation of the layout properties of the Page definition:

```json
[
    {
        "id": "container1",
        "layoutid": "2 Column",
        "zones": [
            {
                "id": "zone1",
                "widgets": []
            },
            {
                "id": "zone2",
                "widgets": [],
                "widgettype": [
                    "AnnouncementItemsWidget"
                ]
            }
        ]
    }
]
```

You will notice some key differences, however. As you can see, there is an optional property on each zone object of the housing container: [widgettype]. This property is responsible for supporting the Widget Restrictions feature (see below for more information).
The [widgettype] property contains a list of widgets that are restricted to this zone. Meaning, only the stated widgets can be added to that particular zone. This is a very handy feature for clearly defining not only the structure of a page via the layout but also clearly defining the purpose, usage, and behavior of the layout by constraining what can be placed in it.

### Object Definitions

The same rules from the Akumina Virtual Page Builder page apply here. Please click [here](/docs/AK-Virtual-Page-Builder#object-definitions) to review the LayoutID values.

## Generator Process

The Akumina Virtual Page Layout Generator is an extension of the Akumina Virtual Page Builder NPM package. Installing the package will enable access to this new feature. Previously, the following command would start the Page Builder process:

```bash
npm run vpstub <name>
```

Where the <name> parameter was optional. To begin the new Layout Generator process, type the following into the terminal to start the user experience:

```bash
npm run vplayout
```

There is no optional or additional parameters with the new process

**Note**: If the above does not work, please make sure the following line is included in your package.json file under the "scripts" node:

```json
"vplayout": "akumina-virtualpage-builder layout"
```

The Akumina Virtual Page Layout Generator user experience is similar to the Page Builder experience and is handled entirely through the console. The prompts are intuitive and explicitly state what is asked of the user, and only what is asked of the user, before generating the file and outputting the directory and link to this documentation:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akvplayoutgenoutput.PNG)

## Deployment

The SiteDeployer has been updated to make use of these newly generated files and to place them on your Sharepoint site! The following paragraphs will explain, in detail, where the data is stored, how to verify, how to use, and any/all deployment nuances that may be unintuitive or not accurately explained.

### How it worked before

The Virtual Page Layouts were previously known as Custom Layouts or Saved Layouts. The same effect was achieved when a user created a new page through the Akumina Framework on their Sharepoint site and saved the layout:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akvplayout-savelayout.PNG)

The data for this layout, including widget restrictions, was saved as a solid json object inside the [SavedLayouts_AK] list.

While this was serviceable and did work, this comes with a few obvious downsides, such as:

* Needing to go through the UI experience
* Requiring physical access to the front-end of the Sharepoint site
* Requiring some back-end Sharepoint knowledge
* Tedious

With this in mind, the brilliant engineers at Akumina set off to create this new user experience to solve these problems!

### How it works now

As previously noted, the user experience in the terminal shown above produces the json file, also shown above, and places this inside of your <project directory>\SiteDefinitions\ProjectName\VirtualPageLayouts folder. From here, the JSON file can be reviewed, manualy edited, and shared with others.

If you're running a new project directory generated through our [Yeoman Template](/docs/getting-started-yeoman), all of this should already be set up for you. If you're using a project directory created before the launch of this NPM extension, please make sure the following is set:

deploy.js
```json
options.push('virtuallayout');
```

And that's it! Save your deploy file, run the following command, and the file should be deployed shortly. Please note that the terminal window of the SiteDeployer will display updated inforation as it moves through its process. This ensures you're up to date on what's being deployed and where.

```bash
npm run deploy
```

Once your deployment is finished, you may want to verify everything has deployed successfully. Simply navigate to your Sharepoint site and follow these directions:

* Click the Cog in the upper-right corner
* Open [Site Contents]
* Scroll down to the [SavedLayouts_AK] List

The last entry in the list is typically the most recent entry. Feel free to sort by name or modify your view to display Created/Modified dates for easier sorting. The List should contain the following fields mapped to the following source fields:

List Field      |   JSON Field
----------------|-----------------
Title           |   File Name
PageLayoutId    |   File Name
PageLayoutTitle |   File Name
PageLayout      |   File Contents
SPPageLayoutId  |   2210
Icon            |   File Name (optional)    

Lastly, to test your new layout, simply create a new page and click the [Saved Layouts] tab to select your new layout:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akvplayout-uselayout.PNG)

## Adding an Icon
    
Virtual Page Layout icons can optionally be added. Icons need to be stored in a folder called Images_AK, which must be a child of the VirtualPageLayouts folder:
    
```bash
   Project
      ├───build
            └───sitedefinitions
                      └───ClientNamespace
                                 └───VirtualPageLayouts
                                            └───Images_AK
                                                    ├───layout1Icon.png
                                                    ├───layout2Icon.png
```

Two steps are required to upload Virtual Page Layout icons:
    
1. Add the icon file name to the Virtual Page Layout JSON file (see optional JSON field in the table above)
2. Add the icon file to the Images_AK folder  

The Virtual Page Layout deployment will automatically upload images that are stored in the Images_AK folder to the Images_AK SharePoint list, and the reference to the icon will be stored in the Virtual Page Layout definition.
    
## Features

Similar to the Akumina Virtual Page Builder, the Akumina Virtual Page Layout Generator also features the ability to update the saved layout entries in Sharepoint. Following the example in this article, if one were to add additional widget restrictions to the Akumina-Layout.json file and redeploy the file, it would update the entry in the list with the new values.

## Nuances

The Akumina Virtual Page Layout Generator requires a bit of awareness and careful-mindedness when defining the structure of the layout. For this example, we'll use the Two Column layout option. Consider the following snippet:

```json
{
    "id": "container2",
    "layoutid": "2 Columns",
    "zones": [
        {
            "id": "zone1",
            "widgets": []
        },
        {
            "id": "zone2",
            "widgets": []
        },
        {
            "id": "zone3",
            "widgets": []
        }
    ]
}
```

The problem is evident: We've defined a container (container2) with a layoutid of 2 Columns. However, we have 3 Zones defined on it. Each "container" can be thought of as a row on the page while each "zone" can be thought of as a column inside of that row. The [layoutid] property of the container defines the rows. With that said, it is important not to overflow the row with more columns than it has room for. That will break the layout.
However, the opposite is perfectly valid:

```json
{
    "id": "container2",
    "layoutid": "2 Columns",
    "zones": [
        {
            "id": "zone1",
            "widgets": []
        }
    ]
}
```

The layout fills from top to bottom, left to right. If the zones specified amount to less than the maximum column amount, it will simply fill from left to right and leave the remaining undefined zones blank. This is a valid layout object.
