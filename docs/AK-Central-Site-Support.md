---
id: AK-Central-Site-Support
title: Central Site Collection Support
---

### Central Site Collection

The following configuration allows for rapid re-use of Akumina tooling across many site collections using an 'install once' model. This allows for easy maintenance, upgrades and code deployments.  Deploy once and affect all sites configured to use it. 


![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Akumina-Central-Site-Collection-Architecture.jpg)

* **Central Site** - site collection where the following Akumina specific components reside - this is where 'developers' will primarily being deploying too
    * Widgets
    * Widget Views
    * Configuration settings (DigispaceConfigurationIDS_AK)
    * Lists that need to be shared across many sites - may be specific to your implementation
* **Delivery Site** - site collection that will be configured to point to the 'Central Site' - this is where you will be site specific lists and libraries - especially those that are not going to be shared across other sites.

Your enterprise environment can also contain MULTIPLE Central Site's - Possibly 1 site collection for where Akumina widgets are installed and 1 site collection where shared lists can reside.  

For example:
* **Central Site** (Akumina) - /sites/akuminarepo
    * Code / Widget deployment  
* **Central Site** (Client Specific) /sites/sharedassets
    * Specific lists / libraries / data

> It is up to your information archecture on how many 'Central Sites' you want to use. Akumina recommends at least 1 central site for the Akumina bits as denoted above.

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
            //uniqueId from central site collection (see below)
            Akumina.Digispace.SiteContext.UniqueId = "<UniqueId>"; 
            //Configure where views are loaded from
            Akumina.Digispace.ConfigurationContext.TemplateURLPrefix = "<Central Site CollectionUrl>"; //can be CDN as well
            //Configure what site the widgets/widget instances come from
            Akumina.Digispace.ConfigurationContext.WidgetInstanceSiteUrl = "<Central Site CollectionUrl>";

            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        }
    }
}

````

### Delivery Site Contents - Modern
Modern usage in this mode is very minimal - this mode is refered to as "SPA" - Single Page Application - this means there is only 1 driver page

* App
   * akumina-single-page-application-client-side-solution.spkg
* Site Pages
   * akumina.aspx 

You can think of the single page application spkg as the replacement to the env.js we managed in Classic - it also contains the 'VirtualPageWidget' instance which handles all of the future Akumina page rendering and minipulation

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/Modern-SPA.PNG)


#### Getting UniqueId

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/GlobalSettings-UniqueId.PNG)


### Widget Support for Cross site collection data retrieval

There are many widgets which support a hidden property called 'sitecollectionurl' - the code of the widgets are written to understand this property.  If you donot see the property in your installation, you can simply add a new text property to the widget definition.

**Widgets that support sitecollectionurl**  
The plan is to have every widget support this feature in future releases - if a widget is missing this support is easy to apply and support - submit a request on our support form: <https://www.akumina.com/technical-support/>
* BannerWidget
* CollatedDepartmentNewsWidget
* ContentBlockWidget
* DepartmentListWidget
* DepartmentNewsWidget
* DepartmentNewsItemWidget
* DepartmentNewsListWidget
* EventDetailWidget
* GenericItemWidget
* GenericListWidget
* ImportantDatesWidget
* LatestMediaWidget
* MyFormsWidget
* QuickLinksWidget
* BlogDetailWidget
* BlogsWidget
* BreakingNewsDetailWidget
* FoundationJobVacanciesWidget
* MyAnnouncementsWidget
* NewsCommentWidget
* NewsDetailWidget
* RelatedNewsWidget
* SpecialAnnouncementsDetailWidget

**sitecollectionurl usage**  
> name: sitecollectionurl - type: text - value: empty

Widget Definition
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/SiteCollectionUrl-AppManager.PNG)

Current user experience for setting the site collection url
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/SiteCollectionUrl-WidgetManager.PNG)

> Coming soon - site selector when choosing a list

### Using GetList to query across site collections

The GetList method supports a request object allowing you to specify the site collection you want to query, this allows for cross site collection data retrieval.. 

Example to query Central Site:

````js

    var request = {};
    request.listName = 'FoundationTopNavigation_AK';
    request.selectFields = 'ID,Title';
    //set the site collection url here
    //if contenxtSiteUrl is NOT set, it will query the list in the current site that the widget is rendering in
    request.contextSiteUrl = 'https://tenant.sharepoint.com/sites/centralsite'
    var legacyQuery = true;
    new Akumina.Digispace.Data.DataFactory(legacyQuery).GetList(request).then(function(x) {
        var listEnumerator = x.response.listItems.getEnumerator();
        var itemArr = [];
        while(listEnumerator.moveNext()) {
             var listItem = listEnumerator.get_current();
             var id = listItem.get_item('ID');
            var title = listItem.get_item('Title');
            itemArr.push({'ID': id, 'Title': title});
        }
        console.log(itemArr);
    });
    
````



