---
id: Akumina-React-Widgets
title: Akumina React Widgets
---


### Overview

The purpose of this article will be to start at a higher level, simpler view of Akumina Widgets developed in the ReactJS Framework and gradually delve deeper into lower-level, more advanced concepts that are possible within the Akumina Framework. As a re-cap, the ["Akumina Yeoman Generator"](/docs/yo-akumina) defaults to ReactJS V16.7.17 and ReactDOM V16.0.6 as of the time of writing this article.

The full project can be found on our [AkuminaDev Github](https://github.com/akumina/AkuminaDev/tree/master/ReactComponentDemo).


### Prerequisites

To follow along with this article, it is necessary to have an Akumina Project Structure generated through the Yeoman Generator targeting Akumina Framework version 4.5 and using ReactJS as the targeted Javascript Framework. If you would like to deploy your code for live testing, please see the ["Akumina Site Creator"](/docs/Deployment-Manager-Overview) page or contact an Akumina Representative to create a new Sharepoint site collection.


### Getting Started

With a brand new Yeoman Generated React project structure created, you'll find your first widget under the usual directory of root\src\js\widgets\<widget name>. Open the widget TSX file and you will see the below annotated code:

```javascript
import * as Akumina from 'akumina-core'; // Import the Akumina Core package to make use of the Akumina Framework
import * as React from 'react'; // Import React to make use of the React Framework

interface IWidgetNameState { // Necessary to define the State Interface per React standards
    pageLifecycleComplete: boolean, // This will denote the page is "ready"
    testIncrement: number // Variable used to illustrate binding
}

interface IWidgetNameProps { // Necessary to define the Property Interface per react standards
    id: number, // This is effectively the SenderId property
    displaytemplateurl: string, // This property denotes the url of the view associated with this widget
    mycustomprop: string // Test property to illustrate the Akumina Framework can still pass instance/definition defined properties to a React widget
}

export class WidgetName extends React.Component<IWidgetNameProps, IWidgetNameState> {

    /**
     *
     */
    constructor(props: IWidgetNameProps) {
        super(props);
        this.state = {
            pageLifecycleComplete: false,
            testIncrement: 0
        }
        this.Increment = this.Increment.bind(this);

    }
    componentWillMount() {
        var cur = this;
        if (!Akumina.Digispace.SiteContext.IsLoaderComplete) {
            Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', function () { cur.AkRender(); }, this.props.id);
        } else {
            cur.AkRender();
        }
    }

    AkRender() {
        this.setState({ pageLifecycleComplete: true });
    }

    Increment() {
        this.setState({ testIncrement: this.state.testIncrement + 1 });
    }

    render() {
        console.log(this.state.pageLifecycleComplete);
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    <p>mycustomprop: {this.props.mycustomprop}</p>
                    <p>testIncrement: {this.state.testIncrement}</p>
                    <input type="button" onClick={this.Increment} value="Increment Test"></input>
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}
```

As you might've noticed, the above widget is very barebones. The widget TSX is responsible for rendering its own view, as is normal with ReactJS. The view included with the widget is effectively unused. If you were to run the following commands in the terminal:

```npm
npm run build
npm run package
```

and upload the widget zip to a Sharepoint site collection running the Akumina Framework, you would see the following rendered view:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/base%20widget%20view.PNG)

Clicking the Increment Test button will increment the counter by 1 each time it's clicked. The property is bound to the rendered view. Each time a state property is changed, it triggers a re-render in the view. This is very important to take note of once views become more robust. Careful consideration must be done when deciding what should be a state-tracked variable and what to make a normal property.


## Becoming more React-ive

To continue with the example, let's fill in the widget code a little more with some React native functions. The functions we'll be adding are:

```javascript
    componentDidMount() { // This is a React-native function called after the component renders

    }

    componentDidUpdate() { // This is a React-native function called after the component updates

    }

    componentWillUnmount() { // This is a React-native function called before the component is un-rendered/destroyed
        
    }
```

Likewise, let's also add some Akumina functions:

```javascript
    Init(props: any) {

    }

    SetDefaultsProperties(requestIn: any): any {
        return {};
    }

    GetPropertyValue(requestIn: any, key: string, defaultValue: any): any {

    }
```

To elaborate on this a little more, Init is an Akumina funtion called by the Framework on all widgets on the page during Page Builder or Edit mode. Because this is a React component and not a Typescript/Vanilla Javascript widget, the widget will run through the normal React lifecycle. To this extent, we must make some amendments to our design as we proceed.
SetDefaultsProperties is a function you will find in every widget. The Framework will read from the defined instance property bag defined in the config.json file and pass the instance properties into the widget. This allows us to translate our default properties into widget specific properties through the use of GetPropertyValue, taking the default property bag, the key (the name of the property being extracted), and the default value in case the value was not found or not defined on the instance.

Continuing on, we will take advantage of some of the more ASync properties of the React Framework. As advised in the ["React Developer Blog"](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html), certain functions will be moving to the deprecated status. One of these functions is componentWillMount. Because Akumina, by default, targets the ReactDOM V16.0.6, certain features are allowed to us and some have not been implemented yet. These will be covered as we approach them.

Instead of using componentWillMount, we'll use our state object to determine what to render, under what circumstances, and when. Additionally, we'll make use of this to render a default Loading template while we do some ASync processing. 

First off, remove the contents of the componentWillMount function. We will not be using this as part of our best practices. We'll be making a Sharepoint call to an Akumina stock Sharepoint List: ImageGallery_AK. Your code should look similar to the following:

```javascript
    componentWillMount() {

    }
    componentDidMount() {
        var request: IGetListRequest = {} as IGetListRequest; // Request object model included as part of Akumina type definitions
        request.listName = 'ImageGallery_AK'; // List Name we're querying
        request.selectFields = 'Title,Image'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
                
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then((res) => {
            var response = res.response;

            try {
                this.ImageSuccessHandler(response);

                this.setState({ pageLifecycleComplete: true }); // Set the state to indicate we're done processing and trigger a re-render
            } catch (error) {
                console.log('ERROR HAS OCCURRED: ' + error);
            }
        }, (error) => {
            console.log('EROR OCCURRED DURING SHAREPOINT QUERY: ' + error);
        })
    }
```

To re-cap what we've done:
We've removed the code from componentWillMount. As this function will be fully removed in V17 of the ReactDOM, we'll make it best practice to avoid using it. In our constructor, we default the value of state.pageLifeCycleComplete to false, so when the React framework lifecycle triggers the render function, we'll render the default Loading template instead of our final view.
Once the Loading template is rendered, the React framework lifecycle triggers the componentDidMount function, where we query Sharepoint for data. This allows us to do post-processing to retrieve our data without holding the UI hostage. The wonders of Async in React!

Next, we'll need to create a handler function for processing the data retrieved from Sharepoint. We'll also make a model class to define the data we'll be manipulating later. For the sake of the example, we'll only use the first image retrieved from the list, if one exists, and display that to the user.

```javascript
interface IWidgetNameProps {
    id: number,
    displaytemplateurl: string,
    mycustomprop: string
}

export class WidgetName [...] {
    private ImageData: ImageModel;

    constructor(props: IWidgetNameProps) {
        ...
        this.ImageData = new ImageModel(); // Instantiate our local property to default settings
    }

    private ImageSuccessHandler(response: any) {
        var listEnum = response.listItems.getEnumerator(); // Grab the enumerator from the returned object

        while (listEnum.moveNext()) { // Iterate through the returned object
            var model = new ImageModel();
            var listItem = listEnum.get_current();

            // We are not interested in data without images
            if (listItem.get_item('Image') == null) continue; // Continue looping if the item does not have an image url

            model.Title = listItem.get_item('Title');
            model.Url = listItem.get_item('Image').get_url();
            
            this.ImageData = model;
            break; // We only want the first object, so we'll refrain from looping through unnecessary items for efficiency
        }
    }
}

export class ImageModel {
    Title: string;
    Url: string;

    constructor() {
        this.Title = '';
        this.Url = '';
    }
}
```

Finally, update our render function to include this new data with an inline ternary for visibility of data obtained:

```javascript
    render() {
        console.log(this.state.pageLifecycleComplete);
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    <div>
                        <label htmlFor="image-data">Test Image:</label>
                        {this.ImageData.Url !== '' ? <img id="image-data" src={this.ImageData.Url} /> : <p id="image-data">There is no image. :(</p>}
                    </div>
                    <p>mycustomprop: {this.props.mycustomprop}</p>
                    <p>testIncrement: {this.state.testIncrement}</p>
                    <input type="button" onClick={this.Increment} value="Increment Test"></input>
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
```

Run the build and package npm commands from earlier, upload to your test site, and you should see something similar to the following depending on what items you have in your ImageGallery_AK list:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/widget%20view%20with%20image.PNG)


## Components

Normally in Vanilla Javascript/Typescript widget implementations, widgets are self-contained. Although it is possible to inject a widget into another widget, the React implementation makes this much easier and intuitive while offering a parent-child relationship between components. In this section, we'll build out a simple footer section to our test component by retrieving the data from a Sharepoint list. We'll also round out some of our Akumina-native functions as well as define our widget instance some more.

To get started, let's take some measures to assure that our widget is extensible and customizable without having to redeploy the code every time we need to change something. We'll add the following property to the config.json in the widget and instance definitions:

Widget Definition:
```json
    "Properties": [
            {
                "name": "widgetframework",
                "friendlyname": "widgetframework",
                "value": "react",
                "type": "string"
            },
            {
                "name": "mycustomprop",
                "friendlyname": "mycustomprop",
                "value": "testvalue",
                "type": "string"
            },
            {
                "name": "footerlistname",
                "friendlyname": "footer list name",
                "value": "",
                "type": "string"
            }
        ],
```

Instance Definition:
```json
    "Properties": [
                {
                    "name": "widgetframework",
                    "value": "react"
                },
                {
                    "name": "mycustomprop",
                    "value": "testvalue"
                },
                {
                    "name": "footerlistname",
                    "value": "FooterDemo_AK"
                }
            ],
```

Now that we have the property on the widget and instance definition, we'll need to ensure that it's being read into the widget. As you recall, the React lifecycle is controlling the initial load of the React widget. We'll need to fill out our SetDefaultsProperties and GetPropertyValue functions as well as add the logic to the constructor, the Init, and create a local property bag to hold these properties. The value of this.props in React components is **read-only** so it is very important that we create a local copy.

The following is the implementation we're looking for:

```javascript
export class WidgetName ... {
    private WidgetProps: WidgetProperties; // Define our local property bag

    constructor(props: IWidgetNameProps) {
        ...
        this.WidgetProps = this.SetDefaultsProperties(props); // Set our local property bag
    }

    Init(props: any) {
        this.WidgetProps = this.SetDefaultsProperties(props); // Upon entering Page Builder/Edit Mode, following design strategy to set the local property bag
    }

    SetDefaultsProperties(requestIn: any): WidgetProperties {
        var requestOut = new WidgetProperties();

        requestOut.widgetframework = this.GetPropertyValue(requestIn, 'widgetframework', '');
        requestOut.mycustomprop = this.GetPropertyValue(requestIn, 'mycustomprop', '');
        requestOut.FooterListName = this.GetPropertyValue(requestIn, 'footerlistname', '');

        return requestOut;
    }

    GetPropertyValue(requestIn: any, key: string, defaultValue: any): any {
        //Obtain property value
        var returnValue = requestIn[key];

        //Determine if empty or null
        if (returnValue === null || typeof returnValue === 'undefined' || returnValue === '') {
            //If empty or null, use default value
            returnValue = defaultValue;
        }

        return returnValue;
    }
}

export class WidgetProperties { // Define our property bag model
    widgetframework: string;
    mycustomprop: string;
    FooterListName: string;

    constructor() {
        this.widgetframework = '';
        this.mycustomprop = '';
        this.FooterListName = '';
    }
}
```

Now that our logic and implementation in our main component have been fleshed out, it's time to create our child footer component. In your project structure, the widget folder lives under root\src\js\widget_folder. Inside the widget folder, we'll create a new folder named "components" and create our footer child component file inside. Similar to the following:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/new%20component%20project%20structure.PNG)


Because this component is a **child** component, the Akumina framework will not directly interact with the lifecycle of this component. With that said, we will not need many of the Akumina-native functions in the child component, only the React-native functions. We'll create the child component class with the following assumptions in mind:

* The Component will obtain its property bag from the parent
* The Component will be a direct child of the parent
* The Component will only be responsible for its own logic and data

We will begin with a barebones implementation:

```javascript
import * as Akumina from 'akumina-core';
import * as React from 'react';

interface IFooterComponentState {
    pageLifecycleComplete: boolean
}

interface IFooterComponentProps {
    widgetframework: string,
    mycustomprop: string,
    FooterListName: string
}

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    constructor(props: IFooterComponentProps) {
        super(props);
        this.state = {
            pageLifecycleComplete: false
        }
    }

    componentWillMount() {
        
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    Finished Loading!
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}
```

The goal of the exercise is thus: The FooterComponent will be responsible for retrieving footer data from a Sharepoint list and displaying it on the page through the WidgetName component's render. Sounds easy, so we'll re-use and modify the Sharepoint data retrieval code we've already written for WidgetName. For simplicity's sake, we'll create the Sharepoint List with one field: Title. This field will hold our footer data.

FooterCoponent.tsx
```javascript
export class FooterComponent ... {
    private FooterData: string;

    constructor(props: IFooterComponentProps) {
        ...
        this.FooterData = '';
    }

    componentDidMount() {
        var request: IGetListRequest = {} as IGetListRequest; // Request object model included as part of Akumina type definitions
        request.listName = this.props.FooterListName; // List Name we're querying
        request.selectFields = 'Title'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
                
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then((res) => {
            var response = res.response;

            try {
                this.FooterSuccessHandler(response);

                this.setState({ pageLifecycleComplete: true }); // Set the state to indicate we're done processing and trigger a re-render
            } catch (error) {
                console.log('ERROR HAS OCCURRED: ' + error);
            }
        }, (error) => {
            console.log('EROR OCCURRED DURING SHAREPOINT QUERY: ' + error);
        })
    }

    render() {
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    Footer Component: {this.FooterData}
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }

    private FooterSuccessHandler(response: any): any {
        var listEnum = response.listItems.getEnumerator();

        while (listEnum.moveNext()) {
            //There should only be one line in the list
            var listItem = listEnum.get_current();
            this.FooterData = listItem.get_item('Title');
        }
    }
}
```

Now that our FooterComponent is finished, we'll need to tie the whole thing into the main component. To do this, we'll simply inject the component into the render function. When the main component's render fires, and pageLifecycleComplete is set to true, it'll render the view, which will start the FooterComponent's lifecycle. The modification we need to make is simple:

WidgetName.tsx
```javascript
import { FooterComponent } from '../../components/FooterComponent';
export class WidgetName ... {
    render() {
        console.log(this.state.pageLifecycleComplete);
        if (this.state.pageLifecycleComplete) {
            return (
                <div>
                    <div>
                        <label htmlFor="image-data">Test Image:</label>
                        {this.ImageData.Url !== '' ? <img id="image-data" src={this.ImageData.Url} /> : <p id="image-data">There is no image. :(</p>}
                    </div>
                    <p>mycustomprop: {this.props.mycustomprop}</p>
                    <p>testIncrement: {this.state.testIncrement}</p>
                    <input type="button" onClick={this.Increment} value="Increment Test"></input>
                    <div>
                        {React.createElement(FooterComponent, this.WidgetProps)} // Render our FooterComponent
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}
```

Let's take a moment to discuss how the lifecycle is going to to operate.

1) WidgetName's constructor
2) Any custom logic called from the constructor
3) componentWillMount (Deprecation Warning)
4) WidgetName.render()

At this point, pageLifecycleComplete is set to false, so the Loading template will be rendered.

5) componentDidMount
6) pageLifecycleComplete = true

The state update will trigger a re-render

7) WidgetName.render()

pageLifecycleComplete is now true, so the template with FooterComponent now renders

8) FooterComponent.constructor

Operating with this design flow, we can see that any sub-components tied to the main component will only be fired when the logic path that includes them is executed. During the initial execution, the template that includes FooterComponent is not rendered, therefore the component is not executed. However, once we update the state property and execute the template that includes FooterComponent, the component is then executed.

Once again, build, package, and upload the solution and you should see the following:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/footer%20component%20visible.PNG)


### Conclusion

By making use of the React framework and lifecycle in combination with the Akumina Framework, powerful opportunities become possible. Easily injectable sub-components make eloquent use of the concept of Encapsulation and single responsibility while still being able to leverage the concepts of lazy-loading and efficiency. 