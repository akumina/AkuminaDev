# Applies to
All versions of Akumina

# Overview
This article describes how to create a build pipeline to deploy an Akumina Site Deployer package for headless. For more information on a Site Deployer package, please see the References section below. 

# Package
Our example package is the code we created in the [Headless: Project QuickStart](https://akumina.github.io/docs/AK-Headless-Project) article.

# To create a build
Go into Azure DevOps for the project you want. In our example we will use the code located in the TFS path:

_$/BPS/Example/_

Go to Pipelines -> Builds. Click **New pipeline**.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/1.png)

For our example we have code in TFS, so we use the visual designer option.

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/2.png)

Select TFVC as the source, and then enter in the TFS path:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/3.png)

In the Build definition, click the plus icon (**+**) to add under **Agent job 1**. Add the following tasks:

| Task | Display Name | Properties |
| ------------- |---------------------|---------------------|
| Node.js tool installer | Use Node >=8.9.1 | Version Spec: >=8.9.1 |
| Npm | npm install | Command: install |
| Npm | npm run build | Command: custom |
|  |  | Command and arguments:run build |
| npm | npm run cdnpackage | Command: custom |
|  |  | Command and arguments:run cdnpackage |

# Copy and Publish artifacts
Next we add in a **Copy Files** task - this copies the files we want into a temporary location.

| Property | Value |
| ------------- |---------------------|
| Display name | Headless customization files |
| Source Folder | build |
| Contents | ** |
| Target Folder | $(Build.ArtifactStagingDirectory)/$(Build.DefinitionVersion) |

Then we add a **Publish build artifacts** task to place the artifacts into a build drop. This we can use later as part of a more complete build and release process - in our example we will just set it up without using it.

| Property | Value |
| ------------- |---------------------|
| Display name | Publish Artifact: Headless $(Build.DefinitionVersion) |
| Path to publish | $(Build.ArtifactStagingDirectory)/$(Build.DefinitionVersion) |
| Artifact name | Headless $(Build.DefinitionVersion) |

# Deploying the artifacts via the site deployer
Using a build drop, we can easily use that build in a release pipeline, which allows us to control exactly when and where the changes go.

For a development environment, we would want to simply upload the files, so in our example we next select **Command Line** from the list.

In the command line option, please enter in the properties for the site deployer. For our example, the following values will be used:

| Property | Value |
| ------------- |---------------------|
| Display name | Deploy |
| Tool | $(Build.SourcesDirectory)\tools\Akumina.SiteDeployer.exe |
| Arguments | options cdnassets assetdirectory Client azurestorageaccountkey $(azurestorageaccountkey) azurestorageaccountname $(azurestorageaccountname) azurestoragecontainer $(azurestoragecontainer) clientid na clientsecret na spdirectory DigitalWorkplace spurl na |

> The **options** value above indicates what we want to deploy. In our example, we use **cdnassets** to deploy the artifacts to the headless storage account.

> The **assetdirectory** value above depends on the name of your folder in the /sitedefinitions/ folder.
See the Site deployer documentation for more information.

The deployer needs variables to connect to the storage account; We need to add the following:

| Property | Description |
| ------------- |---------------------|
| azurestorageaccountname | The name of the azure storage account. |
| azurestoragecontainer | The name of the container in the storage account where the files go. |
| azurestorageaccountkey | The key of the azure storage account. |

Note the **azurestorageaccountkey** value should be LOCKED:

![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/azuredevops/6.png)

With the actions and the variables saved, we then need to **Save**. Click Save on the “**Save build pipeline**” dialog.

Once we save, we can then run the build – go back to builds, and either **Run** or **Queue** the build pipeline, and we will see the files updated in the headless site.

# References:
* [Headless: Project QuickStart](https://akumina.github.io/docs/AK-Headless-Project)
* [Site Deployer: Continuous Site Package Deployment via a console app](https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app)
* [Site Deployer 4.1](https://github.com/akumina/AkuminaDev/tree/master/SiteDeployer)
* [Site Deployer 4.5](https://akumina.github.io/docs/Site-Deployer-Version-4-5)
* [Site Deployer 4.8](https://akumina.github.io/docs/Site-Deployer-Version-4-8)
* [Site Deployer 5.0](https://akumina.github.io/docs/Site-Deployer-Version-5-0)
