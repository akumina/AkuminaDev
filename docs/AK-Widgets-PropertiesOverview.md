---
id: AK-Widgets-PropertiesOverview
title: Widget Properties
---


### Overview

The purpose of this article will be to review the Properties associated with Widgets, the different variations thereof, the implementation and usage, and examples. The article makes the following assumptions of the reader:

* Akumina Framework Version 4.5 or higher

* Configured Sharepoint Environment


### General Overview of Widget Properties

Let's start with a recap - Widgets can be placed on any page running the Akumina Framework in a Sharepoint Environment. Widgets are intended to be reusable and to encapsulate certain functionality. For example, the **Calendar Widget** can placed on multiple pages at the same time, thus being reusable. Additionally, the **Calendar Widget** encapsulates the functionality of displaying dates, events, etc, as it's configured to do so, thus encapsulating its own functionality within itself.

However, part of being reusable also involves being configurable. Enter - **Widget Properties**. Widget Properties are aptly named - These are the properties of the specific widget that can configure and change a multitude of options. In the context of the **Calendar Widget**, the following properties exist:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Page%20Specific%20Widgets/calprops1.PNG)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Page%20Specific%20Widgets/calprops2.PNG)

Changing any of these properties will affect the Calendar widget and only that widget. This may be common knowledge, at which point you may be asking *"What is the point?"*

Akumina Version 4.5 Introduced [Page-Specific Property Bags](/docs/Akumina-Framework-4-5-0-0-Overview#page-specific-widget-property-bags). This offers some options as to how you might approach page development as well as how you manage widgets. Let's get into it...


## Global Widget Properties

**Premise**: In my Sharepoint Environment, I have two pages: PageA and PageB. I have the **CalendarWidget** on both pages. The CalendarWidget has one instance.

Following our premise, let's review Global Widget Properties. This is the classical view of Widget Properties that has existed in the Akumina Framework for a long time. If you navigate to PageA and PageB, you will see the Calendar Widget on both pages. Perform the following steps to verify the properties of both:

* Open the Akumina Tray at the bottom of the screen

* Click on the "Edit Widget Properties" icon (It appears as a Gear icon)

* Hover over the Calendar Widget

* Click on the Gear Icon that shows up in the top left of the widget's rendered screen area

* The Widget Information modal appears, click on the Properties tab to verify the properties


As you can see, the widget properties are identical for both of the Widgets. This is because each page uses the same Widget Instance. Let's check the following:

* Open the Akumina Tray at the bottom of the screen

* Launch App Manager

* Navigate to Management Apps

* Navigate to Widget Manager

* Check the Widget Instance Properties for the Calendar Widget

As you'll notice, the properties listed on this page are the properties listed under each instance of the Calendar widget. The reason for this is because the Widget itself is simply a template, however, the widget instance is what's placed on the page. What we're viewing in App Manager is known as **Global Widget Properties**. Meaning that each individual instance of the widget will have the same properties.

This is how the Akumina Framework has managed Widget Properties for quite some time.


## Page Specific Properties


Page Specific Properties operate a bit differently. As we just reviewed, all instances will use the same properties as defined in App Manager. However, there are multiple scenarios in which a user might require several, or several dozen, subtly different yet unique instances of the Widget in multiple places.
Normally, the solution to this would be to make several, or several dozen, instances in App Manager. This would be a nightmare. Instead, Akumina now provides the ability to assign properties to a Global Widget Instance that only affect the instance on the page - **Page Specific Properties**.


## How do I use Page Specific Properties?

Using Page Specific Properties is surprisingly simple:

* Navigate to the page which holds the widget which needs page specific properties

* Open the Widget Property Editor

Edit whichever properties you desire and save your changes. When you do, a dialog will appear asking whether you'd like to change the properties for

* The Global Widget Instance

* The Widget Instance only for this page


![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Page%20Specific%20Widgets/pspconfirm.PNG)

Select 'Yes' and allow the widgets on the page to reload. Following our premise from earlier, let's image we still have the two widgets on PageA and PageB. We just changed the widget properties on PageA but selected to make them page-specific. If you were to compare the widget properties from PageA and PageB, you'd notice that they're now different!

Checking App Manage shows only one Widget Instance. Checking the Widget Instance IDs on the pages shows matching values. So, how does this all work? Simple: Choosing to make Widget Properties Page Specific has created an entry in PageWidgets_AK. If you inspect the list, you'll notice it's similar to WidgetProperties_AK but also contains a value for PageId and PageVersion.

What this means is that when that Widget Instance loads on the page, the Akumina Framework will check this list for the given Widget Instance ID, Page ID, and Page Version ID to load the appropriate Page Specific Widgets.
