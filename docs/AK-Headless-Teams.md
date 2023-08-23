---
title: Headless Teams support
id: AK-Headless-Teams
---

# Headless: Teams Setup

## Overview

This article provides steps to add an Akumina headless website to teams
* Personal app - Akumina utilizes the "website tab" option - requires app to be configured using the `manifest.json` below
* Channel tab - You can add the headless url directly using the Add Website option (no setup required)

## Cookie requirements for Headless application

```json
 ====> "CookieSameSiteMode": "None", <==== "MinWorkerThreads": "50",  
```


## Variables to be replaced


| token | value |
| --- | --- |
| {sptenant} | sharepoint tenant {this}.sharepoint.com |
| {headlessurl} | intranet headless url |
| {appmanagerurl} | app manager url |
| {newguid} | generate a new guid https://guidgenerator.com/online-guid-generator.aspx |
| {clientname} | client name to make package unique |
| {spdeliverysiteurl} | https://{sptenant}.sharepoint.com/sites/deliveryurl | 
| {piped_webid_siteid} | You can find this in the debugger after navigating to the delivery site and opening the debugger, configurationcontext tab - look for 'RootPipedSiteIdWebId' | 


## Auth file creation

For each tab you want to include inside the teams app, you will need to create a 'configuration auth file' for each one.  If you only want to load your Intranet home page in teams then you only need to create one of these files in your Azure Storage container in the following path `/staticfiles/teams.html` (note, `teams.html` is an example, you can create multiples for each tab, `teams-news.html`, `teams-streams.html`) - this path needs to match your `manifest.json` below.

Example `teams.html`

```html

<!DOCTYPE html>
<html>
<head>
    <script>
        var headlessPageUrl = "https://{headlessurl}"; //you can add the page you want to load as well, ie #/sitepages/mypage.aspx
        var appManagerUrl = "https://{appmanagerurl}";
        var deliverySiteUrl = "{spdeliverysiteurl}";
        var siteIdWebIdPiped = "{piped_webid_siteid}";
    </script>

    <script src="https://akuminafiles.azureedge.net/products/6.0.0.0/fe/teams/teams.auth.min.js"></script>
    <title>Page Title</title>
</head>
<body>
</body>
</html>


```


## Manifest

The following is an example `manifest.json` of a Personal App with 3 tabs:  Home, News, Streams

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.16",
  "id": "{newguid}",
  "packageName": "{clientname}.com.package.name",
  "name": {
    "short": "Akumina Hive",
    "full": "Akumina Hive!"
  },
  "developer": {
    "name": "Akumina",
    "mpnId": "3829831",
    "websiteUrl": "https://akumina.com",
    "privacyUrl": "https://akumina.com/privacy-policy",
    "termsOfUseUrl": "https://akumina.com/license-agreement"
  },
  "description": {
    "short": "Akumina is the Employee Experience Platform that empowers global enterprises",
    "full": "Akumina offers a customizable, brandable, and multilingual platform that seamlessly integrates with leading enterprise cloud applications, Akumina delivers a contextual, collaborative, and engaging workplace experience to every user on any device."
  },
  "icons": {
    "outline": "outline.png",
    "color": "color.png"
  },
  "accentColor": "#FFFFFF",
  "staticTabs": [
    {
      "entityId": "{newguid}",
      "name": "Home",
      "contentUrl": "https://{headlessurl}/staticfiles/teams.html",
      "websiteUrl": "https://{headlessurl}",
      "scopes": [
        "personal"
      ]
    },
    {
      "entityId": "{newguid}",
      "name": "News",
      "contentUrl": "https://{headlessurl}/staticfiles/teams-news.html",
      "websiteUrl": "https://{headlessurl}",
      "scopes": [
        "personal"
      ]
    },
    {
      "entityId": "{newguid}",
      "name": "Streams",
      "contentUrl": "https://{headlessurl}/staticfiles/teams-streams.html",
      "websiteUrl": "https://{headlessurl}",
      "scopes": [
        "personal"
      ]
    },
    {
      "entityId": "about",
      "scopes": [
        "personal"
      ]
    }
  ],
  "validDomains": [
    "{headlessurl}",
    "{appmanagerurl}",
    "{sptenant}.sharepoint.com",
    "login.microsoftonline.com",
    "*.login.microsoftonline.com",
    "microsoft.sharepoint.com",
    "microsoft.sharepoint-df.com",
    "spoppe-a.akamaihd.net",
    "spoprod-a.akamaihd.net",
    "resourceseng.blob.core.windows.net",
    "msft.spoppe.com"
  ],
  "webApplicationInfo": {
    "id": "00000003-0000-0ff1-ce00-000000000000",
    "resource": ""
  }
}


```
