---
title: Akumina Framework 5.5.0.0 Overview
id: Akumina-Framework-5.5.0.0-Overview
---

## Akumina Framework Functionality

*	**Anchor Items**:
    * Search Experience 2.0 enables a more robust search engine with expanded capabilities for search actions and ranking, and improving the user experience with customizable search refiners 
    * New Search Bar features includes advanced type ahead search functionality, intelligent search suggestions, search result counts and vertical tabs for selection/refinement. 

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Search%20Bar.png)
        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Search%20Bar%20full.png)

    * New Search Results Page includes advanced search features to provide the ability to search for relevant documents, pages, or people; search for promoted results; search using metadata tags; search across sites or within a specific department site; provides additional sort by options, call-to-action buttons, and additional configurable refiners on the search results page. 

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Search%20Results.png)

    * Added support for Department Search which reduces the result set for a particular department instead of searching across all sites.
    
        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Dept%20Search.png)

    * Akumina Flow provides customizable multi-tiered checklist functionality for driving and collaborating a completion of tasks across a team. Great for onboarding, workflow surveys, and other tasks with the ability to integrate with 3rd party workload actions and provides reporting analytics.

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Akumina%20Flow%20form.png)
        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Akumina%20Form%20Feedback.png)

  * HTML Content Widget Enhancements   
    * Add ability to publish content approvals from frontend

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/HTML%20Publish.png)

    * Add ability to publish content approvals from frontend

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/HTML%20State.png)

  * Add Image Uploader/Image Picker modal to the HTML Content Widget, Summary Links Widget and Discussion Board Widget to select images from a specified library
    * Add Pagination and Search capabilities
    * Add ability to search all picture libraries
    * Add ability to upload images to a specific library
    * Add dropdown to select image library

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Image%20Picker.png)
        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Image%20Modal.png)
        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Image%20Upload.png)

  * Summary Links Widget Enhancements provides additional front-end features for content authors across multiple pages including auto-translate support for multi-lingual, support for custom views, and support for personas
    * Add Persona support
    * Add custom views support
    * Add auto translate support
    * Add Ckeditor to create a description 

        ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Ckeditor%20desc.png)

  * Ability to define Page Specific local widgets for the rail in addition to Global instances

    ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Page%20Specific%20Widget.png)

  * Important Dates Widget Enhancements
    * Add additional select fields to allow for additional columns to be set on the list 
    * Add a checkbox to display featured events
    * Add ability to show only items tagged with specified categories

  * Ability to allow business users to create complete separate department sites that do not end up as "Sub Sites" or "Children" of the main intranet. These sites will be deployed in their own site collection and be referred to as a sibling site. The department/market sites can exist at the same level as main intranet and other department/market sites.
  * Modified the My Links Widget to take advantage of the user preferences functionality to better support multi-site scenarios.
  * Ability to add External Notifications for third party systems, such as Service Now, to be integrated into the notification bell for receiving external corporate wide notifications
  * Add Form Enhancements to provide:
    * Typeahead people search capability for single or multiple person selection
    * Lookup Field Item for a specific value or unique id
    * New form submission properties to allow for:
      * One submission per user or one submission per day
      * Ability to have multiple messages for a form based on the user response 
  * Provide additional headless support for SharePoint Modern site collections
  * Added several performance enhancements to address low bandwidth scenarios


## AppManager Functionality

*	**Anchor Items**:
    * Added a new Search Manager management app to provide the ability to establish search configurations for the new Search Experience. The Search Manager management app defines the global search and site/lists specific search properties to render search results for the site. 

      ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Search%20Mgr.png)

    * Added new Akumina Flow Manager management apps to provide the ability to establish polls, surveys, and other processes to complete tasks across a team and provide analytical reporting.  

      ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/AK%20Flow%20Mgr.png)
      ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Ak%20Flow%20Reports.png)

* Added a new feature to the Notification Manager management app to configure External Notifications for third party systems, such as Service Now, to be integrated into the notification bell to enable corporate wide multi-lingual notifications for the site.

  ![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Release5.5/Authagents.png)


* Activate new license keys to support External Notifications and Akumina Flow
* Added new features to the Form Manager management app to enhance frontend form submission:
     * Ability to add a typeahead search person picker to a form
     * Ability to add a look up field option to a form
     * Ability to set form submission properties on a form, to one per day or one per user
     * Ability to display multiple post back messages for a form  
* Added several AppManager Performance Improvements
