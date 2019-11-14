---
id: AK-Configuration-Context
title: Configuration Context Overview
---

## Overview

The ConfigurationContext is a global object accessible throughout the Akumina Framework. This object stores information about the Akumina Installation. There various properties that come with the default Akumina Install, however, it can also be customized to hold other global information for use throughout your custom implementation. The purpose of this article will be to explain the usage, customization, and implementation of the ConfigurationContext global object in the Akumina Framework.

## Caching

The ConfigurationContext object is cached in App Manager. The cache is only updated on demand to ensure optimum performance. The cache is automatically updated if certain modifications are made from within app manager.  If not the Configuration Cache must be cleared. The following items are cached within the configuration cache:
*	DigispaceConfigurationIDS_AK
*	Persona_AK
*	Active Languages from Languages_AK
*	All List Names that contain AkuminaPersona Content Type
*	PageTypes_AK
*	PageLayouts_AK
*	ContainerLayouts_AK
*	Contents of en-us.js (from Style Library)
*	AppId of the Akumina app from the app catalog (used in InterchangeLoginURL)


![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/configcontext-refreshcache.PNG)


## Methods of Adding to ConfigurationContext


The primary method of adding to the ConfigurationContext object is to save your settings in the DigispaceConfigurationIDS_AK list. The values in the list are saved in a Key-Value-Pair (hereby referred to as KVP) format for easy readability and accessability. For example, let's say you wanted to add a default name for users who do not have a display name set on their account. To accomplish this, you would need to navigate to your site and open Site Contents. From there, open up the DigispaceConfigurationIDS_AK list. This list is automatically provisioned by App Manager on initial load.
Once in the list, simply add a new row with the [Title] property being the name of your custom property, so DefaultDisplayName in our example, and the value as appropriate, which would be 'Mystery User' for us. Save the entry, regenerate the Configuration Cache, and your new property should be accessible.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/configcontext-addnewrow.PNG)

To verify this, simply open the browser debug window (F12 in Chrome) from any page running the Akumina Framework and type in the following:

```javascript
Akumina.Digispace.ConfigurationContext.DefaultDisplayName;
```

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/configcontext-verifylistaddition.PNG)

You can also assign a value to the ConfigurationContext object like most Javascript objects:

```javascript
var sample = 'Akumina rocks!';
Akumina.Digispace.ConfigurationContext.DailyMantra = sample;

console.log(Akumina.Digispace.ConfigurationContext.DailyMantra);
```

However, because ConfigurationContext is cached in App Manager, this will not persist. How would we persist this data in Javascript? As previously noted, you can add properties to the ConfigurationContext through the digitalworkplace.custom.js file.

Following the previous example, the method to approach this in Javascript would be to add a line to the digitalworkplace.custom.js file. From the above image, locate the "LoaderConfiguration.Custom" function declaration in the custom.js file and add in the following line:

```javascript
Akumina.Digispace.ConfigurationContext.DefaultDisplayName = 'Mystery User';
```

When the site loads and the Custom Steps are processed, your new variable will be added to the ConfigurationContext variable. At least, it will be once we refresh the cache manually. Clicking the "Clear Configuration Cache" from the Debug Console will manually regenerate the Configuration Context and make your new additions and edits available. 

Furthermore, you could integrate this into a widget that uses the current user's display name as follows:

```javascript
var userName = '';
if (Akumina.Digispace.UserContext.DisplayName === '') {
    userName = Akumina.Digispace.ConfigurationContext.DefaultDisplayName;
} else {
    userName = Akumina.Digispace.UserContext.DisplayName;
}
```

## Initialization and Usage

The properties contained within the ConfigurationContext object are initialized when the Digital Workplace Core Site is run from the SiteCreator within App Manager. The properties are stored in 3 key locations and are then cached within App Manager until one of the prior mentioned caching events take place, upon which the cache is regenerated. These locations include:

* DigispaceConfigurationIDS_AK List
* digitalworkplace.custom.js
* Azure Table

A note about digitalworkplace.custom.js:
The InterchangeURL and InterchangeQueryKey properties are provisioned initially inside of the LoaderConfiguration.Custom object by the SiteCreator. However, additional changes need to be made manually:

![](https://camo.githubusercontent.com/e9c2d6105e9cc00ff592333e9d9075a8198305b1/68747470733a2f2f616b756d696e612e617a757265656467652e6e65742f77696b692f747261696e696e672f696d616765732f342e302e302e302f696e7465726368616e676575726c5f656469742e706e67)

To use the ConfigurationContext, simply access the following object from any code executing within the scope of the Akumina Framework. It's note mentioning, however, that the ConfigurationContext object itself is an object and will output a function when called directly. You will need to use the browser debug console's intellisense to browse through available properties.

```javascript
Akumina.Digispace.ConfigurationContext
```

Example:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/configcontext-properties.PNG)

As with any Javascript object, you can view a specific property by specifying the name of the property, such as:

```javascript
Akumina.Digispace.ConfigurationContext.ActiveLanguages
```
