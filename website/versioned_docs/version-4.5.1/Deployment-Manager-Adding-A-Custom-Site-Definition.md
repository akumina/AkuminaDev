---
id: version-4.5.1-Deployment-Manager-Adding-A-Custom-Site-Definition
title: Adding A Custom Site Definition
original_id: Deployment-Manager-Adding-A-Custom-Site-Definition
---

# Adding a Custom Site Definition
The Akumina Framework permits the integration and deployment of custom site definitions onto SharePoint Publishing Sites.

## Prerequisites
* A publishing site collection in Office 365
* AppManager App (hosted on Azure) installed on your site collection
* AppManager Admin apps set accessible to a user group within the site
* The InterChangeSDK project

## Adding SiteProvisioning.SampleSite To AppManager
Within the AppManagerSDK project will be a project called SiteProvisioning.SampleSite. This is a basic example of a custom site definition we can deploy with the Deployment App. 

Adding the SiteProvisioning.SampleSite project with the Deployment App can be done in a few simple steps.

1. Build the SiteProvisioning.SampleSite project
2. Copy the SiteProvisioning.SampleSite.dll from $\InterChangeSDK\Main\Src\SiteProvisioning.SampleSite\bin\Debug over to Akumina.Interchange.Web\bin within your instance of AppManager (use FTP if you’re hosting it on Azure).
3. Copy the $\InterChangeSDK\Main\Src\SiteProvisioning.SampleSite\SiteDefinitions folder over to Akumina.Interchange.Web within your instance of AppManager
4. Log into AppManager, go to the Deployment App within the Management Apps tab. You should now see “SampleSite” appear in the dropdown.
Any custom site definitions can be added to the Deployment App in the same manner.

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Site Definition XML](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)