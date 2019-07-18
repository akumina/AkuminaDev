---
id: Akumina-Widget-Builder-Token-replacement-for-widget-properties
title: Token replacement for widget properties
---

# Token replacement for widget properties

In the event that you need to deploy property values based on external input rather than checking into source, you can use the following procedure. 

See the scenario below where I don't want to hard code a value for my widget property 'myproperty' - I want this to be set during deployment.  The value is set to '{replaceme}' which is the token I decided to invent for this example and is checked into source control.

config.json
```json
 "Instances": [
        {
            "Name": "My SampleWidget",
            "Description": "Replace these tokens!",
            "Icon": "fa fa-cog",
            "Id": "dc721f53-6c32-7c82-e60e-76ea41290b5c",
            "Properties": [
                {
                    "name": "myproperty",
                    "value": "{replaceme}"
                }
            ],
            "SelectedView": "default",
            "AvailableViews": [],
            "HiddenFields": []
        }
    ],
```

In order to replace the '{replaceme}' token you would run the following command either locally or through Azure DevOps using variables.

```bash
npm run package -- --tokenMap "replaceme=thevalueiwant" 
```

Another Example using Multiple tokens '{url}' and '{anotherurl}' as it may be more applicable
```json
 "Instances": [
        {
            "Name": "My SampleWidget",
            "Description": "Replace these tokens!",
            "Icon": "fa fa-cog",
            "Id": "dc721f53-6c32-7c82-e60e-76ea41290b5c",
            "Properties": [
                {
                    "name": "myproperty",
                    "value": "{url}"
                },
                 {
                    "name": "anotherproperty",
                    "value": "{anotherurl}"
                }
            ],
            "SelectedView": "default",
            "AvailableViews": [],
            "HiddenFields": []
        }
    ],
```
```bash
npm run package MyWidget -- --tokenMap "url=https://www.google.com;anotherurl=https://www.bing.com"   
```



