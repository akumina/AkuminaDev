---
title: Custom Stream Card Tutorial
id: AK-Custom-Card-Tutorial
---


### Overview

The purpose of this article will be to guide an end developer from start to finish in creating their own Custom Stream Card and implementing it in the stream. Including User Interface setup, project deployment, App Manager setup, and some nuances. The following assumptions are made while going through this Tutorial:

* Sharepoint Modern Site Collection with Akumina Framework 5.0 or higher

* App Manager 5.0 or higher

* Activity Stream License Enabled

* Local Project Directory setup


### Getting Started

We'll start from our local project directory. Begin by opening up the terminal and running the following command:

```node
npm run cardstub
```

For the remainder of the Tutorial, the new card we are creating is named ***Custom***. For more information on the Stream Card related NPM commands, see our [Stream Card Builder](/docs/AK-Stream-Card-Builder) page.

We should now have our scaffolding with our new Custom Stream Card:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Custom%20Card%20Tutorial/baseoutputstructure.PNG)

The file defaults should look similar to the following:

**config.json**
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

**CustomModel.ts**
```typescript
export class CustomModel {
    constructor() {

    }
}
```

**CustomCard.tsx**
```typescript
import * as React from 'react';
import * as Akumina from 'akumina-core';

import { CustomModel } from '../models/CustomModel';

interface ICustomCardState {
    viewReady: boolean;
    viewHtml: string;
}

interface ICustomCardProps {

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

        this.viewName = 'CustomCard.html'
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

If you run the build command, the **CustomCard** package should build. You will see the compiled javascript output in the location defined in your **Akumina.config.json** file.

You may be asking yourself where the View for this Stream Card is located. The View is located in the ActivityStreamWidget directory under Akumina Library/Digitalworkplace/Content. All Stream Card views are located in this location. If you would prefer to use raw JSx Markup for your view instead of an external file, that's fine. You can either upload an empty.html file and not parse the template or simply remove the parse template line entirely!

For the sake of the tutorial, let's create a basic View:

**CustomCard.html**
```html
<p>Greetings from CustomCard!</p>
```


## App Manager Setup

We'll need to perform the following steps to get the basics hooked up:

* Create a new Activity Type

* Create a new Sharepoint Subscription associated with the Activity Type

