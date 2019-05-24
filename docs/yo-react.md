---
id: yo-react
title: Yo React
---

### Akumina sample project - FrontEndReact (with Typescript)

Sample project showing how to use React with Akumina framework.

[See MyFirstReactComponent .tsx code](https://github.com/akumina/AkuminaDev/tree/master/FrontEndReact/src/js/widgets/MyFirstReactComponent/js/widgets/MyFirstReactComponent.tsx)


[Akumina Widget Builder quick start](https://github.com/akumina/AkuminaDev/wiki/Akumina-Widget-Builder)

#### Step 1

Update the .env with your SiteDeployer parameters.

Set SiteDeployer options in akumina.sitedeployer.config.json.

## Deploy Your Widget

For info on Site Deployer and its usage, visit the [README](https://github.com/akumina/AkuminaDev/blob/master/SiteDeployer/README.md)

The following command will read from your webpack.config.js

*One command to run them all:*

```bash
npm run all
```
*Or:*

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
