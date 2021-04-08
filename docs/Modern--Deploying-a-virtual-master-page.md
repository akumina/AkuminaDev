---
title: Modern: Deploying a virtual master page
id: modern--deploying-a-virtual-master-page
---

# Overview

This article describes how to deploy a modern virtual master page using the site deployer.

## Data
The master page file is a template and so can be deployed via the content directory. The file would be located at:

    envdir/sitedefinitions/**assetdirectory**/Branding/Content/Templates/MasterPage/VirtualPageMaster.html

## Options
To deploy the file, you must use the options value *contentfiles*, using the central site (if applicble) as the *spurl*.