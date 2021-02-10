---
id: AK-Stream-UserPreferences
title: User Preferences Endpoint
---


## Overview

The purpose of this article will be to illustrate and demonstrate the functionality behind the **UserPreferences** endpoint, how it functions, and what it offers. This article makes the following assumptions:

* Akumina Framework Version 5.0 or Higher
* Valid Activity Streams License Key
* Authorization to make data calls to Activity Stream API Endpoints


## What is the UserPreferences Endpoint?

The **UserPreferences** Endpoint is provided by the Activity Streams API to persist user configuration settings. By default, the endpoint will only return data for the user making the network request. Because of the obscurity behind what "user preferences" entails, the endpoint has been made generic to handle any and all situations.

For example, in the context of Activity Streams, the user's Filter information (The Stream Filter Widget) makes use of this endpoint and its moldable data model shape to track and persist, and even remove, User Preferences.


### How do I use it?

**NOTE**: Because this is a subset of functionality, this article will not make use of a complete widget structure. Instead, snippets of code will be provided and explained. All code shown henceforth is perfectly valid to be copy-pasted into the console command window.

Before we make use of it, let's start off by understanding the shape of the data. As mentioned before, the **UserPreferences** Endpoint is very generic and moldable. The data model operates on a **Key-Value Pair**. This means you can define a key and a value for, basically, any data you want to persist through this endpoint.

To start, let's write a script that will persist a user's favorite color. There are no wrong answers for this but there is only one right answer: Red.

```javascript
var headers = {
  'Accept-Language': Akumina.Digispace.UserContext.GetLanguage().languageId.toString()
};
var request = {
  'testdata': 'Red'
};
$.ajax({
  url: Akumina.Digispace.ConfigurationContext.InterchangeURL + '/api/userpreferences',
  headers: headers,
  method: 'PUT',
  contentType: 'application/json',
  data: JSON.stringify(request),
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true,
  success: function (success) {
    console.log('Success => IsError: ' + success.IsError);
  },
  error: function (error) {
    console.log('Error => ' + error);
  }
});
```

Once finished, you should see the success message displayed. Once it's in there, all that's left is to get it out. Let's write another small snippet that will retrieve the data from the **UserPreferences** endpoint. Pay special attention to how we're extracting the data from the returned object:

```javascript
var headers = {
  'Accept-Language': Akumina.Digispace.UserContext.GetLanguage().languageId.toString()
};
$.ajax({
  url: Akumina.Digispace.ConfigurationContext.InterchangeURL + '/api/userpreferences',
  headers: headers,
  method: 'GET',
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true,
  success: function (success) {
    console.log('Success => Your favorite color is... ' + success.Data.testdata + '!'); // Special note below!
  },
  error: function (error) {
    console.log('Error => ' + error);
  }
});
```

**Special Note**: To reiterate, the shape of the data returned from the endpoint is identical to the shape of data provided at time of creation. We effectively took a Javascript object with one property, set to a string value, and used this as our model. Therefore, when we retrieve the data, we get a Javascript object with one property, set to a string value, and associated with the key we provided it.

With this in mind, it's entirely feasible and possible to store more complex data such as an object. For reference, this is how Activity Streams persists, syncs, and retrieves certain User Data.


### Nuances and Caveats

There are no known nuances or caveats when using this endpoint.