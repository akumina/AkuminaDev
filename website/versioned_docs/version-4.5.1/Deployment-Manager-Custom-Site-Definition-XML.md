---
id: version-4.5.1-Deployment-Manager-Custom-Site-Definition-XML
title: Custom Site Definition XML
original_id: Deployment-Manager-Custom-Site-Definition-XML
---

# Custom Site Definition XML
We use xml files throughout our SampleSite to provide information about our site to the Deployment App. Here we will go into detail about customizing them.

### ContentTypes.xml
We define the Content Types we want added to our site in the ContentTypes.xml file within the ContentTypes folder. An example [ContentTypes folder](https://github.com/akumina/AkuminaDev/wiki/Site-Package:-ContentTypes-Folder)

### Lists.xml
We define the lists we want added to the site in the Lists.xml file within the ListDefinitions folder. An example [ListDefinitions folder](https://github.com/akumina/AkuminaDev/wiki/Site-Package:-ListDefinitions-Folder)

### pages.xml
The PageContent folder will contain the pages.xml file. The pages.xml file contains the markup that will be deployed to the pages by the AddControlsToPages.cs step. An example [PageContent folder](https://github.com/akumina/AkuminaDev/wiki/Site-Package:-PageContent-Folder)

### PageLayouts – Elements.xml
When we add new .aspx files to the PageLayouts folder, we need to customize the Elements.xml file, which informs the Deployment Manager App of what layouts to deploy. An example [PageLayouts folder](https://github.com/akumina/AkuminaDev/wiki/Site-Package:-PageLayouts-Folder)


### Pages – Elements.xml
The Pages folder contains an Elements.xml file that designates that pages that are deployed to the Pages Library. An example [Pages folder](https://github.com/akumina/AkuminaDev/wiki/Site-Package:-Pages-Folder)

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)
* [Supported Tokens](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Supported-Tokens)