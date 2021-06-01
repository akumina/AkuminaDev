---
title: Version 5.0
id: Site-Deployer-Version-5-0
---


## Download

Please see the [release section](https://github.com/akumina/SiteDeployer/releases) for downloading the Site Deployer assets


#### Install  

npm install  

Command line parameters are set in .env

| argument | description | example
| ------- | ----------- | ------- |
| `version` | Shows the Site deployer version | |
| `envdir` | Path to location that contains SiteDefinitions directory - should have trailing slash | C:\TEMP\\ |
| `assetdirectory` | Directory name in SiteDefinitions directory | MyClient (Looks in **envdir**\SiteDefinitions\MyClient) |
| `options` | Comma deliminted list of options - see below | js,widgets |
| `ml` | Populate AkId,AkLanguageId,AkLanguageCode columns | true or false |
| `langid` | Language Id | 1033 |
| `spdirectory` | Folder in Sharepoint Style Library where bits gets deployed | DigitalWorkplace |
| `spUrl` | Sharepoint site collection | https://tenant.sharepoint.com/sites/mysitecollection |
| `spUser` | Sharepoint username | myusername@tenant.onmicrosoft.com |
| `spPassword` | Sharepoint password | 12345 |
| `clientid` | Sharepoint app client id | guid |
| `clientsecret` | Sharepoint app client secret |  | 
| `azurestorageaccountname ` | Azure Storage account name  |  | 
| `azurestoragecontainer` | Azure Storage blob container name  |  | 
| `azurestorageaccountkey` | Azure Storage account key  |  | 
| `cdnprefix ` | replaces {{CDNPrefix}} token in Master page with this value  |  | 
| `multideployment` | Deploys the currently selected option to each site defined in inventory.sites.json | |
| `centralspurl` | Central site url for widget deployment | |

#### Minimum usage with username|password

Akumina.SiteDeployer.exe options "js" spUser "myusername@tenant.onmicrosoft.com" spPassword "mypassword" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace" centralspurl "https://tenant.sharepoint.com/sites/centralsitecollection"

#### Minimum usage with clientid|clientsecret
Akumina.SiteDeployer.exe options "js" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" clientid "myclientid" clientsecret "myclientsecret" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace" centralspurl "https://tenant.sharepoint.com/sites/centralsitecollection"

#### <a id="usage"></a>Usage
node ./deploy.js OR npm run deploy

Set options to true/false in akumina.sitedeployer.config.json:

| option | Description |
| ------- | ----------- |
| `masterpage` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/MasterPages (classic sites) |
| `js` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/js |
| `css` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/css |
| `lists` | Deploys lists based on **envdir**/sitedefinitions/**assetdirectory**/ListDefinitions/Lists.xml |
| `layouts` | Deploys new page layouts from **envdir**/sitedefinitions/**assetdirectory**/PageLayouts/Elements.xml |
| `pages` | Deploys new .aspx pages from **envdir**/sitedefinitions/**assetdirectory**/Pages/Elements.xml |
| `addtermsets` | Deploys termsets based on **envdir**/sitedefinitions/**assetdirectory**/Taxonomy/terms.xml  |
| `controls` | Deploys widgets onto pages from **envdir**/sitedefinitions/**assetdirectory**/PageContent/pages.xml  |
| `widgets` | Deploys widget packages from **envdir**/sitedefinitions/**assetdirectory**/WidgetPackages/*.zip  |
| `contentfiles` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/content |
| `imagefiles` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/img|images  |
| `updatelists` |  Deploys list content based on **envdir**/sitedefinitions/**assetdirectory**/ListDefinitions/Update.xml |
| `homepage` | Sets default home page for the site collection to Pages/home.aspx unless **envdir**/sitedefinitions/**assetdirectory**/homepage/Elements.json exists |
| `fonts` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/fonts |
| `exportlists` | Reads 'exportLists' key from app.config - will export configured lists  |
| `uploadfiles` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/UploadFiles |
| `webpartgallery` |  |
| `groups` | Deploys Sharepoint Security Groups from **envdir**/sitedefinitions/**assetdirectory**/SecurityGroups/groups.xml |
| `siteproperties` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/SiteProperties/properties.xml |
| `virtualpages` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/VirtualPages - see https://akumina.github.io/docs/AK-Virtual-Page-Builder.html  |
| `cdnassets` | Deploys assets to the Azure Storage |
| `sleep` | Sleeps for 15 seconds  |
| `spusersearch` | Gets the count of users in the search |
| `webpartgallery` | Adds .dwp files to the web part gallery |
| `virtuallayout` | Add Virtual Page Layouts |
| `updatepagecache` | Updated the page cache for the site; see https://akumina.github.io/docs/Site-Deployer-updatepagecache-option |
| `exportcomments` | Exports comments from NewsComments_AK list into the Akumina 5.0 Comment format.  Places exported comments in **{EnvironmentalPath}\SiteDefinitions\{AssetDirectory}\**Export** directory.  A separate file will be created for each set of 3000 comments (e.g. Comments1.json, Comments2.json). <br/><br/> To import these comments into the Comment 5.0 engine, go to App Manager / Management Apps / Comments App and click on the "Import" button.  Select one of the exported files and the import process will begin.  You can monitor the status of the import process from this page. |
| `listsettings` | Updates list settings from **envdir**/sitedefinitions/**assetdirectory**/ListSettings/Update.xml see https://akumina.github.io/docs/Site-Package--ListSettings |
| `contentapps` | Deploys App Manager Content Apps from **envdir**/sitedefinitions/**assetdirectory**/ContentApps/Author.json see https://akumina.github.io/docs/Site-Package-ContentApps-Folder |

### Nuances

## Modern deployment
Due to differences in how Modern works vs Classic, some steps in the site creator have no relevance. The table below is a list of site deployer steps, and their classic vs modern mapping.  

| **Site Deployer Steps** | **Classic** | **Modern** | **Comments** |
| --- | --- | --- | --- |
| `masterpage` | Yes | **No** | See https://akumina.github.io/docs/Modern--Deploying-a-virtual-master-page  |
| `js` | Yes | Yes |   |
| `css` | Yes | Yes |   |
| `lists` | Yes | Yes |   |
| `layouts` | Yes | **No** |   |
| `pages` | Yes | **No** |   |
| `virtualpages` | Yes | Yes | |
| `controls` | Yes | **No** |   |
| `widgets` | Yes | Yes | **Central - Widget Data, Delivery - Content and Instance Data** |
| `contentfiles` | Yes | Yes |   |
| `imagefiles` | Yes | Yes |   |
| `homepage` | Yes | **No** |   |
| `fonts` | Yes | Yes |   |
| `updatelists` | Yes | Yes |   |
| `addtermsets` | Yes | Yes |   |
| `cdnassets` | Yes | Yes |   |
| `sleep` | Yes | Yes |   |
| `exportlists` | Yes | Yes |  |
| `uploadfiles` | Yes | Yes |   |
| `spusersearch` | Yes | Yes |  |
| `webpartgallery` | Yes | **No** | |
| `groups` | Yes | Yes |  |
| `siteproperties` | Yes | Yes |  |
| `spusersearch` | Yes | Yes |  |
| `virtuallayout` | Yes | Yes |  |
| `updatepagecache` | Yes| Yes |  |

## Nuances

There is a known issue with the Site Deployer wherein the envdir, and other subsequent directory locations, do not function properly with the site deployer. The reason for this is because the directory location is passed as an arg to the SiteDeployer as a string and split based on space characters. This causes the directory location to be cut in half and the SiteDeployer to output an error.

This is a known issue, a work-around is provided below:

```javascript
const envParams = Object.entries(process.env).filter(([key, value]) =>
    siteDeployerConfig.Args.includes(key) && value != '').map(o => 
        o[0] === 'envdir' 
            ? `${o[0]} ${'"' + o[1] + '"'}`
            : `${o[0]} ${o[1]}`).join(' ')
```

This snippet, when placed in the root/tools/deploy.js file, will filter out that one param and allow it to be passed to the SiteDeployer with a string and wrapped in quotes to be parsed as a string literal.
