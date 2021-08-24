---
id: AK-CDN-Information
title: Akumina CDN Information
---


### Overview
While the Office 365 CDN is the most used, any CDN can be used with the Akumina platform. Any such CDN must have certain data and configurations to be used successfully.

### CDN access
The preference would be for the CDN to be publicly accessible, as this will result is much faster load times for the assets therein. Most of the traffic coming to the CDN will be referred from the Akumina driven SharePoint site, so that domain must be enabled or whitelisted on the configuration:
* Referrer: tenant.sharepoint.com

> NOTE: individual CDN configurations will vary

Content in public origins within the Office 365 CDN is accessible anonymously and can be accessed by anyone who has URLs to hosted assets. Because access to content in public origins is anonymous, you should only use them to cache non-sensitive generic content such as JavaScript files, scripts, icons, and images. The Office 365 CDN is used by default for downloading generic resource assets like the Office 365 client applications from a public origin.
Private origins within the Office 365 CDN provide private access to user content such as SharePoint Online document libraries, sites, and proprietary images. Access to content in private origins is secured with dynamically generated tokens so it can only be accessed by users with permissions to the original document library or storage location. Private origins in the Office 365 CDN can only be used for SharePoint Online content, and you can only access assets through redirection from your SharePoint Online tenant.

### What goes in the CDN
The out of the box Akumina installation will require the artifacts in the default installation library path. The path is thus:
* Classic site – **Style Library**
* Modern site – **Akumina Library**

The artifacts are html, CSS, JavaScript, font, and image files, and are shown in the following images:
**Style library/DigitalWorkPlace/JS**
 
![JS folder](https://akumina.azureedge.net/wiki/training/images/cdn/js-folder.png)
 
**Style library/DigitalWorkPlace/CSS**

![CSS folder](https://akumina.azureedge.net/wiki/training/images/cdn/css-folder.png)

**Style library/DigitalWorkPlace/fonts**

![fonts folder](https://akumina.azureedge.net/wiki/training/images/cdn/fonts-folder.png) 

**Style library/DigitalWorkPlace/icons**

![icons folder](https://akumina.azureedge.net/wiki/training/images/cdn/icons-folder.png) 

### General Guidance for CDN
The SharePoint library with the Akumina assets in it should be CDN enabled, this would mean either:
* Classic site – enable the **Style Library** path
* Modern site – enable the **Akumina library** path

Example in the office 365 CDN:
> Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/{SiteCollectionName}/Akumina Library

The following file extensions should be CDN enabled:
* CSS
* EOT
* GIF
* ICO
* JPEG
* JPG
* JS
* MAP
* PNG
* SVG
* TTF
* WOFF
* WOFF2
* HTML
 
Example configuration, using the Office 365 CDN:
> Set-SPOTenantCdnPolicy -CdnType Public -PolicyType IncludeFileExtensions -PolicyValue "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,WOFF2,HTML"

For any images that are not internal to the organization, the library they are in should be CDN enabled
* When displaying the images in the site, a handler to rewrite the path to use the CDN Should be used.
Since nearly all CDNs use the HTTP/2 protocol for improved compression and HTTP pipelining, having multiple smaller files is preferred, for example for downloading the widget JS files.

See the configuration documentation at:
*	https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#classic-sites-using-the-office-365-cdn
* https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#modern-sites-using-the-cdn

### Resource governance
The Microsoft Office 365 public CDN automatically brings over published files from the **Akumina Library** in the central site. Note, there is **no** ability to upload or modify files directly in the CDN path. Since the files are present in SharePoint, we can use SharePoint governance to control changes to what goes into the CDN.

The following are common ways to apply governance to the files that go into the CDN:
*	Permissions on the site collection - particularly if using a central/delivery site model, restrict whom has access to edit in the central site collection. It is recommended that the least restrictive permissions be used. This is still subject to the guidance here https://community.akumina.com/knowledge-base/setting-permissions-on-core-supporting-lists/
*	Permissions on the Akumina Library - Similar to permissions on the site collection, assign least restrictive permissions to the Akumina Library so that unauthorized users are not able to add or edit files.
*	Approvals on the Akumina Library - Since only published files are transferred to the Microsoft CDN, then seperating out the ability to add/edit and the ability to approve files provides an additional check against unauthorized use.
*	Versioning on the Akumina Library - Enable to provide an audit trail on whom and when changes were made.
*	Alerts for add, edit and delete actions in the library - This provides a more proactive ability to be notified of various actions occuring in the Akumina Library - and can be setup to notify either ad hoc or in a summary.
