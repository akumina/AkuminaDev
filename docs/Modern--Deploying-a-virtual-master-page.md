---
id: Modern--Deploying-a-virtual-master-page
title: Modern Deploying a virtual master page
---

# Overview

This article describes how to deploy a modern virtual master page using the site deployer.

## Data
The master page file is a template and so can be deployed via the content directory. The file would be located at:

```
envdir/sitedefinitions/assetdirectory/Branding/Content/Templates/MasterPage/VirtualPageMaster.html
```

## Options
To deploy the file, you must use the options value 

    contentfiles

Use the central site (if applicable) as the *spurl*.
