---
id: Ak-Debugging
title: Debugging in Akumina
---

# Applies to
All versions of Akumina

# Overview

The purpose of this page will be to document and demonstrate the various ways of debugging common problems one might run into while using the Akumina Framework. We will be covering already implemented features as well as error and exception messages observed in the console.


## {{debug}} in the View

Akumina Widgets are, in a basic sense, comprised of three different elements:

* The View, an html file
* The logic, a javascript file
* The definition, a json file

Focusing on the view, all Akumina widgets use the Handlebars library to dynamically render content onto the page by use of a predefined template. The template contains the structure and placement of data and contains placeholders used to display the data. For example:

```html
<h1>{{Title}}</h1>
```

Will have the value of the Title property inserted into the {{Title}} placeholder when the view is bound with a viewmodel. With that said, debugging the view is sometimes necessary and, thankfully, Handlebars supports this by use of the {{debug}} syntax.

The {{debug}} command will output the widget definition into the console when the page is rendered. This is very handy to check that the appropriate data is being bound to the view as well as being able to inspect the data for errors, inconsistencies, or just to verify values are correctly inserted. The output also includes the available views, html output, properties, and more.

An example of the Foundation Site's Calendar Widget {{debug}} output is displayed below:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/viewdebugcalendarsnapshot.PNG)


## Widgets On Page

The debug panel is a feature included in the Akumina Framework. The debug panel contains a wealth of data, both informational and useful for debugging. Of those useful for debugging, the "Widgets on Page" screen can be very helpful for trying to track down widget related issues.

From any Akumina page, click the tray icon on the bottom of the screen, navigate to the debug panel, and select the "Widgets on Page" tab on the left:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/aktraydebugpanel.PNG)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/debugpanelwidgetsonpage.PNG)

For every widget instance located on the page, the following information is displayed:

* Widget Instance Name
* Widget Type
    * The name of the widget
* Widget Class
    * The fully qualified namespace of the widget
* Id
    * The widget instance ID
* Widget JS Version
* Page Specific
    * Denotes that the widget is not instanced but is using page-specific widget properties.
* Widget Properties

The widgets on page screen displays every widget on the page, whether they're finished rendering or not. This can be handy to figure out if a specific widget is on the page or not, as well as being able to see the complete definition of every widget on the page.
Additionally, this screen is also useful for debugging certain problems. An example would be a widget not displaying on the page despite no errors being displayed in the console. This is usually a problem with the reference to the Widget Instance but does not produce an error message.

When you view the Widgets on Page screen, the widget is registered on the page but the framework is unable to identify which widget it is, only that something is registered:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akdebugging_missingwidget.PNG)

The Widget ID is still displayed, which is helpful in determining whether the ID was mis-copied or is not available on the site currently. This could be due to lack of deployment, a bad deployment, or simply copying the ID from a non-widget object.

You can identify where the problem lies by going through the following steps:

* In App Manager, navigate to the desired widget and verify the widget instance exists. If your site is multi-lingual, please be sure to deploy the widget(s) with the 'ml true' parameter set.
* If your widget instance exists but still does not deploy, check the PageWidgets_AK List to make sure the row is defined properly. A widget instance properly embedded looks similar to the following:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/pagewidgetsakexample.PNG)

**Note the Widget Instance ID. This must match the definition displayed in App Manager, which is pulled from WidgetProperties_AK**

If you've verified that the widget instance does exist and is a 1:1 match to what is registered to the page, and the widget still doesn't display, please contact an Akumina Representative for additional assistance.

## More Coming