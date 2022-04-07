# Applies to
All versions of Akumina

# Overview
This article describes how to create a build pipeline to deploy an Akumina Site Deployer package for headless. For more information on a Site Deployer package, please see the References section below. 

# To create a build
Go into Azure DevOps for the project you want. In our example we will use the code located in the TFS path:

_$/BPS/Example/_

Go to Pipelines -> Builds. Click **New pipeline**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/1.png)

For our example we have code in TFS, so we use the visual designer option.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/2.png)

Select TFVC as the source, and then enter in the TFS path:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/3.png)

In the Build definition, click the plus icon (**+**) to add under **Agent job 1**. Then select **Command Line** from the list.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/4.png)

In the command line option, please enter in the properties for the site deployer. Assuming you placed the site deployer at the root of the build (as instructed to earlier), then the following values will be used:

| Property | Value |
| ------------- |---------------------|
| Display name | Run Akumina.SiteDeployer |
| Tool | $(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe |
| Arguments | options lists envdir "" assetdirectory DigitalWorkplaceCore spcontextretrycount 3 spdirectory DigitalWorkplace spurl $(siteCollectionUrl) spuser $(siteCollectionUser) sppassword $(siteCollectionPassword) |
| Reference name | CmdLine1 |

> The **options** value above indicates what we want to deploy. In our example, we only have lists.

> The **spcontextretrycount 3** value is optional and would be used if there are issues with deploying to the tenant.

> The **assetdirectory** value above depends on the name of your folder in the /sitedefinitions/ folder.
See the Site deployer documentation for more information.


In order to run, the deployer needs variables such as the site collection URl, username and password. We need to add the following:

| Property | Description |
| ------------- |---------------------|
| siteCollectionUrl | The site collection URL to deploy to. |
| siteCollectionUser | The user to be used to connect to the site collection. |
| siteCollectionPassword | Locked value - The password of the user to be used to connect to the site collection. |

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/5.png)

Note the **siteCollectionPassword** value should be LOCKED:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/6.png)

With the actions and the variables saved, we then need to **Save**. Click Save on the “**Save build pipeline**” dialog.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/7.png)

Once we save, we can then run the build – go back to builds, and either **Run** or **Queue** the build.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/8.png)

We can then separately queue up the build to run later, by returning to **Pipelines -> Builds**, and clicking the build. We can then queue it via the **Queue** button.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/9.png)

After the build runs, we will see its status. 

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/10.png)

And we can see the artifacts deployed into the site collection.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/11.png)

# Deploying widgets
To deploy widget, add a few other tasks prior to the site deployer call to build and package the widgets:

| Task | Display Name | Properties |
| ------------- |---------------------|---------------------|
| Node.js tool installer | Use Node >=8.9.1 | Version Spec: >=8.9.1 |
| Npm | npm install | Command: install |
| Npm | npm build | Command: custom |
|  |  | Command and arguments:run build |
| npm | npm package | Command: custom |
|  |  | Command and arguments:run package |

And then you would use either a command line for the site deployer call (shown above), or a "Publish build artifacts" to a drop, which can then be used in a release pipeline.

# References:
* [Site Deployer: Continuous Site Package Deployment via a console app](https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app)
* [Site Deployer 4.1](https://github.com/akumina/AkuminaDev/tree/master/SiteDeployer)
* [Site Deployer 4.5](https://akumina.github.io/docs/Site-Deployer-Version-4-5)
* [Site Deployer 4.8](https://akumina.github.io/docs/Site-Deployer-Version-4-8)
* [Site Deployer 5.0](https://akumina.github.io/docs/Site-Deployer-Version-5-0)
