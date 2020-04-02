---
title: Akumina Framework 4.8.0.0 Overview
id: Akumina-Framework-4.8.0.0-Overview
---


A new major release, Release 4.8, with features, enhancements and bug fixes of the Akumina Framework, Akumina AppManager and Akumina Foundation Site Two is released and available for use.  
 
The Version is **4.8.xxxx.xxxx-Core-4.8.xxxx.xxxx-SiteCreator-4.8.xxxx.xxxx-InterChange.zip**.

## Akumina Framework Functionality
•	Anchor Items:
o	Enhanced front-end Framework to run seamlessly in a SharePoint Modern environment.  Introduced three new packages for use in Modern:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasemodules.png)
 

	Single Page App (SPA):  Akumina acts as a layer on top of the SharePoint modern canvas with full brand ability options and introduces a virtual master page
 
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasehomepage.png)
 

	Widget Picker: Loads the Akumina framework into a modern site and allows Akumina widgets to be brought into a modern page experience

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasewidgetpicker.png)
 

	Application Extension:  Allows for complete control over header and footer in modern site types

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappext.png)
 

o	Introduced public CDN for Akumina Framework files which will greatly improve performance out of the box, lower the maintenance of upgrades as well as easily roll out patches in the event a fix needs to be made
o	Now supports new “Akumina Library” instead of “Style Library”:  Akumina library houses all Akumina assets due to SP put an extra permission on the style library 
o	Enhanced Quick Content Edit to provide the ability to add content directly from the front-end site alongside the existing edit feature

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasequickcontent1.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasequickcontent2.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasequickcontent3.png)
    

o	Added a new Auto Provisioning Widget for the content author to provision the necessary list elements from the front-end Framework to easily manage and extend the DWP solution

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaselistselector1.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaselistselector2.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaselistselector3.png)           

•	Added a new content site selector in widget manager properties 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasecontentsiteselector.png)
 
•	Added Additional Headless Support for:
o	Like and Share Functionality
o	Document Viewer Folder and DragDrop functionality
o	Discussion Board

•	Enhanced widget manager to provide a widget description for all widgets to improve usability when adding and editing widgets

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasewidgetmanager.png) 

•	Enhanced HTML Content Widget to provide language fallback support on root/subsite for multilingual enabled users

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasewidgetmanager2.png)
 
•	Enhanced Quicklinks widget to support 500 plus quicklink items
•	Several performance enhancements included to improve overall performance

## AppManager Functionality

•	Anchor Items:
o	Added Support for SharePoint Modern
o	Added Central/Delivery Support for rapid re-use of Akumina tooling across many site collections using an 'install once' model providing for easy maintenance, upgrades and code deployments 
    
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasecentralsitediagram.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrprovision.png)

o	Added a new Theme Manager management app to easily establish and change the app manager theme to provide custom branding for the site
  
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrthemepicker.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrthemepicker2.png)

o	Added a new Configuration Evaluation Tool which provides configuration validation of App Mgr settings to help with setup and trouble shooting 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrevaltool1.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrevaltool2.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrevaltool3.png)   

o	Added ability to select SharePoint Image Renditions upload dimension images and allow user to choose image sizing for Image Picker and increases the performance of the front-end site
	At this time, Microsoft does not support this on Modern.  Clients upgrading to 4.8 will be able to use this feature on classic.  We will continue to review how to handle in Modern.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrimagepicker1.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrimagepicker2.png)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrimagepicker3.png)
    
o	Added improved Friendly URLs feature to allow content authors to create their own vanity URL
o	Added Additional Support for Headless:
	ON Premise
	Headless Infrastructure of only sub-sites (Headless/sub-site Architecture)
•	Now allow the Service Hub and App Manager to be separated.   This removes a single point of failure, makes it easier to scale and provides the ability to upgrade without any downtime.
•	Site Creator Step Performance Improvements to expedite the deployment process. Lowered the number of files being uploaded and reduced API calls  
•	Implemented ‘Throttling decoration’ best practices to help reduce interruption of service due to high volumes of requests
•	Added a new Management App for managing Page Cache to provide the ability to cache all pages, or a specific page object for sites with many pages 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaseappmgrpagecache.png)
 
•	Added upgrade compatibility to ensure all content apps and configurations are enabled from any previous 4.5 version

## Akumina Foundation Two Site Functionality

•	Added a new Mega Menu view feature to FoundationTopNavigation widget to provide a structured and visible relationship to all site options that is easily viewable at a glance

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasemegamenu.png)
 
•	Enhanced CSS theme files to eliminate !important tags and provide a consistent front-end user experience
•	Added a new Language picker view to display above the language selection in main menu bar when multi-lingual is enabled

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releaselanguagepicker.png)
 
•	Added a page URL to improve usability for searching existing pages

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasesearchresults.png)
 
•	Enhanced Mobile View to improve mobile display presentation of content 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasemobileview.png)
 
•	Added a department listing landing page 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/48releasedepartmentpage.png)
 

## PeopleSyncV2

•	Support for On-Premise using SharePoint User Profile Service