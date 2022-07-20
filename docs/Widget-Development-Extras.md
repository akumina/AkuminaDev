---
id: Widget-Development-Extras
title: Extras
---

## Extras 

You may skip this step and start running the npm command and If you see any error related to these folder(s) then add them at the location as shown below 
Create packages folder In /dist 
Create CDNAssets folder In build\sitedefinitions\\{namespace}

## Build, Package and Deploy 

Run the following commands In order to deploy the artifacts 

```json
npm run build 
npm run package 
npm run cdnpackage 
npm run deploy 
``` 

## Adding new Widget 

Run the following command to add new widget stub 

```json
npm run stub 
```
 
Complete the walkthrough questions; example values are below: 
Note: Widget namespace should end with .Widgets (ex., ak.Widgets) 

```json
? What's the name of your Widget? helloak627two 
? What's the name of your Widget Namespace? ak.Widgets 
? Which type of stub you want to start with? (more stubs coming soon) Hello World 
? What directory should we generate the folder stub in? src/js/widgets 
? Do you want this stub to be used for an instance only? (used for deploying instances only) No 
? Do you want to use a typescript stub? Yes 
```
 
Check-in you file to trigger the build, once build is successful, browse headless site, create page, and insert the new widget 

While adding the new REACT widget do verify if widget js file has. tsx extension instead of .ts. This is a build issue I have observed during my demo and will be resolved in future   

 

## Edit Existing Widget 

Edit the js or html template of existing widget and either deploy the artifacts from developer's workstation or checking the Site package to get the artifact deployed by pipeline 

When you add or edit widget do clear the front-end cache from Akumina tray 