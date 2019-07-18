---
id: Deployment-Manager-Overview
title: Overview
---

# Overview
The Deployment Manager App is a powerful feature within the Akumina Framework that allows us to deploy custom objects to a SharePoint site. We package these custom objects into a **Site Package**, or **Custom Site Definition**, which can be implemented through the Deployment Manager SDK and is covered in [additional articles](https://github.com/akumina/AkuminaDev/wiki/Site-Creator:-Overview#references). Below we will take a high level view at Deployment Manager functionality.

> For information on site packages, please see [Site Packages Overview](https://github.com/akumina/AkuminaDev/wiki/Site-Package-Overview).

> Site packages can also deployed using continuous integration via a console app.

The Deployment Manager app can be found under the Management Apps tab in the AppManager.
![image 1](https://akumina.azureedge.net/wiki/training/images/site_creator/image1.png)

The Deployment Manager allows us to select from the different site definitions we have created to deploy sites
![image 2](https://akumina.azureedge.net/wiki/training/images/site_creator/image2.png)

Once we select a site definition, we are given the option to execute all of the deployment steps (Deploy All) or execute steps individually (execute).
![image 3](https://akumina.azureedge.net/wiki/training/images/site_creator/image3.png)

Once we deploy all steps from our site collection, our branding objects will be deployed to the site. For example, the home page of our SharePoint site with some simple deployed branding is shown below.
![image 4](https://akumina.azureedge.net/wiki/training/images/site_creator/image4.png)

### References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Site Definition XML](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)
* [Supported Tokens](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Supported-Tokens)