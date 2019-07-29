---
id: version-4.5.1-Site-Deployer-Continuous-Site-Package-Deployment-via-a-console-app
title: Continuous Site Package Deployment via a console app
original_id: Site-Deployer-Continuous-Site-Package-Deployment-via-a-console-app
---

![](https://akuminadownloads.blob.core.windows.net/wiki/SitePackages/SiteDeployer-ConsoleApp.png)

## Applies to:
Akumina 4.0.0.0 and later

> Before proceeding, please review the [Site Package Overview](https://github.com/akumina/AkuminaTraining/wiki/Site-Package-Overview).

## Download
To obtain the sitedeployer console application, please look at the *[Code](https://github.com/akumina/AkuminaTraining/tree/master/SampleFrontEndStarterProject)* section of this wiki, at SampleFrontEndStarterProject/tools/Akumina.SiteDeployer.exe

> You will need to download the entirety of the SampleFrontEndStarterProject.

Package examples can be found at https://github.com/akumina/AkuminaTraining/tree/master/SiteProvisioning.SampleSite/SiteProvisioning.SampleSite/SiteDefinitions

## Overview
An Akumina site is deployed via a site package; it is fundamentally a "package" of instructions, files, pages and other artifacts that determines what gets deployed into a site and/or site collection. This **same** site package can be deployed either:
* By a business user inside AppManager, using the Site Creator/Deployment Manager app.
* By a developer using a console application - The console app uses the site collection credentials and your Site package name and will deploy the assets just like the Site Creator does, but from an automated command line. 

## Integration into build process
The console application allows continuous and unattended Akumina deployments; when integrated into a development process, a team of developers can collaborate on changes that are deployed into an Akumina site. In the example below:
* Developers check in code to source control (TFS).
* A continuous integration process extracts out the artifacts from source control and it is placed in a build drop.
* From there, a continuous delivery process takes the package from the build drop and deploys it to the QA and/or PROD environments.

![](https://akuminadownloads.blob.core.windows.net/wiki/SitePackages/SiteDeployer-BuildProcess.png)

## Comparison with using the Deployment Manager/Site Creator app
An Akumina site package is generally deployed via the Deployment Manager/Site Creator app inside AppManager. There are a number of considerations to this - it requires a user to login to the app manager, navigated screens, click to take actions and have the browser open while deployment occurs. The console app  offers a better and faster way to deploy site packages, and one that can be integrated with existing build tools and processes.

## Usage
The site deployer accepts several command line parameters:

| Property|  Description|
| ------------- |---------------------|
| options | The artifacts to deploy from the package. |
| envdir | The path to the package directory. See the SampleFrontEndStarterProject in the code link below. |
| assetdirectory | The name of the package to be deployed; this corresponds to the folder name of the site package off the envdir. |
| spurl | The URL of the site that the package will be executed against. |
| spuser |  The user to execute the package. | 
| sppassword | The password of the user to execute the package. |

To run the tool, you will use the following command (from a command prompt or batch file, assumes the exe is in a directory named tools and you are in the parent directory to that). The example below deploys the master page and the js files to the specified site collection:

    tools\Akumina.SiteDeployer.exe options masterpage,js envdir C:\source\Site\ assetdirectory packageFolderName spdirectory DigitalWorkplace spurl https://tenant.sharepoint.com/sites/sharepointsitecollection spuser user@tenant.onmicrosoft.com sppassword userpassword

## Options
> See the [deploy.js](https://github.com/akumina/AkuminaTraining/blob/master/SampleFrontEndStarterProject/tools/deploy.js) file in SampleFrontEndStarterProject  

The following options are available for deployment:
* masterpage
* js
* css
* lists
* layouts
* pages
* controls - updates page content per the _assetdirectory_/PageContent directory
* widgets - deploys widget pacakages in the _assetdirectory_/WidgetPackages directory
* contentfiles
* imagefiles - uploads images in the _assetdirectory_/branding/images directory
* updatelists
* homepage
* fonts - uploads fonts in the _assetdirectory_/branding/fonts directory

## Example:
In this example, we have a basic site package that only deploys a single list:
![](https://akuminadownloads.blob.core.windows.net/wiki/SitePackages/SiteDeployer-packageFolderName.png)

The SiteDeployer console app executes the step:
![](https://akuminadownloads.blob.core.windows.net/wiki/SitePackages/SiteDeployer-ConsoleStep.png)

The resulting output inside the site - a deployed list as well as content:
![](https://akuminadownloads.blob.core.windows.net/wiki/SitePackages/SiteDeployer-NewList.png)

## Other use cases:
The following list are use cases where the site deployer tool will provide benefit for a single developer or entire development team: 

* Deploying a single widget instance or a single list, or a set of files - packages can be as atomic as you wish.
* A distributed team of Akumina Developers - Using a continuous integration server such as CruiseControl.NET to deploy changes on demand.
* A project needing a development and staging environment - changes can be trialed in the development environment, then deployed using the tool to the production environment.



