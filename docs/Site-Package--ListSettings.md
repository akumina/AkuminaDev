## Site Packages: List Settings

# Applies to
All versions of Akumina

# Site Deployer Step
The site deployer step that uses this is **listsettings**

    options listsettings

See: https://github.com/akumina/AkuminaDev/wiki/Site-Package-Overview

# Capabilities
There are several things you can do while updating the list settings, a

* noCrawl - Corresponds to the List's *Allow items from this list to appear in search results?* option, ex:
  * noCrawl="TRUE" 
* attachments - Corresponds to the list's *Attachments to list items* option
  * attachments="FALSE" 
* moderation - Corresponds to the list's *Require content approval for submitted items?* option, ex:
  * moderation="TRUE"
* majorversion- Corresponds to the list's *Create a version each time you edit an item in this list?* option, ex:
  * majorversion="TRUE"
* contentType - Sets the list's content types, with the last one being the default, ex:
  * contentType="AkuminaLanguage,ArticleComments"
* EnableRating - Corresponds to the list's *Rating Settings* - *Specify whether or not items in this list can be rated* option, ex:
  * EnableRating="true" 
* Rating - Corresponds to the list's *Rating Settings* - *Which voting/rating experience you would like to enable for this list?* option, ex:
  * Rating="ratings"

# Data
The step updates based on the path envdir/sitedefinitions/assetdirectory/ListSettings/Update.xml
The XML in this file will set properties on lists and libraries inside the SharePoint site. 

>This step updates only, it does not create. If the lists is not present, then an error will be shown.

In the xml shown below, we set various properties on lists:

    <?xml version="1.0" encoding="utf-8" ?>
    <lists>
      <list name="Apps_AK" 
        noCrawl="TRUE" 
        attachments="FALSE"
        moderation="TRUE" 
        majorversion="TRUE"
      ></list>
      <list name="AppDisplayOrder_AK" noCrawl="TRUE" attachments="FALSE"></list>
      <list name="SettingsAK" 
        noCrawl="TRUE" 
        attachments="FALSE"
      ></list>
      <list name="ArticleComment_AK" contentType="AkuminaLanguage,ArticleComments" noCrawl="TRUE"></list>    
    </lists>

In the example xml shown below, we set various Akumina lists to not be searchable:

    <?xml version="1.0" encoding="utf-8" ?>
    <lists>
      <list name="Apps_AK" noCrawl="TRUE"></list>
      <list name="AppDisplayOrder_AK" noCrawl="TRUE"></list>
      <list name="Comments_AK" noCrawl="TRUE"></list>
      <list name="DashboardDragDrop_AK" noCrawl="TRUE"></list>
      <list name="DashboardWidgetProperties_AK" noCrawl="TRUE"></list>
      <list name="DashboardWidgets_AK" noCrawl="TRUE"></list>
      <list name="Forms_AK" noCrawl="TRUE"></list>
      <list name="FormSubmissions_AK" noCrawl="TRUE"></list>
      <list name="GenericPages_AK" noCrawl="TRUE"></list>
      <list name="PageObjects_AK" noCrawl="TRUE"></list>
      <list name="PageUrls_AK" noCrawl="TRUE"></list>
      <list name="PageWidgets_AK" noCrawl="TRUE"></list>
      <list name="Persona_AK" noCrawl="TRUE"></list>
      <list name="Rail_AK" noCrawl="TRUE"></list>
      <list name="SettingsAK" noCrawl="TRUE"></list>
      <list name="Theme_AK" noCrawl="TRUE"></list>
      <list name="VersionHistory_AK" noCrawl="TRUE"></list>
      <list name="WorkflowApproval_AK" noCrawl="TRUE"></list>
  
      <list name="Images" noCrawl="TRUE"></list>
    </lists>
