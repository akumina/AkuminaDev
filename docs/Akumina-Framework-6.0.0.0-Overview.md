---
title: Akumina Framework 6.0.0.0 Overview
id: Akumina-Framework-6.0.0.0-Overview
---

Release 6.0 Project Voice delivers an enhanced editorial experience by moving the content authoring and content administration experience to the front-end. AppManager will become primarily an “administrative” or “configuration” interface, rather than an “editorial experience”

The Akumina tray has been replaced with a Content Manager Rail and includes an introduction of a new “Modules” concept as well as a NEW top action bar to handle Author actions such as “Preview, Save, Publish, Submit to Workflow” to provide a unified experience across Modules.

The new Content Manager can be overlaid onto any existing installation for customers on version 5.0+ or higher, regardless of site installation type.


## Front-end Content Manager Functionality

* **Create New Module**
  * Merges the creation of Structured Content and Free Pages together. It also contains the ability to create new template pages, and new components replacing the need to create new items within content apps.
* **Pages Module**
  * To search for existing pages, organize pages into folders, manage page versions, and support deleting a page
    * Pages can now be bucketed into folders for easy management as well as driving breadcrumbs
  * Added description fields for pages and page layouts
  * Enhanced the page builder experience with the ability to support row level CSS on a page container or widget container
  * Enhanced Quick content edit support to seamlessly edit content
  * Added delete page capabilities

* **Structed Content Module**
  * For editing content on pages and components for Author, Slider, and Curated app types. Provides the ability to create content from structured templates or freeform pages utilizing the page builder experience platform
  * Introduction of Editorial Pane and Non-Editorial Pane field organization
    * Editorial Pane – primary view of “Rich Text” or “Priority” fields (configurable)
    * Non-Editorial Pane – Supporting tabs for properties, search criteria, personas, permissions, and engagement for all content (configurable)
  * Added cross device page preview for viewing content on various sized devices (mobile, tablet, desktop) before content is published
  * Added version history capability for content
* **Asset Library Module**
  * For organizing documents, images and video libraries, or any library content across the sites, support file and folders hierarchy, ability to drag and drop, crop/resize, and define asset library properties
* **Menus Module**
  * To define all menus and hierarchies established for the site for Quicklinks app type
* **Broadcast Center Module**
  * Incorporated the Broadcast Center Module to create and send messages and announcements to a larger group of users via the notification bell, email, and site alerts
* **Workflow Module**
  * Added a Workflows Module for content reviewers to approve/reject content based on established content workflow moderation capabilities
  * Enhanced Content Workflow capabilities using the new Akumina Flow
* **Editorial Notification Module**
  * Added an Editorial Notifications Module to provide notifications to content editors for required tasks and approvals

  

* Incorporated the Debug Module (Akumina Debugger) to easily show properties on the page and assist in troubleshooting issues (CTRL+UP arrow)
* User’s Avatar (in the rail) of the current logged in user providing access to:
  * Help Center to provide quick access to valuable links to user and developer documentation sites and training videos
  * Settings for users to define their preferred languages for UI and content display, specify date, time zone display preferences, and specify editor preferences to enable the CKEditor version and auto-save content functionality.
    * The UI of the Content Manager now supports the following 4 languages as a default: English, Spanish, French, German (additional languages can be added upon request)
  * Version number to provide current core framework version
* Ability to modify content module and top action bar display based on authoring permissions
* Added a global site picker to switch sites within the Voice content module
* Added a status display in top action bar for editorial state for new, pending, saved, published including warning messages for unsaved content. The top bar actions will vary based on the module and user permissions
* Added a low-resolution status if using a lower than optimal resolution of 1920px by 1080px
* Added Auto Save capability within Structured Content and Menus Module
* Added new capabilities for field sorting, editorial and non-editorial panels in tabs, and back button flow across the Modules

## Front-end Core Functionality

* Added a new HTML Tab Widget to support the creation of tabs containing HTML blocks
* Enhanced error logging with application insights logs to appropriate content
* Added several performance enhancements

## AppManager Functionality

* Ability to configure the display of the Content Apps TAB in the event you want to maintain this feature until your team is completely moved over to the front-end Content Manager experience.
* Added a new Module Permissions Management App to provide the ability to configure editor permissions for each Voice module and display only permissioned modules in the front-end rail
* Added new Content App Settings to configure the content author experience to support content app usage, description, and managing editorial and non-editorial property fields
* Added a new Management App to support custom field views for content authors to be able to select their own custom views when editing content to streamline the authoring experience – a developer can register new field views for use within the new front-end Content Manager.
* Added several performance improvements
   
## Headless Functionality

* Introduced a new UI for manipulating the ImplementationVersion,FrameworkVersion, etc. without the need to go into Keyvault


## Developer Functionality

* Lots of nice bells and whistles for developers
* Fontawesome 6 support
* Added new Ckeditor 5 plugins
* Added new react components and controls
* Added authoring event actions for client customizations to hook to an event when content is saved/published
* Added ability to set custom UI for field types for single line of text, hyperlink, etc.