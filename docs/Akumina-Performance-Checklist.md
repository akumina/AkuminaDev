## Performance Optimization Checklist

| Item | Action |
| -- | -- |
| CDN for JS,CSS | Ensure a CDN is enabled and in use for the production site for CSS and JS files. See https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#cdn |
| Reduce image sizes | Optimize or otherwise reduce the size of the images. |
| CDN for views | Ensure a CDN is enabled and in use for views. Change the **Akumina.Digispace.ConfigurationContext.TemplatePrefixURL** property. See https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#cdn |
| Optimize the number of API calls | Use the debugger panel to see the number of SharePoint API calls. See https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#measuring-api-calls |
| Evaluate the Performance Tab | Use the debugger panel to see the the page lifecycle load times. See https://akumina.github.io/docs/Akumina-Framework-Performance-Considerations#performance-tab |
| Widget cache intervals | Ensure that all widgets are either system default, or use the appropriate cache interval. See https://github.com/akumina/AkuminaTraining/wiki/Caching:-Overview,-strategy-and-implementation |
| JS file minification | Ensure all JS files are minified. This is normally done via the webpack build process. |
| CSS file compression | Ensure all CSS files are compressed. This is normally done via the webpack build process. |
| HTTP 2.0 | Ensure the SharePoint site and AppManager are using the HTTP 2.0 protocol. |
| App Manager | Ensure the following settings:<br /> * CacheDefaultInterval - 28800 <br /> * DwpCookieDuration - 20160 |
| Add Indexed fields | Are there any lists that are expected to get over 5000 items? If so, ensure that there are proper indexes on those lists to avoid the 5000 item threshold error. |
| Identify heavy chatter features of Akumina | Share the following with Akumina launch team: <br />* Are you using the Comments Feature?<br />* Are you using the Reactions Feature? <br />* Are you using the Activity Streams feature? <br />* Are any of these features used on the Home page?

