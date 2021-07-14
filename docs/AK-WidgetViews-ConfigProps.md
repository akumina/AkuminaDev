---
title: Widget Views
id: AK-WidgetViews-ConfigProps
---

## Using Configuration Values for Paths

You can easily use any value in the configuration context (or other) to prevent hardcoded paths in views. In your view, you would have the following:

```
{{configurationcontext "TemplateURLPrefix"}}
```
 
 
An example:

```html
<img class="circlet rounded-imag-white imag"  src=’{{configurationcontext "TemplateURLPrefix"}}/somepathtoimage.jpg’ />
```
 
 
You can also use other values to fill out the path to the style library, such as
 
•	TemplateURLPrefix
•	AssetLibraryName
•	TemplateCoreFolderName
 
Example:
 ```html
<img class="circlet rounded-imag-white imag"  
src='{{configurationcontext "TemplateURLPrefix"}}/{{configurationcontext "AssetLibraryName"}}/{{configurationcontext "TemplateCoreFolderName"}}/images/ia-loader.gif’ />
```


## Quick Edit in a view

**NOTE**: This only works if you have a content app created for the list

To enable quick edit, you need an attribute with the item id. This must be in the attribute named ak-item, and use the SharePoint List Item id. In addition a class is needed to enable the quick edit, ak-item.

Single item
An example of quick edit for a single item:
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Widget%20Views/quickcontent-singleitem.png)
 
List
An example of quick edit for a list of items; each item has its own separate trigger for editing. Note the class ak-item:
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Widget%20Views/quickcontent-listitem.png)

## Quick Edit for a Quicklinks or Slider app.

A quicklinks and/or slider app is a combined editing experience, where there is only one page to edit all items. Due to this, all that is required is to add the class **ak-widget-item** to the outermost element in the view:

```html
<div class="menu ak-widget-item">
    ...
</div>
```html

**NOTE**: There should be no **ak-item** classes in your quiclinks or slider view, as they are unnecessary.
