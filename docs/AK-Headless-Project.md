---
title: Quickstart
id: AK-Headless-Project
---

# Headless: Project QuickStart

## Overview

This article provides a quick start with how to setup a project for headless artifacts. This is similar to the process for a headed site, with the exception that the headless site pulls artifacts from a storage account (or CDN).

In this quick start we will update the files in the storage account to make changes to the headless site.

## Prerequisites

For this example, you will need the following:

- A terminal or command prompt
- Visual Studio Code
- A headless site, using a storage account and configured to use the same as the source of files.
- You will need the Akumina widget Yeoman generator - see [Yo Akumina](https://akumina.github.io/docs/Yo-Akumina)

## Setting up the project.

Create or go to a path locally, example:

> *C:\source\Repos\HeadlessExample*

We will use that path for the project files. In a terminal or command prompt, navigate to that path and generate your new project:

```
    npx yo akumina
```
Enter values in the questions; example values are below:
```
   ? Project name: HeadlessExample
   ? Client namespace: Client
   ? Akumina version: 5.5.0.0
   ? Use React?: no
   ? Widget source path: src/js/widgets
   ? Use Typescript?: yes
```

## Update dependencies
It is necessary to have webpack-cli version 3.3.12 in order to build widgets. Run the following commands to enable:
```
   npm uninstall webpack-cli
   npm install webpack-cli@3.3.12
```

## Configuration - .env file
In the file **.env** we need to update values for the deployment.

These values should be set to the proper settings for the storage account.
```
    azurestorageaccountname=stheadless
    azurestoragecontainer=cloud
    azurestorageaccountkey=ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

These values should be set to a random value, such as *na*, **only** if there is no value.
```
    spurl=na
    clientid=na
    clientsecret=na
```

## Configuration - akumina.sitedeployer.config.json file
In the file **akumina.sitedeployer.config.json** we mark all steps to **false** except **cdnassets**:
```
    "cdnassets": true
```

## Setup folder
We need to setup a folder to contain artifacts that will be deployed. Add the following folders  to the **sitedefinitions\Client** path:

> *C:\source\Repos\HeadlessExample\build\sitedefinitions\Client\CDNAssets*
> *C:\source\Repos\HeadlessExample\build\sitedefinitions\Client\CDNAssets\css*
> *C:\source\Repos\HeadlessExample\build\sitedefinitions\Client\CDNAssets\js*

## CSS files
To deploy CSS files, we first add a CSS file that will be deployed. In our example. we create (or copy from an existing site) the file **digitalworkplace.custom.css** in the path:

> C:\source\Repos\HeadlessExample02\src\css\digitalworkplace.custom.css

You can use the following contents for the file (if a new file):
```
   .ia-header--title {
      color: green !important;
   }
```
Next, we want to setup the build process to copy the css file to the CDNAssets location; we can further expand this to minify or further process the CSS file. In the file **webpack.config.js**, add the folowing below the line **var useTypeScript = true;**
```
   var useTypeScript = true;
   
   fs.copyFile('src/css/digitalworkplace.custom.css', 'build/sitedefinitions/Client/CDNAssets/css/digitalworkplace.custom.css', function (err) {
      if (err) {
         console.error("Unable to copy css file");
      }
   });
```
We can now deploy the CSS file to the headless site storage account.

## Build and Deploy
Deploy the files to the headless site by using the deploy command
```
  npm run build
  npm run deploy
```
After a time, the console will report the files have been uploaded to the headless site storage account:
```
Executing Step: Add Assets To CDN
AzureCDNService UploadFiles File: akumina library/digitalworkplace/css/digitalworkplace.custom.css
```

## Widget
To create a basic widget, we will use the guidance provided here: [Create a new widget from a stub](https://akumina.github.io/docs/Akumina-Widgets-Build-New#create-a-new-widget-from-a-stub):
```
   npm run stub
```
Enter the name as **HelloWorld**, with **Client.Widgets** as the namespace, then accept the defaults otherwise.
```
   ? What's the name of your Widget? HelloWorld
   ? What's the name of your Widget Namespace? Client.Widgets
   ? Which type of stub you want to start with? (more stubs coming soon) Hello World
   ? What directory should we generate the folder stub in? src/js/widgets
   ? Do you want this stub to be used for an instance only? (used for deploying instances only) No
   ? Do you want to use a typescript stub? Yes
```

## Build and Deploy
We next build and package the files. The **cdnpackage** command will process the widget files and place them into the **CDNAssets** path.
```
  npm run build
  npm run cdnpackage
```
We can now deploy the widget files to the headless site storage account by using the deploy command.
```
  npm run deploy
```
After a time, the console will report the files have been uploaded to the storage account:
```
   Executing Step: Add Assets To CDN
   AzureCDNService UploadFiles File: akumina library/digitalworkplace/content/templates/helloworld/default.html
   AzureCDNService UploadFiles File: akumina library/digitalworkplace/css/digitalworkplace.custom.css
   AzureCDNService UploadFiles File: akumina library/digitalworkplace/js/widgets/helloworld.js
```
