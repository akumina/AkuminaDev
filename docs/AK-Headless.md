---
id: AK-Headless
title: Headless
---


### Overview

The purpose of this article will be to provide the reader with a general, high-level overview of the Headless implementation as well as offer detailed installation instructions and details to infrastructure changes when compared to a normal App Manager installation.


## What is Headless?

A “headless” development approach allows developers to use the presentation framework in Akumina’s Employee Experience Platform and develop outside of Microsoft SharePoint’s runtime for faster innovation and customization.
What do we mean by headless?
Headless (or decoupled) development means separating where content is stored and edited from where it is delivered.
Akumina’s front-end technology is able to run within and outside of SharePoint. By delivering digital employee experiences in Microsoft Azure, enterprises have more control over the back-end architecture and scaling, leading to better performance and security. And Akumina’s EXP delivers a flexible, unrestricted path to faster development and integration.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_1.png)
 
## Benefits of a headless approach

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_2.png)
 
Get all the best of SharePoint and Office 365 without any restriction on the front end in Akumina’s framework. Headless design principles can drastically improve your site visitor experience. Headless can be easier to scale, perform better and faster, easier to develop and test, and is fully compatible with Akumina’s AppManager and Service Hub.
Akumina’s front-end frameworks and widgets are delivered through a headless ASP.Net-based runtime. Content and information is delivered through the Akumina Service Hub, which provides the necessary caching, API connectivity and the abstraction to drive the end-user experience. Akumina’s architecture allows for all pre-built widgets to be reused in Akumina’s headless offering.

•	SharePoint (modern or classic) becomes a data container instead of a user interface.

•	Any identity provider (such as AAD, Okta, Ping) that SharePoint supports will work with headless.

•	Akumina headless development supports infrastructure as a service (IaaS) and platform as a service (PaaS) containers.

•	You can use the same development platform for SharePoint or headless. You can apply your widgets to any canvas, making it up to 100 times faster.

•	A headless site can easily be converted to a mobile app.

## Prerequisites

**System Requirement**: VS2019 or greater with .NET CORE 3.1
Infrastructure Requirement: An Akumina site must be already setup in SharePoint, using Azure Active Directory. For best results with a quickstart, a foundation site should be used.
For more information please see Installation Guides at https://community.akumina.com/kbtopic/installation-guides/

## Setting up a headless Dev environment

**Download**
To download the project solution and source code, please contact your account administrator.

**Getting started with headless project**

1.	Open the solution as administrator mode
2.	In the root of the project, open appsettings.json 
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_3.png)
3.  Install the latest NuGet Akumina.FrontEnd.Core
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_10.png)
4.	Edit the following properties
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_4.png)
5.	In the folder Akumina.Frontend.Web\wwwroot\Style Library\DigitalWorkplace\js\ open DIgitalworkplace.env.js and edit the following keys
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_5.png)
 
•	Set Akumina.Digispace.ConfigurationContext.InterchangeURL to interchange URL

**Note**: ^ This is only for Version 4.8 of the Akumina Framework.

•	Set Akumina.Digispace.ConfigurationContext.InterchangeQueryKey to query key

•	Set Akumina.Digispace.ConfigurationContext.ConfigurationSiteUrl to SiteCollectionUrl

**Note**: For Version 4.5 (or lower) of the Akumina Framework, the VALUE is interchange URL

•	In setConfig function

•	Set Akumina.Digispace.ConfigurationContext.TemplateURLPrefix to current URL

•	Set Akumina.Digispace.SiteContext.UniqueId to unique IdNOTE: To obtain the Unique Id, go to the App Manager Global Settings for the site (/Admin/Settings) and locate the value:
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_6.png)


## Enable CORS in AppManager
1.	To enable CORS in AppManager: Go to AppManager, open interchange.settings.config update the value for “akumina:EnableCorsOrigin”, you can provide one or more URLs in this case Headless URL and SharePoint URL

```
•	<add key=”akumina:EnableCorsOrigin” value=”<HEADLESSURL>,<SHAREPOINTURL>”/>
•	<add key=”akumina:EnableCorsHeaders” value=”Origin,X-Requested-With,Content-Type,Accept,X-Akumina-Querykey”/>
•	<add key=”akumina:EnableCorsMethods” value=”GET,OPTIONS”/>
•	<add key=”akumina:EnableCorsPreflightMaxAge” value=”7400″/>
•	<add key=”akumina:EnableCorsSupportsCredentials” value=”true”/>
```
2.	Open Web.config under <System.webServer>

```
•	Comment <customHeaders>
•	Replace <modules> to <modules runAllManagedModulesForAllRequests=”true”>
```

## How to run the solution locally
1.	Run the solution in debug mode
2.	Browse to https://localhost:44306

## Adding widgets to MVC view (CSHTML)

To insert widget into view, please follow the following steps.
**Pre-Requisites:**
1.	A page/view should exist under /Src/Akumina.Frontend.Web/Views
2.	The route to the view setup in Src/Akumina.Frontend.Web/routeconfig.json

**Steps to add a widget:**
1.	Open the page / view cshtml
2.	Identify the widget type and specific widget instance from the App Manager > Management Apps > Widget Manager that you would like to place on the page/view
3.	Copy the widget snippet 
4.	Identify the section (corresponds to webpart on SP page) where you would like to place the widget and paste the snippet onto the page
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_7.png)
5.	For Department Site, the widgets are added with rel only and without instance id (since the instance ids are dynamically generated at deployment time). The instance is resolved via rel, which maps to title field In widgetproperties_ak (hence avoid having multiple entries with the same title in widgetproperties_ak) 
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/headless_8.png)

## Setting up a headless production environment

Headless can be hosted in virtual machines (IaaS), web applications (PaaS) or containers.  In this section,we’ll explore all different deployment options.

**Hosting in VM (IaaS)**
1.	Create a Windows VM 2019
2.	Install Web Server (IIS) with HTTP Activation
3.	Install .NET Core hosting bundle https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-3.1#install-the-net-core-hosting-bundle
4.	Create website and deploy your files, for complete details refer https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/index?view=aspnetcore-3.1#sub-applications

**Hosting in Azure Web App (PaaS)**
1.	Create WebApp using .NET core
2.	Deploy from Visual Studio or FTP all the published files

**Hosting in Container**
1.	Install Docker for Windows
2.	Create a Docker container image
3.	Upload container image to Azure Container Registry
4.	Deploy a web app using the ACR image

## Things to know

1.	Enable HTTPS only, and enable TLS 1.2 for web app over port 443
2.	If you host in Microsoft Azure, they will open additional ports such as 454, 455, 21, 10001-10020, 4016,4018, and 4020. Please note these ports are not required for Akumina Application. If you need to block any of these ports please refer this Microsoft documentation from https://azure.microsoft.com/en-us/documentation/articles/app-service-app-service-environment-control-inbound-traffic/ (in case App Service Environment you can actually block some of them at the VNET level)
3.	Always update to latest .NET core