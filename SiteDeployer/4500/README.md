# Site Deployer 4.5
This is a console app used for deploying Akumina bits into Sharepoint online. It can be used for local developer workstations or within VSTS / automated CI tooling. The same site package used within Site Creator can be used with the Site deployer, or vice versa. [Supported steps are below](#usage)
>**NOTE** - DONOT use with Akumina 4.0 Site Collections - there is a seperate Site Deployer for 4.0 versions

#### Helpful links
Site Package overview:  
https://github.com/akumina/AkuminaDev/wiki/Site-Package-Overview 
Continuos Intergration flow:  
https://github.com/akumina/AkuminaDev/wiki/Site-Deployer:-Continuous-Site-Package-Deployment-via-a-console-app

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
| `azurestorageaccountname ` | Azure Storage account name  |  | 
| `azurestoragecontainer` | Azure Storage blob container name  |  | 
| `azurestorageaccountkey` | Azure Storage account key  |  | 
| `cdnprefix ` | replaces {{CDNPrefix}} token in Master page with this value  |  | 

#### Minimum usage with username|password

Akumina.SiteDeployer.exe options "js" spUser "myusername@tenant.onmicrosoft.com" spPassword "mypassword" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"

#### Minimum usage with clientid|clientsecret
Akumina.SiteDeployer.exe options "js" spUrl "https://tenant.sharepoint.com/sites/mysitecollection" clientid "myclientid" clientsecret "myclientsecret" envdir "C:\TEMP\\\\" assetdirectory "MyClient" spdirectory "DigitalWorkplace"

#### <a id="usage"></a>Usage
node deploy.js  

