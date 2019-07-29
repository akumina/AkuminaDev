---
id: version-4.5.1-Site-Package-MasterPages-Folder
title: MasterPages Folder
original_id: Site-Package-MasterPages-Folder
---

The MasterPages folder will contain a single html file. The html file is deployed to the site’s Master Page Gallery, an associated .master file is generated, and the master page is set as the site master page with the AddMasterPageFiles.cs step. **There can only be one html file in this directory for the masterpage deployment**. This will need to be in the proper html master page format in order for the deployment to work, otherwise SharePoint will throw errors. Use the samplemaster.html in the SiteProvisioning.SampleSite as a model for a simple master page. For more info on creating Master Page html, see https://msdn.microsoft.com/en-us/library/office/jj822370.aspx.