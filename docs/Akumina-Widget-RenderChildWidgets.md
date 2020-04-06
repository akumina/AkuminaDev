---
title: RenderChildWidgets
id: Akumina-Widget-RenderChildWidgets
---


### Overview

The purpose of this article is to explain and demonstrate usage of the **Akumina.Digispace.Data.WidgetManager().RenderChildWidgets** functionality provided with the Akumina Framework. The RenderChildWidgets functionality is available in Akumina Framework version 4.5 and higher.


## What is it?

RenderChildWidgets offers the ability to render a widget embedded into another widget. Although this usage may be niche, it may be useful should the situation arise. By default, when loading a page, the Akumina Framework will scan the page to look for widget placeholders, such as the following example:

```html
<div rel="VirtualPageWidget" class="ak-page ak-widget" id="2656b679-1a51-9966-0170-14e8a3584975"></div>
```

When the above DOM element is found, the Akumina Framework goes through the process of bundling the widget assets, initializing individual widgets, so on and so forth. The problem, however, is that a widget placeholder embedded into the view of another widget is not automatically rendered by the Framework because it does not exist on the page until after the scan has been initialized. This is the benefit of RenderChildWidgets.


## How does it work?

The RenderChildWidgets functionality is a manual call in the widget javascript. The method signature is:

```typescript
RenderChildWidgets(selector: string, pageId: string | null, mode: string): void;
```

The **selector** param is a jquery selector string. The **pageId** param is a string indicating the ID of the page, this parameter is optional. The **mode** param indicates the mode the widget should be rendered in. Possible values are "view" and "edit".

The RenderChildWidgets call must be made after the widget's view has been parsed by the Handlebars helper and rendered to the page. Example usage:

```typescript
private renderTemplate() {
    try {
        let wiid: string = this.im.DivId;
        // Parse widget template
        new Akumina.Digispace.AppPart.Data().Templates.ParseTemplate(this.im.DisplayTemplateUrl, this.im).then(html => {
            // Render parsed template to page
            this.setHtml(wiid, html);

            // Render Child Widgets
            var widgetManager = new Akumina.Digispace.Data.WidgetManager();
            widgetManager.RenderChildWidgets("#" + wiid + " .ak-widget", null, "view");
            Akumina.Digispace.AppPart.Eventing.Publish("/widget/loaded/", { properties: this.im.properties });
        }
    }
}

private setHtml(divId: string, html: string) : void {
    $("#" + divId).html(html);
}
```

The RenderChildWidgets functionality will use the provided jQuery selector to find the widget div placeholder and initialize it through the framework, rendering it in the given view state.