---
id: Deployment-Manager-Core-Step-Classes
title: Core Step Classes
---

# Core Step Classes
We include the following classes that implement the ISiteProvisionerStep interface within the Akumina.SiteProvisioning.CoreSteps.dll
* AddApps.cs – Adds Apps to Interchange.
* AddContentFilesToStyleLibrary.cs – Adds the contents of Branding/Content to AssetDirectory/Content inside of the Style Library
* AddControlsToPages.cs – Adds the content outlined in PageContent/pages.xml to the designated web part zones
* AddCSSFilesToStyleLibrary.cs – Adds the contents of Branding/CSS and Branding/SCSS to AssetDirectory/CSS and AssetDirectory/SCSS, respectively, within the Style Library
* AddIconFilesToStyleLibrary.cs – Adds the contents of Branding/icons to AssetDirectory/icons within the Style Library
* AddImageFilesToStyleLibrary.cs – Adds the contents of Branding/img, Branding/images, and Branding/content-images to AssetDirectory/img, AssetDirectory/images, and AssetDirectory/content-images, respectively, within the Style Library
* AddJSFilesToStyleLibrary.cs – Adds the contents of Branding/JS to AssetDirectory/JS within the Style Library
* AddMasterPageFiles.cs – Adds the master page html file from the MasterPages folder to the Master Page gallery on the site, generates an associated .master file, and sets the Site Master Page to the .master file.
* AddPageLayouts.cs – Adds the AkuminaIgnite content type to the site. Adds Page Layouts to the site.
* AddPages.cs – Adds pages to the Pages library
* CheckPrereqs.cs – Checks to see if Publishing features are activated on the SharePoint site.
* EnsureAssetDirectoryExists.cs – Ensures that the AssetDirectory exists with the SiteDefinitions folder
* ProvisionLists.cs – Adds lists to the site
* ResetMasterPageInheritance.cs – Resets master page inheritance
* SetSecurityOnSite.cs – Creates default permissions groups on a site
* SetVersion.cs – Creates the Version_AK list and stores the SiteCreator version within
* UpdateListItems.cs – Updates items within existing lists
* UpdateSearchDisplayTemplates.cs – Adds search display template to masterpage catalog
* UploadFiles.cs – Uploads files to SharePoint libraries
* ValidateUserSettings.cs – Enforces user input requirements within the Deployment view
These steps can be created by including the Akumina.SiteProvisioning.CoreSteps reference within your C# class inheriting the SiteProvisionerSiteBase class and then adding the step as usual. Below we use the CoreSteps dll to include the EnsureAssetDirectoryExists.cs step

```c#
using Akumina.SiteProvisioning.CoreSteps;
```

Within Steps:
```c#
_steps.Add(new EnsureAssetDirectoryExists());
```

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)
* [Supported Tokens](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Supported-Tokens)