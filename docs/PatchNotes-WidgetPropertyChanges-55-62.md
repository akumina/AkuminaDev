---
id: Widget Property Changes for 6.2 (from 5.5)
title: Page Indexing
---

As of 10.17.24

**ActivityCommentsWidget**

_Added in 6.2_
```json
{

        "name": "uicallbackmethod",
        "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
        "value": "",
        "type": "string"
},
{
        "name": "sortoption",
        "friendlyname": "{propertyfriendlynames.friendlyname_sortoption}",
        "value": {
          "Oldest First": "oldestfirst",
          "Newest First": "newestfirst"
        },
        "type": "choice"
}

Instances: [
 {
   Properties: [{
     "name": "sortoption",
     "value": "oldestfirst"
   }]
 }
]
```

**ActivityStreamFilterWidget**

_Added in 6.2_
```json
{
     "name": "displayfilterastree",
     "friendlyname": "displayfilterastree",
     "value": "false",
     "type": "bool"
}

Instances: [
 {
   Properties: [{
      "name": "displayfilterastree",
      "value": "false"
   }]
 }
]

```

**ActivityStreamWidget**

_Added in 6.2_
```json
{
   "name": "commentssortoption",
   "friendlyname": "{propertyfriendlynames.friendlyname_commentssortoption}",
   "value": {
      "Oldest First": "oldestfirst",
      "Newest First": "newestfirst"
   },
   "type": "choice"
},
{
   "name": "uicallbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
   "value": "",
   "type": "string"
}

Instances: [
 {
   Properties: [{
      "name": "commentssortoption",
      "value": "oldestfirst"
   }]
 }
]

```

**AkuminaFlowUserWidget**

_Added in 6.2_
```json
{
   "name": "showrecurrencemessage",
   "friendlyname": "{teamprocess.propertyfriendlynames.showrecurrencemessage}",
   "value": "false",
   "type": "bool"
},

{
   "name": "propertyvaluesreportcolumns",
   "friendlyname": "{teamprocess.propertyfriendlynames.propertyvaluesreportcolumns}",
   "type": "string",
   "value": ""
},

Instances: [{
   properties: [
       { 
          "name": "showrecurrencemessage",
          "value": false
       },
       {
          "name": "propertyvaluesreportcolumns",
          "value": ""
       },
   ]
}]
```
_Updated in 6.2_
```json
"Description": "Create and work instance of process which involves only a single user in one session (e.g. Survey)",

{
   "name": "reporttypeprimary",
   "friendlyname": "{teamprocess.propertyfriendlynames.reporttypeprimary}",
   "value": {
          "None": "NONE",
          "Process Score": "PCSR",
          "Process Choice Value Usage": "PCVUR",
          "Process Property Values": "PPVR",
          "Process Property Unique Values": "PPUVR"
    },
    "type": "choice"
},
{
    "name": "reporttypesecondary",
     "friendlyname": "{teamprocess.propertyfriendlynames.reporttypesecondary}",
     "value": {
        "None": "NONE",
        "Process Score": "PCSR",
        "Process Choice Value Usage": "PCVUR",
        "Process Property Values": "PPVR",
        "Process Property Unique Values": "PPUVR"
},
```

**BreadcrumbsWidget**

_Added in 6.2_
```json
{
   "name": "usepagefolders",
   "friendlyname": "{propertyfriendlynames.friendlyname_usepagefolders}",
   "value": "",
   "type": "bool"
}
```

**CountdownWidget**

_Added in 6.2_
```json
{
   "name": "callbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
   "value": "",
   "type": "string"
},
{
    "name": "uicallbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
    "value": "",
    "type": "string"
},
```

**DashboardConfigurationWidget**

_Added in 6.2_

```json
{
   "name": "callbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
   "value": "",
   "type": "string"
},
{
   "name": "uicallbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
   "value": "",
   "type": "string"
},
```

**DocumentViewerWidget**

_Added in 6.2_

```json
 {
    "name": "sitecollectionurl",
    "friendlyname": "{propertyfriendlynames.friendlyname_sitecollectionurl}",
    "value": "",
    "type": "siteselector"
}
```

**EmployeeSpotlightWidget**

_Added in 6.2_

```json
{
    "name": "callbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
    "value": "",
    "type": "string"
},
```
**EventsWidget**

_Added in 6.2_

```json
{
   "name": "timeformat",
   "friendlyname": "{fs.eventswidget.friendlynames.friendlyname_timeformat}",
   "value": {
      "hourandmin": "hourandmin"
   },
   "type": "choice"
},
```

**FacebookPageWidget**

_Added in 6.2_

```json
{
   "name": "callbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
   "value": "",
   "type": "string"
},
{
    "name": "uicallbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
    "value": "",
    "type": "string"
},
```

**FormWidget**

_Added in 6.2_

```json
{
   "name": "useformidfromurl",
   "friendlyname": "{propertyfriendlynames.friendlyname_useformidfromurl}",
   "value": "true",
   "type": "bool"
},
```

**GenericEmbedWidget**

_Added in 6.2_

```json
{
   "name": "callbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
   "value": "",
   "type": "string"
},
{
   "name": "uicallbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
   "value": "",
   "type": "string"
},
```

_Updated in 6.2_

```json
{
    "name": "name",
    "friendlyname": "{fs.genericembedwidget.propertyfriendlynames.name}",
    "value": "",
    "type": "string"
},
{
    "name": "URL",
    "friendlyname": "{fs.genericembedwidget.propertyfriendlynames.url}",
    "value": "",
    "type": "string"
},
{
    "name": "Height",
    "friendlyname": "{fs.genericembedwidget.propertyfriendlynames.height}",
    "value": "",
    "type": "string"
},
{
    "name": "Width",
    "friendlyname": "{fs.genericembedwidget.propertyfriendlynames.width}",
    "value": "",
    "type": "string"
},
```

**GenericSearchListWidget**

_Added in 6.2_

```json
{
   "name": "extendlookin",
   "friendlyname": "{propertyfriendlynames.friendlyname_extendlookin}",
   "value": [],
   "type": "json"
}
```

**HTMLContentWidget**

_Added in 6.2_

```json
{
    "name": "callbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
    "value": "",
    "type": "string"
},
{
    "name": "uicallbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
    "value": "",
    "type": "string"
},
```

**IFrameWidget**

_Added in 6.2_

```json
{
    "name": "callbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
    "value": "",
    "type": "string"
},
{
    "name": "uicallbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
    "value": "",
    "type": "string"
},
```

**ImageBlockWidget**

_Added in 6.2_

```json
{
    "name": "uicallbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
    "value": "",
    "type": "string"
},
```

**MediaWidget**

_Added in 6.2_

```json
{
   "name": "commentssortoption",
   "friendlyname": "{propertyfriendlynames.friendlyname_commentssortoption}",
   "value": {
      "Oldest First": "oldestfirst",
      "Newest First": "newestfirst"
   },
   "type": "choice"
},
{
  "name": "cachekeycallbackmethod",
  "friendlyname": "{fs.mediawidget.friendlynames.friendlyname_cachekeycallbackmethod}",
  "value": "",
  "type": "string"
}
```

**MissionControlWidget**

_Added in 6.2_

```json
{
    "name": "callbackmethod",
    "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
    "value": "",
    "type": "string"
},
```

**MyOutlookMeetingsWidget**

_Added in 6.2_
```json
{
   "name": "showonlinemeetings",
   "friendlyname": "{propertyfriendlynames.friendlyname_showonlinemeetings}",
   "value": true,
   "type": "bool"
},
{
   "name": "hideprivateevents",
   "friendlyname": "{propertyfriendlynames.friendlyname_hideprivateevents}",
   "value": false,
   "type": "bool"
},
```

**MyTeamsLinkWidget** - _New Widget in 6.2_

```json
{
  "Definition": {
    "Name": "MyTeamsLinkWidget",
    "Description": "Allow user to View and access teams and channels that the logged in user belongs too. Specific teams can be targeted on an instance using \"targetTeam\" property. Example of \"targetTeam\" [\"Finance\",\"Payroll\"]",
    "Class": "Akumina.AddIn.MyTeamsLinkWidget",
    "ContentTypes": [],
    "Version": "{CurrentBuildVersion}",
    "Dependencies": [],
    "Properties": [
      {
        "name": "title",
        "friendlyname": "{propertyfriendlynames.friendlyname_title}",
        "value": "{myteamslinkwidget.title}",
        "type": "string"
      },
      {
        "name": "targetteam",
        "friendlyname": "{propertyfriendlynames.friendlyname_targetteam}",
        "value": "[]",
        "type": "string"
      },
      {
        "name": "widgetheight",
        "friendlyname": "{propertyfriendlynames.friendlyname_widgetheight}",
        "value": "",
        "type": "string"
      },
      {
        "name": "cacheinterval",
        "friendlyname": "{propertyfriendlynames.friendlyname_cacheinterval}",
        "value": "-1",
        "type": "int"
      }

    ],
    "Views": [
      {
        "Name": "default",
        "Path": "/{AssetLibraryName}/DigitalWorkPlace/Content/Templates/MyTeamsLinkWidget/default.html",
        "Id": "8c80b95d-10a4-8643-e359-147dced016f5"
      }
    ],
    "JS": {
      "Default": "/{AssetLibraryName}/DigitalWorkPlace/JS/widgets/digitalworkplace.core.myteamslinkwidget.min.js"
    }
  },
    "Instances": []
}
```
**NewsWidget**

_Added in 6.2_

```json
{
  "name": "cachekeycallbackmethod",
  "friendlyname": "{fs.mediawidget.friendlynames.friendlyname_cachekeycallbackmethod}",
  "value": "",
  "type": "string"
}
```

_Updates in 6.2_

```json
{
    "name": "querytext",
    "friendlyname": "{fs.newswidget.friendlynames.friendlyname_querytext}",
    "value": "(ContentTypeId:0x0100A75A29C9F7894C83AA451364A226C855*)(ArchiveDate>{Now})(PublishDate<{Now})",
     "type": "string"
},
```

**OrgChartWidget** - _New Widget in 6.2_

```json
{
  "Definition": {
    "Name": "OrgChartWidget",
    "Description": "OrgChartWidget",
    "Class": "Akumina.AddIn.OrgChartWidget",
    "ContentTypes": [],
    "Version": "{CurrentBuildVersion}",
    "Icon": "fa-regular fa-sitemap",
    "Dependencies": [],
    "Properties": [
      {
        "name": "widgetframework",
        "friendlyname": "{fs.newswidget.friendlynames.friendlyname_widgetframework}",
        "value": "react",
        "type": "string"
      },
      {
        "name": "uicallbackmethod",
        "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
        "value": "",
        "type": "string"
      },
      {
        "name": "callbackmethod",
        "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
        "value": "",
        "type": "string"
      }
    ],
    "Views": [

      {
        "Name": "default",
        "Path": "/{AssetLibraryName}/digitalworkplace/content/templates/orgchartwidget/default.html",
        "Id": "4bc85dd1-aa8f-4d56-bedc-77ac8037031b"
      }
    ],
    "JS": {
      "Default": "/{AssetLibraryName}/digitalworkplace/js/widgets/digitalworkplace.core.orgchartwidget.min.js"
    }
  },
    "Instances": [],
    "Options": {
        "IsPartialDefinition": false,
        "IsDashboardWidget": false
    }
}
```

**PeopleDirectoryWidget**

_Added in 6.2_

```json
{
   "name": "querycallbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_querycallbackmethod}",
   "value": "",
   "type": "string"
}
```

**TextBlockWidget**

_Added in 6.2_

```json
{
   "name": "callbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_callbackmethod}",
   "value": "",
   "type": "string"
},
{
   "name": "uicallbackmethod",
   "friendlyname": "{propertyfriendlynames.friendlyname_uicallbackmethod}",
   "value": "",
   "type": "string"
},
```

**WorkspacePageWidget**

_Updated in 6.2_

```json
"Dependencies": [ "PageWidget" ],
```


