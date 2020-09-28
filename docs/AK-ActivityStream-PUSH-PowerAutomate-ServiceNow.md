---
title: Akumina Activity Stream PUSH Subscription using PowerAutomate to connect to ServiceNow
id: AK-ActivityStream-PUSHSubscription-PowerAutomate-snow
---


## Overview

The purpose of this article will be to explain the process of connecting to third party systems like ServiceNow, using PowerAutomate with the release of Akumina Framework 5.0 featuring the Activity Stream Subscriptions.

## Assumptions

The following assumptions are made in this document:

* Sharepoint Site with Akumina Framework 5.0 or higher

* Microsoft PowerAutomate license to connect to premium connectors

* Activity Stream License enabled

## PowerAutomate Configurations

1.	Login to MS flow Power Automate platform - https://us.flow.microsoft.com/en-us/
2.	Start with a blank scheduled flow.
3.	In add a action select the connector you want to connect to, in this sample ServiceNow.
4.	Select the list records action, you can configure the record type, in this sample incident and build the query based on what data you want to pull in from ServiceNow.
5.	This task will return us list of incidents from ServiceNow, hence we need to add a Apply to each task, use output from previous step.
6.	Now we need to send each record as an http request to the push subscription
7.	In the apply to each loop add the http task, and make a PUT request to the app manager end point, example - {AppManagerUrl}/api/activitystream/push 
The headers need to content type setting with value application/json
In the body, you need to pass the authorization code, event subscription id in the PushStreamActivity object. (you will get the auth code and id in the steps on app manager configuration)
8.	The flow would look as below - 



## Akumina AppManager Activity Stream Subscription Configurations

See [Adding a Push Subscription](https://community.akumina.com/knowledge-base/working-with-activity-stream-manager-management-app-release-5-0-and-above/) to create the PUSH Subscription in AppManager and use the Event Subscription ID, Root Site ID and AuthorizationCode in the above flow configurations.