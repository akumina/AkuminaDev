---
id: AK-Advanced-Concepts
title: Advanced Concepts
---

### Central Site Collection

The following configuration allows for rapid re-use of Akumina tooling across many site collections using an 'install once' model. This allows for easy maintenance, upgrades and code deployments.  Deploy once and affect all sites configured to use it. 

* Central Site - site collection where the following Akumina specific components reside - this is where 'developers' will primarily being deploying too
    * Widgets
    * Widget Views
    * Configuration settings (DigispaceConfigurationIDS_AK)
    * Lists that need to be shared across many sites - may be specific to your implementation
* Delivery Site - site collection that will be configured to point to the 'Central Site' - this is where you will be site specific lists and libraries - especially those that are not going to be shared across other sites.

Your enterprise environment can also contain MULTIPLE Central Site's - Possibly 1 site collection for where Akumina widgets are installed and 1 site collection where shared lists can reside.  

For example:
* Central Site (Akumina) - /sites/akuminarepo
    * Code / Widget deployment  
* Central Site (Client Specific) /sites/sharedassets
    * Specific lists / libraries / data

> It is up to your information archecture on how many 'Central Sites' you want to use. Akumina recommends at least 1 central site for the Akumina bits as denoted above.

Central site collection information required for use in the delivery site configuration

**TODO**


### Delivery Site Contents - Classic

#### Master page updates
The classic Sharepoint master page should contain the following references

* JS
    * /sites/**centralsite**/digitalworkplace.vendor.min.js
    * /sites/**centralsite**/digitalworkplace.vendor-nomin.js
    * /sites/**centralsite**/digitalworkplace.min.js
    * /sites/**localsite**/digitalworkplace.env.js (this will contain configuration items to communicate with the appropriate central site)
* CSS
    * /sites/**centralsite**/digitalworkplace.min.css

Copy Paste:
````
TODO

````

#### digitalworkplace.env.js updates
````js
var LoaderConfiguration = LoaderConfiguration || {};
if ((typeof LoaderConfiguration.Environment) === 'undefined') {
    //Add shipped steps to loader

    LoaderConfiguration.Environment = {
        Init: function (config) {
            // tenant config:
           Akumina.Digispace.ConfigurationContext.InterchangeURL = "<AppManagerUrl>";
           Akumina.Digispace.ConfigurationContext.InterchangeQueryKey = "<AppManagerQueryKey>";
        }
    }
}

var AdditionalSteps = AdditionalSteps || {};
if ((typeof AdditionalSteps.EnvSteps) === 'undefined') {
    AdditionalSteps.EnvSteps = {
        Init: function () {
            var steps = [];
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "Custom SetConfig", callback: AdditionalSteps.EnvSteps.SetConfig }] });
            return steps;
        },
        SetConfig: function () { 
            Akumina.Digispace.SiteContext.UniqueId = "<UniqueId>"; //uniqueId from central site collection
            //Configure where views are loaded from
            Akumina.Digispace.ConfigurationContext.TemplateURLPrefix = "<Central Site CollectionUrl>"; //can be CDN as well
            //Configure where widgets come from
            Akumina.Digispace.ConfigurationContext.WidgetInstanceSiteUrl = "<Central Site CollectionUrl>";

            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        }
    }
}

````