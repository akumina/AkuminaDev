---
id: Widgets-GlobalVsLocal
title: Global vs Local widgets (Widget Scoping)
---

Version 5.0 introduced the concept of "local widgets" which means the widget property bags are stored within the page.  This also means the widget properties are not shared between pages and can only be used on the page they are added to.

Widget properties are an important concept to understand within Akumina.  There are usecases where you want a change to a widget to be reflected across multiple pages, or even multiple sites.  This cuts down on the common problem where you want to make a change in many places but have to update N number of pages to see the reflected change.  This can be a problem with large sites, especially after launch.

Do not be confused by the word 'change' - Widget VIEWS (.HTML) and Widget CODE (JS) is automatically shared between all instances, regardless of GLOBAL or LOCAL.  This concept specifically applies to WIDGET PROPERTIES or a WIDGET's PROPERTY BAG.

Akumina in the beginning, didnt have a page management system, it only had widgets that could be put within OOB Sharepoint pages.  So every single widget was considered "GLOBAL" - meaning it could be put on ANY page and its properties were centrally stored (In a Sharepoint List).  This was a powerful concept at the time.  As more and more pages were created, more and more Widget Instances would need to be created to handle it.  This means if you had 20 pages with 10 widgets on each page - you could potentially have 200 different global widgets with different property bags.  This can be combersome to manage, obviously. Especially if that widget and its props were only used on 1 page. Akumina released its page management system (Page Builder) in 4.8 - with its support for Sharepoint Modern.

## Front end widget resolution

(WidgetProperties_AK - SiteId)

* Global in Central => All Sites => SiteId = Central Site Id
* Global in Delivery => All Pages = > SiteId = Delivery Site Id  (Will only work in that Delivery Site, Cannot use on other Delivery Sites)
* Local in Delivery => Properties for 1 page => Use Page Specific (Local)

The Framework ONLY loads Global Widgets from CENTRAL OR the CURRENT DELIVERY SITE

## Widget Storage within Sharepoint ###

Global Widgets - 'Central Site' using Widgets_AK and WidgetProperties_AK SP lists.

Local Widgets - 'Delivery Site' PageWidgets_AK list.


