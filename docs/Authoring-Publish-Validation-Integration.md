---
id: Authoring-Publish-Validation-Integration
title: Publish Validation Integration
---

# Applies to
All versions of Akumina

# Overview

The Structured Content Module supports custom publish validation. This allows clients to run custom asynchronous code, and abort the publish if it does not meet some criteria they specify. 

This feature is currently only implemented in the Structured Content Module for Author Content Apps. It is enabled for both workflow and non-workflow enabled lists. It is not called for save.

# Components

There is one component to this feature: a `AkValidatePublishCallbackAsync` method, which accepts the published item as a parameter

# AkValidatePublishCallbackAsync

All of your code will be written inside of the `AkValidatePublishCallbackAsync` method. This method needs to return a Promise, and you need to make sure to reject with an exception that you want to display to the user. 

# Example

```js
window.AkValidatePublishCallbackAsync = async (item) => {
    var result = await yourCustomApiCallForPublishValidation(item);

    if (result.NotOkay) {
        throw "Publish is not allowed"
    }
}
```

If the exception is thrown (or Promise rejected if you're not using an async function), the user will see "Publish is not allowed" in a toast message and the publish will abort. Otherwise, the publish will proceed.
