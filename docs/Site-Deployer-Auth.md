---
title: Site Deployer Auth
id: Site-Deployer-Auth
---


## Appendix

* Overview
* Site Deployer Auth Flows
  * Developer Flow (local machine)
  * Azure Dev Ops (CI/CD)
* Runtime
* Prerequisites
* Configuring App Manager AAD Client App for SharePoint Token
* Configuring App Manager AAD Client App for Storage SAS Uri
* Build, Package and Deploy for local DEVELOPER environment
  * SitePackage Configuring .env file
  * Configuring - akumina.sitedeployer.config.json file

## Overview
Use this document as a base to configure, development and deployment of Akumina SharePoint Site Artifacts and Configurations. 


## Runtime

1.	Stack: Node (Version 10.x or later), NPM (6.x or later) and .NET Framework 4.8; As of this writing the latest version used to compose this document was node version 16.16.0 and npm version 8.14.0
2.	OS: Windows 

## Prerequisites

The following are the prerequisites
1.	Fully configured Latest 6.0 AppManager (6.0.2301.1541+)
2.	Fully deployed Site Environment using Standard or Central/Delivery
3.	Install Yeoman - Refer to [Yo Akumina](https://akumina.github.io/docs/Yo-Akumina)
4.	Yo brings latest windows platform based Akumina SiteDeployer.exe
5.	App Manager Tenant config file must have Client Assertion certificate configured


## Configuring a new AAD Client App for SharePoint Token

To make a secure user-based connection between Site Deployer and App Manager AAD Client App, make sure that the existing App Manager AAD Client App has the following configuration.

Create a new App seperate

 1.	Goto Azure Active Directory --> App Registration--> New Registration
 2. Choose Accounts in this organizational directory only (Single tenant)
 3. Create App
 4. Edit App
 5. Goto Manager --> Authentication --> Add a platform
 6. Choose Mobile and desktop applications
 7. Add Uri - http://localhost (dont add http(s))
 8. Under Allow public client flows - choose Yes
 9. Save

Configure App Permissions to be able to deploy to Sharepoint properly

 1.	Goto Azure Active Directory --> App Registration--> Pick App created above
 2. Click API Permissions


Refer to the below table and update the App Manger ADD Client Permissions If required. 

**Delegated Permissions required for use by local DEVELOPER environment**
| # |	Site Deployer Options |	Permissions Needed |	Permission Scope/Type |
|--|-------|-------|--------|
| 1	 |addtermsets	| TermStore.ReadWrite.All|	Delegated |
| 2	| lists, groups, siteproperties, sitepermissions, modernprovisionapp, masterpage, layouts, webpartgallery | AllSites.FullControl |	Delegated |
| 3 |	js, css, pages, controls, widgets, contentfiles, imagefiles, fonts, updatelists, homepage, exportlists, uploadfiles, virtualpages, spusersearch, virtuallayout, exportcomments, updatespaproperties, streamcards, virtualtomodern	| AllSites.Manage |	Delegated |

**Appliation Permissions required for CICD flow** (same as above, but use Application instead of Delegated)

|# |Site Deployer Options |	Permissions Needed |	Permission Scope/Type
|--|-------|-------|--------|
|1 |addtermsets |	TermStore.ReadWrite.All |	Application|
|2|	lists, groups, siteproperties, sitepermissions, modernprovisionapp, masterpage, layouts, webpartgallery |	Sites.FullControl.All	| Application|
|3|js, css, pages, controls, widgets, contentfiles, imagefiles, fonts, updatelists, homepage, exportlists, uploadfiles, virtualpages, spusersearch, virtuallayout, exportcomments, updatespaproperties, streamcards, virtualtomodern | Sites.Manage.All |	Application |


## Build, Package and Deploy for local DEVELOPER environment

For local development, there is no configuration for passwords/secrets etc.  The npm run deploy command will PROMPT for your credentials.  For automated deployments via devops, see CICD

**configuring .env file**

Open the file .env in your Site Package and update values for the following fields.

| Config Key | Config Value |
|--|--|
| spurl	| Delivery site Url| 
| centralspurl|	Central site Url|
|tenantid |	Current Tenant Id - https://www.whatismytenantid.com {tenant.onmicrosoft.com}|
|aadclientid	|AAD storage client application Id. Navigate to an AAD App (you have created as a pre-requisite for this document) > overview > copy Application (client) ID |
|appmanagerurl	|AppManager Url|

Make sure the following lines are added

```json
tenantid=
aadclientid=
appmanagerurl=
```


**configuring - akumina.sitedployer.config.json file**

Edit akumina.sitedeployer.config.json file and set whatever options you want to run to true as shown in below screenshot in this example since we are deploying the list, we have set the options lists to true

[img]

Make sure following arguments are there in the Args array as shown in below screenshot:
```json
"tenantid",
"aadclientid",
"appmanagerurl"
```


[img]

## Configuring App Manager AAD Client App for Storage SAS Uri

Documentation available soon


## Troubleshooting

1) The following error message will be shown in the prompt if you dont have proper permissions added

AADSTS650057: Invalid resource. The client has requested access to a resource which is not listed in the requested permissions in the client's application registration. Client app ID: 14f2ce3d-f62a-4eec-b2c9-11111111(60-sitedeployer-developerexperience). Resource value from request: https://tenant.sharepoint.com. Resource app ID: 00000003-0000-0ff1-ce00-000000000000. List of valid resources from app registration: 00000003-0000-0000-c000-000000000000. 


