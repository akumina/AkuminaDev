---
id: Modern-Google-Analytics
title: Google Analytics for Modern Pages
---

### Adding Google Analytics Tracking for Modern Pages

The following code should be added to the digitalworkplace.custom.js file.
Note: if you already have the AdditionalSteps defined, simply add a new steps.push()

**digitalworkplace.custom.js**

```javascript
var AdditionalSteps = AdditionalSteps || {};
if ((typeof AdditionalSteps.MoreSteps) === 'undefined') {
    AdditionalSteps.MoreSteps = {
        Init: function () {
            var steps = [];
            
            steps.push({
                stepName: "Index Page Data",
                additionalSteps: [{
                        name: "SendGoogleAnalytics",
                        callback: window.SendGoogleAnalytics,
                        supportSPAMode: true
                    }
                ]
            });
            
            return steps;
        }
    }
}


// Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// If you have multiple environments (such as a DEV and Prod), you can use the following example to add the correct tracking ID to the URL, otherwise just set trackingId to the single correct value
var trackingId = window.location.href.startsWith('https://clientsite.sharepoint.com/sites/sitename') ? 'UA-000000000-1' : 'UA-111111111-1';

// This inserts the Google Tag Manager script link into the DOM
var script = document.createElement('script');
script.setAttribute('async', 'async');
script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + trackingId);
script.onload = function() {
    gtag('js', new Date());
    gtag('config', trackingId);
};
document.head.prepend(script);

// Push page request to Google Analytics
// This captures GA data for page redirects and direct URL loading
window.SendGoogleAnalytics = function() {
    var trackingId = window.location.href.startsWith('https://clientsite.sharepoint.com/sites/sitename') ? 'UA-000000000-1' : 'UA-111111111-1';
    gtag('config', trackingId, {
        'page_title': document.title,
        'page_path': location.hash.replace('#','sites/ap')
    });
}

// Push page request to Google Analytics
// This captures GA data for SPA navigation
Akumina.Digispace.AppPart.Eventing.Subscribe('/page/changed/', function () {
    setTimeout(function(){
        var trackingId = window.location.href.startsWith('https://clientsite.sharepoint.com/sites/sitename') ? 'UA-000000000-1' : 'UA-111111111-1';
        gtag('config', trackingId, {
            'page_title': document.title,
            'page_path': location.hash.replace('#','sites/ap')
        });
    }, 5000);
});

```