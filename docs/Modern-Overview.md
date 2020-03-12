---
title: Overview
id: Modern-Overview
---


### Overview

SharePoint Online (SPO) offers two models for building sites: Classic SPO and Modern SPO leveraging the SPFx framework. Presently, there are still significant differences in capability between Classic and Modern – specifically in the arena of brand-ability, customization, third party integration and design output, however, the demand for Modern SPO sites is increasing as some customers want to be able to leverage the ‘*latest and greatest*’. 

Akumina, in version 4.8 and above, will fully support both models. Customers will be able to leverage one approach or the other – or in certain circumstances, both at the same time. 

Akumina separates Content from Function and Presentation. This abstracted approach is what allows for: 
* Easy integration with 3rd party systems outside of the Microsoft ecosystem 
* Easy adaption to a different Microsoft page rendering/compiling engine 

Modern Pages and SPFx are not about new ways to manage content, they are about new ways to deliver capabilities into a page and bring that page to an audience. 

Akumina’s support of both Microsoft page rendering models is not about creating a ‘*new Akumina way of doing things*’, rather, it is about adapting the Akumina widget technology to be delivered to an end user through either model – with complete feature parity – following Akumina’s ‘*use the right tool for the right job*’ deployment approach. 

## Two Experiences 

There are two experiences that Akumina Modern supports that determine how pages are authored and how widgets are added. 

## Akumina Page Experience 

In this model, the Akumina Virtual Page Builder is used to construct pages. Visually, the page is like its classic site counterpart, yet only Akumina widgets can be in the pages.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_spa.png )

## Modern Page Experience 

In this model, Akumina widgets are delivered in the page and the Modern editing flow is used. This allows both Akumina widgets and Modern Web Parts to be in the page together.  

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_sharepoint_experience.png)


## Deployment Options

Modern is deployed via one of 3 components, 
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/modern_deploymentoptions.png)

## Single Page Application (SPA)

Layered on top of the SharePoint Modern interface, the Akumina Page Experience utilizes SPA application, that’s Packed full, with design freedom, enhanced performance, and automatic page routing which creates an intuitive experience for page creators.  

The enhancements that come with SPA, Virtual pages perform better, pages load faster, and proper custom navigational routing, in turn provide the end user with an experience and performance they can confidently interact with.  

See https://akumina.github.io/docs/Modern-SPA

## Widget Picker

Akumina widgets can be accessed in a SharePoint Modern environment when the Akumina Widget Picker is installed on a Modern site. 

By provides the availability of Akumina widgets along side Microsoft SPFX Web Parts, lightweight installation with admin control of which sites are enabled, uses standard Akumina widget development patterns, and allows for custom markup and code into Modern runtime, all of which enhance the Modern site experience. 

See https://akumina.github.io/docs/Modern-AWP

## Application Extension

Utilizing the Akumina Application Extension with SharePoint Modern, gives site creators full control over the site header and footer. This leads to enhanced navigation, through global navigation customizations and navigation tailored to personas.  

The Application Extension on Modern Page Experiences greatly improves usability for end users greatly when headers, footers, and global navigation can be fully customized and are created with their needs in mind. 

See https://akumina.github.io/docs/Modern-App-Extension

## All the Akumina Benefits in a Modern Page
With the ease of adding Akumina into SPFx driven pages also comes many of the benefits as well.
![](https://community.akumina.com/wp-content/uploads/2019/06/SPFxoutput_789x718.png)

Akumina Widget Targeting and Audience Segmentation are still available as those are functions of the Akumina Widgets and don’t have any dependencies on the page technology (in this case SPFx) in which they are hosted.
![](https://community.akumina.com/wp-content/uploads/2019/06/widgetedit.png)

As well as the same multi-view and management capability for configuring widget properties and easy access content editing.