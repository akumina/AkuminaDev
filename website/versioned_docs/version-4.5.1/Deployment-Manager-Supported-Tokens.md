---
id: version-4.5.1-Deployment-Manager-Supported-Tokens
title: Supported Tokens
original_id: Deployment-Manager-Supported-Tokens
---

# Overview
Using the Deployment Manager SDK, it is sometimes necessary to replace values in deployed assets. An example of this is when deploying an image, you want to have a list item reference that image URL. The tokens exist to support such a use case. The Deployment Manager SDK supports multiple tokens which are replaced with site specific values upon deployment.

## List.xml & Update.xml
Tokens that we support within the List.xml and Update.xml.
* {ListId} – the guid identifying the list
* {SiteId} – the guid identifying the site
* {SiteTitle} – the title of the site
* {SiteUrl} – the url of the site
* {SiteCollectionId} – the guid identifying the root site collection
* {SiteCollectionTitle} – the title of the root site collection
* {SiteCollectionUrl} – the url of the root site collection
* {ReferenceListId:ListName} – the guid identifying the list with the title ListName

## MasterPage
Tokens that we support within the masterpage.html file
* {NewGuid} – a random guid, used for creating random identifiers
* {SiteUrl} – the url of the site

## pages.xml
Tokens that we support within the pages.xml
* {SiteTitle} – The title of the current site
* {SiteUrl} – The url of the current site
* {SiteCollectionUrl} – The url of the root site collection
* {NewGuid} – A random guid, used for creating random identifiers

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manger:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Site Definition XML](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)
