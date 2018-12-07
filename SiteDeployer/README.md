# Site Deployer 4.1
This is a console app used for deploying Akumina bits into Sharepoint online. It can be used for local developer workstations or within VSTS / automated CI tooling. The same site package used within Site Creator can be used with the Site deployer, or vice versa. [Supported steps are below](#usage)
>**NOTE** - DONOT use with Akumina 4.0 Site Collections - there is a seperate Site Deployer for 4.0 versions

#### Helpful links
Site Package overview:  
https://github.com/akumina/AkuminaTraining/wiki/Site-Package-Overview  
Continuos Intergration flow:  
https://github.com/akumina/AkuminaTraining/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app


#### ChangeList

### [4.1.1812.0601] - 12.06.18
- clientid clientsecret args added - use with spUrl
  
### [4.1.1811.1501] - 11.15.18
- Removed args output as password was exposed

### [4.1.1810.2601] - 10.26.18
- Added support for Group assignment for contenttype import (contenttype.xml) 

### [4.1.1810.1501] - 10.15.18
- Bug 10527 - 4.1 Site Deployer error with Add Widget Packages - ApproveListItems does not have an implementation  

### [4.1.1809.1925] - 10.10.18
- Initial Load

#### Install  

npm install  


Command line parameters

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

#### Minimum usage with username|password

Akumina.SiteDeployer.exe options "js" spUser "myusername@tenant.onmicrosoft.com" spPassword "mypassword" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" envdir "M:\TEMP\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"


#### Minimum usage with clientid|clientsecret
Akumina.SiteDeployer.exe options "js" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" clientid "myclientid" clientsecret "myclientsecret" envdir "M:\TEMP\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"



#### <a id="usage"></a>Usage
node deploy.js  

Check deploy.js for proper flags:

| option | Description |
| ------- | ----------- |
| `masterpage` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/MasterPages (classic sites) |
| `js` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/js |
| `css` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/css |
| `lists` | Deploys lists based on **envdir**/sitedefinitions/**assetdirectory**/ListDefinitions/Lists.xml |
| `layouts` | Deploys new page layouts from **envdir**/sitedefinitions/**assetdirectory**/PageLayouts/Elements.xml |
| `pages` | Deploys new .aspx pages from **envdir**/sitedefinitions/**assetdirectory**/Pages/Elements.xml |
| `pagewidgets` | **BETA** Deploys an Akumina virtual page **envdir**/sitedefinitions/**assetdirectory**/ProvisionWidgets/pagewidgets.json |
| `addtermsets` | Deploys termsets based on **envdir**/sitedefinitions/**assetdirectory**/Taxonomy/terms.xml  |
| `controls` | Deploys widgets onto pages from **envdir**/sitedefinitions/**assetdirectory**/PageContent/pages.xml  |
| `widgets` | Deploys widget packages from **envdir**/sitedefinitions/**assetdirectory**/WidgetPackages/*.zip  |
| `contentfiles` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/content |
| `imagefiles` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/img|images  |
| `updatelists` |  Deploys list content based on **envdir**/sitedefinitions/**assetdirectory**/ListDefinitions/Update.xml |
| `homepage` | Sets default home page for the site collection to Pages/home.aspx |
| `fonts` | Deploys contents of **envdir**/sitedefinitions/**assetdirectory**/branding/fonts |
| `addwiki` | N/A  |
| `modern` | **In PROGRESS** Not Supported  |





