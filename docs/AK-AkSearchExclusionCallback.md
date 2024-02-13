---
id: AK-AkSearchExclusionCallback
title: Akumina Search AkSearchExclusionCallback
---

### Overview
While the Office 365 CDN is the most used, any CDN can be used with the Akumina platform. Any such CDN must have certain data and configurations to be used successfully.

### AkSearchExclusionCallback example
The following is an example of the *AkSearchExclusionCallback* function, which adds new fields:

    window.AkSearchExclusionCallback = function(model, currentPage){
        // find a value in the page
        var pageCategory = $(‘.someclass’).val();

        // add a new field; this property name should match the list field name exactly
        model.PageCategory = pageCategory;

        // modify the html to be indexed.

        model.Html = model.Html + ” some additional text”;

        // Single Taxonomy Example
        // In actual usage, you would draw this from somewhere.
        var termValue = new SP.Taxonomy.TaxonomyFieldValue();
        termValue.set_label(“CORPORATE”);
        termValue.set_termGuid(“1f164abf-d4cc-4d51-8f06-32b7f72177f1”);
        termValue.set_wssId(-1);
        model.PageKeywords = termValue;

        return model;
    }

### Suppressing indexing of the item
Inside the callback, you can direct the system to not index the item. To do so, set the value for *NoIndex* as shown:
 
    data.NoIndex = true

### References
* https://community.akumina.com/knowledge-base/configuring-search-for-akumina-widget-content/
