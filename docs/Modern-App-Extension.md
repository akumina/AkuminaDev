---
id: Modern-App-Extension
title: Application Extension
---


### Overview

The purpose of this article will be to illustrate and explain the purpose of the Application Extension SPKG, the set up required, and the pros and cons of this package. The installation of this feature assumes the following have been met:

* Sharepoint Modern Site Collection
* Central Site with Akumina Framework V4.8 or higher ([More](/docs/AK-Central-Site-Support))
* Application Extension SPKG available via App Catalog or Local Apps for Sharepoint Library


***Pros***:
* Customization of site header/footer

# Downloads
[akumina-application-extension.spkg](#) (Coming Soon!)


## Glossary of Terms

|Name|Definition|
|---|---|
|App Extension SPKG|The Sharepoint Package of the Application Extension Client Side Solution|
|AWP|Akumina Widget Picker. More details can be found [here](/docs/Modern-SPA)|


## What is the Application Extension?

The **Application Extension** is a simple client side solution aimed towards offering customization to the Header and Footer portions of Sharepoint Modern pages. Sharepoint Modern natively supports customization of the header/footer sections of Modern pages but doesn't quite offer an easy way to go about this. To solve this problem, Akumina provides the Application Extension that can be freely customized by use of a Central Site Collection using the Akumina Framework.
It is also worth noting that this Application Extension cannot be used with the **[Akumina SPA](/docs/Modern-SPA)**. However, it can be used with the **[Akumina Widget Picker](/docs/Modern-AWP)**. Use of the Application Extension with the AWP can provide the flexibility of Sharepoint Modern Web Parts with the functionality of the Akumina Framework bundled with some design choices for certain aspects of the page.

Pictured: Sharepoint Modern Page with the AWP and Application Extension (Header/Footer areas marked in green)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_appext_homepage.PNG)


## Installation & Setup

The Application Extension is a fairly lightweight package. First, ensure that the app is available via the App Catalog or through the Site's Local Apps for Sharepoint Library and add it to the Delivery Site Collection. Next, you will need to configure the **digitalworkplace.env.js** file. The env.js file should be located under **SiteRoot/Akumina Private Library/digitalworplace.env.js**. If the file does not exist, please create one with the following contents with values modified to your needs:

```javascript
if ((typeof AkuminaModernConfiguration) === 'undefined') {
	AkuminaModernConfiguration = {
		CentralSiteCollectionUrl: "https://akuminadev02.sharepoint.com/sites/1209-1213-DEV", // Central Site from which assets are provisioned
		WidgetPicker: { // Akumina Widget Picker Settings
			ExtraJSFiles: "", // Comma delimited list of JS files to download from the central site
			ExtraCSSFiles: "", // Comma delimited list of CSS files to download from the central site
			AssetLibraryName: "" // Name of the local asset library
		},
		ApplicationExtension: { // Application Extension Settings
			ExtraCSSFiles: "", // Comma delimited list of CSS files to download from the central site
			HideSiteHeader: false, // Boolean value determining whether the modern header should be hidden
			HideCommandBar: false, // Boolean value determining whether the modern command bar should be hidden
			ShowOnlyOnSitePages: true, // Boolean value determining whether only SitePage navigation should be enabled
			AssetLibraryName: "" // Name of the local asset library
		}
	}
} 
```

After the Application Extension SPKG has been added to the site and your env.js settings have been configured, you've finished the installation for the Delivery Site.

On the Central Site, there are two views you will be configuring: **header.html** and **footer.html**. Both of these views are found on the Central Site under the following directory: **siteroot/DigitalWorkplace/Content/Templates/ApplicationExtension**. You may freely edit these files with the contents of the header and footer you desire. Examples:

Header.html
```html
<div  rel="Top Navigation" class="ak-widget" id="b3190df7-e6f8-4f0b-83c7-192e6500563e"></div>
```

Footer.html
```html
<footer class="ak-site-footer">
    <div class="ak-copyright">
        &copy; 2020 Akumina, Inc. All Rights Reserved.
    </div>
    <ul>
        <li><a class="ak-facebook">akumina facebook</a></li>
        <li><a class="ak-twitter">akumina twitter</a></li>
        <li><a class="ak-linkedin">akumina linked in</a></li>
        <li><a class="ak-instagram">akumina instragram</a></li>
    </ul>
</footer>
```

You can edit these files using a text editor or IDE of your choice or you can use the **View Manager** Management App in App Manager:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_appext_appmanager.PNG)

