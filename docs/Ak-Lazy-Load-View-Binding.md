---
id: Ak-Lazy-Load-View-Binding
title: Lazy Loaded UI Binding
---

# Applies to
Akumina Version 4.5.0.0 and higher

# Overview

The purpose of this article is to demonstrate and illustrate the differentiation in binding the viewmodel to the UI between Akumina version 4.5 and older versions. The user will be able to identify the benefits of the lazy-loaded implementation and appreciate how much more smooth the user experience is due to non-blocking rendering procedures.

## What is view binding?

Akumina Widgets can, in a basic sense, be divided up into three different components:

* The view, an html file
* The logic, a javascript file
* The definition, a json file

All Akumina widgets make use of the Handlebars library to dynamically render content onto a page with a pre-defined, or dynamic as well, structure by using placeholders. The Viewmodel contains the content to be injected onto the page and is bound to the view by a javascript call to the Handlebars render function. Handlebars takes the viewmodel object and replaces the placeholders in the view with content.

Example:

```html
<h1>{{Title}}</h1>
```
```javascript
{
    "Title": "Hello World!"
}
```

When the javascript is bound to the view, the value of the Title property will be inserted into the {{Title}} placeholder.


## The Old Way

The old method of displaying content on the page was relatively simple and effective. When the widget is loaded, the Init function is fired. Initial configuration of the widget begins and a loading template is displayed in place of the widget while it waits for its /loader/completed/ subscription event to be published. When the event is fired, the logic to retrieve, transform, and shape data occurs and ends with a bind call to the view template, similar to below in plain javascript:

```javascript
this.Init = function(request) {
    _cur.request = _cur.SetDefaultsProperties(request);
    _cur.Prerender();
}

this.Prerender() {
    var targetDiv = _cur.request.SenderId;
        $("#" + targetDiv).html(Akumina.Digispace.ConfigurationContext.LoadingTemplateHtml);
        Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', _cur.Render, _cur.request.SenderId);
}
```

There are other implementations of this process, including two bind calls to the viewtemplate and the viewtemplate having a conditional branch that displays a loading template until data is returned, such as the following:

```html
{{#if Loading}}
<h2>Loading...</h2>
{{else}}
<div>{{Title}}</div>
{{/if}}
```

The main detriment to this approach is that while it _does_ work, the Render process is a blocking call and nothing is displayed in the view model until the process completes in its entirety or errors out and displays an error message.

At Akumina, we aim to be better than even ourselves.

## The New Way

The new way takes advantage of async functionality to display the view structure and static data while processing behind the scenes. Take note of the above examples and how the loading template was displayed to the user. Then, observe below:

```html
<ul id="items">
{{Items}}
<li>
DATA BOUND IMMEDIATELY (the 1st request)
<H1>{{ItemTitle}}</H1>
<span ak-itemId="{{ItemId}}">Loading...</span>
</li>
{{/Items}}
<ul>
```

You'll notice that the html bares a striking resemblance to the html above. However, instead of a conditional check in the view, the [Loading...] message is hard-coded into a span. Note the special attribute on the span - ak-itemid. This is an attribute used to target and identify the element to be filled into the page.

Consider the following example: I want to display News Details on the page. Each News Detail page displays the details of a single news item. The user navigates to this page by clicking on the summary of an existing news item, thus, I know which news item to display to the user. The only "blocking" process is retrieving the data from sharepoint. I can use the above template and, in my view, inject the ID of the news article I need to display into the [akitem-id] attribute.

The below javascript completes the implementation of the lazy-loaded functionality:

```javascript
this.BindTemplate = function (templateUri, data, targetDiv) {
    new Akumina.Digispace.AppPart.Data().Templates.ParseTemplate(templateUri, data).done(function (html) {
        $(".ak-widget[id='" + targetDiv + "']").html(html);

        //AFTER YOU UPDATE THE MAIN LIST - YOU NOW GO FETCH THE DATA ASYNC in "BINDUI" function
        _cur.BindUI();
    });
};

this.BindUI = function () {
    $("#items li span").each(function () {
        var current = $(this);
        var itemId = current.attr("ak-itemId");

    //MMAKE DATA CALL HERE then update the DOM
    _cur.GetData(itemId).then(function(model){
    current.html("MY DATA WAS LOADED" + model.item);
        });
    });
}
```

Take note of the comments in the code displayed. The BindTemplate, in this example, is immediately called which renders the structure and "Loading..." message onto the screen. We also inject our news article ID into the akitem-id attribute by passing it as part of the viewmodel. Once the template is bound and displayed on the page, we then call the BindUI function which, in an async manner, retrieves the specific details of the news article to be displayed and replaces the inner html of the <span> element with the data retrieved from the Sharepoint call.

### Benefits

This implementation has the added benefit of not blocking the UI for the entire duration of data retrieval. If loading, retrieving, transforming, shaping, etc, the data is a long process, the UI does not display until the entire process is finished. However, with the new implementation, we can at least show the portions of the view that are not reliant on data being retrieved. 

