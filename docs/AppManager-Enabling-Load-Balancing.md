---
id: AppManager-Enabling-Load-Balancing
title: Enabling Load Balancing
---

## Applies to
Digital Workplace 3.4.0.0 and later

## Overview
In the following article we will provide the steps required to configure the Akumina AppManager for load balancing.  Prior to executing these steps, the AppManager should first be installed either in the cloud on on-premises using the standard installation procedures.  After these steps are complete, then load balancing can be enabled in the environment.

## Walkthrough
### Step 1: Configure the Required SettingsAK List
The list **SettingsAK** must exist on every Parent Site Collection that will be added to the AppManager. 

* On the Parent Site Collection, create a custom list called **SettingsAK**.
* Create 2 columns in **SettingsAK** 

1. Column Name = **SiteId**, Column Type = **Single line of text**, Maximum number of Characters = **36**
2. Column Name = **Value**, Column Type = **Multiple lines of text**, Type of Text = **Plain text**
![image 1](https://akumina.azureedge.net/wiki/training/images/appmanager/image1.png)
![image 2](https://akumina.azureedge.net/wiki/training/images/appmanager/image2.png)

### Step 2: Update the Configuration File Settings
Access the **unity.dss.config** file in the AppManager installation location and make the following changes.  This will instruct the AppManager to look for the DssConfig information from the SettingsAK list instead of the dss.config physical file.

For all future AppManager updates, verify the unity.dss.config is set as seen below:
![image 3](https://akumina.azureedge.net/wiki/training/images/appmanager/image3.png)

Repeat this step on each server that the AppManager is installed on for load balancing.

### Step 3: Recycle the AppManager Application Pool
Recycle the application (using IIS) so that the changes take effect in AppManager. 

### Step 4: Set Global Settings in the AppManager
In the AppManager, Navigate to Settings ![image 4](https://akumina.azureedge.net/wiki/training/images/appmanager/image4.png)  and Edit the Global Settings.
* Set the **Site Address** to the appropriate parent site collection
* Set **Administrator Group** Permissions
* Set **Reporting Access Group** Permissions
* SAVE&EXIT
Continue through the normal process of using the AppManager.
