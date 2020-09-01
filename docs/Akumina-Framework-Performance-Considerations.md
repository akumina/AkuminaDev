---
id: Akumina-Framework-Performance-Considerations
title: Akumina Framework Performance Considerations
---

# Thought Process around Pre-Implementation and Post-Implementation modes

The Akumina framework ships and executes by default in 'Pre-Implementation' mode.   This means all page lifecycle steps of the framework make queries against the Sharepoint list.  This is done for easy configuration and quick setup.  This does provide some overhead that can be eliminated.  Most often times, when ready to go live, these lists are RARELY updated.  So we typically like to offload this data to the JS code itself.. Rather than query the list on every uncached page load.  For instance, one of the main lists for easy configuration which drives the entire framework is the 'DigispaceConfigurationIDS_AK' list.  This list contains configuration data.  This data should really NEVER change once launched...  so there is no need to keep it in the list.  It can be offloaded as configuration variables in code.

We have taken the time to outline every list that gets queried in the page life cycle of the Akumina Framework.

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

> In Modern sites, we recommend enabled the CDN as this is where the client assets (js, css, etc) come from for the Single Page Application

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

 * Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/{SiteCollectionName}/Akumina Library"
 * Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl "sites/{SiteCollectionName}/MyCustomLibrary"

To Disable: run the following command

* Set-SPOTenantCdnEnabled -CdnType Public -Enable $false

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
 ![](data:image/*;base64,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)

 ![](data:image/*;base64,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)

The ones we are interested are defined below:

* sprequestduration – this is the time in milliseconds that SharePoint took to assemble the page. If this number is higher than that indicates a complex page - are there too many (non Akumina) web parts or other items on the page?
* x-sharepointhealthscore – This value is on a scale of 0 – 10 and indicates how much load the server where the response came from is experiencing.

***
# SharePoint CSS theming
For CSS files, SharePoint will download the contents of the CSS file and append it as a **style** tag under the **link** tag. This has performance mplications and can break styles if the CSS file is very large. For the CSS link, add this attribute to the link to prevent this: 

    ms-design-css-conversion="no" 

Example:

    <link ms-design-css-conversion="no" rel="stylesheet" type="text/css" href="{{SiteUrl}}/Style Library/DigitalWorkPlace/css/digitalworkplace.css"/>
