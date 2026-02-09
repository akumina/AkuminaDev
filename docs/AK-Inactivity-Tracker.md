---
id: AK-Inactivity-Tracker
title: Inactivity Tracker
---

## Overview

The inactivity tracker will force the user to do a refresh. This assists with any BACK button issues and random 403's caused by invalid SP sessions.

<img src="https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/InactivityTracker.png" width="350">

### Conditions

The inactivity tracker begins when a page is loaded. Browsing around the site will continue to lengthen the timer.


### Enabling
The inactivity timer is controlled by a configuration setting *LOADER_STEPS_ENABLE_INACTIVITYTRACKER*, which can be enabled in code or configuration.

To adjust the configuration, in the central site list *DigispaceConfigurationIDS_AK* add or edit the configuration key *LOADER_STEPS_ENABLE_INACTIVITYTRACKER*

For use in ListDefinitions ListData.xml

```xml
<lists>
	<list name="DigispaceConfigurationIDS_AK">
		<Data>
			<Rows>
				<Row Update="TRUE">
					<Field Name="Title" IsSelector="True">LOADER_STEPS_ENABLE_INACTIVITYTRACKER</Field>
					<Field Name="Value">false</Field>
				</Row>
			</Rows>
		</Data>
	</list>
</lists>
```

### TimeOut setting
To alter the timeout of the inactivity tracker, you can adjust the *Akumina.Digispace.ConfigurationContext.PageInactivityTimeOut* value. This can be done in either configuration or JavaScript.

To adjust the configuration, in the central site list *DigispaceConfigurationIDS_AK* add or edit the configuration key *PageInactivityTimeOut*

```xml
<lists>
	<list name="DigispaceConfigurationIDS_AK">
		<Data>
			<Rows>
				<Row Update="FALSE">
					<Field Name="Title" IsSelector="True">PageInactivityTimeOut</Field>
					<Field Name="Value">30</Field>
				</Row>
			</Rows>
		</Data>
	</list>
</lists>
```

JavaScript:

```json
ConfigurationContext.PageInactivityTimeOut = 30; //in minutes
```

### Callback

There is a global callback, *InactivityTrackerCallback* that is called whenever the inactivity callback is fired. This allows a developer to intercept the inactivity trigger, allowing the following use cases:
* Check a condition to determine if the message should show
  * Suppress when the editing interface is open.
  * Suppress based on environmental condition (network)
  * Suppress based on type of user
* On timer expiration, send to logout flow instead of showing a message

```js
window.InactivityTrackerCallback = function() {
    // Suppress the inactivity message when the editing interface is open.
    var isModuleOpen = $(".akv-modal-overlay-module").length > 0;
    if (!isModuleOpen && !Akumina.Digispace.PageContext.EditMode){
        window.location.reload();
    }
};
```

### Lengthening the timer

It is possible to trigger an event so that the inactivity timer resets. Call the event */inactivitytracker/activityhappened/* to push back the timer as needed.

```js
Akumina.Digispace.AppPart.Eventing.Publish('/inactivitytracker/activityhappened/');
```
