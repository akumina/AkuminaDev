---
id: version-4.5.1-Akumina-Widget-Builder
title: Akumina Widget Builder
original_id: Akumina-Widget-Builder
---

### Quick Start

The Akumina Widget Builder was created as a tool to be embeded within your existing front end development projects.  The goal was not to require you to utilize the Akumina project structure.  Akumina assumes that most dev teams have a way of doing development and that the Akumina product is just a piece of it.  Akumina has recommended ["Starter Projects"](https://github.com/akumina/AkuminaDev/tree/master/FrontEndSimple) for those dev teams that are newer to front end development.  For the newer dev teams the ability to learn at their own pace was a big part of this design.  You can isolate Akumina Widget code from your own code.  Akumina also does not require you to learn Typescript, React, GULP, WEBPACK, etc all at once. Although we do recommend some of these tools / technologies as it helps development processes.  Akumina realises the different level of developers within an implementation and has tried to cater to any skillset.

As you are learning about this tool, please keep in mind the tool was primarily developed for quick development, debugging and packaging of the following pieces of the component (Widget):

* Widget Javascript (Business logic)
* Widget Definition (Class structure)
* * Available views
* * Settable properties / property types and default property values
* * Assigned Content Types
* Widget Instances (Objects insert into pages)
* * Assigned view
* * Assigned property values

# Widget directory structure

```bash
   YourWidget
        ├───config
        │       config.json
        ├───contenttypes
        │       contenttypes.xml
        ├───js
        │   └───widgets
        │           yourwidget.js
        ├───views
        │       view1.html
        │       view2.html
        │       view3.html
        └───terms
                terms.xml
```



# config.json
### An empty config.json
```json
{
    "Definition": {
        "Name": "",
        "Class": "",
        "ContentTypes": [],
        "Version": "",
        "Dependencies": [],
        "Properties": [
            {
                "name": "",
                "friendlyname": "",
                "value": "",
                "type": ""
            }
        ],
        "Views": [
            {
                "Name": "",
                "Path": "",
                "Id": ""
            }
        ],
        "JS": {
            "Default": ""
        }
    },
    "Instances": [
        {
            "Name": "",
            "Description": "",
            "Icon": "",
            "Id": "",
            "Properties": [
                {
                    "name": "",
                    "value": ""
                }
            ],
            "SelectedView": "",
            "AvailableViews": [],
            "HiddenFields": []
        }
    ],
    "Options": {
        "IsPartialDefinition": false,
        "IsDashboardWidget": false
    }
}
```

## The "Definition" property
This property will create the corrosponding widget definition within the Akumina implementation. Remember the widget definition is used as the 'configuration' for your widget. It is not inserted into any page, but rather sets the blue print for the instances of the widgets created.  Think of the defintion as the 'class' and an instance as the 'object' - You cannot create instances without the defintion.  The instances are what ends up being insert into the page.  Anytime you create a new instance, think of your instance as 'passing through' the definition.  Some of the properties, such as 'views' control which views are available when creating the instance, this helps enforce rules for your business users.

```javascript
"Definition": {
        "Name": "YourWidget", //Unique name for your widget
        "Class": "CustomerName.Widgets.YourWidget", // Akumina will create a new instance of this class and call the Init() method
        "ContentTypes": [], //array of content types to be imported into sharepoint - found in /contenttypes directory
        "Version": "", 
        "Dependencies": [], //array of other widgetnames to be loaded by getwidgetjs bundle, this allows for other module code to be used - IE you want to use the GenericListWidget code - the only way to inject the JS code is to set this value.  The framework will handle getting this module code from the getwidgetjs bundle.
        "Properties": [
            {
                "name": "propertyname",
                "friendlyname": "property friendly name",
                "value": "default value",
                "type": "string"
            },
            {
                "name": "propertyname2",
                "friendlyname": "property friendly name 2",
                "value": "default value 2",
                "type": "bool"
            }
        ],
        "Views": [
            {
                "Name": "view 1", //unique name used by instance
                "Path": "/Style%20Library/DigitalWorkPlace/Content/Templates/YourWidget/view1.html",
                "Id": "a04c9e8c-03d1-47a8-83c7-a9b942600f2d" //random guid
            },
            {
                "Name": "view 2", //unique name used by instance
                "Path": "/Style%20Library/DigitalWorkPlace/Content/Templates/YourWidget/view2.html",
                "Id": "f54c4053-9431-a2be-9922-651c15a24554" //random guid
            }
        ],
        "JS": {
            "Default": "/Style%20Library/DigitalWorkPlace/JS/widgets/yourwidget.js" //location in style library where widget module js gets deployed - the getwidgetJS bundle will return this if widget is detected on page
        }
}
```

#### Available Property Types for Widget Defintions
This values can be used in the "type" field value  

| type |
| --- |
| int |
| string |
| bool |
| choice |
| json |
| listselector |
| groupselector |

## The "Instance" property
```javascript
"Instances": [
        {
            "Name": "Your widget instance",
            "Description": "Your widfet instance description",
            "Icon": "fa fa-circle", //font awesome icon
            "Id": "b32c3fef-83d0-e48e-2519-55da67b8a3c6", //uniqueid for your widget
            "Properties": [
                {
                    "name": "propertyname",
                    "value": "actual value"
                },
                {
                    "name": "propertyname2",
                    "value": "actual value 2"
                }
            ],
            "SelectedView": "view 1", //view name from the definition - this is so we dont define paths twice
            "AvailableViews": ["view 2"],
            "HiddenFields": ["propertyname2"] //this property wont show for the user on the front end when changing properties
        }
    ],
```

## The "Options" property
```javascript
"Options": {
        "IsPartialDefinition": false, //when set to true the import process will only import the instance, most commonly used in subsites or deploying instances of OOB Akumina widgets, IE you dont have the full definition, but you want to deploy an instance, think Generic List Control
        "IsDashboardWidget": false
}
```
