---
title: Stream Card Project Builder
id: AK-StreamCardProject-Builder
---


## Overview

The purpose of this article will be to demonstrate the functionality behind the Stream Card Project Builder, analyze the output, and understand the differences in implementation between a Stream Card Project and a normal Akumina Widget Project. This article makes the following assumptions:

* Visual Studio Code or IDE of choice

* Akumina Framework Version 5.0 or higher

* A refreshing drink


## Getting Started

If you haven't already, head over to the [Getting Started with Yeoman](/docs/Getting-Started-Yeoman) article to refresh yourself on the initial project scaffolding. You'll notice under the "Vanilla" section that it does mention the Stream Card Project structure. That's why we're here!

Follow the above article until you end up with a folder with Yeoman and the Akumina Generator installed. Your steps should've been similar to:

1) Create folder

2) npm install yo

3) npm install generator-akumina

4) yo akumina

Select Version 5 of the Framework and select "YES" when prompted whether this is a Stream Card Project. The below diagram shows a summary of what the process should've looked like:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/streamcardproject_terminal.png)

Finally, you should be left with an Akumina Project structure, set up to be used with React widgets, and an empty directory of widgets, or "cards" in this context.

## So What Changed?

There are a few key differences in some settings between the two projects. Below, I will attempt to account for and explain them all.

### akumina.config.json

```json
{
    "WidgetsSourcePath": "src/js/streamcards",
	"WidgetPackageDestinationPath": "dist/streamcards",
    "WidgetPackageDistPath": "build/sitedefinitions/ClientNamespace/widgetpackages",
    "WidgetPackageVersion": "5.0.0.0",
	"Environments": [{
		"Name": "dev",
		"AppManagerUrl": "https://[appmanagerurl]",
		"AppManagerQueryKey": "[appmanagerquerykey]",
		"SharepointUrl": "https://[tenant].sharepoint.com/sites/dev"
	}]
}
```

The most immediate change in this file is the WidgetsSourcePath and WidgetPackageDestinationPath. Simply put, they've both had their widget portions replaced with streamcard.


### package.json

```json
{
    ...
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --env.mode=development --display-error-details --progress --config webpack.config.js --env.specificwidget",
        "prod-build": "webpack --env.mode=production --display-error-details --progress --config webpack.config.js",
        "cardstub": "akumina-streamcard-builder stub",
        "deploy": "node ./tools/deploy.js",
        "all": "npm run clean & npm run build & npm run package & npm run deploy",
        "vpstub": "akumina-virtualpage-builder stub"
    },
    ...
}
```

You'll notice the build script has had a few alterations to it. This is simply to accommodate the new 5.0 Build Process while also respecting the new and updated version of Typescript!

The widgetbuilder specific commands have been removed from this version of the package.json. The reason for this is because those options are not relevant to a stream card. For example, there is no need to package them. Therefore, the package command was removed.

We've also added a "cardstub" command. This command is similar to the widget stub command in that it creates a new Stream Card with your chosen settings. For more info on that, check out the [Stream Card Builder](/docs/AK-Stream-Card-Builder) article.

Lastly, there have been some additions and edits to package versions. Feel free to browse through the dependencies in your own project structure.


### webpack.config.js

Some extra code has been added to the webpack.config to build stream cards. Please note that there are some components of the normal Widget Project's webpack.config.js included here but neither are interchangeable with each other. Each webpack.config has logic exclusive to the type of components being built.


### Other Changes

At the time of writing, there are no other explicit changes to mention. If you are interested in learning more about the Stream Card Structure, take a walk over to the [Custom Cards](/docs/AK-ActivityStream-CustomCard) page.