---
title: Widget Views
id: AK-WidgetViews-ConfigProps
---

### Using Configuration Values for Paths

You can easily use any value in the configuration context (or other) to prevent hardcoded paths in views. In your view, you would have the following:
 
{{configurationcontext "TemplateURLPrefix"}}
 
 
An example:
 
<img class="circlet rounded-imag-white imag"  src=’{{configurationcontext "TemplateURLPrefix"}}/somepathtoimage.jpg’ />
 
 
You can also use other values to fill out the path to the style library, such as
 
•	TemplateURLPrefix
•	AssetLibraryName
•	TemplateCoreFolderName
 
Example:
 ```html
<img class="circlet rounded-imag-white imag"  
src='{{configurationcontext "TemplateURLPrefix"}}/{{configurationcontext "AssetLibraryName"}}/{{configurationcontext "TemplateCoreFolderName"}}/images/ia-loader.gif’ />
```