---
id: Authoring-Field-Event-Integration
title: Field Event Integration
---

# Applies to
All versions of Akumina

# Overview

All Authoring Modules support custom field events. This allows clients to add custom behavior to their fields, such as enabling/disabling a field based on the value of another field.

We are using jQuery on top of React to modify the fields, so the limits of this feature are really up to your imagination.

# Components

There are three components to this feature:
1. A `AkFieldMetadataResponseCallback` method that accepts metadata as a parameter - this contains the list schema
2. "data-field-id" attribute - this is automatically injected into the fields on render
3. `Akumina.Authoring.RegisterFieldEvent` - this registers your custom event(s) to the field(s) by id

This feature is currently implemented in the following components only:
- Text field
- Textarea field (not CKEditor)
- Checkbox
- Number
- Date (non-recurring)

# AkFieldMetadataResponseCallback

All of your code will be written inside of the `AkFieldMetadataResponseCallback` method. This is where you will extract your fields from metadata and configure the callback(s) to manipulate your field(s).

This callback will be called when metadata is retrieved for an item (i.e. selecting an item in the Structured Content Module).

# Akumina.Authoring.RegisterFieldEvent

The `Akumina.Authoring.RegisterFieldEvent` method expects the following object

```json
{
    id: string
    onMount: function
    onUpdate: function
}
```
The id property is used to find the field in the DOM and register the `onMount` and `onUpdate` callbacks. The `onMount` callback will be called one time when the field mounts, and `onUpdate` will be called any time the field re-renders. Both will pass the value of the field.

# Example

In the example below, we are looking at two fields
- Video URL (text field)
- Show as Modal (checkbox)

We want to only enable the Show as Modal field if the Video URL field has a value. Otherwise, it should be disabled.

In this function, we are performing three steps:
1. Extract the fields from the metadata object
2. Create the callback used to manipulate the fields (in this case, we are manipulating the Show as Modal field
3. Register the callback to the field that triggers the manipulation (in this case, Video URL will trigger the callback to manipulate Show as Modal).

You can see that you access the field(s) via the data-field-id attribute.

Here we are passing the same callback to both onMount and onUpdate, as we want to make sure the Show as Modal field is disabled/enabled appropriately on mount, before the user has made any changes to the Video URL field.

```js
window.AkFieldMetadataResponseCallback = (metadata) => {
    const videoUrl = metadata.EditorialFields.find(f => f.Title == "VideoUrl")
    const showAsModal = metadata.PropertiesFields.find(f => f.Title == "ShowAsModal")
    
    if (videoUrl && showAsModal) {
        const callback = (value) => {
            if (value) {
                $(`[data-field-id='${showAsModal.Id}']`).prop('disabled', false);
            } else {
                $(`[data-field-id='${showAsModal.Id}']`).prop('disabled', true);
            }
        }

        Akumina.Authoring.RegisterFieldEvent({ Id: videoUrl.Id, onMount: callback, onUpdate: callback })
    }
}
```

