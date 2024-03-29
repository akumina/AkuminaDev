---
id: AK-ActivityStream-CustomCard
title: Custom Cards
---

### Overview

The purpose of this article will be to demonstrate the ability of an end-user/developer to create a new Custom Stream Card from scaffolding, to deployment, to maintenance. This article assumes the following:

* Akumina Framework V5.0 or higher
* Valid Activity Stream License
* Basic setup and functionality have been performed
* Valid Akumina project structure created
* Latest version of Visual Studio Code

**Note:** For more information on basic installation and setup, please see the following articles:

[Yo Akumina](/docs/Yo-Akumina)

[Stream Card Builder](/docs/AK-Stream-Card-Builder)


## Scaffolding

Let's begin with scaffolding the custom stream card directory. In your Akumina Project Directory, open the terminal (Default: CTRL+`) and enter the following command:

```npm
npm run cardstub name
```

Where '*name*' is the optional name of the custom card you'd like to create. For more information on this process, please see [Stream Card Builder](/docs/AK-Stream-Card-Builder). For the purpose of this article, we will be creating a new Custom Stream Card named *CustomCard*. Once you finish the process, you should see a directory structure similar to the following:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/baseoutputstructure.PNG)

In its current state, the card component is ready to be compiled and deployed. Albeit, the component will provide little to no worth to the business nor the end users in its current state. However, this does illustrate Akumina's continued goal of delivering the most painless, easy to use functionality to support our Framework.

If you'd like an explanation of the individual components produced as the output of the Stream Card Builder process, head on over to the [Stream Card Builder](/docs/AK-Stream-Card-Builder) page.

Now that we have our base output, let's take a moment to discuss some of the more back-end pieces of the Activity Stream Framework...


## Background Components

The Activity Stream's Stream Event data is displayed to the user via Cards rendered through the main Activity Stream widget. There are, however, a few background components and pieces that need to be discussed to broaden our understanding of the system. As you may know, the Akumina Framework hosts the majority of the helper functions and implementations that make the Akumina product work. Think of the Akumina Framework as a wide umbrella that encompasses the entirety of the system. The Activity Stream widget is a smaller umbrella underneath the Akumina Framework, providing helper functionality and implementation specific to the Activity Streams experience.


### App Manager Functionality

As part of the Activity Streams product, the App Manager now hosts several Management Apps specific to Activity Streams. For the sake of this explanation, we will only focus on the main Management App - The Activity Streams Management App. From this app, one can configure, activate, disable, or delete Activity Subscriptions to Sharepoint or third-party sources. Likewise, one can also configure Activity Types from this app.

### Subscriptions

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/activitystream_managementapp.PNG)

The definition of a Subscription in the context of the Activity Streams Experience is defined as a contract between the host (The Activity Stream background processor) and the target (Sharepoint or a third-party source) to monitor change events, as configured, and store the associated data to surface to the user at a later date.

In layman's terms, a subscription simply watches a target for change events so they can be displayed to the user. You can read more about the Activity Stream Management App on our [Community Site](#)!

### Activity Types

Once a Subscription detects a change event, the data is persisted in the system. When the data needs to be displayed to the user, it is returned via an API Call. The shape of the data as well as the properties returned from the API are defined through the Activity Type. The Activity Type can be thought of as a promise between the back-end system and the Activity Stream UI. 

Following our scaffolded Custom Card from earlier, we created a Custom Card that will be injected into the Activity Stream widget through an association defined in a Sharepoint List. The Sharepoint List holds a relationship between the Custom Cards we'll be creating and the Activity Type. Using this association, the widget is capable of dynamically creating/reading the association list to know where each data object will go.

To recap: Subscriptions have Activity Types, Activity Types are mapped to Stream Cards, Stream Cards are displayed to the user via the Activity Stream widget. The association between Activity Types and Stream Cards is defined in a list.

Which brings us to our next point...

### Activity Type Mapping

The Activity Stream package ships with a Sharepoint List: StreamCards_AK. This list holds the definition and relational mapping of Stream Cards to Activity Types. The mapping operates on a n:1 relationship, where many Activity Types can be mapped to one Stream Card. 

Consider the following Sharepoint List:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/streamcardsaklist.PNG)

* Activity Type

This defines the Activity Type mapped to the Stream Card Entry.

* StreamCardName

The name of the Stream Card. ("Name" in the config.json)

* StreamCardClass

The namespace of the Stream Card. ("Class" in the config.json)

* EnableComments, EnableReactions, EnableHeader

These values are EnableComments, EnableReactions, and EnableHeader, respectively, in the config.json of your custom card.

**NOTE**: You shouldn't need to manually update this list. While deploying the custom stream card, this list will automatically be updated as part of the deployment process. Referring to this list can help with troubleshooting but manual edits are not recommended.


## Sample Exercise

To cover some of the more in-depth topics, we'll lead with an example. We'll use this example to demonstrate how to achieve the selected goal from scaffolding to deployment and then review some of the more nuanced concepts that come with Custom Stream Card development.

**Premise**: I want to display Stream Event Data in my Activity Stream

### Subscription & Activity Type Setup

Each Stream Event has a property named *Extend*. The Extend property is a key-value pair of user-defined custom data. You could put anything in here and get it returned to you from the API. So let's do that. Navigate to the following location:

* App Manager
* Management Apps
* Activity Stream Management App (Whatever you chose to name it)

I strongly recommend making a new Sharepoint Subscription for this!

The first thing we'll need to do is create a new Activity Type. To elaborate on this, the Subscription is simply a contract between the system and the target that change events, as you set them, are tracked on the target and displayed to the user. The Activity Type defines the shape of the data returned to the UI. The Target's data may be in X shape, which is then translated into Y shape for Activity Stream storage, and then translated into Z shape, defined by the Activity Type (and its mapping), to be returned to the consumer (the UI in our case).

So, let's do the following:

* Hover over Subpages
* Click on Activity Types
* Select the *Note* type
* Click on Copy
* Name the new type whatever you'd like. For the sake of the article, I will name mine *NewNote*

Scroll to the bottom and you will notice a *Custom Properties* section. Click on the button next to it to begin adding your first Extend property. You'll see four fields:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/extendprop.PNG)

* Name

This is the name of the property within the Extend object

* Required

This denotes whether the value is required to be filled in when a Subscription is created using this Activity Type

* Description

A friendly, human readable explanation of what this property is

* Default Value

Self explanatory. What value should this field default to when not provided?

To the right of the Extend field, you'll notice a button. Click on it and you'll be able to map a Sharepoint Column to the value of the Extend property. For instance, Subscriptions are only so dynamic and can only support so many properties being mapped. However, if you have a property you want mapped that doesn't fit into one of the provided fields for the Sharepoint Subscription, you can also use the Extend object to ensure the mapping is secured:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/extend_mapping.PNG)

You can create as many Extend properties as you wish. However, remember that the size of the Extend object will impact network performance, so try to be concise!

For the sake of our example, we'll create a new property with the following values:

```
Name = "FooterTitle"
Required = false
Description = "Title for the footer!"
Default Value = "Default"
```
**NOTE:** String literals must be wrapped in double quotes for the *DefaultValue* property.

Once finished, well, you're finished! The entry will be saved whenever an update to a property field is made so there is no Save button. Exit back to the main landing page for the Activity Stream Management App and create a new Sharepoint subscription. Set the polling interval, priority, etc to whatever you'd like. However, change the Activity Type from *Note* to *NewNote* and be sure to set the *content* property to something we can easily change, such as the *Title* field of the Sharepoint list:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/subscription_activitytype.PNG)

Scroll to the bottom and you will see our new *Object.Extend.FooterTitle* property appear in the list with the default value of "Default" that we defined earlier. Neat!

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/subscription_content.PNG)

Save your subscription and activate it. Feel free to make an update to the target list to allow the process to pick up on the change while we divert our attention back to our code.


### Back to the Code

Now that we have our Subscription and Activity Type setup, we'll need to go back to our scaffolded code and make a few additions to make use of it. We'll accomplish the following:

* Create the Footer implementation
* Map our API Data to the UI Model
* Review what we've learned


Let's get started, shall we? The first thing we'll want to do is think about how we're going to approach this by thinking about what we know so far:

```
Our Subscription is set up to watch a Sharepoint List for change events. 
Our Subscription is using a custom Activity Type that makes use of custom properties via the Extend property on the return object from the API.
```

Next, let's review what we know of the Activity Stream implementation:

```
The Activity Stream widget will retrieve the data from the API.
The Activity Stream widget will process each line item and pass the data to the appropriate Stream Card JS.
```

We can see that the base implementation is doing the heavy lifting for us. We *know* we will receive the object we care about. Now our only job is to make sure we're mapping the data correctly. So, let's start writing code!

The first thing we'll need to do is create a function, and a helper function, to help transform our API Response Model into the UI Model. After that is finished, we'll return to the render function to bring it all together and display the data. The full contents of each of the files are shown below:

*CustomCard.tsx*
```javascript
import * as React from 'react';
import * as Akumina from 'akumina-core';

import { CustomModel } from '../models/CustomModel';
import { IActivity, ISubscriptionProps } from '../../../../externals';

interface ICustomCardState {
    viewReady: boolean;
}

interface ICustomCardProps {
    ActivityProps: IActivity;
    SubscriptionProps: ISubscriptionProps;
    FooterTitle: string;
}

export default class CustomCard extends React.Component<ICustomCardProps, ICustomCardState> {
    private readonly _defaultOverrideValue: string = 'Default';

    constructor(props: ICustomCardProps) {
        super(props);

        this.state = {
            viewReady: false,
        };
    }

    componentDidUpdate(oldProps: ICustomCardProps, oldState: ICustomCardState) {

    }

    componentDidMount() {
        this.setState({
            viewReady: true
        });
    }

    render() {
        if (this.state.viewReady) {
            var modelProps: CustomModel = this.ToCustomCardModel(this.props.ActivityProps);

            return (
                <div className='ia-example-container'>
                    <label>Titles:</label>
                    <div className='ia-example-lineitem-container'>
                        {modelProps.Contents}
                    </div>
                    <div className='ia-footer-container'>
                        <div className='ia-provider-nameof'>
                            This Change Event brought to you by: {modelProps.FooterTitle}!
                        </div>
                    </div>
                </div>
            )
        }
        else return (
            <div>
                Loading Card View...
            </div>
        );
    }

    // PRIVATE FUNCTIONS
    private ToCustomCardModel(activity: IActivity): CustomModel {
        var model: CustomModel = new CustomModel();
        var footerObj: any = activity.Object.Extend['FooterTitle'];

        model.Contents = activity.Object.Content;

        if (typeof footerObj !== 'undefined') {
            model.FooterTitle = this.ValidateTitleProperty(footerObj);
        }

        return model;
    }

    private ValidateTitleProperty(titleIn: string): string {
        if (titleIn == null) return this._defaultOverrideValue;

        if (titleIn.trim() == '') return this._defaultOverrideValue;

        return titleIn;
    }
}
```

*CustomModel.ts*
```javascript
export class CustomModel {
    public FooterTitle: string;
    public Contents: string;

    constructor(footerTitle: string = '', contents: string = '') {
        this.Contents = contents;
        this.FooterTitle = footerTitle;
    }
}
```

## Code Review

This may be a lot to take in so let's take this one step at a time. Starting with the Model...

### CustomModel.ts

We've defined our model to hold two properties: *Contents* and *FooterTitle*. The Contents property will be mapped to the Contents of the API Response Model. The FooterTitle property will be mapped to the key "FooterTitle" in the Extend property of the Response API Model. We've defaulted both of these values in the constructor so as not to force us to provide values when we create a new instance of this object. Optionally, you can just use object initialization notation for this if you'd prefer.

### CustomCard.tsx

Let's start with the IProps interface and its shape. You'll notice two types that you may not be familiar with: *IActivity* and *ISubscriptionProps*. Let's review these so we can fully understand the data they hold:

### IActivity

The IActivity object holds the details of the Activity of the Change Event. The two surface level properties are *Object* and *Actor*, where Object is the data holding the change event and its relevant properties and Actor is the initiator of the change event and that user's basic details.

* **IActivity.Object**

The IActivity.Object property holds data relevant to the Change Event being surfaced to the user. This includes:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/apiresponse_object.PNG)

* Type

This denotes the Activity Type associated with the Change Event (Note, Document, Event, CustomCard, etc).

* ID

The unique identifier of the change event.

* Name

The Name given to the individual change event. This is configured on the subscription level.

* MediaType

The type of data being transmitted across the network. *text/html* is the most common value for responses.

* Content

The content of the change event. This is configured on the subscription level.

* Updated

The point in time at which the target (Sharepoint or third-party) was updated to generate this change event.

* Url

The URL to the item on the target's domain, or a link where the origin of the change event can be viewed. This is configured on the subscription level.

* StartTime/EndTime

These are optional parameters that may or may not be provided depending on the target system and the Activity Type. For an event such as an Outlook Calendar event, these properties denote the start and end time of the changed event.

* LanguageId

The Sharepoint Language ID defining the language of the change event.

* Extend

This is what we configured earlier. It is returned as a key-value pair. This is configured on the subscription level.


The final part of the response object is the Actor. The author of the change event:

* **IActivity.Actor**

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/apiresponse_actor.PNG)

* Type

This defines the Author's type, whether the Author is a person, system process, etc.

* Name

The name of the Author of the change event.

* Id

This is the User Principal Name of the Author of the change event. This value will usually be the user's email address.


Lastly, we have the *ISubscriptionProps* object. This object holds basic information about the Subscription from which the Change Event was created:

### ISubscriptionProps

* Priority

A number denoting the Priority of the Subscription. This is configured on subscription level.

* ResourceType

This is an identifier used by the back-end system to denote which kind of internal type this change event is mapped to. This is value is used to determine which icon to display next to Subscriptions, as well as a few other clever uses.


Now that we have our guaranteed properties defined, we can continue with the explanation of the code.

### ToCustomCardModel

This is a function you will become very familiar with. As we just reviewed, the Activity Stream Widget will provide every Custom Stream Card with the two above properties. Using these properties, we can use a function, like *ToCustomCardModel*, to translate the API models into our own UI models. 

The API Response Model contains a wide array of data meant to be useful to a wide array of Stream Cards. It's up to us, however, as developers, to pick and choose the properties we do use. That is why we define a Model shape and use this function to transform the API Model into a UI Model.

### render

We immediately switch our render output based on whether the custom card is ready to display data. In the above sample, the implementation is a bit basic. However, any pre-processing you may need to perform, including network calls to external resources, would happen in the **componentDidMount** phase of the lifecycle and would flip our render flag once finished. Once we're ready to display our data, the first thing we do is make a call to *ToCustomCardModel* to transform the API data into UI Models. Next, we populate our template model for our external HTML file and call the render process.


## Rollup Functionality

You might've noticed there's a checkbox available on the Event Subscription page mentioning rollups that we haven't touched yet. This option notifies the backend system that this Event Subscription will watch an entire Sharepoint List for change events instead of individual line items in the list.

Consider the following scenario: I have an Event Subscription pointed towards the Tutorial1_AK list. The Rollup option is not checked. I have another Event Subscription pointed towards the Tutorial2_AK list. The Rollup option for this one has been checked.
When I make a change in Tutorial1_AK, a change event is listed for the line item in the list that changed. Each line item changed will generate a new change event in the Activity Stream. Conversely, any change on any line item in Tutorial2_AK will generate a single change event in the Activity Stream.

Because this change event can cover 1 to n items, where n is a ridiculously large number, we need to alter our approach to creating the Stream Card.


### Starting Out

Picking up where we left off, we'll set out to accomplish the following:

* Understand the Rollup Activity Type

* Understand the stock Activity Types that come with the 5.0 Activity Stream experience

* Explore our options

Navigate to App Manager, then to your Activity Stream Management App, and begin creating a new Sharepoint Event Subscription. This time, check the box asking if you'd like Rollups. Scroll farther down the page to the column mapping section and take note of the Activity Type select field. It should've changed to **Rollup**. Towards the bottom of the column mapping section of the page, you'll notice two extend properties: **widgetinstanceid** and **listname**. The listname value should be pre-populated with the target list of the Subscription itself.

**NOTE**: It is strongly advised not to set the Event Subscription as Multi-Lingual.

The stock Rollup Activity Type has an extend property named **widgetinstanceid** because of the nature of the Rollup functionality. The entire Sharepoint List is being watched for change events, however, the individual change events that occurred in the list are not captured in the Rollup implementation. The Change Event from the Rollup implementation is simply a notification that a change has occurred on one or more line items in the list.
For this reason, Akumina also launches the 5.0 Activity Stream experience with three widgets available to demonstrate the functionality as well as a stock card. The Widgets are:

* BannerWidget

* FAQWidget

* CuratedWidget

Each of these widgets are responsible for showing multiple sets of data at once. This is the kind of implementation that would be used for a Rollup experience: To show the updated contents of the list - many items readily available at once.

To start this off, we'll create a new Banner List. In App Manager, go to the Management Tab, then go to Widget Manager. Find the **Banner Widget** in the list and click on the Instances button. Click on Create New Instance to be navigated to the next screen. A modal should appear asking you to point to your desired list. Click on the option to create a new list with the appropriate content type. Name the List whatever you'd like. For this example, we'll refer to it as simply Banner_AK.
In the upper-right corner, hover over your profile picture and select "Settings". Click on the "Content Settings" button. On this page, create a new Content App for the Banner_AK list we just created. Enter your name, select your icon, change the Type to "Slider", and make sure you chose your correct list. Click create and we're finished for this part of the configuration.

### Widgets, Widgets, Widgets

In App Manager, go to the Management Tab, then go to Widget Manager. Find the **Banner Widget** in the list and click on the Instances button. If one doesn't already exist, create a new instance of the Banner Widget. The name and description can be set to whatever you desire and the properties can be left as default. Don't forget to select your view! When finished, create the instance to be sent back to the instance display screen. Copy the Widget Instance ID of your desired instance.

Back to the Activity Stream Management App, in our new Event Subscription checked as a Rollup using the Rollup Activity Type, scroll down to the extend properties and enter your widget instance ID into the text field. This value **must be wrapped in double quotes**". Create your Subscription and wait for the deployment process to finish.

Once fully deployed, navigate to the Content App you created previously. Add a few entries into the Banner_AK list, then make a few edits. These changes will propagate up to the backend system and create a change event. Navigate back to the Activity Stream page. If you did not make your Subscription required, be sure to activate the Subscription through the Subscription Configuration menu in the MeBar Widget.

Once the designated polling time has passed, you might be shocked to see that the Rollup event has already appeared in the Stream. The reason for this is the **RollupCard** stream card that ships with the Activity Stream Experience.


### Back to the Code: Part 2

Surprisingly, the implementation of the RollupCard is very similar to a normal Custom Stream Card. The difference, however, is in the model mapping:

```javascript
    ToRollupItem(activity: IActivity): RollupModel {
        var rollupItem: RollupModel = new RollupModel();
        rollupItem.WidgetInstanceId = activity.Object.Extend['widgetinstanceid'];
        rollupItem.ListName = activity.Object.Extend['listname'];

        // Register a timeout to render child widget
        if (this.subWidgetDebounce !== null) clearTimeout(this.subWidgetDebounce);
        this.subWidgetDebounce = setTimeout(() => {
            var widgetProps = {
                listname: rollupItem.ListName
            };
            var props = [{
                widgetId: rollupItem.WidgetInstanceId,
                widgetProps: JSON.stringify(widgetProps)
            }];
            var widgetManager = new Akumina.Digispace.Data.WidgetManager();
            widgetManager.InitializeChildWidgetsWithOverride([rollupItem.WidgetInstanceId], null, props, 'view');
        }, 2000);


        return rollupItem;
    }
```

Let's review the code. First, we begin by reading in the extend properties. Next, we implement a debounce timeout just in case we run into timing issues and multiple concurrent renders. In the timeout, all we do is create the necessary properties to override the chosen widget's properties and then create a new instance of the widget on the page. It's as simple as that.

The Rollup Card in this scenario is simply a mediator between the Activity Stream front-end implementation and the specific widget tasked with surfacing the data to the user. Much in the same way StreamCards_AK can be seen as a mediator or a mapping model. The Banner Widget is instantiated pointing to the List defined on the Event Subscription. The Banner Widget's sole purpose is to display data from a chosen list with the appropriate Content Type.

For this reason, a custom Rollup Card may also require the use of another widget tasked with surfacing that specific data, or data in general. For more information on creating traditional Akumina Widgets, check out the [Akumina Widgets](/docs/Akumina-Widgets-Overview) page. If React if more your style, the [React Widgets](/docs/Akumina-React-Widgets) page is where you should be.