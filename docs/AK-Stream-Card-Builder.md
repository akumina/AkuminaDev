---
title: Akumina Stream Card Builder
id: AK-Stream-Card-Builder
---


### Overview

The purpose of this article will be to explain the functionality and processes of, as well as illustrate the usage of, the Akumina Stream Card Builder packaged with the release of Akumina Framework 5.0 featuring the Activity Stream Experience.

## Assumptions

The following assumptions are made in this document:

* Sharepoint Site with Akumina Framework 5.0 or higher

* Project Structure with the latest Akumina Framework NPM Packages

* Activity Stream License enabled

### What is the Stream Card Builder?

The Stream Card Builder is similar to the Widget Builder and Virtual Page Builder - It automates the scaffolding and structure of Stream Cards to allow end developers to jump straight into designing their User Experience, Functionality, and Connectivity.

First, let's define the idea of a Stream Card:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Stream%20Card%20Builder/cardoverview.PNG)

As we can see in the diagram above, the Activity Stream is capable of exposing a variety of data from 3rd parties, Sharepoint, Outlook, and more. The Activity Stream exposes this data through the use of various Stream Cards. Many cards come bundled with the Akumina Installation. However, Akumina also provides end users with the ability to design, create, inject, and connect their own custom cards into the Activity Stream experience. 

For more information on Custom Cards, please visit the [Custom Card Tutorial](/docs/AK-Custom-Card-Tutorial) page.

## Commands 

The Stream Card Builder is available via the following NPM Packages:

```node
npm run cardstub <name>
```

The ***cardstub*** command starts the process of creating a new Stream Card. The ***<name>*** parameter is optional. If supplied, the name parameter will be used as the name of the Stream Card. If not supplied, you will be prompted to enter a name for the Stream Card.

The following prompts are included in the process:

* What is the name of your stream card?
    * If applicable
    * Default: None
* Which namespace would you like your card to be in?
    * Default: Akumina
    * Example: Akumina.StreamCards.CustomCard
* Would you like to enable Comments?
    * Default: true
* Would you like to enable Reactions?
    * Default: true
* Would you like to enable the Card Header?
    * Default: true

***NOTE***: When supplying the name of your new Stream Card, do not suffix the name with "Card". The process will automatically suffix this to your given name. IE - A ***<name>*** parameter of *NewsDocument* will be output as *NewsDocumentCard*.

The process is similar to the following:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Stream%20Card%20Builder/cardstubquestions.PNG)

The output structure will be similar to the following:

```
root
   └src
      └js
        └streamcards
            └CustomCard
                ├config
                |    └config.json
                └js
                  ├models
                  |     └CustomCardModel.ts
                  └streamcards
                        └CustomCard.tsx
```

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Stream%20Card%20Builder/cardstuboutput.PNG)

```node
npm run cardpkg <name>
```

The ***cardpkg*** command starts the process of packaging your Stream Card(s) for deploy using the Deploy Tool. The ***<name>*** parameter is optional. If supplied, the process will only package the specified Card if it exists. If not supplied, the process will process all folders underneath the *streamcards* directory. The output directory is similar to the normal **Widget Builder Package Command**:

```
root
   └sitedefinitions
            └assetdirectory (Defined in your .env file)
                    └streamcardpackages
```

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Stream%20Card%20Builder/cardpkgoutput.PNG)


### Stream Card Builder Output

The Akumina Custom Stream Card Builder will output three different files: The main TSX file, a model TS file, and the config JSON file. Let's take a look at each piece to understand how they all come together to create our wonderful custom card:


### config.json

```json
{
    "Card": {
        "Class": "Akumina.StreamCards.CustomCard",
        "JS": {
            "Default": "/{AssetLibraryName}/DigitalWorkplace/JS/streamcards/digitalworkplace.core.cards.customcard.min.js"
        },
        "Name": "CustomCard",
        "Views": [
            {
                "Name": "Custom Card view",
                "Path": "/{AssetLibraryName}/DigitalWorkplace/Content/Templates/CustomCard/default.html"
            }
        ],
        "EnableComments": true,
        "EnableReactions": true,
        "EnableHeader": true
    }
}
```

The config.json has a few noticeable changes from the normal widget config.json. The main reason for that is: It's not a widget! The Stream Card is simply a custom sub-component that is injeced into the main Activity Stream widget. The config.json will only hold values relevant to the stream card itself. Those being:

* Class

Similar to Widget config.json, this is the namespace the card javascript will reside in. This lets the Activity Stream Widget know where to find the code as well as tells the Framework where to deposit the code.

* JS

Similar to Widget config.json, this is the location, within Sharepoint, where the physical javascript file resides.

* Name

The name of the Custom Card

* Views

Similar to Widget config.json, this is an array holding the name and path of all the views associated with this component.

* EnableComments

This is a boolean value detailing whether to show the Comments sub-components in the output view.

* EnableReactions

This is a boolean value detailing whether to show the Reactions sub-components in the output view.

* EnableHeader

This is a boolean value detailing whether to show the Header in the output view


Because this is not a widget, the config.json is missing certain sections such as properties, instances, and more. 

### Model.ts

The Model class is created as part of the scaffolding process to promote good development practices by defining type, structure, and properties pertaining to the shape of the data to be sent to the Custom Card JS.

```javascript
export class CustomModel {
    constructor() {

    }
}
```

As you can see, the model class is currently empty as there are no custom properties to define within this component. If we were to have other properties mapped to this component, such as a List Name or a Site Context URL, these would be defined in this class similar to the following:

```javascript
export class CustomModel {
    public ListName: string;
    public SiteContextUrl: string;

    constructor(listName: string = '', siteContextUrl: string = '') {
        this.ListName = listName;
        this.SiteContextUrl = siteContextUrl;
    }
}
```

**Note:** As you can see in the above constructor, we're defaulting values so as not to force us to provide values if we were to create a new instance of this object. This does, however, require the developer to perform certain sanity checks such as undefined/null checks, empty strings, etc. The verbosity of this model is entirely on the end-developer to provide.

### Component.tsx

The *Card.tsx class is created as the main entry point and logic driver of the Custom Stream Card. Let's take a look at the default functionality provided by the scaffolding:

```javascript
import * as React from 'react';
import * as Akumina from 'akumina-core';

import { CustomModel } from '../models/CustomModel';

interface ICustomCardState {
    viewReady: boolean;
    viewHtml: string;
}

interface ICustomCardProps {
    ActivityProps: IActivity;
    SubscriptionProps: ISubscriptionProps;
}

export default class CustomCard extends React.Component<ICustomCardProps, ICustomCardState> {
    private viewName: string;
    private templateModel: any;

    constructor(props: ICustomCardProps) {
        super(props);

        this.state = {
            viewReady: false,
            viewHtml: ''
        };

        this.viewName = 'CustomCard'
        this.templateModel = {};
    }

    componentDidUpdate(oldProps: ICustomCardProps, oldState: ICustomCardState) {

    }

    componentDidMount() {
        Akumina.Digispace.ActivityStreams.GenericHelper.GetCardView(this.viewName).then((templateHtml: string) => {
            this.setState({
                viewReady: true,
                viewHtml: templateHtml
            });
        });
    }

    render() {
        if (this.state.viewReady) {
            this.templateModel = {

            };

            var renderTemplate = Akumina.Digispace.ActivityStreams.GenericHelper.JSXClient(this.state.viewHtml, this.templateModel);
            return renderTemplate(this);
        }
        else return (
            <div>
                Loading Card View...
            </div>
        );
    }
}
```

There is a lot to unpack in this. So, let's take this function by function:

* Interfaces

We define two interfaces in our React component: IState and IProps. These are used as the structure of the React Component's State and Property properties. These are used in the definition of the React Component during the class declaration.

* private viewName

This private, class-level property is used to hold the full name and extension of the view associated with this component. This follows the Activity Stream design standard of each component following a single-responsibility approach: The card only cares about what's relevant to it and will fetch its own resources.

* private templateModel

This private, class-level property is used to hold, and optionally to define the structure of, the viewbag passed to the dynamic external HTML rendering process. Should you choose to not use an external html file and simply return all of your markup from the card code, you can completely ignore this. Please see [React Widgets](/docs/Akumina-React-Widgets) for more information on external HTML rendering.

* constructor

In the constructor, we do typical constructor things: Pass props to the super-constructor as part of the React standard, define your initial state values as part of the React standard, and initialize default values for class-level properties.

* componentDidUpdate

This function is part of the native React Lifecycle. componentDidUpdate fires after the component has updated, whether via state update or forced re-render, and provides the old property and state values to compare against should you need to do so.

**Note:** For those new to React, it is important to note how React handles instances. Consider the following scenario:

An Activity Stream holds 3 Stream Events, all of type Note. A few minutes pass and a 4th Stream Event enters the Stream. At this time, React operates in a top-down approach. Let's say the cards are rendered in the order of 3-2-1. Now that we have a fourth, React will take the 3rd instance, at the top of the page, and provide it with new properties matching the new event. React will take the 2nd instance and provide it with properties matching the third. React will downshift components, re-purposing them, and create a new instance as the last element. For this reason, it is important to take into account how your components will need to react to new/updated state/property values.

**Why does this matter?** This matters depending on your functionality. Let's say your Custom Card has a collapse/expand div which is, by default, set to collapsed. Let's say the user expands the div and, following the above scenario, a new event enters the stream. The properties are updated to the new Stream Event but the state has not been reset since this isn't a new instance but a repurposed one. Therefore, the new item in the stream will render with the state of the previously repurposed component - with an expanded div state.

* componentDidMount

This function is part of the native React Lifecycle. componentDidMount is called after the component is rendered to the page, and mounted, **for the first time**. By default, the scaffolding generates this function with the logic to retrieve the views associated with this component. Once again, if you do not use external HTML views, this can be ignored and removed.

The view retrieval functionality is placed here as part of the design process: Land on the page, establish our foothold, then, using the single-responsibility approach, allow each component on the page to asynchronously perform its own processing.

* render

This function is part of the native React Lifecycle. render contains the output of the html for this component. As you can see in the above code, the scaffolding will create this function with the default pageLifeCycleComplete conditional and support for external HTML files. Again, if you do not use external HTML files, you can ignore this and remove the renderTemplate lines.

Akumina uses the pageLifeCycleComplete boolean approach to ensure the component is on the page but does not display its contents until it is ready. Instead, displaying transparency to the user that the component is alive and visible but processing in the background to deliver the rich Activity Streams Experience.


There are many more React Lifecycle functions left out of the default scaffolding process. If you need to add more, feel free to do so. The world is your oyster and Akumina is the fishing boat delivering you to safer waters!


### The... view?

As you might've noticed, there is no generated html file. The reason for this is three-fold:

1) There is no particular nuances to the external html file. You write it just as you would write the TSX output in your component files
2) Akumina supports the end-user's choice to opt in or opt out of external html file use
3) External html files aren't handled in the stream card package anyway!

Should you choose to go the route of external html file functionality %%FINISHTHIS%%


#### Views - External vs JSX Output

It's important to note the pros and cons of which approach you choose to take in your Akumina installation. So, let's jump right in!

**External Markup**

The immediate benefit of external markup is that the code and output are disjointed. Following the standard internet philosophy of having your page structure contained in a HTML file and your page logic contained in a JS file, this approach keeps that standard intact. Likewise, because the two files are disjointed, they appropriately support the single-responsibility rule. The HTML file is only concerned with markup and the JS file is only concerned with logic. The slight nuance to this is that the HTML file is still going to be written in JSX Markup. Lastly, the benefit of external HTML files is that you will not need to recompile and deploy your code to make simple/quick UI changes.

The cons of external markup is that, yes, this is another file to keep up with in Sharepoint and your repository, should you have one. Likewise, because the markup isn't bundled with the JS, this is another network call for the markup. Keep in mind, however, that this is only a network call on initial page load and, in the future, may be cached to further reduce network traffic. Lastly, the con of external HTML files is that no IDE, without a plugin that I am not aware of existing, will correctly parse the file contents for errors. The file will always have a .HTML extension and will be interpreted as HTML but is written and parsed as JSX markup.

**JSX Output**

The immediate, and obvious, benefit of pure JSX Output is the IDE support for error checking before and during compilation. Because the React framework is installed and the file has the appropriate file extension, Visual Studio Code will accurately display errors. Secondly, the ease of use becomes a factor. One might leverage this by writing the code first in JSX and then moving it over to the external file. However, that does introduce another layer of possible human error or subtle nuance. Whether that nuance is scoping or timing, it may still exist and should be noted as a possible concern. Lastly, having your UI Markup bundled with the JS Code means you're only maintaining one file.

The cons, however, do exist. The first con is the cleanliness of your code. The amount of logic required in the rendering of your view could range from "Trivially easy" to "I just added 500 lines of code to display a button". UI Logic can be very long and verbose and could bloat the size of your codebase surprisingly fast. Lastly, the obvious con of using pure JSX Output from code is that any change, alteration, edit, or addition to the UI will require the entire code to be recompiled and redeployed.