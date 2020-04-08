---
id: Modern-SPA
title: Single Page Application
---

### Overview

The purpose of this article will be to elaborate upon and illustrate the usage, configuration, and implementation of the Akumina Modern Single Page Application. The installation assumes the following assets are provisioned:

* Central Site with Akumina Framework Version 4.8 or higher ([More](/docs/AK-Central-Site-Support))
* Delivery Site created in Sharepoint Modern
* Project Structure is created

# Downloads
[akumina-single-page-application.spkg](#) (Coming Soon!)

## Glossary of Terms

|Name|Definition|
|---|---|
|SPA SPKG|Akumina Single Page Application Sharepoint Package|
|Akumina SPA|The Single Page Application Framework loaded into Sharepoint, providing Akumina-native functionality to the Modern Experience|
|Akumina Library|The Modern version of Style Library|
|Akumina Private Library|A Library holding digitalworkplace.env.js and any other files that should not be synced to CDN services|
|digitalworkplace.env.js|Environment JS file holding environment-specific variables and settings|


## What is the SPA?

The Akumina Modern SPA, henceforth referred to simply as "the SPA", attempts to implement features commonly seen in modern Javascript Frameworks such as React and Angular by handling page routing to minimize on load times and increase performance by simply re-rendering the page contents within a master page template.

For context, let's review the Sharepoint Classic implementation with Akumina. Currently, Sharepoint Classic supports Master Page templating. Within this Master Page, the contents of each individual page are rendered. Within the page contents, widget views are rendered. This gives us a nice parent-child relationship:
```
Master Page (Virtual Page)
     └──Page Content (Page Widget)
          └─Widget Views
```

This implementation is natively supported by Sharepoint Classic. The downside of this, however, is that when a user navigates to a new page, all contents of the page must be retrieved. Since the Master Page is technically static data, it doesn't change between pages, only the contents of each individual page are changed. The SPA attempts to improve upon this design by implementation the Single Page Application paradigm. The parent-child relationship has not changed from a high level view but certain aspects have.

Additionally, the SPA changes the implementation of pages in Sharepoint. Previously, there were two options for individual pages: Normal aspx pages and Virtual Pages. Unfortunately, Virtual Pages also relied on physical aspx pages. The reason for this is the VirtualPageWidget needed to be on a physical page and would read the url of the page to determine which Virtual Page it was referencing.
The SPA, however, disconnects the Virtual Page needing its own physical aspx page by acting as a proxy for *all* Virtual Pages. The **akumina.aspx** page comes loaded with the **VirtualPageWidget** already on it. The custom navigation used for the site allows the widget to read from the URL to determine which page contents to load. This is a noticeable impact on performance, as the master page, the physical page, the framework, and the widget are only loaded once until you navigate away from the site entirely.

Lastly, the Akumina SPA supports the ability to inject any custom JS file located on the Central Site, even if the JS file is not being used by the Central Site. The SPA has a setting to download custom JS files defined as a comma-separated list of values which is detailed below.


## Installation & Setup

To begin the Modern setup, create a new Communication Sharepoint site from the Office 365 Sharepoint landing page. Once the site is created, navigate to Site Contents and keep the tab/window open. You will need it for later. From the Site Contents page, add a new app. Choose the Akumina Interchange app and wait for it to install on the site. This can take up to a few minutes to complete. 
Once Interchange is installed on the site, open it up to launch App Manager. The initial load for App Manager can take up to several minutes as it creates necessary lists, document libraries, and assets for first time use. You'll know when it's done as you will arrive on the App Manager landing page.
Next, you will need to verify the SPA SPKG is available to the site collection. This may require assistance from your Sharepoint Administrator. 

> For information on how to add to the app catalog, see [https://docs.microsoft.com/en-us/sharepoint/administration/manage-the-app-catalog#add-apps-to-the-app-catalog](https://docs.microsoft.com/en-us/sharepoint/administration/manage-the-app-catalog#add-apps-to-the-app-catalog)

The SPA SPKG should be available from the App Catalog available to your site. If your site collection uses a local catalog, you will need to enable the "**Apps for Sharepoint**" Library, upload the spkg to the site, and trust it before continuing. You can easily check this by adding a new App to your site collection from the Site Contents page:

From App Catalog
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spkgappcatalog.PNG)

From Local Catalog
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spkglocalcatalog.PNG)

Once that is finished, we're ready to start deploying. From your Akumina Project Directory, make note of the Lists, Content, Content Types, and Taxonomy elements you will need and format the appropriate XML files accordingly.

Please note that there is an order of operations in deploying these elements detailed below. If you did this out of order, check the bottom of this article for troubleshooting tips and advice:

1. Taxonomy (addtermsets)
2. Lists (lists)
3. List Content (updatelists)

The **akumina.sitedeployer.config.json** file should hold the above options indicated in parenthesis. Be sure to deploy in the above order.


Now that Interchange, its assets, and our custom data are loaded on the site, we're ready to start deploying the Modern assets to the site. Each step below should be executed in order:

1. modernprovisionapp

This step looks through the App Catalog available to the site to find the Akumina SPA SPKG and adds it to the site. This SPKG file is the core of the Single Page App experience that Modern uses. This is mandatory.

2. modernpages

This step will add the **akumina.aspx** page to the Sharepoint site. While this may seem to just be an aspx page, the akumina.aspx page will, in theory, be the only physical aspx page required for the Akumina SPA Modern experience. This page serves as the driving force for the Virtual Page process.

3. uploadfiles

This step is very important. In your Akumina Project structure, you should have the following path: [<projectname>\build\sitedefinitions\\\<namespace>\UploadFiles\Style Library\DigitalWorkPlace\Content\Templates\Core]. In addition to this, there should be a file there named something along the lines of **VirtualMasterPage.html**. Running the deployer with the uploadfiles option set will deploy this file. However, be sure the *Akumina.Digispace.ConfigurationContext.PageDeliveryUrl* parameter is set your classic site.

Once the deployer finishes, navigate to your classic site. Go to Site Contents and open the **DigispaceConfigurationIDS_AK** list. You should see an entry named "VirtualMasterTemplate". If you do not see that entry, just create one. Set the value of the "**VirtualMasterTemplate**" key to the name of the Virtual Master Page HTML file you just deployed. You will need to refresh the [Configuration Cache](/docs/AK-Configuration-Context) for these changes to take effect.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_digispaceconfig.PNG)

Deploy your Virtual Page file to the new Modern site (using the *virtualpages* step of the site deployer). Once finished, you can verify the path to the page under PageUrls_AK:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_pageurls.PNG)

Depending on how your site(s) are set up and configured, you may opt to serve Akumina Framework files from a shared CDN instead of a custom, remote Sharepoint site. To enable this setting, set the following variable to 'true' in your **env.js** file:

```javascript
Akumina.Digispace.ConfigurationContext.UseFrameworkCDN = true;
```


## Implementation Changes

# Virtual Master Page

It's important to note that Sharepoint Modern *does not* support the Master Page templating feature of Sharepoint Classic. In its stead, Akumina deigned it prudent to provide this functionality. The **Akumina Virtual Master** Page is a JSON file stored on the Central Site that defines the Master Page of the Delivery Site. Within this master page, the contents of each page are then injected:

/Style Library/DigitalWorkPlace/Content/Templates/Core/VirtualMasterPage.html
```html
<div id="ak-master">
    <div class="ak-main-nav-wrapper" id="ak-header">
        <span class="ak-main-nav-trigger">
        Main Menu
        </span>
        <nav class="ak-main-nav">
            <div id="897e0bd4-fdae-405c-aa09-fce6b57ad5ae" class="ak-widget">
            </div>
        </nav>
    </div>
    <div class="ak-page-wrapper" style={{'margin':'150px','background-color':"#FFAA00"}}>
    {pageComponent}
    </div> 
</div>
```

This page must be configured in the Central Site in order to be read and used on the Delivery Site. The **DigispaceConfigurationIDS_AK** list must have a key named [VirtualMasterTemplate] with the name of the Virtual Master Page Template file. The SPA will look in the above location for the file. For more information, please visit the [Configuration Context Overview](/docs/AK-Configuration-Context) page.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spavmp.png)

# Delivery Site

To continue with the changes made in Sharepoint Modern, the Delivery Site does not use the Style Library document folder. This is due to increased security being placed on the system folder. To work around this, a new asset library has been created named **Akumina Library**. Effectively, Akumina Library is the Modern Style Library. All Akumina Assets will be placed within this folder.

Of those assets, one of which is required on the Delivery Site: digitalworkplace.env.js. To put it simply, the env.js file contains settings specific to the individual site. For example, setting custom values on ConfigurationContext, UserContext, window objects, etc, can be placed within digitalworkplace.env.js. This file needs to be placed in the root of a different Document Library: **Akumina Private Library**.

Only one physical aspx page is required to be on the Delivery Site: **akumina.aspx**. This page is effectively the driving force behind the SPA, aside from the SPA SPKG itself, of course. This page is located in your project structure, under the following path:

/SiteDefinitions/ClientNamespace/ModernPages/akumina.json

The json file is processed during the "modernpages" Site Deployer option and outputs the appropriate aspx page on the site. For more information on Site Deployer options, please visit the [Site Deployer](/docs/Site-Deployer-Version-4-5) article.

Since **akumina.aspx** is the only physical page required on the site, where does the page content come from? The answer is simple: Virtual Pages. The contents of each individual page is stored as a Virtual Page in the normal convention. If you navigate to **akumina.aspx**, it will automatically look for a virtual page with a url of home.aspx.


## SPA Configuration

Once the pre-requisites are on the site and the SPA has been added from the app catalog, we're ready to start configuring the application. Navigate to the akumina.aspx page. By default, the SPA will hide certain Sharepoint Modern elements to provide a fully customizable look and feel, however, we will need to enable a specific element. Click on the Akumina System Tray on the bottom and open the Debug Panel. From the Debug Panel, click on the **Modern** tab and enable the **Toggle Command Bar** option. Close the Debug Panel and click on the Edit button in the upper Right. You'll see the following settings:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spasettings1.PNG)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spasettings2.PNG)
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spasettings3.PNG)

**Note**: The edit button can also be enabled by typing the following command into the Developer Console:

```javascript
Akumina.Digispace.Utilities.ToggleModernPageEdit()
```

An explanation of these settings follows:

|Setting|Description|
|---|---|
|Akumina Framework Version (For CDN)|This is the version of the Akumina Framework you'd like to use if you choose to source your Framework files from the CDN.|
|Akumina SiteCollection URL|This is the URL of the Central Site from which most assets are retrieved from.|
|Akumina Service Hub URL|This is the URL of App Manager on the Central Site. This value is a property that can be found on the Debug Console under ConfigContext as "**InterchangeURL**".|
|Akumina Service Hub QueryKey|This key is required for App Manager endpoints. This is also found on the Debug Console under ConfigContext as "**InterchangeQueryKey**".|
|Akumina App Manager Sharepoint ID|ID of the Sharepoint app associated with the current Delivery site|
|Implementation Version|Increment this to force the getwidgetjs bundle to refresh for all users, great to use when rolling out updates to your widget code. e.g: 1.0, v1.0, 040120|
|Enable Azure AD|Enables Azure AD services for the current site.|
|Enable Development Mode|This will flag the Framework to individually request JS files instead of bundling them together. For performance, we recommend disabling this in production environments.|
|Enable Personas|Performance option to disable Persona filtering if the feature is not being used|
|Download env.js from current site|If this option is checked, the SPA will read the contents of **digitalworkplace.env.js** from the current site.|
|Public Library name of Central Site|The library in which assets are stored in the central site. As of writing this, this is easily determined by the version of Sharepoint being used. If classic, **Style Library**. If Modern, **Akumina Library**. Please note that space characters need to be URL encoded as %20.|
|Public Library name of Current Site|Same as above, except for the current (Delivery) site. This feature has not been implemented yet.|
|Private Library to load env.js from|This is the name of the Document Library containing the digitalworkplace.env.js file. As part of convention, we recommend naming the library "**Akumina Private Library**". Additionally, space characters need to be encoded here as well as %20.|
|Comma delimited list of JS files to load before INIT|This is a list of critical JS files to retrieve and execute from the Central Site before INIT is called on the Delivery Site. For example, you may have a custom JS file to hold global functions or branding logic named ClientCustom.min.js. This file would be part of the list.|
|Comma delimited list of JS files to load|This is the same as the previous option except the files are not guaranteed to be loaded before the Framework kicks off.|
|Comma delimited list of CSS files to load|This is the same as the previous option except for CSS files. There is no guarantee on when the CSS file is loaded.|


Once your options are set, click Save to persist your changes. If you have a Virtual Page deployed with a PageUrl set to home.aspx and have generated the Page Cache (please regenerate the cache if you have not done so), you should see your page load with the defined Virtual Master Page and the contents of the home.aspx Virtual Page within it.


## Troubleshooting

In the event that you run into train-stopping errors or exceptions, this section should help you navigate the most common problems. Of course, if you run into a problem that isn't listed here, please reach out to your Akumina Resource for further assistance.

* When querying a Sharepoint List, I encounter a "Field or Type is not installed correctly" exception

This problem is commonly caused by executing installation steps out of sequence. This is not unique to Modern but does pertain to Lists, Fields, Content Types, and Taxonomy in general. Using the deployer, if you were to create a List that has a Managed Metadata field but the Taxonomy in question didn't exist, Sharepoint will instead default it to an empty value. This commonly causes problems when querying the list.

Solution: Thankfully, you should run into this fairly early in development and testing. Simply delete the Managed Metadata column and recreate it after the Taxonomy has been deployed. You can add the field manually or re-run the deployer tool to do so. 
If using the deployer, navigate to Site Contents and expand the ellipses on the List. Delete the list, and run the deployer again with "termsets", "lists", and "updatelists" options enabled.

* When navigating to a page, I encounter a "Virtual Page not found" exception

The common reason for this error is the Page Cache not being updated. Open App Manager in the environment that the Virtual Page is stored in, so either from Classic or Modern, then click on Management Apps, then Widget Manager, and click on the Cache Page Objects button. Once the process finishes, go back to the Virtual Page producing the error, open the Debug Console to refresh the cache, and reload the page.

If that doesn't solve your problem, we'll have to dig a little deeper. First, navigate to Site Contents and open the following two lists: GenericPages_AK and PageUrls_AK. Both lists have a "PageUrl" field. Make sure these two fields are matching for the given page and use this as an opportunity to verify the URL you're navigating to. Additionally, the PageId values should also match between the entries in the two lists.

Lastly, verify the source of the Virtual Page and whether Delivery Mode is enabled in the Akumina Modern SPA settings. On any Site Page, open up the Debug Console, navigate to the Modern tab, and check the box for "Toggle Command Bar". Close the Debug Console and click on the "Edit" button that appears in the upper right corner of the page. Halfway down the settings pane, you'll see the "Delivery Mode" checkbox.

If these steps do not solve the problem, please reach out to your Akumina representative or admin for further assistance.

* I'm encountering a "Could not find a part of widget" error in the Console window

This problem can happen for a multitude of reasons but we will discuss the most obvious and common reasons.

Firstly, consider the structure of you widget. This error has been seen on a client site in which the JS for certain widgets was stored in a global JS file that was not added to the comma delimited list of JS files to load before INIT. For example, if my HelloWorldWidget JS is located in CustomClient.min.js and the file is not loaded before INIT, this error will occur.
Additionally, verify the location of the widget JS. The SPA will always look in the same general structure:

CentralSite/LibraryName/DigitalWorkplace/js/

Where CentralSite is the value of the "Akumina SiteCollection URL" property and LibraryName is the value of the "Public Library name of CENTRAL SITE" property.

If your problem still hasn't been resolved, we highly recommend reaching out to your Akumina representative with as much detail about the problem as possible.


* I'm encountering a "List does not exist" error in the Console window

This problem is caused for one of two reasons:

1) Your widget is hard-coding values, such as URLs
2) You did not deploy the list to the Delivery Site

For #1, you need to make your widget code configurable and, optimally, read from global settings such as the ConfigurationContext object. Avoid hard-coding as much as possible.

For #2, this is also dependent on widget code to a certain extent. However, try as we might to future-proof as much as possible, we do not expect our clients or customers to write code for the unknown future. It is possible to alter your widget code to pull from the Central Site instead of the Delivery Site. Alternatively, simply migrate the list to the Delivery Site.

## Routing

The Akumina Modern SPA features two defined methods of handling routing. It is important to understand the pros and cons of each as well as understand the situations in which you would use one over the other.

### SPA Link

The SPA Link method aims to effortlessly leverage the benefits of the Akumina Modern SPA's built-in routing functionality with the ease of implementation. This method can be used on any page that features routing to another page. 

Furthermore, the SPA's custom navigation feature also implements its routing functionality on custom code. For example, a normal anchor tag, when clicked, will not emulate the SPA custom routing feature. However, by adding the **{{IsSPALink}}** placeholder to your anchor tag, the Framework will detect the presence of SPA-style navigation and begin routing:

```html
<a href="{{AddSPALink Url}}" class="{{IsSPALink}}">Click Me</a>
```

The SPA's custom navigation functionality *does* support the browser's back/forward buttons. This is a common concern in any framework or application featuring SPA-style routing.


### Custom Taxonomy Routes

Custom Taxonomy Routes are a style of routing that assigns an alias to a route. An example of this would be to hide the internal name of a list or structure from normal users or to make it more human readable. Consider the following:

*https://tenant.sharepoint.com/sites/MySite/SitePages/akumina.aspx#/FoundationNews/en-US/MyNewsArticle*

The component, FoundationNews, is indicative of its use and intent, however, it could also be made more user friendly. What if we could assign an alias to that component?

1) Navigate to Site Contents
2) Open the **TaxonomyPageRoutes_AK** list
3) Locate the "FoundationNews" row and change the "Title" field to your custom name, we'll name ours CustomRoute:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spataxonomypageroutes.jpg)

4) Clear the Configuration Cache (See [Config Context Caching](/docs/AK-Configuration-Context#caching) for more info)
5) Clear browser cache and reload the site

To test this, navigate to the *News* page and open a FoundationNews news article. You can now replace the FoundationNews portion of the URL with your custom alias, 'CustomRoute' in our example. Both URLs will work:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spataxonomypageroutesarticle.jpg)


## FAQs

### How do I author news articles in a Single Page Application experience?

The same as before - The news articles are authored via the content app in App Manager. The SPA uses a page route to determine the page to show.