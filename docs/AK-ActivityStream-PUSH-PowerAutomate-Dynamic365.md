---
title: Akumina Activity Stream PUSH Subscription using PowerAutomate to connect to Dynamic 365
id: AK-ActivityStream-PUSHSubscription-PowerAutomate-d365
---


## Overview

The purpose of this article will be to explain the process of connecting to third party systems like Dynamic 365, using PowerAutomate with the release of Akumina Framework 5.0 featuring the Activity Stream Subscriptions.

## Assumptions

The following assumptions are made in this document:

* Sharepoint Site with Akumina Framework 5.0 or higher

* Microsoft PowerAutomate license to connect to premium connectors

* Activity Stream License enabled

* Dynamic 365 licensed and enabled

## PowerAutomate Configurations

To use/configure the CDS current environment Dynamic 365 connector follow these steps - https://community.dynamics.com/crm/b/crminthefield/posts/using-the-common-data-service-current-environment-power-automate-connector

1.	Login to MS flow Power Automate platform - https://us.flow.microsoft.com/en-us/
2.	Use the dynamic 365 CDS connector
3.	In the trigger condition select the “create or update” for the “Leads” entity.
4.	To get the details of users, we need to add an additional step of CDS to get record for an entity, configure it as below.
5.	Now we need to send each record as an http request to the push subscription with specific user filter.
6.	In the apply to each loop add the http task, and make a PUT request to the app manager end point, example - https://cloud.onakumina.com/api/activitystream/push/useractivity 
The headers need to content type setting with value application/json
In the body, you need to pass the authorization code, event subscription id in the PushStreamActivity object. (you will get the auth code and id in the steps on app manager configuration)
7.	The flow would look as below - 



## Akumina AppManager Activity Stream Subscription Configurations

See [Adding a Push Subscription](https://community.akumina.com/knowledge-base/working-with-activity-stream-manager-management-app-release-5-0-and-above/) to create the PUSH Subscription in AppManager and use the Event Subscription ID, Root Site ID and AuthorizationCode in the above flow configurations.