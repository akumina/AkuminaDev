---
id: Widget-Development-Configuring-env
title: Configuring .env file
---

| Config Key | Config Value
| ------- | ----------- | 
| `spurl` | Delivery site url |
| `centralspurl` | Central site url |
| `spuser` | SharePoint username |
| `sppassword` | SharePoint user password |
| `tenantid` | Current Tenant Id |
| `aadclientid` | AAD storage client application Id. Navigate to an AAD App (you have created as a pre-requisite for this document) > overview > copy Application (client) ID |
| `appmanagerurl` | AppManager Url |
| `akquerykey` | AppManager Query key |
| `templateurlprefix` | Template url prefix, should start container name onwards - it should only container the prefix - Example: clientfiles/6.0.2205.2301-headlessreleasepackage/fs3 |
| `devopsdeployment` | True when Site package is deployed using the DevOps else False |
| `ml` | True if your site supports Multilingual - In 5.0+ this should always be True |
