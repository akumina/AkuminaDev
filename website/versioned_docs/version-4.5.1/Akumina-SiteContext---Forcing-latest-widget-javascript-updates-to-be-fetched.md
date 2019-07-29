---
id: version-4.5.1-Akumina-SiteContext---Forcing-latest-widget-javascript-updates-to-be-fetched
title: Akumina SiteContext   Forcing latest widget javascript updates to be fetched
original_id: Akumina-SiteContext---Forcing-latest-widget-javascript-updates-to-be-fetched
---

---
id: Akumina-SiteContext---Forcing-latest-widget-javascript-updates-to-be-fetched
title: Akumina SiteContext   Forcing latest widget javascript updates to be fetched
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

Use this code to set your ImplementationVersion

```js
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





