---
id: Production-Settings-Disabling-debug-mode
title: Disabling debug mode
---

## Applies to
Akumina Foundation 4.0.0.0

## Overview
For production sites, you may want to disable the "debug mode" of the site once it is stable.  There are two methods to do this:

**Method #1**

* Access the Site Creator Management App in AppManager.
* Select the "Digital Workplace Core Site"
* In the Select an Action menu, choose "Update Configuration Settings"
* In the options displayed, UNCHECK "Enable Debug Mode"
* Click the "Update" button

Once the update completes, the debug mode will no longer be active.  Note that you will need to refresh your local cache if you want to see the change immediately, or you can wait until the normal cache expiration (less than 1 hour).

**Method #2**

To manually disable the debug mode by accessing the settings in the SharePoint list:
* Access the "DigispaceConfigurationIDS_AK" list in the SharePoint Site Contents at the root of the Site Collection
* Change the item "EnableDebugMode" from true to false and save it

Once the item is saved, it will not take effect until the Configuration Cache has been updated (this is done automatically in Method #1 by the Site Creator).  Access the Debug Panel on the site (which will still be active), and click on "Refresh Configuration Cache".  The debug mode will then be disabled.
