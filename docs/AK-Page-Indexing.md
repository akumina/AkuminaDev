---
id: AK-Page-Indexing
title: Page Indexing
---

### Preventing Page Indexing

Virtual pages are indexed in the PageData_AK list, which allows virtual pages to be searchable. There are some virtual pages that you may want to exclude from searches. For these pages, you need to prevent the page from being indexed, which you can do using the method below.

**digitalworkplace.custom.js**

```javascript
window.AkSearchExclusionCallback = function (model, html) {
    // This callback is used to exclude pages from indexing, which will prevent
    // them from showing up in search results via the search bar
    // For each page that does not need to be indexed, set model.NoIndex = true

    if (model.PageDataTitle === "title of page to exclude from indexing") {
        model.NoIndex = true;
    }

    return model;
}
```
