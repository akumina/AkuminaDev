---
id: Site-Deployer-Version-4-5
title: Version 4.5
---

## Download

Please see the [release section](https://github.com/akumina/SiteDeployer/releases) for downloading the Site Deployer assets


#### ChangeList

### [4.5.2001.0801] - 01.13.20
- Added multideployment option - deploy steps to multiple site collections with 1 command
- Added support for setting custom welcome page URL
- Custom layouts are settable via virtualpage step
- Support ONPREM u/p authentication formats

### [4.5.1909.1301] - 09.17.19
- Added support for the new 'akumina-virtualpage-builder' and the new virtual page .JSON format  
https://akumina.github.io/docs/AK-Virtual-Page-Builder.html 

### [4.5.1907.2901] - 07.29.19
- Added support for 'layoutfolder' attribute when adding classic pages with a layout in a folder different than AssetDirectory -JA
- SetSiteProperties step added 'siteproperties' - SK
- ReferenceListId updates - SK
- OfficeDevPnP.Core.dll updated to 3.6.1902.0 - JA
 


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

#### Minimum usage with username|password

Akumina.SiteDeployer.exe options "js" spUser "myusername@tenant.onmicrosoft.com" spPassword "mypassword" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"

#### Minimum usage with clientid|clientsecret
Akumina.SiteDeployer.exe options "js" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" clientid "myclientid" clientsecret "myclientsecret" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"

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


>**NOTE** - deploy.js process from 4.1 is compatible with 4.5, just swap out the 4.5 deploy.js with 4.1


### Nuances

## Multideployment

As mentioned, the multideployment option in the .env will run 'npm run deploy' for each site listed in the inventory.sites.json file.

inventory.sites.json is located in the MultiDeployments folder under SiteDefinitions: 

root\build\SiteDefinitions\ClientNamespace\MultiDeployment\inventory.sites.json
```json
[
    {
        "url": "https://tenant.sharepoint.com/sites/1"
    },
    {
        "url": "https://tenant.sharepoint.com/sites/2"
    }
]
```