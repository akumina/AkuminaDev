---
id: Widget-Development-Configuring-akumina-config
title: Configuring - akumina.config.json file
---

File should contain following configuration, you may copy paste it as is, no changes are required 

```json
{ 
    "WidgetsSourcePath": "src/js/widgets", 
    "WidgetPackageDestinationPath": "dist/packages", 
    "WidgetPackageDistPath": "build/sitedefinitions/ak/widgetpackages", 
    "WidgetPackageVersion": "5.5.0.0", 
    "CDNAssetsPath": "build/sitedefinitions/ak/cdnassets", 
    "Environments": [{ 
        "Name": "dev", 
        "AppManagerUrl": "https://[appmanagerurl]", 
        "AppManagerQueryKey": "[appmanagerquerykey]", 
        "SharepointUrl": "https://[tenant].sharepoint.com/sites/dev" 
    }] 
} 
```
While running the deploy command if you come across message **isCompatible: False** in VS console as shown in the below screenshot then make sure you **WidgetPackageVersion** (in akumina.config.json file) is same as the **ProductVersion**

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Widget%20Development/akuminaconfig.PNG)