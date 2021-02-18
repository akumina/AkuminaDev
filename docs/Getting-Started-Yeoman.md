---
id: getting-started-yeoman
title: Start with Yeoman
---

#### Let's deep dive into getting started building with Yo Akumina project scaffolding.

## Installation/Initialization

We have created an easy script that will get all of the infrastructure set up for you:

1.  Ensure you have the latest version of [Node](https://nodejs.org/en/download/) installed. We also recommend you install [Yarn](https://yarnpkg.com/en/docs/install) as well. Npm will also work.

    > You should be on Node >= 8.x and Yarn >= 1.5.

    > You will need a code editor (i.e. VSCode) and console (e.g. GitBash, CMD, Powershell)

1.  Open the terminal and follow the generator [installation steps](yo-akumina.md) either globally or locally:

    > Install [Yeoman](http://yeoman.io) and generator-akumina globally.

    ```bash
    yarn global add yo
    yarn global add generator-akumina
    ```

1.  Create an empty project for your widget, open the empty project in your favorite code editor.

    > This will be the folder where one or multiple widgets are built, packaged, or deployed, e.g.:

    ```bash
    mkdir akumina-react-widget
    cd akumina-react-widget
    code .
    ```

1.  Initialize scaffolding. Currently we support vanilla JavaScript, vanilla TypeScript, and TypeScript React widgets

    > This will be the folder where one or multiple widgets are built, packaged, or deployed, e.g.:

    ```bash
    yo akumina
    ```

1.  Vanilla

    > Run yo akumina project scaffolding:

    ```JavaScript
    yo akumina
    ? Project name: my-project //your solution folder
    ? Client namespace: MyCompany //namespace where your widgets live
    ? Akumina version: 4.5.0.0 //Should match your version of Akumina product
    ? Is this a stream card project?: no // Denotes whether this is a stream card project or a normal widget project
    ? Use React?: no
    ? Widget source path: src/js/widgets //probably just leave this
    ? Use Typescript?: yes
    ```

    * Project Name

    This will be the name of your project. This does not affect widget output.

    * Client Namespace

    This will be the firstmost namespace that your widgets will live in. For example, if i work at Company ABC and I enter my Client Namespace as CompanyABC, my default widget namespace would be similar to **CompanyABC.AddIn.WidgetName**.

    * Akumina Version

    This denotes the version of Akumina you are currently running. Valid versions, as of writing, are 5.0, 4.8, 4.5, and 4.0.

    * Stream Card Project

    There are two different kinds of Akumina projects: Widgets and Stream Cards. If you answer yes to the above question regarding Stream Card projects, the logic will cut off here, and create an empty Stream Card Project. If you answer no, the normal Widget Project process will continue and a dummy widget will be provisioned.

    For more information on Stream Cards, see our [Stream Cards Article](/docs/AK-Stream-Card-Builder)

    * Use React

    Denotes whether you would prefer to use React/Typescript or vanilla Javascript to develop your widgets. You can implement React/Typescript into your project at a later time. For assistance with doing so, feel free to reach out to your Akumina representative.

    * Widget Source Path

    This is the directory path under which widgets will live. It is advised to not share directory space with non-widget directories. It is also advised to leave this as default.

    * Use Typescript

    Similar to the above question regarding React, however, without React. This will simply install the dependencies for Typescript without React.

    > Run akumina-widget-builder:

    ```JavaScript
    npm run stub
    ? Whats the name of your Widget? MyWidget
    ? Whats the name of your Widget Namespace? MyCompany.Widgets //should match yo akumina namespace prompt + '.Widgets'
    ? Which type of stub you want to start with? (more stubs coming soon) Hello World
    ? What directory should we generate the folder stub in? src/js/widgets
    ? Do you want this stub to be used for an instance only? (used for deploying instances only) No
    ? Do you want to use a typescript stub? Yes //use typescript should also match yo akumina prompt
    ```

1.  React/TypeScript

    > Run yo akumina project scaffolding. React scaffold is a bit simpler:

    ```JavaScript
    yo akumina
    ? Project name: my-project //your solution folder
    ? Client namespace: MyCompany //namespace where your widgets live
    ? Akumina version: 4.5.0.0 //Should match your version of Akumina product
    ? Use React?: yes
    ? Widget name: MyWidget
    ```

## Deployment

1.  Configure your widget for deployment

    There are a few configuration files that are modified for the purposes of deploying assets to the SharePoint Site Collections

    > Configure what assets you want to deploy in akumina.sitedeployer.config.json. For this simple example, we will only need to deploy the widget javascript assets, so widgets is set true:

    ```JavaScript
    {
    "Options": {
      "masterpage": false,
      "js": false,
      //etc...
      "widgets": true
      //etc...
    }
    ```

    > Add required parameters to .env (parameters can also be added as environment variables for cross project use):
    
    ```Bash
      spurl=https://mycompany.sharepoint.com/sites/appid4848484/
      spuser=me@company.com
      sppassword=!s0me%Pass
    ```

1.  Manage your project/deployment with the npm scripts

    > As with most node-based projects, there are a number of npm scripts in the package.json file that can be run such as ```npm run all```. That command will clean your solution as well as build, package, and deploy all of the widgets. It is a combination of four separate npm scripts run synchronously:

    ```npm run clean && npm run build && npm run package && npm run deploy```

1.  Deploy a virtual page with [akumina-virtualpage-builder](AK-Virtual-Page-Builder)

    Another example of deploying static assets to a site collection

    > After ```npm run vpstub```, set virtualpages to true in akumina.sitedeployer.config.json:

    ```JavaScript
    {
    "Options": {
      //etc...
      "virtualpages": true
    }
