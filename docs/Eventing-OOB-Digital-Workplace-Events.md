---
title: Eventing OOB Digital Workplace Events
id: Eventing-OOB-Digital-Workplace-Events
---

# OOB Digital Workplace Events

The following are events that are already fired within the Akumina Framework that you can subscribe functions to.

## Loader

### /loader/executestep/
Fires once a step within the Digispace loader is completed

### /loader/onexecuted/
Fires when a step within the Digispace loader is executed

### /loader/completed/
Fires once all the steps for the loader are completed

### /loader/showloading/
Fires when the loader is shown

### /loader/handlesharepointbar/
Fires during the Digispace loader core step that determines whether the sharepoint bar will be shown or hidden

### /loader/servicehubendpointready/
For calling graph (Note: introduced in 5.0, but improved in 5.5)

## Page

### /page/changed/
When using the SPA, fires when the page is changed. Note - this is not a full reload of the page, just the interior.

### /page/loaded/
Fires after the page has loaded - for attaching analytics code (new in 5.5). Note - this fires when navigating within the SPA as well as on full page load.


## Dashboard

### /dashboardcontainer/render/
Fires whenever the dashboard is navigated to or updated

## MM

### /MM/Go/
Fires when we click on a widget in edit widget mode

## Widget

### /widget/loaded/
For those widgets that support it, fires after the widget is loaded (binds its UI and events)

### /widget/updated/
Fires after we click ‘Update’ in the WidgetManager Menu

## Genericlistcontrol

### /genericlistcontrol/loaded/
Fires after we load a Generic List Control Widget

## Myteam

### /myteam/profileclicked/
Fires after the profile is clicked within the Team Widget modal

## Peoplelistsearch

### /peoplelistsearch/searchclick/
Fires when we click ‘Search’ within the People List Search Widget

## Practiceareapeople

### /practiceareapeople/search/
Fires when we call the Search function within the People List Widget 

### /practiceareapeople/searchcompleted/
Fires when the search is completed within the People List Widget

### /practiceareapeople/error/
Fires when there is an error in searching within the People List Widget

## References
See the article below for the overview of Eventing
* [Overview](https://github.com/akumina/AkuminaTraining/wiki/Eventing:-Overview)

