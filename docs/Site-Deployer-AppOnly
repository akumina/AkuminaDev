---
id: Site-Deployer-AppOnly
title: Using site deployer with MFA
---

## Applies to:
All versions

## Overview

If the tenant users don’t have login/password and use smartcard/pin, or use multi factor authentication (MFA), you require AppOnly permissions on the Akumina app for the CICD pipeline in Azure DevOps to deploy code. This is described at https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs and you will use the clientid\secret in the CICD pipeline to deploy code without need of a password.
 
For how to use the clientid/clientsecret in the Akumina site deployer, please look here: https://akumina.github.io/docs/Site-Deployer-Version-4-5.html#minimum-usage-with-clientid-clientsecret, specifically “Minimum usage with clientid|clientsecret”.
 
The requisite permissions needed are the same as the .app file, with the addition of the AllowAppOnlyPolicy attribute, as shown below:
 
    <AppPermissionRequests AllowAppOnlyPolicy="true">
        <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl" />
        <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="FullControl" />
        <AppPermissionRequest Scope="http://sharepoint/taxonomy" Right="Write" />
        <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />
        <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="FullControl" />
        <AppPermissionRequest Scope="http://sharepoint/content/tenant" Right="Read" /> 
    </AppPermissionRequests>

> NOTE: per https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs, this occurs on the ROOT site appinv.aspx, not the app catalog’s appinv page. It is required for a user who has sitecollection admin rights in the root site at https://tenant.sharepoint.com to add AllowAppOnlyPolicy permissions to the SharePoint App for Akumina following the steps outlined in https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs. This must be done by going to https://tenant.sharepoint.com/_layouts/15/appregnew.aspx in the ROOT site of the SharePoint tenant. Pull up the app registration by using the AppID for the Akumina app.
