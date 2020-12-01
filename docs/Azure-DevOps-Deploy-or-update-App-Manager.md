## Applies to
All versions of Akumina

## Overview
This article describes how to create a build pipeline to deploy or update an Akumina App Manager that is hosted in an app service. For this task, we use files located in source control.

## Source Paths
We maintain all file required for this task in source control, as this allows us to exactly control the process of  and application deployment at all stages. For this, we need a source path that will help us support the deployment of the files, configurations and customizations for the application.

For example source control paths, See the document Source Control Example - Source Locations.

## Deployment
There are several components that layer over each other to produce the proper deployment of the App Manager. In the example below, we are deploying App Manager version 4.5.1909.1350 to the DEV environment, with our app manager customizations.

| Component | Description | Location (example) |
| -- | -- | -- |
| AppManager version | The App Manager files | {project}/software/AppManager/4.5.1909.1350 |
| AppManager configuration | web.config, interchange.settings.config, etc. | {project}/environment/DEV/configuration |
| AppManager customization | Customer specific CSS, JS, etc. | {project}/environment/DEV/appmanager |

## To create a build pipeline
Go into Azure DevOps for the project you want. In our example we will use the code located in the TFS path:

_$/BPS/Example/_

Go to Pipelines -> Builds. Click **New pipeline**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/1.png)

For our example we have code in TFS, so we use the visual designer option.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/2.png)

Select TFVC as the source, and then enter in the TFS path:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/3.png)

In the Build definition, click the plus icon (**+**) to add under **Agent job 1**. Then search for  and add **Copy files** from the list. Add 3 **Copy files** in total. Also, add one **Publish build artifacts** task at the end.

TBD - image

## AppManager Version files
Our first **Copy files** task copies the AppManager version files. In this task we use the following settings:

| Property | Value |
| ------------- |---------------------|
| Display name | AppManager Version files |
| Source Folder | \$/BPS/Example/software/AppManager/\$(AppManagerVersion) |
| Contents | **<br/>!web.config<br/>!interchange.settings.config<br/>!unity.config |
| Target Folder | \$(Build.ArtifactStagingDirectory)/\$(Environment)/\$(Build.DefinitionVersion) |

## AppManager configuration files
Our second **Copy files** task copies the AppManager configuration files. In this task we use the following settings:

| Property | Value |
| ------------- |---------------------|
| Display name | AppManager configuration files |
| Source Folder | \$/BPS/Example/environment/\$(Environment)/configuration |
| Contents | ** |
| Target Folder | \$(Build.ArtifactStagingDirectory)/\$(Environment)/\$(Build.DefinitionVersion) |

In addition, in the **Advanced** tab, we enable the **Overwrite** checkbox.

## AppManager customization files
Our last **Copy files** task copies the AppManager customization files. In this task we use the following settings:

| Property | Value |
| ------------- |---------------------|
| Display name | AppManager customization files |
| Source Folder | \$/BPS/Example/environment/\$(Environment)/appmanager |
| Contents | ** |
| Target Folder | \$(Build.ArtifactStagingDirectory)/\$(Environment)/\$(Build.DefinitionVersion) |

In addition, in the **Advanced** tab, we enable the **Overwrite** checkbox.

## Publish build artifacts
The final task in our pipeline is a **Publish build artifacts** task, that will take the files compiled from the previous steps and put them in a location that we can reference for further use. In this task we use the following settings:

| Property | Value |
| ------------- |---------------------|
| Display name | Publish Artifact: AppManager \$(Build.DefinitionVersion) |
| Path to publish | \$(Build.ArtifactStagingDirectory)/\$(Environment)/\$(Build.DefinitionVersion) |
| Artifact name | AppManager \$(Build.DefinitionVersion) |
| Artifact publish location | Azure Pipelines |

## Updating the App Manager
Once we have the App Manager files in a build artifact, our next step is to update the App Service.  This we can do in a few ways:
* FTP upload - using a **FTP upload** task at the end of the build pipeline, we can immediately transfer the files to the App Service. This is useful for DEV environments where we can have immediate updates.
  * see https://github.com/akumina/AkuminaDev/wiki/Azure-DevOps:-Setting-up-a-build-to-deploy-file-to-App-Manager-hosted-in-an-app-service
* Release pipeline - for a more formal process, we can use the published artifacts to explicitly control what version(s) get deployed into which environments. This is useful for QA and PROD environments.
  * see https://docs.microsoft.com/en-us/azure/devops/pipelines/release/

References:
* [Site Deployer: Continuous Site Package Deployment via a console app](https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app)
* [Site Deployer Overview](https://akumina.github.io/docs/Site-Deployer-Overview)
* [Copy Files task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/copy-files)
