---
id: Site-Package-ProvisionerFiles-Folder
title: ProvisionerFiles Folder
---

Within the ProvisionerFiles folder we will store our provisioning javascript. Having a provisioning javascript file is required for the deployment view to function.
![image 8](https://akumina.azureedge.net/wiki/training/images/site_creator/image8.png)

The base provisioning javascript is shown below. This file can be modified to enhance the UI functionality of the deployment view
```javascript
var SiteCreator = SiteCreator ? SiteCreator : {};

if ((typeof SiteCreator.SampleSite) === 'undefined') {
    SiteCreator.SampleSite = function () {
        var _cur = this;

        this.Init = function (model) {
            SiteCreator.Eventing.Subscribe('/SiteCreator/DeployButtonclick/', _cur.OnDeploymentClick);
            SiteCreator.Eventing.Subscribe('/SiteCreator/SelectActionChange/', _cur.SelectActionChange);
            SiteCreator.Eventing.Subscribe('/SiteCreator/SiteChange/', _cur.OnSiteChange);
            SiteCreator.Eventing.Subscribe('/SiteCreator/GetFeatureName/', _cur.GetFeatureName);
            _cur.className = model.className;
            _cur.siteContainerId = model.siteContainerId;
        };

        this.OnDeploymentClick = function (model) {
            BaseDeployment(model, _cur.siteContainerId);
        };

        this.SelectActionChange = function (model) {
            if (model.siteContainerId == _cur.siteContainerId) {
                //Detect Add mode
				if ($('input[type=radio][name=select-an-action][value=CreateNewInstallation]').is(':checked')) {
                }//Detect Update mode
                else if ($('input[type=radio][name=select-an-action][value=UpdateConfigurationSettings]').is(':checked')) {
                }
            }
        };

        this.OnSiteChange = function (model) {
            if (model.siteContainerId == _cur.siteContainerId) {
                $("#selectActionDiv").show();
                $("#updateConfigOption").hide();
            }
        };

        this.GetFeatureName = function (model) {
            BaseGetFeatureName(model, _cur.siteContainerId);
        };
    }
};
```
**Note:** You must replace SiteCreator.SampleSite with the ClassName property you defined in your C# class that inherits the SiteProvisionerSiteBase class. Otherwise you will get errors.
