---
title: SPA Updates and Deploying to multiple sites
id: Site-Deployer-updatespaproperties-option
---

# Applies to
Akumina Site Deployer

# Overview
The *updatespaproperties* option will update the Single Page Application (SPA) for one or more sites.

# Options
The step is triggered in the options by the keyword *updatespaproperties*.

# Sites
The option uses a list of site present in the path **SiteDefinitions\MultiDeployment\inventory.sites.json**. The format of the JSON file is below, note how additional sites can be added:

```
[
    {
        "url": "https://tenant.sharepoint.com/sites/site1"
    },
    {
        "url": "https://tenant.sharepoint.com/sites/site2"
    }
]
```

# SPA properties
To update an SPA property, you must first identify it. The following is a table of the common properties for the SPA:

| Property | Value |
| ------------- |---------------------|
| AkuminaSiteCollectionURL | Ex: https://tenant.sharepoint.com/sites/frontend |
| AkuminaFrameworkVersion |  Ex: 4.8.2007.1514 |
| AkuminaApplicationURL |  Ex: https://appmanager.onakumina.com |
| AkuminaApplicationQueryKey | The Akumina Query Key GUID |
| JSFilesToWaitFor | Ex: digitalworkplace.custom.js |
| JSFilesToLoad |  |
| CSSFilesToLoad |  Ex: digitalworkplace.addon.min.css |
| IsDeliveryMode | true or false |
| LoadLocalEnvFile | true or false |
| MasterPageView | Ex: VirtualMasterPageFoundation.html |
| EnableAzureAD | true or false |
| EnableDevelopmentMode": true or false |
| GraphSubscriptionID | |
| EnablePersonas": true or false |
| AppManagerSPAppId | Instance ID of the App Manager app |
| ImplementationVersion |  Ex: 0.2 |
| EnableAutoLoginToAppManager": true or false |
| HideSiteHeader": true or false |
| HideCommandBar": true or false |
| TemplateUrlPrefix | Ex: https://publiccdn.sharepointonline.com/{tenant}.sharepoint.com/sites/{sitecollection} |
| RemoveSiteHeaderFromDOM": true or false |
| ShowLoadingState": true or false |
| LoadLegacySPJSFromAkumina": true or false |

    If there is another property you want to update, then inspect the view source for a page with the SPA on it, and look for "Akumina Single Page Application". Note the values in the table above, and locate the property you want to update. Copy the property name, and set its value.


# CICD/Batch
When using a CICD pipeline or a batch file, the usage is slightly different from the traditional sitedeployer. The username/password must be set, and any properties you want to update. The following exampe will update the *AkuminaApplicationURL*, *AkuminaFrameworkVersion* and *GraphSubscriptionID* properties for the list of sites in inventory.sites.json:

```
SET username=
SET passwd=
SET appmgrurl=
SET cdnversion=4.8.2007.1514
SET tenantid=
SET envdir="C:\Akumina\SPAUpdater"

cd tools
Akumina.sitedeployer.exe options updatespaproperties spaproperties "{\"AkuminaApplicationURL\":\"%appmgrurl%\",\"AkuminaFrameworkVersion\":\"%cdnversion%\",\"GraphSubscriptionID\":\"%tenantid%\"}" multideployment true spuser %username% sppassword %passwd% envdir %envdir%


pause
```
Changing what is passed in will alter what is updated - The following example will update the *AkuminaApplicationURL*, *AkuminaFrameworkVersion* and *JSFilesToWaitFor* properties for the list of sites in inventory.sites.json:

```
SET username=
SET passwd=
SET appmgrurl=
SET cdnversion=4.8.2007.1514
set jsfilestowait=digitalworkplace.custom.js
SET envdir="C:\Akumina\SPAUpdater"

cd tools
Akumina.sitedeployer.exe options updatespaproperties spaproperties "{\"AkuminaApplicationURL\":\"%appmgrurl%\",\"AkuminaFrameworkVersion\":\"%cdnversion%\",\"JSFilesToWaitFor\":\"%jsfilestowait%\"}" multideployment true spuser %username% sppassword %passwd% envdir %envdir%


pause
```
