---
id: AK-Modern-Setup
title: Akumina Modern Setup and Installation
---


## Overview

The purpose of this article is to demonstrate and explain the process of setting up the Akumina Framework on a new Sharepoint Modern Communications site. This article operates under the assumption that you already have an Akumina installation configured and working on a Sharepoint Classic site. This article also assumes the tenant has access to the App Catalog which contains the Akumina Single Page Framework Sharepoint Package (henceforth referred to as "Akumina SPA").


## The Akumina SPA Modern Experience

To detail the Akumina SPA Modern Experience, it's important to understand how the Classic experience also works.

Classic currently works in one of two ways: Physical ASPX pages and Virtual Pages. Physical ASPX pages are pretty self explanatory, all content for the target page is defined on the ASPX page itself. This means each page is self contained and physically defined in itself. 
Virtual Pages are covered more in depth over on our [Akumina Virtual Page Builder](/docs/AK-Virtual-Page-Builder) page. However, for a quick overview, Virtual Pages are json objects that define the page properties, widgets, layouts, etc, and are rendered via a physical ASPX page containing the Virtual Page Widget.

So, how does the Modern SPA Experience differ from Classic? The Modern SPA Experience alleviates the requirements of virtual page depending on a physical aspx page in order to be rendered. By centralizing the process to a single aspx page, you are no longer required to deploy an aspx page for every virtual page and can, instead, simply deploy a virtual page file and be done with it. Likewise, the SPA portion of the experience is directly reliant on the only aspx page required by the Experience: akumina.aspx. This is the only physical page that will be loaded. As such, it simulates the SPA Experience by virtue of <tenant>.sharepoint.com/sites/<sitename>/akumina.aspx being the only url loaded. Each virtual page loaded is simply a route defined at the end of the url, for example: <tenant>.sharepoint.com/sites/<sitename>/akumina.aspx#/pages/myvirtualpage.aspx

In addition to all of these wonderful features, the Akumina Modern SPA Experience can also be your next leap into the realm of Modern, leveraging the pros and cons of Microsoft's Sharepoint Modern platform, while also extending your currently existing Classic installation. The Modern Experience is capable of, and makes use of, retrieving assets, data, Javascript/CSS files, and more from your current Classic Experience.
This allows you to keep your Classic Site intact, making it available for end-users, while also making the switch to Modern, or potentially having both environments running concurrently and distributing access via user groups, departments, etc. The possibilities are high.


## Initial setup

To begin the Modern setup, create a new Communication Sharepoint site from the Office 365 Sharepoint landing page. Once the site is created, navigate to Site Contents and keep the tab/window open. You will need it for later. From the Site Contents page, add a new app. Choose the Akumina Interchange app and wait for it to install on the site. This can take up to a few minutes to complete. 
Once Interchange is installed on the site, open it up to launch App Manager. The initial load for App Manager can take up to several minutes as it creates necessary lists, document libraries, and assets for first time use. You'll know when it's done as you will arrive on the App Manager landing page.

Once that is finished, we're ready to start deploying. From your Akumina Project Directory, make note of the Lists, Content, Content Types, and Taxonomy elements you will need and format the appropriate XML files accordingly.

Please note that there is an order of operations in deploying these elements detailed below. If you did this out of order, check the bottom of this article for troubleshooting tips and advice:

1. Taxonomy (taxonomy)
2. Content Types (contenttypes)
3. Lists (lists)
4. List Content (updatelists)

The akumina.sitedeployer.config.json file should hold the above options indicated in parenthesis. Be sure to deploy in the above order.


Now that Interchange, its assets, and our custom data are loaded on the site, we're ready to start deploying the Modern assets to the site. Each step below should be executed in order:

1. modernprovisionapp

This step looks through the App Catalog available to the site to find the Akumina SPA SPKG and adds it to the site. This SPKG file is the core of the Single Page App experience that Modern uses. This is mandatory.

2. modernpages

This step will add the akumina.aspx page to the Sharepoint site. While this may seem to just be an aspx page, the akumina.aspx page will, in theory, be the only physical aspx page required for the Akumina SPA Modern experience. This page serves as the driving force for the Virtual Page process.

3. uploadfiles

This step is very important. In your Akumina Project structure, you should have the following path: [<projectname>\build\sitedefinitions\<namespace>\UploadFiles\Style Library\DigitalWorkPlace\Content\Templates\Core]. In addition to this, there should be a file there named something along the lines of VirtualMasterPage.html. Running the deployer with the uploadfiles option set will deploy this file. However, be sure the pagedeliveryurl parameter is set your classic site.
Once the deployer finishes, navigate to your classic site. Go to Site Contents and open the DigispaceConfigurationIDS_AK list. You should see an entry named "VirtualMasterTemplate". If you do not see that entry, just create one. Set the value of the "VirtualMasterTemplate" key to the name of the Virtual Master Page HTML file you just deployed. You will need to refresh the Configuration Cache for these changes to take effect.

[](image of config list entry goes here)

Finally, deploy your Virtual Page file to the new Modern site. Once finished, you can verify the path to the page under PageUrls_AK:

[](image of pageurls_ak goes here)


## Configuration

If there were no problems with the installation and setup, we can begin configuring the Akumina Modern SPA for more general use. Open the bottom tray and click on the Debug Console. In the Debug Console, you'll notice a new entry at the bottom: Modern. The Modern tab holds modern-specific options to toggle. Currently, these are:

* Toggle Site Header
This option will hide/display the default Modern header that appears at the top of the page.

* Toggle Command Bar
This option will hide/display the Edit button that appears in the top right corner.

Enable the Command Bar and close the Debug Console. Click on the Edit button and a pane will extend from the right side of the page. This pane holds configuration for the Akumina SPA app:

[](pic of config goes here)

The following options, and their descriptions, are listed below:

* Title

This is the Title of the app. This does not affect site or page name.

* Akumina SiteCollection URL

This is the URL to the Classic Site from which certain data is obtained.

* Akumina Service Hub URL

This is the URL to App Manager on the Classic Site. You can easily retrieve this by launching App Manager from the Classic Site.

* Akumina Service Hub QueryKey

This is required data to make API Calls to App Manager. This can be retrieved from the Classic Site by launching the Debug Console and copying the key from Configuration Context -> InterchangeQueryKey.

* Delivery Mode

This indicates whether the site is in delivery mode or not. Delivery Mode denotes that there is a Classic Site to pull data from. If this box is unchecked, no data will be retrieved from the Akumina SiteCollection URL value.

* JS Files to load before INIT

This is a comma delimited list of Javascript files fetched from the Classic Site to load before the INIT event is fired in the Akumina Framework. If there is mission-critical code that needs to run before widgets are rendered, etc, it belongs in this list.

* Comma delimited list of JS files

This is the same as the above, except these files are loaded inline with other files. The Framework does not prioritize these and does not hold any eventing calls for these files to load.

* Comma delimited list of CSS files

This is the same as the above, except for CSS files.


# Testing

Back to App Manager, go to Management Apps and then Widget Manager. Click on Cache Page Objects and wait for the operation to finish. Back to Site Contents, open the Pages list and click on akumina.aspx to be navigated to that page. Since we haven't set up any routing, we'll have to navigate manually. Append the Page Url from PageUrls_AK to the end of the akumina.aspx page's url with a pound sign, similar to <site>/SitePages/akumina.aspx#<pageurl>.

Once the page loads, you will see the Akumina loading template background while files are being retrieved and background code starts running. If everything is configured correctly, you should see the bottom tray and the Virtual Page edit button:

[](image of good load goes here)

## Troubleshooting

In the event that you run into train-stopping errors or exceptions, this section should help you navigate the most common problems. Of course, if you run into a problem that isn't listed here, please reach out to your Akumina Resource for further assistance.

* When querying a Sharepoint List, I encounter a "Field or Type is not installed correctly" exception

This problem is commonly caused by executing installation steps out of sequence. This is not unique to Modern but does pertain to Lists, Fields, Content Types, and Taxonomy in general. Using the deployer, if you were to create a List that has a Managed Metadata field but the Taxonomy in question didn't exist, Sharepoint will instead default it to an empty value. This commonly causes problems when querying the list.

Solution: Thankfully, you should run into this fairly early in development and testing. Simply delete the Managed Metadata column and recreate it after the Taxonomy has been deployed. You can add the field manually or re-run the deployer tool to do so. 
If using the deployer, navigate to Site Contents and expand the ellipses on the List. Delete the list, and run the deployer again with "termsets", "lists", and "updatelists" options enabled.

* When navigating to a page, I encounter a "Virtual Page not found" exception

The common reason for this error is the Page Cache not being updated. Open App Manager in the environment that the Virtual Page is stored in, so either from Classic or Modern, then click on Management Apps, then Widget Manager, and click on the Cache Page Objects button. Once the process finishes, go back to the Virtual Page producing the error, open the Debug Console to refresh the cache, and reload the page.

If that doesn't solve your problem, we'll have to dig a little deeper. First, navigate to Site Conents and open the following two lists: GenericPages_AK and PageUrls_AK. Both lists have a "PageUrl" field. Make sure these two fields are matching for the given page and use this as an opportunity to verify the URL you're navigating to. Additionally, the PageId values should also match between the entries in the two lists.

Lastly, verify the source of the Virtual Page and whether Delivery Mode is enabled in the Akumina Modern SPA settings. On any Site Page, open up the Debug Console, navigate to the Modern tab, and check the box for "Toggle Command Bar". Close the Debug Console and click on the "Edit" button that appears in the upper right corner of the page. Halfway down the settings pane, you'll see the "Delivery Mode" checkbox.

If these steps to not solve the problem, please reach out to your Akumina representative or admin for further assistance.