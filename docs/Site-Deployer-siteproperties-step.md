---
id: Site-Deployer-siteproperties-step
title: siteproperties step
---

# Applies to
Akumina Site Deployer exe

# Overview
This step will add or edit site properties in the current web. 

# Options
The step is triggered in the options by the keyword *siteproperties*.

    options.push("siteproperties");

# Data
The step uses data in the SiteProperties folder, within the properties.xml file located at \SiteDefinitions\ {package}\SiteProperties\properties.xml
 
    <?xml version="1.0" encoding="utf-8" ?>
    <sites>    
      <site>
        <property name="someprop" value="somevalue" />
        <property name="ak_appmanager" value="4.1.1812.1194" />
        <property name="ak_framework" value="4.1.1812.1194" />
      </site>
    </sites>
 
This will produce the properties in the current web, ex:
![](https://akuminadownloads.blob.core.windows.net/wiki/training/images/siteproperties/SiteProperties.png)
