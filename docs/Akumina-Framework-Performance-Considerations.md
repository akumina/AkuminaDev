---
id: Akumina-Framework-Performance-Considerations
title: Akumina Framework Performance Considerations
---

# Thought Process around Pre-Implementation and Post-Implementation modes

The Akumina framework ships and executes by default in 'Pre-Implementation' mode.   This means all page lifecycle steps of the framework make queries against the Sharepoint list.  This is done for easy configuration and quick setup.  This does provide some overhead that can be eliminated.  Most often times, when ready to go live, these lists are RARELY updated.  So we typically like to offload this data to the JS code itself.. Rather than query the list on every uncached page load.  For instance, one of the main lists for easy configuration which drives the entire framework is the 'DigispaceConfigurationIDS_AK' list.  This list contains configuration data.  This data should really NEVER change once launched...  so there is no need to keep it in the list.  It can be offloaded as configuration variables in code.

We have taken the time to outline every list that gets queried in the page life cycle of the Akumina Framework.

***

# Performance concepts
There are 2 types of page loads:
* A **cold load** is when the page is loaded without any data or files being in cache, coming in cold with the browser and Akumina cache both cleared. This is the least performant load where all data calls are made and the times for file loads can be properly seen.
* A **warm load** is another load after the page and site have been accessed. The widget caches will have data in them, so limited data calls will be made. In addition, any CSS and JS files will have been cached in the browser, so file load times are limited.

***

# Debugging the current performance of the framework
In order to determine which direction to go in terms of tweaking the page lifecycle, you first must determine which steps may be acting up, or not as performant as expected.  These timings can vary based on tenant, site collection, time of day, o365 performance, internet connection, etc..

Perform the following tasks in the browser to get the following sample output.(We typically like to disable the Graph feature in the DigispaceConfigurationIDS_AK by setting EnableAzureAD to false, this will help with reading the console more clearly)
* Developer Tools
* Console Tab
* CTRL+UP arrow, Refresh All (localStorage.clear())
* Reload the page
* Filter your console for the keyword 'executing'

```
Akumina Loader Executing LOAD SP.ClientContext: 105.229248046875ms
Akumina Loader Executing on ExecuteOrDelayUntilBodyLoaded: 143.449951171875ms
Akumina Loader Executing Step Auto Clear Local Cache(id-49ztgw2i7jy): 0.875ms
Akumina Loader Executing Step Display Loader(id-49ztgw2i7jy): 1.14892578125ms
Akumina Loader Executing Step Fetching Digispace Configuration(id-49ztgw2i7jy): 472.97705078125ms
Akumina Loader Executing Step Get Extra LanguageNeutral Lists(id-49ztgw2i7jy): 0.0498046875ms
Akumina Loader Executing Step Fetching Async Lists(id-49ztgw2i7jy): 1067.14892578125ms
Akumina Loader Executing Step Detect Multiple SiteVisible Languages(id-49ztgw2i7jy): 0.06201171875ms
Akumina Loader Executing Step Load User Language Settings(id-49ztgw2i7jy): 248.154052734375ms
Akumina Loader Executing Step Getting Async HTML(id-49ztgw2i7jy): 196.277099609375ms
Akumina Loader Executing Step Event Subscription(id-49ztgw2i7jy): 0.072998046875ms
Akumina Loader Executing Step Set Site Theme(id-49ztgw2i7jy): 0.858154296875ms
Akumina Loader Executing Step Validating Interchange Query Key(id-49ztgw2i7jy): 110.068115234375ms
Akumina Loader Executing Step Index Page Data(id-49ztgw2i7jy): 0.0419921875ms
Akumina Loader Executing Step Fetching Page Permissions(id-49ztgw2i7jy): 0.423095703125ms
Akumina Loader Executing Step Getting Footer Markup template(id-49ztgw2i7jy): 238.807861328125ms
Akumina Loader Executing Step Display Site Logo(id-49ztgw2i7jy): 0.42529296875ms
Akumina Loader Executing Step Initialize Search Page(id-49ztgw2i7jy): 0.052734375ms
Akumina Loader Executing Step Initializing Rail(id-49ztgw2i7jy): 163.06494140625ms
Akumina Loader Executing Step Initialize Search Fields(id-49ztgw2i7jy): 2.178955078125ms
Akumina Loader Executing Step Set Department Site Color(id-49ztgw2i7jy): 0.090087890625ms
Akumina Loader Executing Step Prepare Widgets List(id-49ztgw2i7jy): 3.256103515625ms
Akumina Loader Executing Step Initialize Widgets(id-49ztgw2i7jy): 11.791015625ms
Akumina Loader Executing Step Initialize Generic Controls(id-49ztgw2i7jy): 2.423095703125ms
Akumina Loader Executing Step Load Dashboard Widgets(id-49ztgw2i7jy): 313.876953125ms
Akumina Loader Executing Step Display Sharepoint Bar(id-49ztgw2i7jy): 1.787109375ms
Akumina Loader Executing Step Debug Info(id-49ztgw2i7jy): 0.17919921875ms
Akumina Loader Executing Step Init Tray(id-49ztgw2i7jy): 1.3681640625ms
Akumina Loader Executing Step Resume Main Window Loader(id-49ztgw2i7jy): 0.118896484375ms
```
To get the overall Akumina Framework load time, perform the following steps
* Developer Tools
* Console Tab
* CTRL+UP arrow, Refresh All (localStorage.clear())
* Reload the page
* Filter your console for the keyword 'framework'

```
Akumina Framework: 2883.177978515625ms
```


The 'heaviest' calls of the framework are done in the step 'Fetching Async Lists'. This step performs the following queries (in parallel)
* Fetches UserProperties from SP or Graph
* Fetches Widget definitions from 'Widgets_AK'
* Fetches Widget instances from 'WidgetProperties_AK'
* Fetches available languages from 'Languages_AK' (if Multilingual is enabled)

In the below section we cover how to 'offline' these queries, or put them in a 'post-implementation' mode. For example, the 'Languages_AK' list and 'Widgets_AK' list rarely update after go live, as they normally take an implementation cycle when adding or modifying them.  Either way, these changes can be done 'post-live', they are done by modifying a few lines of JS code.

***

# Integration points
## Page Life Cycle Steps Status
Out of the Box Page Life Cycle Steps are stored as CONSTANTS within the Configuration Context. As of 4.0.0.0, whether a step is active or not can be verified by checking the **Page Life Cycle** section of the **Debug Panel**

![Debug Page Life Cycle](https://akumina.azureedge.net/wiki/training/images/4.0.0.0/debug_page_life_cycle.png)

Additional Info on Page life cycle steps can be found [here](https://github.com/akumina/AkuminaTraining/wiki/Page-Life-Cycle:-Core-Steps)
## Using LoaderConfiguration
The LoaderConfiguration class allows a developer to set the ConfigurationContext before the rest of the steps in the page lifecycle execute.  The LoaderConfiguration is automatically detected by the framework.  Within this class, steps can be turned on and off, and logging can be enabled. 
You can name the .Custom anything you wish.  The framework will execute the Init() method on anything in the namespace 'LoaderConfiguration' ... ie LoaderConfiguration.ClientName would also be fine

```Javascript
var LoaderConfiguration = LoaderConfiguration || {}

if ((typeof LoaderConfiguration.Custom) === 'undefined') {
	//Add shipped steps to loader
	LoaderConfiguration.Custom = {
		Init: function (config) {
			Akumina.AddIn.Logger.WriteInfoLog('LoaderConfiguration.Custom.Init');
		}
	}
}
````

## Using DigispaceConfigurationIDS_AK list
As of 4.0.0.0, Out of the Box Page Life Cycle Steps can also be controlled via entries in the DigispaceConfigurationIDS_AK list. In this example, we will deactivate the **LOADER_STEPS_ENABLE_LOADUSERLANGSETTINGS** step by adding an entry to the **DigispaceConfigurationIDS_AK** list as shown below:
![Deactivate Step](https://akumina.azureedge.net/wiki/training/images/4.0.0.0/page_step_deactivate.png)

This is convenient in the fact that performance modifications can be made without having to alter code.

# Page lifecycle steps that can be switched to "Post Implementation" mode

### Validate Interchange query key
This step is not needed once the query key is functioning. As of 4.0.0.0, this step is deprecated. The configuration is still there, set it to false to avoid confusion.

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_VALIDATEINTERCHANGEKEY = false;
````


### Fetching the DigispaceConfiguration from the 'DigispaceConfigurationIDS_AK' list
(this step can be disabled, but you MUST supply a new step that sets the correct values or the framework will fail to load). **IMPORTANT NOTE** This step must be disabled from the **LoaderConfiguration Class**, and if the step is disabled you can no longer disable steps within the **DigispaceConfigurationIDS_AK**.
  * [Replacement step code](#LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT = false;
````

### Fetching the Enabled Languages from the 'Languages_AK' list
(this step can be disabled, but you MUST supply a new step that sets the correct values or the framework will fail to load)
  * [Replace step code](#LOADER_STEPS_ENABLE_FETCHLANGUAGES)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_FETCHLANGUAGES = false;
````

### Fetching the Enabled Widget Definitions from the 'Widgets_AK' list
(this step can be disabled, but you MUST supply a new step that sets the correct values or the framework will fail to load)
  * [Replace step code](#LOADER_STEPS_ENABLE_LOADWIDGETSTYPES)
````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_LOADWIDGETSTYPES = false;
````


### Fetching the InterchangeLoginURL - this queries the App Catalog and pulls back the App found in the site collection that contains the name 'Interchange'
(this step can be disabled, but you MUST supply the correct Variable in the Configuration Context so that widgets / features that use this will not break)
  * [Replacement step code](#LOADER_STEPS_ENABLE_GETINTERCHANGELOGINURL)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_GETINTERCHANGELOGINURL = false;
````

### Load Widgets from Interchange (this step is great to do POST live, as it caches all of your widget properties)
````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.WIDGET_OPTIONS_LOADFROMAPPMANAGER = true;
````


### Fetch dashboard widgets for use on the dashboard
(this step is not needed if the dashboard is not in use)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_LOADDASHBOARDWIDGETS = false;
````

### Initialize the rail
(this step is not needed if the OOB foundation site RAIL is not used)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_INITRAIL = false;
````

### For NON MULTI-LINGUAL sites - Fetching the en-us.js TOKEN file
(this step can be disabled if your site is only going be in English, the en-us.js contents can be brought into the custom.js file, or a file of your choice, instead of the framework dynamically loading this file, you MUST supply the contents of this file or the tokens in the OOB views will not 
be properly replaced)
  * Replacement step code

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_LOADUSERLANGSETTINGS = false;
````

### For MULTI-LINGUAL sites - Fetching the ll-cc.js TOKEN files
The contents of the ll-cc.js language files in the path /Style%20Library/DigitalWorkplace/Content/language/ must be brought into the digitalworkplace.custom.js file, or a file of your choice. This is in place of the framework dynamically loading this file. Since we have multiple languages, we will set different variables, then set a default on the lang object. In the step code, we will switch languages as needed.

This process is detailed in the following article:
  * [Replacement step code](https://github.com/akumina/AkuminaTraining/wiki/Replacement-step-code-to-fetch-the-ll-cc.js-token-file-for-multi-lingual)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_LOADUSERLANGSETTINGS = false;
````

### For MULTI-LINGUAL sites - Fetching the enabled languages from the 'Languages_AK' list
(this step can be disabled if you are done configuring the languages that will be used on the site, there is no need to query this list, you MUST supply a new step that sets the enabled languages or the framework will fail to function)
  * Replacement step code

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_FETCHLANGUAGES = false;
````

### Download the Core/Loading.html template step
(this dynamically downloads the template and sets the LoadingTemplateHtml propery of the ConfigurationContext, there is no need for this step if post launch, as it will be rarely changed)
  * [Replacement step code](#LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT)

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_GETLOADINGTEMPLATE = false;
````



### Download the Core/AdditionalMasterMarkup.html template step
(this dynamically downloads the template and throws it and the end of the >body< tag, there is no need for this step if post launch, as it will be rarely changed)
  * Take the contents of this file and put in the master page right before the end of the closing >body< tag

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_GETADDITIONALMARKUP = false;
````



### Download the FooterMarkup.html template step
(this dynamically downloads the template and throws it inbetween the >footer< tag, there is no need for this step if post launch, as it will be rarely changed)
  * Take the contents of this file and put in the master page right before the end of the closing >body< tag

````Javascript
Akumina.Digispace.ConfigurationContext.CONSTANTS.LOADER_STEPS_ENABLE_GETFOOTERMARKUP = false;
````



***
# Replacement Step Code
As always, if you are going to disable a step required by the framework, make sure that you are adding a replacement step using the following integration point - [creating a custom step](https://github.com/akumina/AkuminaTraining/wiki/Page-Life-Cycle:-Adding-Custom-Steps)

````Javascript
//You can also create multiples, ie  AdditionalSteps.MyAdvancedSteps, AdditionalSteps.SomethingElse, it will always run  AdditionalSteps.XXYY.Init()
if ((typeof AdditionalSteps.MoreSteps) === 'undefined') {
    AdditionalSteps.MoreSteps = {
        Init: function () {
            var steps = [];
            //console.log('AdditionalSteps.MoreSteps.Init');
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "My Custom Step", callback: AdditionalSteps.MoreSteps.MyCustomStep }] });
          
            return steps;
        }
     }
}

````
## Replace the LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT step
<a name="LOADER_STEPS_ENABLE_FETCHCONFIGCONTEXT"></a>
You can get the values for the following keys directly from the 'DigispaceConfigurationIDS_AK' list
````Javascript

if ((typeof AdditionalSteps.MoreSteps) === 'undefined') {
    AdditionalSteps.MoreSteps = {
        Init: function () {
            var steps = [];
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "Custom SetConfig", callback: AdditionalSteps.MoreSteps.SetConfig }] });
            return steps;
        },
        SetConfig: function () {

            Akumina.Digispace.ConfigurationContext.GraphSubscriptionId = "";
            Akumina.Digispace.ConfigurationContext.GraphClientId = "";
            Akumina.Digispace.ConfigurationContext.SkypeApiKey = "";
            Akumina.Digispace.ConfigurationContext.SkypeApiKeyCC = "";
            Akumina.Digispace.ConfigurationContext.AADClientSecret = "NOTNEEDEDONFRONTEND";
            Akumina.Digispace.ConfigurationContext.AADTenantName = "NOTNEEDEDONFRONTEND";
            Akumina.Digispace.ConfigurationContext.InterchangeURL = "";
            Akumina.Digispace.ConfigurationContext.InterchangeQueryKey = "";
            Akumina.Digispace.ConfigurationContext.SiteLogoObj = '{"default": "/Style%20Library/DigitalWorkPlace/img/site-logo.png","en-us": "/Style Library/DigitalWorkPlace/Images/Client.png"}';
            Akumina.Digispace.ConfigurationContext.CachingStrategy = "medium";
            Akumina.Digispace.ConfigurationContext.SiteDepartmentMap = '[{"SiteId":"","SiteName":"","Department":""}]';
            Akumina.Digispace.ConfigurationContext.GoogleMapKey = "";
            Akumina.Digispace.ConfigurationContext.EnableAzureAD = true;
            Akumina.Digispace.ConfigurationContext.EnableDebugMode = true;
            Akumina.Digispace.ConfigurationContext.Theme = "white";
            Akumina.Digispace.ConfigurationContext.SearchPageExclusionList = "pages/search.aspx,pages/discussnew.aspx,pages/pagenotfoundError.aspx,pages/Logout.aspx".split(',');
            Akumina.Digispace.ConfigurationContext.TemplateFolderName = "DigitalWorkPlace";
            Akumina.Digispace.ConfigurationContext.IsMultiLingualEnabled = false;
            // We use the value as an object;
            Akumina.Digispace.ConfigurationContext.LanguageNeutralLists = {"siteneutral": ["VideoGallery_AK", "Favorites_AK", "IDS_AK", "AppDisplayOrder_AK", "Comments_AK", "WorkflowApproval_AK", "Forms_AK", "FormSubmissions_AK", "Apps_AK", "MyDashboard_AK", "Widgets_AK", "WidgetViews_AK", "DigispaceConfigurationIDS_AK", "DashboardWidgets_AK", "DashboardWidgetProperties_AK", "Languages_AK", "Banner_AK","DeptNews_AK"]};


            Akumina.Digispace.ConfigurationContext.InterchangeLoginURL = __getTemplatePrefix() + "/_layouts/15/appredirect.aspx?instance_id=";
            Akumina.Digispace.ConfigurationContext.LoadingTemplateHtml = "<div>Loading...</div>";

            Akumina.Digispace.ConfigurationContext.GraphRedirectUrl = Akumina.Digispace.SiteContext.SiteAbsoluteUrl;
            Akumina.Digispace.ConfigurationContext.TemplateURLPrefix = Akumina.Digispace.SiteContext.SiteAbsoluteUrl;
	    Akumina.Digispace.ConfigurationContext.WidgetInstanceSiteUrl = Akumina.Digispace.SiteContext.SiteAbsoluteUrl;
	    Akumina.Digispace.ConfigurationContext.RemoteListSiteUrl = Akumina.Digispace.SiteContext.SiteAbsoluteUrl;
	    Akumina.Digispace.ConfigurationContext.DashboardInstanceSiteUrl = Akumina.Digispace.SiteContext.SiteAbsoluteUrl;

            var miniConfiguration = {};
            miniConfiguration['clientid'] = Akumina.Digispace.ConfigurationContext.GraphClientId;
            miniConfiguration['subscriptionid'] = Akumina.Digispace.ConfigurationContext.GraphSubscriptionId;
            miniConfiguration['enableazuread'] = Akumina.Digispace.ConfigurationContext.EnableAzureAD.toString();

            Akumina.AddIn.Cache.Set(Akumina.Digispace.ConfigurationContext.getCacheKeyLanguageNeutral('configurationcontext'), miniConfiguration, Akumina.AddIn.Constants.HOUR_CACHE_EXPIRATION);

            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        }
    }
}
````

## Replace the LOADER_STEPS_ENABLE_LOADWIDGETSTYPES step
<a name="LOADER_STEPS_ENABLE_LOADWIDGETSTYPES"></a>
You can get the values for the following keys directly from the 'Widgets_AK' list
````Javascript

if ((typeof AdditionalSteps.MoreSteps) === 'undefined') {
    AdditionalSteps.MoreSteps = {
        Init: function () {
            var steps = [];
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "Custom LoadWidgetTypes", callback: AdditionalSteps.MoreSteps.LoadWidgetTypes}] });
            return steps;
        },
       LoadWidgetTypes: function () {
            var widgets = [];

            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "QuickLinks", "Akumina.AddIn.QuickLinksWidget", '[{"name":"querypart","friendlyname":"{quicklinks.friendlyname_querypart}","value":"MainMenu_AK","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"title","friendlyname":"{quicklinks.friendlyname_title}","value":"","type":"string"},{"name":"icon","friendlyname":"{quicklinks.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "GenericItem", "Akumina.AddIn.GenericItemWidget", '[{"name":"isroot","friendlyname":"{genericitem.friendlyname_isroot}","value":"true","type":"bool"},{"name":"selectfields","friendlyname":"selectfields","value":"","type":"string"},{"name":"listname","friendlyname":"{genericitem.friendlyname_listname}","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{genericitem.friendlyname_cacheinterval}","value":"-1","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "GenericList", "Akumina.AddIn.GenericListControlWidget", '[{"name":"isroot","friendlyname":"{genericlist.friendlyname_isroot}","value":"true","type":"bool"},{"name":"selectfields","friendlyname":"selectfields","value":"","type":"string"},{"name":"ispaging","friendlyname":"{genericlist.friendlyname_enablepaging}","value":"false","type":"bool"},{"name":"pagesize","friendlyname":"{genericlist.friendlyname_itemsperpage}","value":"10","type":"int"},{"name":"listname","friendlyname":"{genericlist.friendlyname_listname}","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"isasynccallback","friendlyname":"isasynccallback","value":"false","type":"bool"},{"name":"viewxml","friendlyname":"viewxml","value":"","type":"string"},{"name":"callbacktype","friendlyname":"callbacktype","value":"","type":"string"},{"name":"dataloadproperties","friendlyname":"dataloadproperties","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{genericlist.friendlyname_cacheinterval}","value":"-1","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "DashboardContainer", "Akumina.AddIn.DashboardContainerWidget", '	[{"name":"isroot","friendlyname":"{dashboard.friendlyname_isroot}","value":"true","type":"bool"},{"name":"selectfields","friendlyname":"selectfields","value":"ID,ItemList","type":"string"},{"name":"ispaging","friendlyname":"{dashboard.friendlyname_enablepaging}","value":"false","type":"bool"},{"name":"pagesize","friendlyname":"{dashboard.friendlyname_itemsperpage}","value":"10","type":"int"},{"name":"listname","friendlyname":"{dashboard.friendlyname_listname}","value":"MyDashboard_AK","type":"string"},{"name":"instuctionset","friendlyname":"instuctionset","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"ShowDashboardItems","type":"string"},{"name":"isasynccallback","friendlyname":"isasynccallback","value":"false","type":"bool"},{"name":"viewxml","friendlyname":"viewxml","value":"","type":"string"},{"name":"callbacktype","friendlyname":"callbacktype","value":"customdataload","type":"string"},{"name":"dataloadproperties","friendlyname":"dataloadproperties","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{dashboard.friendlyname_cacheinterval}","value":"0","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "MyTeam", "Akumina.AddIn.MyTeamWidget", '[{"name":"isroot","friendlyname":"{myteam.friendlyname_isroot}","value":"true","type":"bool"},{"name":"selectfields","friendlyname":"selectfields","value":"","type":"string"},{"name":"ispaging","friendlyname":"{myteam.friendlyname_enablepaging}","value":"false","type":"bool"},{"name":"pagesize","friendlyname":"{myteam.friendlyname_itemsperpage}","value":"10","type":"int"},{"name":"listname","friendlyname":"{myteam.friendlyname_listname}","value":"","type":"string"},{"name":"instructionset","friendlyname":"instructionset","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"isasynccallback","friendlyname":"isasynccallback","value":"false","type":"bool"},{"name":"viewxml","friendlyname":"viewxml","value":"","type":"string"},{"name":"callbacktype","friendlyname":"callbacktype","value":"","type":"string"},{"name":"dataloadproperties","friendlyname":"dataloadproperties","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{myteam.friendlyname_cacheinterval}","value":"-1","type":"int"},{"name":"fetchphotofromad","friendlyname":"{myteam.friendlyname_fetchphotofromad}","value":"","type":"string"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "RssNews", "Akumina.AddIn.RssNewsWidget", '[{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"rssurl","friendlyname":"{rssnews.friendlyname_rssfeedurl}","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{rssnews.friendlyname_cacheinterval}","value":"10","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "Weather", "Akumina.AddIn.WeatherWidget", '[{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"city","friendlyname":"{weather.friendlyname_city}","value":"","type":"string"},{"name":"state","friendlyname":"{weather.friendlyname_state}","value":"","type":"string"},{"name":"postalcode","friendlyname":"{weather.friendlyname_postalcode}","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{weather.friendlyname_cacheinterval}","value":"10","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "DocumentsSummaryList", "Akumina.AddIn.DocumentsSummaryListWidget", '[{"name":"title","friendlyname":"{dsl.friendlyname_title}","value":"Document Summary List","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"icon","friendlyname":"{dsl.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"targetdocumentlibrary","friendlyname":"{dsl.friendlyname_targetdocumentlibrary}","value":"Documents","type":"string"},{"name":"tablist","friendlyname":"{dsl.friendlyname_tablist}","value":"Newest,My Recent,Popular,Recommended","type":"string"},{"name":"newestnumberoffiles","friendlyname":"{dsl.friendlyname_newestnumberoffiles}","value":"20","type":"int"},{"name":"recentnumberoffiles","friendlyname":"{dsl.friendlyname_recentnumberoffiles}","value":"20","type":"int"},{"name":"popularnumberoffiles","friendlyname":"{dsl.friendlyname_popularnumberoffiles}","value":"20","type":"int"},{"name":"recommendednumberoffiles","friendlyname":"{dsl.friendlyname_recommendednumberoffiles}","value":"20","type":"int"},{"name":"newestinformationtext","friendlyname":"{dsl.friendlyname_newestinformationtext}","value":"","type":"string"},{"name":"recentinformationtext","friendlyname":"{dsl.friendlyname_recentinformationtext}","value":"","type":"string"},{"name":"popularinformationtext","friendlyname":"{dsl.friendlyname_popularinformationtext}","value":"","type":"string"},{"name":"recommendedinformationtext","friendlyname":"{dsl.friendlyname_recommendedinformationtext}","value":"","type":"string"},{"name":"popularnumberofdays","friendlyname":"{dsl.friendlyname_popularnumberofdays}","value":"30","type":"string"},{"name":"currentsite","friendlyname":"{dsl.friendlyname_currentsite}","value":"false","type":"bool"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "MyForms", "Akumina.AddIn.MyFormsWidget", '[{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"title","friendlyname":"{forms.friendlyname_title}","value":"","type":"string"},{"name":"listname","friendlyname":"{forms.friendlyname_listname}","value":"FormSubmissions_AK","type":"string"},{"name":"icon","friendlyname":"{forms.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"version","friendlyname":"version","value":"fullview","type":"string"},{"name":"pagesize","friendlyname":"{forms.friendlyname_itemsperpage}","value":"25","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "FormWidget", "Akumina.AddIn.FormWidget", '[{"name":"instructionset","friendlyname":"instructionset","value":"","type":"string"},{"name":"formtype","value":"","type":"string"},{"name":"chartfield","value":"","type":"string"},{"name":"displaynonmodal","value":"true","type":"bool"},{"name":"itemid","value":"","type":"string"},{"name":"title","friendlyname":"{forms.friendlyname_title}","value":"","type":"string"},{"name":"formdescription","value":"","type":"string"},{"name":"postback","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"referencelist","value":"","type":"string"},{"name":"columnorder","value":"","type":"string"},{"name":"siteid","value":"","type":"string"},{"name":"formdefinition","value":"","type":"string"},{"name":"actionbuttontext","value":"","type":"string"},{"name":"charttitle","value":"","type":"string"},{"name":"charttitlesize","value":"24","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "Traffic", "Akumina.AddIn.TrafficWidget", '[{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"city","friendlyname":"{traffic.friendlyname_city}","value":"","type":"string"},{"name":"state","friendlyname":"{traffic.friendlyname_state}","value":"","type":"string"},{"name":"postalcode","friendlyname":"{traffic.friendlyname_postalcode}","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "CompanyCalendar", "Akumina.AddIn.CompanyCalendarWidget", '[{"name":"groupname","friendlyname":"{calendar.friendlyname_groupname}","value":"CompanyCalendar","type":"string"},{"name":"color","friendlyname":"{calendar.friendlyname_color}","value":"{\\"Blue\\":\\"Blue\\",\\"Green\\":\\"Green\\"}","type":"choice"},{"name":"calendartitle","friendlyname":"Displayed Title","value":"Company Calendar","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"icon","friendlyname":"{calendar.friendlyname_icon}","value":"{\\"None\\":\\"None\\",\\"Bar\\":\\"Bar\\",\\"Calendar\\":\\"Calendar\\",\\"Camera\\":\\"Camera\\",\\"Car\\":\\"Car\\",\\"Cloud\\":\\"Cloud\\",\\"Comment\\":\\"Comment\\",\\"Comments\\":\\"Comments\\",\\"Envelope\\":\\"Envelope\\",\\"Exclamation\\":\\"Exclamation\\",\\"Feed\\":\\"Feed\\",\\"File\\":\\"File\\",\\"Files\\":\\"Files\\",\\"Filter\\":\\"Filter\\",\\"Folder\\":\\"Folder\\",\\"Gear\\":\\"Gear\\",\\"Image\\":\\"Image\\",\\"Info\\":\\"Info\\",\\"Link\\":\\"Link\\",\\"Newspaper\\":\\"Newspaper\\",\\"Pencil\\":\\"Pencil\\",\\"Phone\\":\\"Phone\\",\\"Pie\\":\\"Pie\\",\\"Question\\":\\"Question\\",\\"Search\\":\\"Search\\",\\"Shopping\\":\\"Shopping\\",\\"Sun\\":\\"Sun\\"}","type":"choice"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "PeopleDirectory", "Akumina.AddIn.PeopleDirectoryWidget", '[{"name":"title","friendlyname":"{peopledirectory.friendlyname_title}","value":"","type":"string"},{"name":"searchtype","friendlyname":"{peopledirectory.friendlyname_sortby}","value":"{\"First Name\":\"first\",\"Last Name\":\"last\"}","type":"choice"},{"name":"facets","friendlyname":"{peopledirectory.friendlyname_facets}","value":"[{ \"facetName\":\"department\",\"facetDisplayName\":\"Department\"},{ \"facetName\":\"officelocation\",\"facetDisplayName\":\"Office Location\"}]","type":"json"},{"name":"fetchphotofromad","friendlyname":"{peopledirectory.friendlyname_fetchphotofromad}","value":"true","type":"bool"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"searchlistingdisplay","friendlyname":"{peopledirectory.friendlyname_searchlistingdisplay}","value":"{\"First Last\":\"FL\",\"Last, First\":\"LF\"}","type":"choice"},{"name":"enableazselector","friendlyname":"{peopledirectory.friendlyname_enableazselector}","value":"True","type":"bool"},{"name":"displayview","friendlyname":"{peopledirectory.friendlyname_displayview}","value":"{\"Tile\":\"tile\",\"List\":\"list\"}","type":"choice"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "ImportantDates", "Akumina.AddIn.ImportantDatesWidget", '[{"name":"listname","friendlyname":"{importantdates.friendlyname_listname}","value":"ImportantDates_AK","type":"string"},{"name":"viewalllink","friendlyname":"{importantdates.friendlyname_viewalllink}","value":"Calendar.aspx","type":"string"},{"name":"title","friendlyname":"{importantdates.friendlyname_title}","value":"Important Dates","type":"string"},{"name":"icon","friendlyname":"{importantdates.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"calendar","friendlyname":"{importantdates.friendlyname_datesfromcalendar}","value":"","type":"bool"},{"name":"displaytemplateurl","value":"","type":"string"},{"name":"featuredfield","friendlyname":"{importantdates.friendlyname_featuredfield}","value":"Featured","type":"string"},{"name":"calendardisplay","friendlyname":"{importantdates.friendlyname_calendardisplay}","value":"today","type":"string"},{"name":"cacheinterval","friendlyname":"{importantdates.friendlyname_cacheinterval}","value":"0","type":"int"},{"name":"itemstodisplay","friendlyname":"{importantdates.friendlyname_itemstodisplay}","value":"0","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "ContentBlock", "Akumina.AddIn.ContentBlockWidget", '[{"name":"querypart","friendlyname":"{contentblock.friendlyname_listname}","value":"","type":"string"},{"name":"sitewidealertmessage","friendlyname":"Site Wide Alert Message","value":"","type":"string"},{"name":"disablealert","friendlyname":"{contentblock.friendlyname_disablealert}","value":"","type":"string"},{"name":"preview","friendlyname":"{contentblock.friendlyname_preview}","value":"false","type":"bool"},{"name":"dynamicpreview","value":"","type":"string"},{"name":"title","friendlyname":"{contentblock.friendlyname_title}","value":"","type":"string"},{"name":"icon","friendlyname":"{contentblock.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"instructionset","friendlyname":"instructionset","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{contentblock.friendlyname_cacheinterval}","value":"0","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "AnnouncementItems", "Akumina.AddIn.AnnouncementItemsWidget", '[{"name":"listname","friendlyname":"{announcementitems.friendlyname_listname}","value":"","type":"string"},{"name":"title","friendlyname":"{announcementitems.friendlyname_title}","value":"Announcement Items","type":"string"},{"name":"icon","friendlyname":"{announcementitems.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"displaytemplate","friendlyname":"displaytemplate","value":"PageTemplate","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"itemstodisplay","friendlyname":"{announcementitems.friendlyname_itemstodisplay}","value":"10","type":"int"},{"name":"viewalllink","friendlyname":"{announcementitems.friendlyname_viewalllink}","value":"NewsList.aspx","type":"string"},{"name":"ispaging","friendlyname":"{announcementitems.friendlyname_enablepaging}","value":"false","type":"bool"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "EventDetail", "Akumina.AddIn.EventDetailWidget", '[{"name":"listname","friendlyname":"{eventdetails.friendlyname_listname}","value":"Calendar_AK","type":"string"},{"name":"calendarlink","friendlyname":"{eventdetails.friendlyname_calendarlink}","value":"Calendar","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "Calendar", "Akumina.AddIn.CalendarWidget", '[{"name":"listname","friendlyname":"{calendar.friendlyname_listname}","value":"Calendar_AK","type":"string"},{"name":"title","friendlyname":"{calendar.friendlyname_title}","value":"Calendar","type":"string"},{"name":"preview","friendlyname":"{calendar.friendlyname_enablepreview}","value":"false","type":"bool"},{"name":"icon","friendlyname":"{calendar.friendlyname_icon}","value":"{\"None\":\"None\",\"Bar\":\"Bar\",\"Calendar\":\"Calendar\",\"Camera\":\"Camera\",\"Car\":\"Car\",\"Cloud\":\"Cloud\",\"Comment\":\"Comment\",\"Comments\":\"Comments\",\"Envelope\":\"Envelope\",\"Exclamation\":\"Exclamation\",\"Feed\":\"Feed\",\"File\":\"File\",\"Files\":\"Files\",\"Filter\":\"Filter\",\"Folder\":\"Folder\",\"Gear\":\"Gear\",\"Image\":\"Image\",\"Info\":\"Info\",\"Link\":\"Link\",\"Newspaper\":\"Newspaper\",\"Pencil\":\"Pencil\",\"Phone\":\"Phone\",\"Pie\":\"Pie\",\"Question\":\"Question\",\"Search\":\"Search\",\"Shopping\":\"Shopping\",\"Sun\":\"Sun\"}","type":"choice"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"category","friendlyname":"{calendar.friendlyname_category}","value":"","type":"string"},{"name":"isroot","friendlyname":"{calendar.friendlyname_isroot}","value":"false","type":"bool"},{"name":"showcategories","friendlyname":"{calendar.friendlyname_showcategories}","value":"true","type":"bool"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "PageLayoutWidget", "Akumina.AddIn.PageLayoutWidget", '[{"name":"container","value":".ak-footer .row","type":"string"},{"name":"instructionset","friendlyname":"instructionset","value":"","type":"string"},{"name":"containercontrols","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{pagelayout.friendlyname_cacheinterval}","value":"-1","type":"int"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "DocumentFilter", "Akumina.AddIn.DocumentFilterWidget", '[{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"listname","friendlyname":"{documentfilter.friendlyname_listname}","value":"","type":"string"},{"name":"taxonomycolumnname","friendlyname":"{documentfilter.friendlyname_taxonomycolumnname}","value":"","type":"string"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "DocumentList", "Akumina.AddIn.DocumentListWidget", '[{"name":"isroot","friendlyname":"{documentlist.friendlyname_isroot}","value":"true","type":"bool"},{"name":"selectfields","friendlyname":"selectfields","value":"","type":"string"},{"name":"ispaging","friendlyname":"{documentlist.friendlyname_enablepaging}","value":"false","type":"bool"},{"name":"pagesize","friendlyname":"{documentlist.friendlyname_itemsperpage}","value":"10","type":"string"},{"name":"listname","friendlyname":"{documentlist.friendlyname_listname}","value":"","type":"string"},{"name":"instructionset","friendlyname":"instructionset","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"isasynccallback","friendlyname":"isasynccallback","value":"false","type":"bool"},{"name":"viewxml","friendlyname":"viewxml","value":"","type":"string"},{"name":"callbacktype","friendlyname":"callbacktype","value":"","type":"string"},{"name":"dataloadproperties","friendlyname":"dataloadproperties","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{documentlist.friendlyname_cacheinterval}","value":"0","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "Banner", "Akumina.AddIn.BannerWidget", '[{"name":"resultsourceid","friendlyname":"{banner.friendlyname_listname}","value":"Banner_AK","type":"string"},{"name":"infiniteloop","friendlyname":"{banner.friendlyname_infiniteloop}","value":"true","type":"bool"},{"name":"autoplay","friendlyname":"{banner.friendlyname_autoplay}","value":"true","type":"bool"},{"name":"shownavigator","friendlyname":"{banner.friendlyname_shownavigator}","value":"true","type":"bool"},{"name":"transitioneffect","friendlyname":"{banner.friendlyname_transitioneffect}","value":"{\"Horizontal\":\"Horizontal\",\"Fade\":\"Fade\"}","type":"choice"},{"name":"slideduration","friendlyname":"{banner.friendlyname_slideduration}","value":"3000","type":"int"},{"name":"textcolor","friendlyname":"{banner.friendlyname_textcolor}","value":"{\"White\":\"white\",\"Black\":\"black\",\"Grey\":\"grey\"}","type":"choice"},{"name":"textlocation","friendlyname":"{banner.friendlyname_textlocation}","value":"{\"Top Left\":\"top_left\",\"Top Center\":\"top_center\",\"Top Right\":\"top_right\",\"Middle Left\":\"middle_left\",\"Middle Center\":\"middle_center\",\"Middle Right\":\"middle_right\",\"Bottom Left\":\"bottom_left\",\"Bottom Center\":\"bottom_center\",\"Bottom Right\":\"bottom_right\"}","type":"choice"},{"name":"textalignment","friendlyname":"{banner.friendlyname_textalignment}","value":"{\"Left\":\"left\",\"Center\":\"center\",\"Right\":\"right\"}","type":"choice"},{"name":"h1maxcharacters","friendlyname":"{banner.friendlyname_h1maxcharacters}","value":"80","type":"int"},{"name":"h2maxcharacters","friendlyname":"{banner.friendlyname_h2maxcharacters}","value":"80","type":"int"},{"name":"buttonmaxcharacters","friendlyname":"{banner.friendlyname_buttonmaxcharacters}","value":"80","type":"int"},{"name":"webparttheme","friendlyname":"webparttheme","value":"","type":"string"},{"name":"linkbuttontheme","friendlyname":"linkbuttontheme","value":"","type":"string"},{"name":"linkbuttontexttheme","friendlyname":"linkbuttontexttheme","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"preview","friendlyname":"{banner.friendlyname_enablepreview}","value":"false","type":"bool"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "LanguagePicker", "Akumina.AddIn.LanguagePickerWidget", '[{"name":"isroot","friendlyname":"{languagepicker.friendlyname_isroot}","value":"true","type":"bool"},{"name":"listname","friendlyname":"{languagepicker.friendlyname_listname}","value":"Languages_AK","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"{languagepicker.friendlyname_cacheinterval}","value":"0","type":"int"}]'));
            widgets.push(AdditionalSteps.MoreSteps.GetWidgetType("", "GenericSearchList", "Akumina.AddIn.GenericSearchListWidget", '[{"name":"selectfields","friendlyname":"selectfields","value":"","type":"string"},{"name":"ispaging","friendlyname":"Enable Paging","value":"","type":"string"},{"name":"pagesize","friendlyname":"Items/Page","value":"10","type":"int"},{"name":"query","friendlyname":"Query","value":"","type":"string"},{"name":"displaytemplateurl","friendlyname":"displaytemplateurl","value":"","type":"string"},{"name":"callbackmethod","friendlyname":"callbackmethod","value":"","type":"string"},{"name":"cacheinterval","friendlyname":"Cache Interval","value":"","type":"string"}]'));
        
            Akumina.AddIn.Cache.Set(AdditionalSteps.MoreSteps.GetWidgetTypesCacheKey(), widgets, AdditionalSteps.MoreSteps.GetCacheInterval());
            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        },
        GetWidgetType: function (title, widgetName, widgetClass, widgetProperties) {
            var widgetType = {
                title: title,
                widgetName: widgetName,
                widgetclass: widgetClass,
                widgetProperties: widgetProperties
            };
            return widgetType;
        },
        GetCacheInterval: function () {
            return Akumina.AddIn.Constants.HOUR_CACHE_EXPIRATION;
        },
        GetWidgetTypesCacheKey: function () {
            return Akumina.Digispace.ConfigurationContext.getCacheKeyLanguageNeutral('widgets_ak');
        },
    }
}
````

## Replace the LOADER_STEPS_ENABLE_FETCHLANGUAGES step
<a name="LOADER_STEPS_ENABLE_FETCHLANGUAGES"></a>
You can get the values for the following keys directly from the 'Languages_AK' list
````Javascript

if ((typeof AdditionalSteps.MoreSteps) === 'undefined') {
    AdditionalSteps.MoreSteps = {
        Init: function () {
            var steps = [];
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "Custom LoadLanguages", callback: AdditionalSteps.MoreSteps.LoadWidgetTypes}] });
            return steps;
        },
       LoadLanguages: function () {
            var languages = [];

            languages.push({ title: "English (U.S.)", languageId: 1033, languageCode: "en-US", direction: "ltr", isDefault: true, isActive: true, isSiteVisible: true, fallbackLanguageId: null });

            Akumina.AddIn.Cache.Set(AdditionalSteps.MoreSteps.GetLanguagesCacheKey(), languages, AdditionalSteps.MoreSteps.GetCacheInterval());

            var userlang = { languageCode: "en-US", languageId: 1033, fallbackLanguageId: 1033 };
            Akumina.Digispace.UserContext.SetLanguage(userlang);


            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        },
        GetCacheInterval: function () {
            return Akumina.AddIn.Constants.HOUR_CACHE_EXPIRATION;
        },
        GetLanguagesCacheKey: function () {
            return Akumina.Digispace.ConfigurationContext.getCacheKeyLanguageNeutral('languages_ak');
        }
    }
}
````


## Replace the LOADER_STEPS_ENABLE_GETINTERCHANGELOGINURL step
<a name="LOADER_STEPS_ENABLE_GETINTERCHANGELOGINURL"></a>
You can get the instanceid of your interchange app by clicking on the App in the site contents of the site collection, you can take the instanceid off of the querystring (it will always be a guid)
````Javascript
Akumina.Digispace.ConfigurationContext.InterchangeLoginURL = __getTemplatePrefix() + "/_layouts/15/appredirect.aspx?instance_id={}";
````

***
# Script file ordering in the Master Page

We have found that moving the Akumina JS script references outside of the >head< tag and to the bottom of the >body< tag seem to help the "perceived" page load times.  This is a common practice used on Public facing websites.  The browser actually downloads browser resources sequentially, in order, so any SCRIPT tag needs to be executed (or downloaded) before completing the rest of the rendering process.

Open up the digitalworkspace.html file in the Master Page Gallery of sharepoint.

Remove the following lines:

````Html
    <!-- DIGITALWORKPLACE JS FILES -->
    <!--MS:<SharePoint:ScriptLink ID="ScriptLink1099" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.vendor.min.js" runat="server">-->
    <!--ME:</SharePoint:ScriptLink>-->
    <!--MS:<SharePoint:ScriptLink ID="ScriptLink103" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.vendor-nomin.js" runat="server">-->
    <!--ME:</SharePoint:ScriptLink>-->
    <!--MS:<SharePoint:ScriptLink ID="ScriptLink1098" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.min.js" runat="server">-->
    <!--ME:</SharePoint:ScriptLink>-->
    <!--MS:<SharePoint:ScriptLink ID="ScriptLink10942" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.shippedsite.min.js" runat="server">-->
    <!--ME:</SharePoint:ScriptLink>-->
    <!--MS:<SharePoint:ScriptLink ID="ScriptLink10943" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.custom.js" runat="server">-->
    <!--ME:</SharePoint:ScriptLink>-->


````

Add the following lines just before the closing >body< tag:

````Html
 <script src="https://TENANT.sharepoint.com/style%20library/digitalworkplace/js/digitalworkplace.vendor.min.js">//<![CDATA[//]]>
        </script>
        <script src="https://TENANT.sharepoint.com/style%20library/digitalworkplace/js/digitalworkplace.vendor-nomin.js">//<![CDATA[//]]>
        </script>
        <script src="https://TENANT.sharepoint.com/style%20library/digitalworkplace/js/digitalworkplace.min.js">//<![CDATA[//]]>
        </script>
        <script src="https://TENANT.sharepoint.com/style%20library/digitalworkplace/js/digitalworkplace.shippedsite.min.js">//<![CDATA[//]]>
        </script>
        <script src="https://TENANT.sharepoint.com/style%20library/digitalworkplace/js/digitalworkplace.custom.js">//<![CDATA[//]]>
        </script>


````



***
# CDN

> In Modern sites, we recommend enabling the CDN as this is where the client assets (js, css, etc) come from for the Single Page Application

The Akumina team has experienced various latency throughout the day trying to access resources coming out of the Style Library.  This includes requests to images / javascript and css files.  We have found that off loading these requests to a CDN has increased performance across the board. Not to mention, there is a browser restriction on how many requests can go out to the same TLD (Top Level Domain) at the same time.  This restriction can range anywhere from 6-20 depending on the browser and can be attributed too "Stalled" requests.  Making the requests come from a CDN URL allows this request limit to be avoided, ie,  10 requests go out to tenanturl.sharepoint.com and another 10 requests can go out to publiccdn.sharepointonline.com/tenanturl

**Lucky for us, Sharepoint provides us an OOB / Free of charge (as of 8/1/17) automatic syncing and routing to a public CDN.  **

You can find all the information on public and private CDN's on the [MS website](https://support.office.com/en-us/article/Use-the-Office-365-content-delivery-network-with-SharePoint-Online-bebb285f-1d54-4f79-90a5-94985afc6af8)

We have done this work often, so here is a quick step by step on how to enable the public CDN on your tenant 
*Note: This enable the CDN across all your site collections and apply the the "Style Library" and "MasterPages" library automatically

* Set-SPOTenantCdnEnabled -CdnType Public -Enable $true 
* Get-SPOTenantCdnOrigins -CdnType Public
You should see the following:
```
Get-SPOTenantCdnOrigins -CdnType Public
*/MASTERPAGE
*/STYLE LIBRARY
```

*Note: For Modern sites, this should also be done for `Akumina Library`. We would run the same command for any other library, examples:
```
Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/{SiteCollectionName}/Akumina Library"
Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/{SiteCollectionName}/MyCustomLibrary"
```
To Disable: run the following command
```
Set-SPOTenantCdnEnabled -CdnType Public -Enable $false
```
Note that in order to make use of the CDN for font or html files, additional configuration is needed for those extensions:
```
Set-SPOTenantCdnPolicy -CdnType Public -PolicyType IncludeFileExtensions -PolicyValue "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF,WOFF2,HTML" 
```
***
# Troubleshooting SharePoint Page Performance
Most modern browsers have a form of developer tools where you can see the network calls that are made. Here we can see the performance of the SharePoint pages. Perform the following tasks in the browser to get the output:
* Developer Tools
* Network Tab
* CTRL+UP arrow, Refresh All (localStorage.clear())
* Reload the page
* Select the first aspx page (or the homepage if applicable)
* Look in the **Headers** tab, the **Response headers** group.

You will find the sprequestduration and other headers as shown:

![sprequestduration](https://akumina.azureedge.net/wiki/training/images/performance/sprequestduration.png)

![x-sharepointhealthscore](https://akumina.azureedge.net/wiki/training/images/performance/x-sharepointhealthscore.png)

The ones we are interested are defined below:

* sprequestduration – this is the time in milliseconds that SharePoint took to assemble the page. If this number is higher than that indicates a complex page - are there too many (non Akumina) web parts or other items on the page?
* x-sharepointhealthscore – This value is on a scale of 0 – 10 and indicates how much load the server where the response came from is experiencing.

***
# SharePoint CSS theming
For CSS files, SharePoint will download the contents of the CSS file and append it as a **style** tag under the **link** tag. This has performance implications and can break styles if the CSS file is very large. For the CSS link, add this attribute to the link to prevent this: 

    ms-design-css-conversion="no" 

For example, in a classic master page, the *SharePoint:CssRegistration* tag shown below:

    <!--MS:<SharePoint:CssRegistration ID="CssRegistration1" Name="&#60;% $SPUrl:{{SiteUrl}}/Style Library/DigitalWorkPlace/css/digitalworkplace.css %&#62;" runat="server">-->
    <!--ME:</SharePoint:CssRegistration>-->

Becomes a standard *link* tag:

    <link ms-design-css-conversion="no" rel="stylesheet" type="text/css" href="{{SiteUrl}}/Style Library/DigitalWorkPlace/css/digitalworkplace.css"/>

***

# Measuring API calls
In the Akumina Debugger panel, the number of times the Akumina API is called is recorded in the Cache tab. You can see two values **SP Call Count** and **Connector Call Count**. These are influenced by the number of widgets and other calls to SharePoint, and will change based on a warm or cold load. It is recommended to get these numbers as low as possible.

![debugger cache](https://akumina.azureedge.net/wiki/training/images/performance/debugger-cache.png)

***

# Measuring Azure App Service Latency
When looking at performance, it is important to measure the network latency from a given user location to where the Akumina App Manager is located. We can then correlate this value with what we see in the site.
There are online services that can assist with this – a few are listed below.

## Samples

A sample report from http://www.azurespeed.com/Azure/Latency, measuring the latency from the user location to the East US 2 data center:

![azure latency](https://akumina.azureedge.net/wiki/training/images/performance/azure-latency.png)
 
A sample report from https://azurespeedtest.azurewebsites.net/

![azure speed](https://akumina.azureedge.net/wiki/training/images/performance/azure-speed.png)
