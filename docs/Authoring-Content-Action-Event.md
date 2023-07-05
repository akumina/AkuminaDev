---
id: Authoring-Content-Action-Event
title: Content Action Event
---

# Applies to
6.0+

# Overview

A few content actions in Authoring Modules publish an event called `/authoring/contentaction/`, which provides clients with several properties.

The following content actions publish this event:
- Publish
- Save
- Delete
- WorkFlow Submit
- WorkFlow Cancel
- Approve
- Reject

This allows clients to create custom behavior that happens after an above content action.

# Components

There is technically only one required component for this feature - code that subscribes to the `/authoring/contentaction/` event. From there, it is up to you how you want to use the payload provided.

# Example

In this example I am showing a modal that displays the item's contents. The Javascript code is placed inside of `digitalworkplace.custom.js`, and HTML is placed inside `AdditionalMasterMarkup.html`.

**Javascript**

```js
Akumina.Digispace.AppPart.Eventing.Subscribe("/authoring/contentaction/", (contentAction) => {
      document.getElementById("authoring-events-content").textContent = JSON.stringify(contentAction, undefined, 2);
      $("#authoring-events-overlay").show();
      $("#authoring-events").show();
});
```

**HTML**

```html
<div id="authoring-events-overlay" class="akv-modal-overlay" style="display: none"></div>
<div id="authoring-events" class="akv-modal akv-left-layer akv-modal-center akv-modal-small-medium" style="height: unset; display: none">
    <header class="akv-modal-header ">
        <div class="akv-modal-header-title-wrapper">
            <h2>Authoring Events</h2>
        </div>
        <div class="akv-modal-header-right-wrapper">
            <div class="akv-modal-actions">
                <button class="akv-modal-close" onclick="onCloseAuthoringEvents()">
                    <i class="fa-regular fa-xmark" aria-label="Close"></i>
                </button>
            </div>
        </div>
    </header>
    <section class="akv-modal-content ">
        <pre id="authoring-events-content">
        </pre>
    </section>
    <footer class="akv-modal-footer">
        <button class="akv-btn-form akv-primary" onclick="onCloseAuthoringEvents()">Close</button>
    </footer>
</div>
<script>
    const onCloseAuthoringEvents = () => {
        $("#authoring-events").hide();
        $("#authoring-events-overlay").hide();
    }
</script>
```

**Payload**

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Authoring/IActionItem.png)

The ContentAction property contains a string that tells you what exactly the action was:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Authoring/ContentAction.png)

