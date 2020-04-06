---
title: Callbacks
id: Akumina-Widget-Callbacks
---


### Overview

The purpose of this article will be to explain and demonstrate the provided functionality of callbacks in the Akumina Framework, specifically pertaining to widgets, and provide examples of how they can be used.

## Natively Supported Callbacks

Pertaining to widgets, the Akumina Framework supports two callback functions by default:

* callbackMethod

```json
{
    "name": "callbackmethod",
    "friendlyname": "callbackmethod",
    "value": "",
    "type": "string"
}
```

* uiCallbackMethod

```json
{
    "name": "uicallbackmethod",
    "friendlyname": "uicallbackmethod",
    "value": "",
    "type": "string"
}
```

The differences between the two functions is the point in the widget lifecycle in which the functions are invoked. **callbackMethod** is invoked after the property bag for the widget has been finalized but BEFORE the UI is parsed. **uiCallbackMethod**, conversely, is invoked after the UI is parsed but before it is rendered to the user. The general idea behind the callback functions is to easily provide custom functionality to a widget, or a group of widgets, that is easily available to the widgets on the page and can be shared between multiple instances. For example:

Let's say you have several widgets that use an ItemID property. The ItemID property is used to provide uniqueness to DOM elements by constructing a custom ID value. However, due to the nature of the ItemID property, it is invalid HTML and needs to be sanitized before being rendered.
To this effect, a global *window.SanitizeIDValue* would be sufficient. The callback function must reside under the window object:

*foundation.custom.js*
```javascript
// The value of the data parameter is equal to the property bag of the current widget
function SanitizeIDValue(data) {
    if (data.id && data.id !== '') {
        data.id = data.id.replace(/=/g, '').replace(/-/g, '');
    }
    return data;
}
```

Once the function has been created in the appropriate file, simply set the **callbackMethod** property on the widget. Following this example, let's continue with the idea that we need to add jQuery click events to a button rendered by this widget. We need to add the event to the button before it is clickable by the user to prevent any odd behavior. The **uiCallbackMethod** property is perfect to handle this scenario as the elements are available in the DOM but not yet rendered. Let's create a new function for this:

*foundation.custom.js*
```javascript
// control = jquery selector of widget container
// properties = property bag of the widget
function MyWidgetClickEvent(control, properties) {
    if (control && control.length > 0) {
        $(control[0]).find(properties.publishButtonId).unbind().bind('click', function(event) {
            alert('Your item will be processed shortly...');
        });
    }
}
```

Similar to callbackMethod, simply set the property for **uiCallbackMethod** and the function will be invoked pre-render.


## Widget Implementation

# callbackMethod

The following widgets support the **callbackMethod** property by default:

* AnnouncementItemsWidget
* BannerWidget
* CalendarWidget
* CollatedDepartmentNewsWidget
* CompanyCalendarWidget
* CompanyNewsHeroWidget
* CompanyNewsItemWidget
* CompanyNewsListWidget
* DashboardContainerWidget
* DepartmentListWidget
* DepartmentNewsItemWidget
* DepartmentNewsListWidget
* DepartmentNewsWidget
* DocumentFilterWidget
* DocumentListWidget
* DocumentsSummaryListWidget
* DocumentViewerRefinerWidget
* DocumentViewerTreeWidget
* DocumentViewerWidget
* EmployeeDetailWidget
* EventDetailWidget
* FaqWidget
* FormWidget
* GenericItemWidget
* GenericListWidget
* GenericSearchListWidget
* ImportantDatesWidget
* LanguagePickerWidget
* LatestMediaWidget
* MyAppsWidget
* MyFavoritesWidget
* MyFormsWidget
* MyTeamWidget
* PeopleDirectoryWidget
* QuickLinksWidget
* RssNewsWidget
* SiteAlertsWidget
* StepperInstanceWidget
* TrafficWidget
* TrayWidget
* WeatherWidget

The functionality for invoking the custom callback function is standardized across widgets. Typescript example below:

```typescript
BindTemplate(templateUri: string, data: any, targetDiv: string) {
    var hadError = false;
    var theDataCallBack = (<any>window)[_cur.myWidget.callbackMethod];
    if (typeof theDataCallBack == "function") {
        try {
            data = theDataCallBack(data);
        } catch (e) {
            Akumina.AddIn.Logger.WriteErrorLog(_cur.myWidget.callbackMethod + " had an error: " + e);
            hadError = true;
            var errorObj = { targetDiv: _cur.myWidget.SenderId, sender: _cur.myWidget.SenderId, message: e, properties: _cur.myWidget };
            new (<any>window).Akumina.Digispace.AppPart.Data().Templates.BindErrorTemplateForWidgets(errorObj);
        }
    }

    if (!hadError) {
        // Bind and parse template...
    }
}
```


# uiCallbackMethod

The following widgets support the **uiCallbackMethod** by default:

* AnnouncementItemsWidget
* BannerWidget
* CalendarWidget
* CollatedDepartmentNewsWidget
* CompanyCalendarWidget
* CompanyNewsHeroWidget
* CompanyNewsItemWidget
* CompanyNewsListWidget
* ContentBlockWidget
* DepartmentListWidget
* DepartmentNewsItemWidget
* DepartmentNewsWidget
* DocumentFilterWidget
* DocumentListWidget
* DocumentsSummaryListWidget
* EmployeeDetailWidget
* EventDetailWidget
* FaqWidget
* FormWidget
* GenericListWidget
* GenericSearchListWidget
* ImportantDatesWidget
* LanguagePickerWidget
* LatestMediaWidget
* MyAppsWidget
* MyFavoritesWidget
* MyFormsWidget
* MyTeamWidget
* PeopleDirectoryWidget
* QuickLinksWidget
* RssNewsWidget
* SiteAlertsWidget
* StepperInstanceWidget
* TrafficWidget
* TrayWidget
* WeatherWidget
* WorkspaceDetailsWidget
* WorkspaceDocumentsViewWidget
* WorkspaceDocumentsWidget
* WorkspaceListingFeaturedWidget
* WorkspaceListingWidget
* WorkspaceManageMembersWidget
* WorkspaceMilestoneWidget
* WorkspaceRecentConversationsWidget
* WorkspaceTabWidget

The functionality for invoking the custom callback function is standardized across widgets. Typescript example below:

```typescript
BindTemplate(templateUri: string, data: any, targetDiv: string) {
    var hadError = false;
    
    // callbackMethod functionality...

    if (!hadError) {
        new Akumina.Digispace.AppPart.Data().Templates.ParseTemplate(templateUri, data).then(function (html) {
            // UI parsing/rendering logic...

            _cur.BindUI(control, _cur.myWidgetRequest);
        });
    }
}

BindUI(control: JQuery, properties: any) {
    var theCallBack = (<any>window)[_cur.myWidget.uiCallbackMethod];
    if (typeof theCallBack == "function") {
        theCallBack(control, properties);
    }
}
```