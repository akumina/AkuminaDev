### Akumina sample project - FrontEndSimple

This simple widget was meant to be the bare minimum to get up and running with the Akumina Widget Builder and Site Deployer.

[Akumina Widget Builder quick start](https://github.com/akumina/AkuminaDev/wiki/Akumina-Widget-Builder)

## Your First Widget

```bash
npm run stub
```
To create a widget directory structure automatically, you will have option to choose from a few different stubs to help you get up and running quicker. Be sure to use the same data you entered in the Yeoman prompts for WidgetName, WidgetNamespace, stub directory, and use typescript:

- What's the name of your Widget? **WidgetName** (Be sure to use the same name you entered in the Yeoman prompt)
- What's the name of your Widget Namespace? **WidgetNamespace.Widgets** (Be sure to use the same namespace you entered in the Yeoman prompt).Widgets
- Which type of stub you want to start with? (more stubs coming soon) **Hello World**  
- What directory should we generate the folder stub in? **src/js/widgets**  
- Do you want this stub to be used for an instance only? (used for deploying instances only) **No**  
-  Do you want to use a typescript stub? **Select the same option as Yeoman prompt**  

## Deploy Your Widget

Update the .env with your SiteDeployer parameters.

Set SiteDeployer options in akumina.sitedeployer.config.json.

*One command to run them all:*

```bash
npm run all
```

*Or:*

```bash
npm run build
```

```bash
npm run package
```

```bash
npm run deploy
```