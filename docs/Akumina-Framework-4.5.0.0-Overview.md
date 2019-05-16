---
id: ak-frame45
title: Akumina Framework 4.5.0.0
---

## New Features - Anchor Items
This doc is meant to be catered towards developers, end user documentation can be found on the [learning center](https://content.akumina.com/learningcenter/Content/Home.htm)

### Page (Experience) Builder
Added more functionality around building pages through the use of the VirtualPageWidget

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/AnchorPageBuilder.png" width="600">

### Persona Builder
New App Manager Management App added - Friendly UI for Business users to group users based on AD attributes or another data source, people sync updates required as this grouping happens in the background automatically for quick retrieval on the front end

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/AnchorPersonaBuilderNew.png" width="600">

### Impersonator
UserContext swapping, allows manipulation of the UserContext via this UI which enables navigation of the site with a "Mock" UserContext to see what the site would like through the eyes of another user (Does not bypass permission model)

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/AnchorImpersonatorNew.PNG" width="600">

Debugger shows impersonated properties

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/UserPropertiesImpersonated.png" width="600">



### Page specific widget property bags

Page specific properties have been introduced, this will reduce the number of widget instances and reduce the overhead of adding a new widget instance for minor property changes. Makes it very easy to change properties without affecting the same instance across other pages. For example,  Widget instance id '1' can show 3 items on /pages/test.aspx and the same widget instance id '1' can show 5 items on /pages/test2.aspx - without physically adding a new widget instance.

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/WidgetPropertySaveForPage.PNG" width="600">

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/PageSpecificProperties.png" width="600">



## Other Updates

### 3 Widget updates
* VirtualPageWidget added (React)
* TrayWidget updated (React)
* PageListingWidget added

### Configuration Context additions
* Akumina.Digispace.ConfigurationContext.**PageTypes**
* Akumina.Digispace.ConfigurationContext.**ContainerLayouts**
* Akumina.Digispace.ConfigurationContext.**PageLayouts**
* Akumina.Digispace.ConfigurationContext.**PersonaEnabledLists**
* Akumina.Digispace.ConfigurationContext.**Personas**
* Akumina.Digispace.ConfigurationContext.**PageInactivityTimeOut**
* Akumina.Digispace.ConfigurationContext.**DisableWidgetInstanceBrowserCache**
* Akumina.Digispace.ConfigurationContext.**EnableAuthMessage**
* Akumina.Digispace.ConfigurationContext.**AuthMessageSelector**

### SiteContext additions
* Akumina.Digispace.SiteContext.**ImplementationVersion**  
Usage: [Forcing-latest-widget-javascript-updates](https://github.com/akumina/AkuminaDev/wiki/Akumina-SiteContext---Forcing-latest-widget-javascript-updates-to-be-fetched)

### Widget Manager on front end updates

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/WidgetManagerUpdates.PNG" width="600">

* Save property bag tied to page 
* Added indicator to show instance properties are coming from page
* Preview Widget View functions more reliably also uses not yet saved properties
* New property types support for widgets
  * listselector
  * itemselector

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/NewPropertyTypes.PNG" width="600">

### List Selector
<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/ListSelector.PNG" width="600">

### Item Selector

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/ItemSelector.PNG" width="600">



* New 'bottom bar' status added when hovering over widgets - great for seeing if widget is persona filtering

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/WidgetManagerBottomBarNew.png" width="600">

### New Debug Panel Options

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/DebuggerNew.png" width="600">

* Connector Call Count added to debugger - shows request count to service hub
* Views In Use Tab added - helpful for determining which views are being loaded by the widgets on the page
* Personas Tab added
  * User Personas - shows currently logged in users personas (or impersonated personas in impersonation mode)
  * All Personas - shows all registered personas within App Manager
  * Persona Enabled Lists - indicated which Sharepoint Lists have Persona filtering enabled
* Performance Tab updates
  * General - overall load times as indicated by the browser / framework
  * Page Lifecycle - added TYPE categorization for steps, distinguish between core, shipped and custom
  * Mark and Measure - new interface for diagnosis Add Mark API calls - great for troubleshooting data calls. More information on the [Mark and Measure](https://github.com/akumina/AkuminaDev/wiki/Measuring-Performance-With-Mark-and-Measure) feature

    <img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/MarkAndMeasure.PNG" width="650">

* Renamed Page LifeCycle Tab to CONSTANTS which accurately better reflects its pupose
* Widgets On Page - Updated to show page specific instance properties

### Auth message
This will reduce the affect of the OAUTH flow and users thinking the page 'double loads', message controlled by view in Content/Templates/Core/AuthenticatingMessage.html

```json
ConfigurationContext.EnableAuthMessage = true;
```

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/OneMomentWhileWeLogYouIn.PNG" width="350">

### Inactivity Tracker

This will force the user to do a refresh, helps with BACK button issues and random 403's caused by invalid SP session

```json
ConfigurationContext.PageInactivityTimeOut = 30; //in minutes
```

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/InactivityTracker.png" width="350">


