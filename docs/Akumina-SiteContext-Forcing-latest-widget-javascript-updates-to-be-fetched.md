---
id: Akumina-SiteContext-Forcing-latest-widget-javascript-updates-to-be-fetched
title: Forcing latest widget javascript updates to be fetched
---

## Applies to
Akumina Framework 4.5.0.0 and later

## Using ImplementationVersion

Often times during a deployment you want to force the browser caches to be updated across your user base.  The 'getwidgetjs' bundle is by default set to be cached in the browser, not local storage, but native browser cache, which means the browser will not refetch the latest 'getwidgetjs' from the endpoint.  This is done by design and helps with limiting the HTTP requests during page loads. 

In 4.5 the following SiteContext was introduced

```js
Akumina.Digispace.SiteContext.ImplementationVersion
```

By default this value is "0.0"

Every request to 'getwidgetjs' bundle passes this value in querystring.  This means if you change this value during a deployment it will cause a refetch for all browsers automatically

In the **digitalworkplace.env.js** file, use this code to set your ImplementationVersion:

```js
var AdditionalSteps = AdditionalSteps || {};

if ((typeof AdditionalSteps.EnvSteps) === 'undefined') {
    AdditionalSteps.ImplementationVerionStep = {
        Init: function () {
            var steps = [];
            steps.push({ stepName: "Auto Clear Local Cache", additionalSteps: [{ name: "Custom Implementation Version", callback: AdditionalSteps.ImplementationVerionStep.SetVersion }] });
            return steps;
        },
        SetVersion: function () {
            Akumina.Digispace.SiteContext.ImplementationVersion = "1.0";
            Akumina.Digispace.AppPart.Eventing.Publish('/loader/onexecuted/');
        }
    };
}
```

To implement the changed version value, you'll need to force a cache refresh. While clearing a single, or even a couple, user's cache is a fairly simple matter, this is a very handy way to force a cache refresh for every user on the site. This is useful to push a change to all affected users:

In your Master Page html file, you should see the env.js import similar to the following:

```html
<!--MS:<SharePoint:ScriptLink ID="ScriptLink10943" Name="~sitecollection/Style Library/DigitalWorkPlace/js/digitalworkplace.env.js" runat="server">-->
<!--ME:</SharePoint:ScriptLink>-->
```

Change the file name to append the implementation version to the end of it. Following the example above, we just set the implementation version to 1.0, so we would change the "Name" property to:

```html
digitalworkplace.env.js?v=1.0
```

Save the Master Page and deploy it if needed. Once the master page is loaded, it will detect a new file is being requested and proceed to download it. This works because the env.js file is naturally cached in your browser while the master page isn't, so when the page requests a file, it first checks the cache to see if it already exists to avoid making a network call. This change causes the cache check on the browsers of all users to force a re-fetch.


## Modern Changes

It's important to make the distinction that the previous **env.js** changes are only required for Classic Sharepoint. Sharepoint Modern uses a different implementation. The SPA's Settings Page has a field for Implementation Version that can be set and changed without having to edit a Javascript file. More information can be found on the [Akumina Modern SPA](/docs/Modern-SPA) page.