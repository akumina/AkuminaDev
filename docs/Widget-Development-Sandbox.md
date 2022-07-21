---
id: Widget-Development-Sandbox
title: Development Sandbox
---

This information assumes you have already run the [**yo akumina**](https://akumina.github.io/docs/getting-started-yeoman) process.

1) Create folder dist/sandbox (this will be automated in future release) 
2) Install the sandbox to your development environment
```json
npm run initdev
```

Configure the following file **akumina.sandbox.config.json**

```json
{
    "versions": {
        "frameworkVersion": "5.5.0.0",
        "cdnVersion": "5.5.2112.1710"
    },
    "sandbox": {
        "centralorstandalonesitecollection": "https://{tenant}.sharepoint.com/sites/{centralsite}",
        "sitecollection": "https://{tenant}.sharepoint.com/sites/{deliverysite}",
        "username": "user@{tenant}.onmicrosoft.com",
        "appmanagerurl": "https://{appmanagerurl}",
        "querykey": "{querykey}",
        "graphappid": "{appid}",
        "tempUrlPrefix": "https://{blob}.blob.core.windows.net/{container}"
    }
}
```
3) If you havent setup any widgets
```json
npm run stub

? What's the name of your Widget? JasonTest
? What's the name of your Widget Namespace? ClientNamespace.Widgets
? Which type of stub you want to start with? (more stubs coming soon) Hello World
? What directory should we generate the folder stub in? src/js/widgets
? Do you want this stub to be used for an instance only? (used for deploying instances only) No
? Do you want to use a typescript stub? Yes

npm run build
npm run package

```

4) If you have setup widgets, anytime you run npm run package run the following command

```json
npm run setupdev
```
5) Verify your **.env** is setup and configured
6) Launch your webserver (this will open up on https://localhost:44306/ you can bypass private connection error) - it will automatically update your webserver anytime you build or change a view file

```json
npm run sandbox
```

