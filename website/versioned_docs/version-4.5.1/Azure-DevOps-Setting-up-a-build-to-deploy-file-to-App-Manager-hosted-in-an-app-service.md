---
id: version-4.5.1-Azure-DevOps-Setting-up-a-build-to-deploy-file-to-App-Manager-hosted-in-an-app-service
title: Setting up a build to deploy file to App Manager hosted in an app service
original_id: Azure-DevOps-Setting-up-a-build-to-deploy-file-to-App-Manager-hosted-in-an-app-service
---

# Applies to
All versions of Akumina

# Overview
This article describes how to create a build pipeline to deploy files to an Akumina App Manager, located in an app service. 

# To create a build
Go into Azure DevOps for the project you want. In our example we will use the code located in the TFS path:

_$/BPS/Example/_

Go to Pipelines -> Builds. Click **New pipeline**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/1.png)

For our example we have code in TFS, so we use the visual designer option.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/2.png)

Select TFVC as the source, and then enter in the TFS path:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/3.png)

In the Build definition, click the plus icon (**+**) to add under **Agent job 1**. Then select **FTP Upload** from the list.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/ftpupload.png)

In the FTP Upload properties dialog, enter in a display name. Then in the **FTP Service Connection** field, select the ftp service connection. If you do not have one, click **Manage**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/ftpupload-serviceconnectionmanager.png)

> If you have selected a service connection, skip this section. 

Click **New service connection** and select **generic**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/genericserviceconnection.png)

Fill out the Add a generic service connection dialog with the proper values:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/addgenericserviceconnection.png)

| Property | Value |
| ------------- |---------------------|
| Connection Name | A common name for the connection |
| Server URL| The FTP server url |
| User name | The user name to the FTP site |
| Password/Token Key | The password to the FTP site |

Then click **OK**.

After the service connection has been selected, you can then fill out the other values in the **FTP Upload** properties window.

| Property | Value |
| ------------- |---------------------|
| Root folder | The path to the files you want to upload into the app service. |
| File patterns| The pattern of file to select. Example: *.dll for all .dll files.  |
| Remote directory | The remote path for the file(s) to be uploaded. For an app service, the default path is /site/wwwroot |

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/ftpupload-properties2.png)

With the actions and the variables saved, we then need to **Save**. Click Save on the “**Save build pipeline**” dialog.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/savebuildpipeline.png)

Once we save, we can then run the build – go back to builds, and either **Run** or **Queue** the build.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/8.png)

We can then separately queue up the build to run later, by returning to **Pipelines -> Builds**, and clicking the build. We can then queue it via the **Queue** button.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/9.png)

After the build runs, we will see that the files are deployed into the specified location in the app service.

References:
* [Site Deployer: Continuous Site Package Deployment via a console app](https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app)
* [Site Deployer 4.1](https://github.com/akumina/AkuminaDev/tree/master/SiteDeployer)