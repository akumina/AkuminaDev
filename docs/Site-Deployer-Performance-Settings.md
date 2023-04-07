## Overview
The Akumina Site Deployer has several options that affect the performance of deployments. The options allow retry of failures, space out and slow down operations to better handle any potential throttling from the Office 365 tenant.

NOTE: this assumes you are using the site deployer from a CI/CD system, such as Azure DevOps. See https://akumina.github.io/docs/Azure-DevOps-Setting-up-a-build-to-deploy-a-site-package

## Command properties
The following properties can be added to the Akumina.SiteDeployer.exe command line:

| Item | Action |
| -- | -- |
| spcontextretrycount | The number of retries when contacting SharePoint. The default is 1. |
| spcontextretryinterval | The time in between the retries. The default is 2000 – (2 seconds). |

These properties are added as shown:

_Akumina.SiteDeployer.exe options "js" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" clientid "myclientid" clientsecret "myclientsecret" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace" centralspurl "https://tenant.sharepoint.com/sites/centralsitecollection" **spcontextretrycount  5 spcontextretryinterval 5000**_

For our Azure DevOps example (see https://akumina.github.io/docs/Azure-DevOps-Setting-up-a-build-to-deploy-a-site-package), the command line taks will be updated as shown:

| Property | Value |
| ------------- |---------------------|
| Display name | Deploy |
| Tool | $(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe |
| Arguments | options widgets assetdirectory Client clientid $(clientid) clientsecret $(clientsecret) spdirectory DigitalWorkplace spurl $(centralurl) ml true spcontextretrycount  5 spcontextretryinterval 5000 |

## Configuration properties
The following properties can be modified in the **Akumina.SiteDeployer.exe.config** file, located in the **tools** directory.

| Item | Action |
| -- | -- |
| akumina:MaxDegreeOfParallelism | The number of parallel threads to use. |
| akumina:ImageUploadBatchSize | The number of images to upload within one connection. |
| akumina:WidgetPackageMaxDegreeOfParallelism | The number of parallel threads to upload widgets |

`<add key="akumina:MaxDegreeOfParallelism" value="30" />`
`<add key="akumina:ImageUploadBatchSize" value="30" />`
`<add key="akumina:WidgetPackageMaxDegreeOfParallelism" value="15" />`
