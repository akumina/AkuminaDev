---
title: FAQ
id: Modern-Faq
---

### Frequently Asked Questions

## Where are the Assets stored?
Since Modern restricts the use of the Style Library, the asset files are stored in another library, usually named Akumina Library. In addition, the assets can be in either the central site collection or in a CDN, depending on type. The digitalworkplace.env.js file (when used) is placed in the Akumina Private Library; see https://akumina.github.io/docs/Modern-AWP#setup-installation.

## Is a central site required? 
A central site is not required. However, for a production deployment it is preferred, but when using a development site the Akumina framework and related items can be in the same site collection. 

## Does the central site need to be classic? 
The central site can be either Modern or Classic 

## Where do I get the download the Modern packages? 
The downloads are available in the Akumina Developer site, on the respective pages for the package type: 
* Single Page Application - https://akumina.github.io/docs/Modern-SPA#downloads 
* Widget Picker - https://akumina.github.io/docs/Modern-AWP#downloads 
* Application Extension - https://akumina.github.io/docs/Modern-App-Extension#downloads 

## In what version did it become available? 
The Modern support is available in Akumina version 4.8 and above. 

## What is the Application Extension?

The **Application Extension** is a simple client side solution aimed towards offering customization to the Header and Footer portions of Sharepoint Modern pages. Sharepoint Modern natively supports customization of the header/footer sections of Modern pages but doesn't quite offer an easy way to go about this. To solve this problem, Akumina provides the Application Extension that can be freely customized by use of a Central Site Collection using the Akumina Framework.
It is also worth noting that this Application Extension cannot be used with the **[Akumina SPA](/docs/Modern-SPA)**. However, it can be used with the **[Akumina Widget Picker](/docs/Modern-AWP)**. Use of the Application Extension with the AWP can provide the flexibility of Sharepoint Modern Web Parts with the functionality of the Akumina Framework bundled with some design choices for certain aspects of the page.

Pictured: Sharepoint Modern Page with the AWP and Application Extension (Header/Footer areas marked in green)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_appext_homepage.PNG)