---
id: Site-Deployer-updatepagecache-option
title: updatepagecache option
---

# Applies to
Akumina Site Deployer

# Overview
This step will update the page cache in the App Manager. 

# Options
The step is triggered in the options by the keyword *updatepagecache*.

# Data
The step uses data in the envdir/sitedefinitions/assetdirectory/VirtualPages folder to update the page cache for the .json files, based on the *Url* property in the files:

    "Url": "page.aspx"

# Visual Studio code
If using Visual Studio Code, you need to adjust the configuration. In the .env file

    appmanagerurl=https://appmanager.onakumina.com

In the akumina.sitedeployer.config.json file, set the *Options* and add *appmanagerurl* to the *Args*.

    {
      "Options": {
        ...
        "updatepagecache": true,
        ...
      },
      "Args": [
        ...
        "appmanagerurl",
        ...
      ]
    }

# CICD
If using a CICD pipeline, the *appmanagerurl* argument needs to be added to the deployment command, which can use a variable.

| Property | Value |
| ------------- |---------------------|
| Arguments | options updatepagecache envdir "" assetdirectory DigitalWorkplaceCore spcontextretrycount 3 spdirectory DigitalWorkplace spurl $(siteCollectionUrl) spuser $(siteCollectionUser) sppassword $(siteCollectionPassword) **appmanagerurl $(appManagerUrl)** |

See https://github.com/akumina/AkuminaDev/wiki/Azure-DevOps:-Setting-up-a-build-to-deploy-a-site-package
