---
id: AK-ActivityComments-Configuration
title: Activity Comments Config
---

### Overview


The purpose of this article will be to cover the process of configuring a widget to make use of the **Activity Comments Widget**. The article will expand upon familiar concepts, demonstrate the configuration process from start to finish, and bring to light any nuances or unintuitive behaviors or requirements present in the process.

This article makes the following assumptions:

* Akumina Framework Version 5.0 or higher

* Activity Commenting system licensed and configured

* Local Akumina Project Directory

* Source code access to widget for which the Activity Comments Widget will support


### Activity Comments Recap

The **Activity Comments Widget** is a new widget bundled with Akumina Framework Version 5.0. The widget is a stand-alone commenting interface for which any widget can make use of, provided configuration is implemented. The comments are stored in CosmosDB. By itself, the Activity Comments Widget is nearly useless as there is no source for which the comments to attach to. Simply adding the Commenting widget to a page without configuration will prove useless as there is no link to any source, thus comments will never appear.

For more information, see the [Community Site Documentation](https://community.akumina.com/knowledge-base/activitycommentswidget/)


### Activity Comments Configuration

As previously noted, the Commenting widget is useless by itself. It needs a source, a provider, for which to link comments. This is done via the Akumina Eventing Framework. The Activity Comments Widget will simply sit on the page and wait for instructions from its provider. The following snippet outlines the shape and purpose of the data the widget expects:

**Note**: The arguments supplied were initially implemented as part of support for the News Widgets

```javascript
interface ParentArgs {
    newstitle: string; // Denotes the title of the target item, in the case of News Articles, this would be the News Title displayed when sending Notifications
    listName: string; // Name of the supporting widget's target list, in the case of News Articles, this would be Blogs_AK, etc
    newsid: number; // This is the unique identifier of the source item, in the case of News Articles, this would be the unique ID of the individual News Article
    listId: string; // This is the unique Sharepoint ID of the supporting widget's target list
    _externalId: string; // This is the unique identifier of the supporting widget. One could use SenderID as the unique identifier for uniqueness constraints (ie - multiple widgets displaying comments)
}
```

See the comments in the above object definition for more information as to what each property maps to, an example of what its value may be, and examples of how one might obtain them.

Once your supporting widget has the proper object constructed, you simply need to send it over to the Commenting widget. As previously noted, the Commenting widget will, when left alone, simply sit on the page and wait for its provider to supply it with the above data. The following code will kick off the process:

```javascript
Akumina.Digispace.AppPart.Eventing.PublishAndTrack('/newsitem/changed/', args);
```

**Note:** It is recommended to place the **PublishAndTrack** call within a function that is one of the last, if not the last, to call in your widget's logic. In the widgets which ship with innate Commenting support, these calls are placed inside of the **CallBindTemplate** functions.