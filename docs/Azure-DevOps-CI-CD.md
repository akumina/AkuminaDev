---
id: Azure-DevOps-CI-CD
title: CI/CD using Azure DevOps
---

Follow the below Matrix to find out the most relevant build configuration for your Azure DevOps pipeline 

| Azure DevOps owned by  | Headless site Storage owned by | Build Configuration 
| ------- | ----------- | ----------- |
| Akumina | Akumina | Service Principal |
| Customer | Akumina | Connection-string OR Username-Password |
| Customer | Customer | Service Principal OR Connection-string |

The following variable required to configure the pipeline 

| Config Key | Config Value
| ------- | ----------- | 
| `assetdirectory` | A namespace which you provide while creating the new Site Package by running the yo akumina |
| `spdirectory` | DigitalWorkplace - default value |
| `spurl` | Delivery site url |
| `centralspurl` | Central site url |
| `spuser` | SharePoint username |
| `sppassword` | SharePoint user password |
| `ml` | True if your site supports Multilingual - In 5.0+ this should always be True |
| `appmanagerurl` | AppManager Url |
| `akquerykey` | AppManager Query key |
| `devopsdeployment` | True when Site package is deployed using the DevOps else False |
| `tenantid` | Current Tenant Id |
| `aadclientid` | AAD storage client application Id. Navigate to an AAD App (you have created as a pre-requisite for this document) > overview > copy Application (client) ID |
| `templateurlprefix` | Template url prefix, should start container name onwards - it should only container the prefix - Example: clientfiles/6.0.2205.2301-headlessreleasepackage/fs3 |
| `serviceprincipal` | Service Principal which you have created in you Azure DevOps and granted it the **Storage Blob Contributor** permission on the Storage Account Container configured in headless site. Note: when you are using the connection string instead of service principal you can provide any dummy service principal because it’s a required input to Azure Cli task  |
| `storagecontainersasuri` | Provide SAS Uri to your container with Add, Create, Read, List options only - Must be Base64 encoded |

# Setup a Pipeline using SharePoint Username & Password

Create a new Pipeline 

1) Navigate to Pipeline and then click New pipeline 

2) Select Code as Azure Repos Git 

3) Select your repository 

4) Select Configure Pipeline as Node.js or starter pipeline 

5) In the YAML window copy paste the following content 

```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:

- main
pool:
vmImage: windows-2022
steps:

- task: NodeTool@0
inputs:
versionSpec: '10.x'
displayName: 'Install Node.js'

- script: |
npm install
displayName: 'npm install'

- script: |
npm run build
displayName: 'npm run build'

- task: Npm@1
displayName: 'npm run package'
inputs:
command: custom
verbose: false
customCommand: 'run package'

- task: Npm@1
displayName: 'npm run cdnpackage'
inputs:
command: custom
verbose: false
customCommand: 'run cdnpackage'

- task: CmdLine@1
displayName: 'Import widgets'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options widgets envdir $(Build.SourcesDirectory)\build assetdirectory $(assetdirectory) spdirectory $(spdirectory) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) centralspurl $(centralspurl) ml $(ml)'

- task: CmdLine@1
displayName: 'Deploy files to CDN'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options cdnassets envdir $(Build.SourcesDirectory)\build assetdirectory $(assetdirectory) spdirectory $(spdirectory) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) devopsdeployment true appmanagerurl $(appmanagerurl) tenantid $(tenantId) aadclientid $(aadclientid) templateurlprefix $(templateurlprefix) ml $(ml)'

- task: CmdLine@1
displayName: 'Update Widget Cache'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options updatewidgetcache envdir $(Build.SourcesDirectory)\build centralspurl $(centralspurl) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) assetdirectory $(assetdirectory) akquerykey $(akquerykey) appmanagerurl $(appmanagerurl) ml $(ml)' 
``` 

6) From the right corner, Click Variable and then add all variables from the variable listed In the beginning of the session, refer the following screen for completed view 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/cicdbuild.PNG)

7) Save and Run 

# Setup a Pipeline using Azure Storage Container SAS URI 

Create a new Pipeline 

    1) Navigate to Pipeline and then click New pipeline 
    2) Select Code as Azure Repos Git 
    3) Select your repository 
    4) Select Configure Pipeline as Node.js or starter pipeline 
    5) In the YAML window copy paste the following content 
```
# Node.js
# Build a general Node.js project with npm.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
- none

pool:
vmImage: windows-2022

steps:
- task: NodeTool@0
inputs:
versionSpec: '10.x'
displayName: 'Install Node.js'

- script: |
npm install
displayName: 'npm install'

- script: |
npm run build
displayName: 'npm run build'

- task: Npm@1
displayName: 'npm run package'
inputs:
command: custom
verbose: false
customCommand: 'run package'

- task: Npm@1
displayName: 'npm run cdnpackage'
inputs:
command: custom
verbose: false
customCommand: 'run cdnpackage'

- task: CmdLine@1
displayName: 'Import widgets'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options widgets envdir $(Build.SourcesDirectory)\build assetdirectory $(assetdirectory) spdirectory $(spdirectory) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) centralspurl $(centralspurl) ml $(ml)'

- task: CmdLine@1
displayName: 'Deploy files to CDN'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options cdnassets envdir $(Build.SourcesDirectory)\build assetdirectory $(assetdirectory) spdirectory $(spdirectory) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) devopsdeployment true appmanagerurl $(appmanagerurl) tenantid $(tenantId) aadclientid $(aadclientid) templateurlprefix $(templateurlprefix) ml $(ml) storagecontainersasuri $(storagecontainersasuri)'

- task: CmdLine@1
displayName: 'Update Widget Cache'
inputs:
filename: '$(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe'
arguments: 'options updatewidgetcache envdir $(Build.SourcesDirectory)\build centralspurl $(centralspurl) spurl $(spurl) spuser $(spuser) sppassword $(sppassword) assetdirectory $(assetdirectory) akquerykey $(akquerykey) appmanagerurl $(appmanagerurl) ml $(ml)' 

```

6) From the right corner, Click Variable and then add all variables from the variable listed In the beginning of the session, refer the following screen for completed view 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/cicdbuild3.PNG)

7) Save and Run
