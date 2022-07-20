---
id: Widget-Development-Configuring-akumina-sitedeployer-config
title: Configuring - akumina.sitedployer.config.json file 
---

Edit **akumina.sitedeployer.config.json** file and set **widgets**, **cdnassets** and **updatewidgetcache** options to **true** as shown in below screenshot 

**widgets**: this option import the widgets to the site 

**cdnassets**: this option deploys the widget html views and js to blob storge 

**updatewidgetcache**: this option updates the AppManager's widget cache so that new/updated widgets are available to use in DWP 

Based on your requirement you may turn on(true) OR off(false) above options (highlighted in yellow)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Widget%20Development/akuminasitedeployerconfig.PNG)