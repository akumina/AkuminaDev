### Akumina sample project - FrontEndReact (with Typescript)

Sample project showing how to use React with Akumina framework - please see FrontEndSimple for basic overview

[See MyFirstReactComponent .tsx code](https://github.com/akumina/AkuminaDev/tree/master/FrontEndReact/src/js/widgets/MyFirstReactComponent/js/widgets/MyFirstReactComponent.tsx)


[Akumina Widget Builder quick start](https://github.com/akumina/AkuminaDev/wiki/Akumina-Widget-Builder)

## Install

Make sure to have NODE 8.9.1++ [Download Node](https://nodejs.org/en/download/) - Choose the LTS version

To download all required packages defined in package.json, run the following command:

#### Step 1
```bash
npm install
```

#### Step 2
Next take the **LATEST** tools directory from the following path [Site Deployer](https://github.com/akumina/AkuminaDev/tree/master/SiteDeployer/tools) - the files checked into this sample project may be out of date

Update the ./deploy.js with your client/local machine settings

```javascript
var args = {
    "options": options.toString(),
    "envdir": "C:\\Projects\\Akumina\\FrontEndReact\\build\\", //make this path is correct - relative path supported
    "assetdirectory": "MyClient", //be sure the follow path exists {{envdir}}\\sitedefinitions\\MyClient
    "spdirectory": "DigitalWorkplace", //deploys to the following folder in Style Library/{spdirectory}
    "spurl": "", //full site collection url https://myclient.sharepoint.com/sites/intranet
    "spuser": "", //user@myclient.onmicrosoft.com
    "sppassword": "" //pass
};
```

More on Site Deployer and its usage, visit the [README](https://github.com/akumina/AkuminaDev/blob/master/SiteDeployer/README.md)

#### Step 3
Update the ./akumina.config.json

```javascript
{
    "WidgetsSourcePath": "src/js/widgets",
    "WidgetPackageDestinationPath": "build\\sitedefinitions\\MyClient\\widgetpackages", //make sure this path matches your {envdir}/{assetdirectory} from deploy.js
    "WidgetPackageVersion": "4.1.0.0",
}
```

## Usage

The following commands are defined in your package.json
```json
"scripts": {
    "build": "webpack --display-error-details --config webpack.config.js",
    "package": "akumina-widget-builder package",
    "clean": "akumina-widget-builder clean packages",
    "stub": "akumina-widget-builder stub",
    "config": "akumina-widget-builder config",
    "deploy": "node ./deploy.js"
  },
```

Take a look at the following for more information on the [Akumina Widget Builder](https://github.com/akumina/AkuminaDev/wiki/Akumina-Widget-Builder)

## Required change - only supported in 4.1

Make sure your widget has the following property in its config.json Definition
```json
    {
        "name": "widgetframework",
        "friendlyname": "widgetframework",
        "value": "react",
        "type": "string"
    }
```



Open your webpack.config.js and configure the following settings:

```javascript
var widgetSrcDir = './src/js/widgets';
//Make sure this value matches the 'Class' section of the config.json of your widgets
//If jsClientName is 'MyNamespace' then your 'Class' should be 'MyNamespace.Widgets'
var jsClientName = "MyClient"; //[ClientName].Widgets.WidgetName
```
To build your widget code, the following command will read from your webpack.config.js

```bash
npm run build
```
To create your widget package (.zip) that will be used by the Site Creator, use the following command (Note this zip file can be uploaded manually into the App Manager tool) - this .zip file will be automatically deployed to the `WidgetPackageDestinationPath` setting in ./akumina.config.json

```bash
npm run package
```

To initiate the deployment process which will call the Site Deployer use the folling command:
(deploy.js is ONLY used by local developer environments, for CI/VSTS usage, please see the following doc [Continuous-Site-Package-Deployment](https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app))
```bash
npm run deploy 
```



This should have deployed a layout, a page and a sample 'MyFirstReactComponent'
Browse to http://{tenant}.sharepoint.com/sites/{sitecolllection}/pages/sandbox.aspx
