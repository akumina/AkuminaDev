---
title: FAQ
id: Modern-Faq
---

### Frequently Asked Questions

## Can I use the Akumina Widgets and SPFx/Modern Web Parts together?

When using the Akumina page editing experience in the **Single Page Application** (SPA), SPFx/Modern web parts cannot be added to pages, only Akumina widgets. 

When using the SharePoint page editing experience with the **Akumina Widget Picker** and/or the **Application Extension**, both Modern Web Parts and Akumina widgets can be used.

## Where are the Assets stored?

Since Modern restricts the use of the **Style Library**, the asset files are stored in another library, named **Akumina Library** by default. In addition, the assets can be also be in a central site collection - see [More](https://akumina.github.io/docs/AK-Central-Site-Support.html). The **digitalworkplace.env.js** file, when used, is placed in the Akumina Private Library; see [More](https://akumina.github.io/docs/Modern-AWP#setup-installation).

## How do I update my widget packages to use a different library name?

We have introduced a new token {AssetLibraryName} in the **config.json** file in Akumina Release Version 4.8 that will allow it to work in both modern and classic, as shown below:

```json
    "Views": [
    {
        "Name": "default",
        Path": "/{AssetLibraryName}/DigitalWorkPlace/Content/Templates/CompanyNewsItemWidget/NewsItem.html", 
        "Id": "fd4d32ac-a205-4d76-b43f-6dc534b7daf1"
    }
```

## Is a central site required to utilize Akumina with a Modern site?

A central site is not required. However, for a production deployment, it is preferred. Please note that when using a development site, the Akumina framework and related items can be in the same site collection. Also, see [Central Site Support](https://akumina.github.io/docs/AK-Central-Site-Support.html).

## Does the central site need to be classic? 

The central site can be either Modern or Classic since a separate asset library, not the Style Library, can be used.

## How do I deploy widgets into a central/delivery site configuration? 

The 4.8 version of the site deployer provides a **centralspurl** argument that can be used to deploy widgets to the central site, see [Site Deployer V4.8](/docs/Site-Deployer-Version-4-8#install).

## I'm deploying assets into both central site and delivery sites, will I require separate packages? 

Yes - each will require its own package, see [Central Site Support](/docs/AK-Central-Site-Support#deployment-scenarios-and-packge-setup).

## How do I have widgets pull data from a site other than the current?

See [Central Site Collection Support - Widget Support for Cross site collection data retrieval](/docs/AK-Central-Site-Support.html#widget-support-for-cross-site-collection-data-retrieval).

## Where do I get the download for the Modern packages? 

The downloads are available in the Akumina Developer site, on the respective pages for the package type: 
* [Single Page Application](/docs/Modern-SPA#downloads)
* [Widget Picker](/docs/Modern-AWP#downloads)
* [Application Extension](/docs/Modern-App-Extension#downloads)

## In what version did it become available? 
The Modern support is available in Akumina version 4.8 and above. 

## How can I utilize features such as shared navigation or footers for a common look and feel?

The **Application Extension** is a simple client side solution aimed towards offering customization to the Header and Footer portions of Sharepoint Modern pages. Sharepoint Modern natively supports customization of the header/footer sections of Modern pages but doesn't quite offer an easy way to go about this. To solve this problem, Akumina provides the Application Extension that can be freely customized by use of a Central Site Collection using the Akumina Framework.
It is also worth noting that this Application Extension cannot be used with the **[Akumina SPA](/docs/Modern-SPA)**. However, it can be used with the **[Akumina Widget Picker](/docs/Modern-AWP)**. Use of the Application Extension with the AWP can provide the flexibility of Sharepoint Modern Web Parts with the functionality of the Akumina Framework bundled with some design choices for certain aspects of the page.

Pictured: Sharepoint Modern Page with the AWP and Application Extension (Header/Footer areas marked in green)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_appext_homepage.PNG)

## How can a developer add additional CSS and JS files to the site?

While Modern does allow you to add additonal CSS and JS files, the process to do so requires effort in steps and configuration. With Akumina, this can be done easily using either SPA or the Application Extension/Widget Picker, see:
* [SPA](/docs/Modern-SPA#spa-configuration)
* [Application Extension/Widget Picker](/docs/Modern-AWP#setup-installation)

## Do the app permissions required for the three different SP apps (SPA, SP Extension, Widget Selector) differ from the App Manager app? 

No – they do not require additional permissions. 

## Do all the Akumina widgets work in either modern experience (SPA or widget selector)? 

Yes – there is feature parity and the widgets are the same in either experience. 

## The Office365 suite bar has the Microsoft Search experience turned on by default – what is the best way to search an Akumina site? 

See [Modern Search](https://community.akumina.com/knowledge-base/modern-search/).

Some configuration needs to occur when items need to be searched via the Office 365 Modern search. Our solution leverages the capability of SharePoint search to adjust the URL for the search items.

![](https://community.akumina.com/wp-content/uploads/2019/10/Picture1.png)

## Are there Akumina widget equivalents to the Modern web parts? 

Yes – there is generally a comparable Akumina widget to the web parts for Modern listed here: https://support.office.com/en-us/article/using-web-parts-on-sharepoint-pages-336e8e92-3e2d-4298-ae01-d404bbe751e0#bkmk_availableparts

## How is the site deployer tooling affected for Modern? 

See [Site-Deployer-Version-4-8 - Modern Deployment](https://akumina.github.io/docs/Site-Deployer-Version-4-8#modern-deployment).

## Can I still use a CDN with the Akumina Framework in Modern? 

Yes, in fact Akumina’s Modern implementation uses a CDN by default for its Framework files.

## How do I author news articles in a Single Page Application experience?

See [Modern SPA](/docs/Modern-SPA#faqs).

## Something happened during testing/deployment and the debug console is not appearing, how do I enable the Sharepoint Edit button?

In the event that a conflicting setting, CDN issue, or code issue is preventing the Debug Console from appearing, you can open the Developer Console (F12 by default) and type the following command to re-enable the Sharepoint 'Edit' button:

```javascript
Akumina.Digispace.Utilities.ToggleModernPageEdit()
```