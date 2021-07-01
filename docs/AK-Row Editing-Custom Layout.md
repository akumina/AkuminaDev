---
id: AK-Row-Editing-Custom-Layout
title: Creating a custom layout when editing row on a virtual page
---

## Overview

When editing a virtual page you can use the 'Toggle Row Editing' to define or update the layout of the page.
Once in page edit mode, from the tray select the toggle row editing and then you can choose the layout for the page, there are by default layout options available in the Choose layout modal window.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/containerzoneexample.PNG)

## Adding a Custom Layout Option

You can add a custom layout in the Choose Layout modal pop-up. The layouts configurations are stored in a SharePoint List - [ContainerLayouts_AK]
When in Standalone mode, navigate to the site contents and find the list and add a new entry for each custom layout.
When in Central/Delivery mode, the list is stored in the central site, hence navigate to the central site, site contents and add a new entry in the list for each custom layout.

It's important to pay special attention to the terminology being used for the layout.We use the terms Container and Zones. These equate to Rows and Columns, respectively. For instance, a page that has 1 Container and 3 Zones would effectively have 1 Row and 3 Columns.

The widgets are all contained in the same Container/Row. The Container/Row has 2 Zones/Columns.

Below we explain what each of the fields in the [ContainerLayouts_AK] list expect for adding a custom layout - 

### Title
This would be the title or name you want to give to the custom layout

### LayoutID
This would the Zone and Container design that you want to give to your layout.
Example - If you want to add a new custom layout for four columns and 3 rows each, you would name the LayoutID as four-z-sm3-sm3-sm3-sm3

### LayoutTitle
This would be the title or name you want to give to the custom layout

### LayoutClass
This is the custom class in which we can set the background image to the custom image for the new layout, this class can also be used to define additional properties for the layout in the choose layout modal.
Example - c-four-z-sm3-sm3-sm3-sm3
Here, we are diving the page in four columns, hence we denote as four-z and in the four columns we are adding 3 equal rows hence sm3
In the custom css file, you need to define this css class.
Example - 
```css
.ak-layout-icons li a.c-four-col-sm3-sm3-sm3-sm3 {background: url(https://{{yourtenant}}.sharepoint.com/sites/{{SiteName}}/Akumina Library/DigitalWorkplace/images/c-four-col-sm3-sm3-sm3-sm3.png) no-repeat left top; }
```

### LayoutZones
These are the zones/columns that you want to divide the pagerow into.
Example - small-3, small-3, small-3, small-3, in this case we are dividing the container/zone into 4 equal columns of sm3 each

### LayoutTemplate
This is the location where we have to add the custom layout html file.
Example - [/Akumina Library/DigitalWorkplace/Content/Templates/ContainerLayouts/3Col_3_3_3_Layout.html]
In this case we are adding a custom layout of 3 Column each of 3 grids at the standard Akumina layouts location.
Sample Conntent of the view file for 2 columns - 
```html
<div class="two-z-sm6-sm6">
    <div class="cell small-12 medium-6 columns" key="1">
        {(showZoneTitle) ?
        <h1 class="ak-zone-heading">Coulmn 1</h1>
        : ("")}
        {validateZone(children[0])}
    </div>
    <div class="cell small-12 medium-6 columns" key="2">
        {(showZoneTitle) ?
        <h1 class="ak-zone-heading">Column 2</h1>
        : ("")}
        {validateZone(children[1])}
    </div>
</div>
```

