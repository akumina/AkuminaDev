---
id: Wrapping-GenericListControl-with-Custom-ViewModel-Functionality
title: Wrapping GenericListControl with Custom ViewModel Functionality
---

# Overview
As of **4.5.0.0**, the **fallbackCallback** property allows a derived widget to funnel logic through the parent widget while also retaining the ability to modify ViewModel data before rendering the Handlebars template. This technique is mainly used if you do no wish to have a callback in the global namespace as you'd need some access to the widget specifically to transform the viewmodel in some way. An example of this is shown below

# How?

***

The **fallbackCallback** callback function is called after the ViewModel data is compiled and transformed but before the data is bound to the Handlebars Template. This allows us to funnel our generic functionality through the GenericListControl Widget to fetch from the list but also allows us to inject our own data, namely the View All Links value and structuring "Groups", before binding to the template.

## fallbackCallback function

The function is housed in the Widget JS to allow retrieval of Widget properties. The callback is registered as a delegate with a reference to "this" with the scope of the Widget. The function itself takes a single param: data. This param is the compiled viewmodel data with which the callback function can modify as needed and return when finished.

## VideosWidget.js

    
        this.SetDefaultsProperties = function (requestIn) {
            requestOut.DisplayTemplateUrl = _cur.GetPropertyValue(requestIn,
                "displaytemplateurl", _cur.GetDefaultTemplateUrl());
            requestOut.fallbackCallback = _cur.GetPropertyValue(requestIn, "callbackmethod", **_cur.VideosCallback**);
            return requestOut;
        };
        this.GetDefaultTemplateUrl = function () {
            return new Akumina.Digispace.AppPart.Data().Templates.GetViewPrefix() + 
                "/Style%20Library/" + 
                Akumina.Digispace.ConfigurationContext.TemplateFolderName + 
                "/Content/Templates/VideosWidget/default.html";
        };
        this.VideosCallback = function(data){
            data.ViewAllLink = _cur.properties.viewAllLink;
            data.Groups = _cur.GetGroups(data.Items);
            return data;
        };
        this.GetGroups = function(items)
        {
            var groups = [], offset = 0,countPerGroup =3,$group;

            while ( ($group = items.slice( offset, (countPerGroup + offset) )).length ) {
                groups.push({Items:$group,Class:groups.length==0 ?"active":""});
                offset += countPerGroup;
            }            
            return groups;
        
        };
    }

    module.exports = VideosWidget;

**This page is still under construction. Revisions will be made in the future.**