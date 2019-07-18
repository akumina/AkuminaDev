---
id: Deployment-Manager-Custom-Subsite-Definitions
title: Custom Subsite Definitions
---

## Applies to
Akumina Foundation 3.3.0.0 and above

## Download
You can download the code the for SampleSite project [here](https://github.com/akumina/AkuminaTraining/blob/master/SiteProvisioning.SampleSite/SiteProvisioning.SampleSite.zip)

## Overview
The [Deployment Manager SDK](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components) allows us to define custom site definitions to **subsites** as well as root sites. A subsite definition is essentially the same as a root site definition with the following differences:
* Subsite Definitions require User Input for the **Title**, **Url**, and whether or not to **Inherit Permissions**
* Subsite Definitions require a step that creates a new Subsite from user inputs
* Subsite Definitions do not need to provision branding files
* Subsite Definitions do not need to provision page layout files
* Subsite Definitions do not need to provision Master Page files

The following article will go through the elements of a basic subsite definition

## The C# class inheriting the SiteProvisionerSiteBase class
This file inherits the SiteProvisionerSiteBase class and assembles our step classes into a list of steps which is seen in the Deployment Manager App UI. We will cover the differences between a [root site definition](https://github.com/akumina/AkuminaDev/wiki/Site-Creator:-Custom-Site-Definition-Components#the-c-class-inheriting-the-siteprovisionersitebase-class) and the subsite definition here. A sample subsite instance, SampleSubSite.cs, is shown below.  
```c#
public class SampleSubSite : SiteProvisionerSiteBase
    {
        public override string AssetDirectory => "SampleSubSite";

        public override string Javascript => "~/SiteDefinitions/SampleSubSite/ProvisionerFiles/js/samplesubsite.js";

        public override string FriendlyName => "Sample Sub-site";

        public override string ClassName => "SiteCreator.SampleSubSite";

        public override bool IsVisible => true;

        public override List<ISiteProvisionerStep> Steps
        {
            get
            {
                var _steps = new List<ISiteProvisionerStep>
                {
                    new ValidateUserSettings(),
                    new CreateSiteFromUserSettings(),
                    new SetSecurityOnSite(),
                    new ProvisionLists(),
                    new UploadFiles(),
                    new AddPages(),
                    new AddControlsToPages(),
                    new SetHomePage(),
                    new ResetMasterPageInheritance()
                };
                return _steps;
            }
        }

        public override List<SiteProvisionerSettingsField> UserSettings
        {
            get
            {
                var userSettings = new List<SiteProvisionerSettingsField>
                {
                    new SiteProvisionerSettingsField
                    {
                        Name = "SubSite",
                        Description = "SubSite",
                        DefaultValue = new List<SiteProvisionerSettingsListItem> {},
                        Type = typeof(List<>)
                    },
                    new SiteProvisionerSettingsField
                    {
                        Name = "Title",
                        Description = "The Title of the site to be created",
                        DefaultValue = "",
                        Required = true
                    },
                    new SiteProvisionerSettingsField
                    {
                        Name = "URL",
                        Description = "The URL of the site to be created",
                        DefaultValue = "",
                        Required = true
                    },
                    new SiteProvisionerSettingsField
                    {
                        Name = "InheritPermissions",
                        Description = "Inherit permissions from the parent site",
                        DefaultValue = true,
                        Type = typeof(bool)
                    }                   
                };

                return userSettings;
            }
        }

    }
```
### Key Differences from the Root Site Definition
#### IsVisible => true
We always want our subsite definition to be visible.

#### UserSettings
We include user inputs for our Subsite Deployment.
##### SubSite
This allows the user to choose a previously deployed Subsite so individual steps can be rerun on it.
##### Title
The Title of the Subsite, this is a required text field for subsite deployment.
##### URL
The URL of the Subsite, this is a required text field for subsite deployment.
##### InheritPermissions
The Permissions of the subsite, this is a required boolean field for subsite deployment. When checked the subsite owners group will be the parent owners group. When unchecked the subsite owners group will be unique.
### Steps specific to Subsite Definitions
The following steps are required for Subsite Definitions
#### CreateSiteFromUserSettings
Retrieves the **Title** and **URL** user inputs and creates a site. This step is included with our *SiteProvisioning.SampleSite* project and can be modified for additional inputs.
#### SetSecurityOnSite
Retrieves the **InheritPermissions** user input and sets the owners group on the newly created site. This is within the *Akumina.SiteProvision.CoreSteps dll*

## SiteDefinitions Folder
![image 2](https://akumina.azureedge.net/wiki/training/images/subsite/image2.png)

The assets needed for the deployment of subsites are a subset of those needed for [root sites](https://github.com/akumina/AkuminaTraining/wiki/Site-Creator:-Custom-Site-Definition-Components#sitedefinitions-folder)

### ContentEditor
The ContentEditor folder contains the ContentEditor.xml file, we need this for deploying our widgets. **Do not edit or delete this file**.

### ListDefinitions
The ListDefinitions folder contains information that the Site Creator App uses to create lists on the subsite. This information is stored in an xml file called [Lists.xml](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML#listsxml). 

### PageContent
The PageContent folder contains information that the Deployment Manager App will use to add content to the pages we create. This information is stored within an xml file called [pages.xml](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML#pagesxml).

### Pages
The Pages folder designates the pages that are deployed to the Pages Library of our subsite. This information is stored within an xml file called [Elements.xml](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML#pagelayouts--elementsxml). Our pages will need to reference layouts that are deployed on the root site.

### ProvisionerFiles
Within the ProvisionerFiles folder we will store our provisioning javascript. Having a provisioning javascript file is required for the deployment view to function. The provisioning javascript for a subsite is shown below. This file can be modified to enhance the UI functionality of the deployment view

```javascript
var SiteCreator = SiteCreator ? SiteCreator : {};

if ((typeof SiteCreator.SampleSubSite) === 'undefined') {
    SiteCreator.SampleSubSite = function () {
        var _cur = this;

        this.Init = function (model) {
            SiteCreator.Eventing.Subscribe('/SiteCreator/DeployButtonclick/', _cur.OnDeploymentClick);
            SiteCreator.Eventing.Subscribe('/SiteCreator/SelectActionChange/', _cur.SelectActionChange);
            SiteCreator.Eventing.Subscribe('/SiteCreator/SiteChange/', _cur.OnSiteChange);
            SiteCreator.Eventing.Subscribe('/SiteCreator/GetFeatureName/', _cur.GetFeatureName);
            _cur.className = model.className;
            _cur.siteContainerId = model.siteContainerId;

            //Get subsites in dropdown
            _cur.GetSubSites();

            _cur.BindEvents();
        };

        this.IsLanguageEnabled = function () {

            $('#ak-loading').show();
            var def = $.Deferred();

            $.ajax({
                url: '/api/Config/IsLanguageEnabled',
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (isLanguageEnabled) {
                    def.resolve(isLanguageEnabled);
                    //Bind dropdown
                    $('#ak-loading').hide();
                },
                error: function (xhr, textStatus, errorThrown) {
                    def.reject();
                    $('#ak-loading').hide();
                }
            });

            return def;
        };

        this.GetSubSites = function () {
            $('#ak-loading').show();

            $.ajax({
                url: '/api/connector/subsites',
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    for (var obj in data) {
                        if (obj.indexOf('/') > -1) {
                            var html = "<option value='" + data[obj] + "'>" + obj.substring(obj.lastIndexOf('/') + 1) + "</option>";
                            $('#ak-siteprovisioning-usersetting-SubSite').append(html);
                        }
                    }
                    //Bind dropdown
                    $('#ak-loading').hide();
                },
                error: function (xhr, textStatus, errorThrown) {
                    $('#ak-loading').hide();
                }
            });
        };

        this.IsUpgradeRequired = function (siteId) {
            var def = $.Deferred();

            $.ajax({
                url: '/api/connector/isupgraderequired?siteId=' + siteId,
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                success: function (result) {
                    def.resolve(result);
                },
                error: function (xhr, textStatus, errorThrown) {
                    def.reject();
                }
            });

            return def;
        };

        this.BindEvents = function () {
            $('#ak-siteprovisioning-usersetting-SubSite').change(function () {
                $('#ak-loading').show();
                //Display theme image in preview section
                var selectedSubSiteId = this.value;

                //Get properties of subsite
                $.ajax({
                    url: '/api/connector/siteproperties?siteId=' + selectedSubSiteId,
                    type: 'GET',
                    success: function (data) {
                        //Display properties for subsites
                        $("#ak-siteprovisioning-usersetting-Title").val(data.Title);
                        if (data.Url.indexOf('/') > -1) {
                            $("#ak-siteprovisioning-usersetting-URL").val(data.Url.substring(data.Url.lastIndexOf('/') + 1));
                        }
                        //$("#ak-siteprovisioning-usersetting-InheritPermissions").prop("checked", data.InheritPermissions);
                        $("#ak-siteprovisioning-usersetting-Image option[value=" + data.Image + "]").attr('selected', 'selected');

                        $('#ak-loading').hide();
                        //Check if version upgrade is required for selected subsite.
                        //_cur.IsUpgradeRequired(selectedSubSiteId).then(function (isUpgradeRequired) {
                        //    if (!isUpgradeRequired) {
                        //        $("#" + _cur.siteContainerId + " [id^=Step_][data-steptype=Upgrade]").hide();
                        //        if ($('input[type=radio][name=select-an-action][value=UpgradeSite]').is(':checked')) {
                        //            $("#upgradeSiteDiv").show();
                        //        }
                        //    }
                        //    else {
                        //        if ($("#" + _cur.siteContainerId + " [id^=Step_][data-steptype=Upgrade]").length == 0 && $('input[type=radio][name=select-an-action][value=UpgradeSite]').is(':checked')) {
                        //            $("#upgradeSiteDiv").show();
                        //        }
                        //        else {
                        //            $("#" + _cur.siteContainerId + " [id^=Step_][data-steptype=Upgrade]").show();
                        //            $("#upgradeSiteDiv").hide();
                        //        }
                        //    }
                        //    $('#ak-loading').hide();
                        //}, function () {
                        //    $('#ak-loading').hide();
                        //});
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        $('#ak-loading').hide();
                    }
                });
            });
        };

        this.OnDeploymentClick = function (model) {
            BaseDeployment(model, _cur.siteContainerId);
        };

        this.SelectActionChange = function (model) {
            if (model.siteContainerId == _cur.siteContainerId) {
                _cur.DisplayDepartmentProperties();
                $("#ak-siteprovisioning-usersetting-SubSite").parent().hide();
                $("#ak-siteprovisioning-usersetting-Title").val("");
                $("#ak-siteprovisioning-usersetting-Title").attr('disabled', false);
                $("#ak-siteprovisioning-usersetting-URL").val("");
                $("#ak-siteprovisioning-usersetting-URL").attr('disabled', false);
                $("#ak-siteprovisioning-usersetting-InheritPermissions").attr('disabled', false);
                $("#ak-siteprovisioning-usersetting-Image").attr('disabled', false);
                //Detect Add mode
                if ($('input[type=radio][name=select-an-action][value=CreateNewInstallation]').is(':checked')) {
                }//Detect Update mode
                else if ($('input[type=radio][name=select-an-action][value=UpdateConfigurationSettings]').is(':checked')) {
                }//Detect Individual Deployment Step mode
                else if ($('input[type=radio][name=select-an-action][value=ExecuteIndividualDeploymentSteps]').is(':checked')) {
                    //Display all department site properties
                    $("#ak-siteprovisioning-usersetting-SubSite").parent().show();
                    $("#ak-siteprovisioning-usersetting-Title").attr('disabled', true);
                    $("#ak-siteprovisioning-usersetting-URL").attr('disabled', true);
                    $("#ak-siteprovisioning-usersetting-InheritPermissions").attr('disabled', true);
                    $("#ak-siteprovisioning-usersetting-Image").attr('disabled', true);

                    //Trigger subsite change and load subsite properties
                    var firstValue = $("#ak-siteprovisioning-usersetting-SubSite option:first").val();
                    if (firstValue != "" && typeof firstValue != 'undefined') {
                        $("#ak-siteprovisioning-usersetting-SubSite").val($("#ak-siteprovisioning-usersetting-SubSite option:first").val());
                        $("#ak-siteprovisioning-usersetting-SubSite").trigger('change');
                    }

                    $("#" + model.siteContainerId + " [id='Step_Validate User Settings'] .ak-siteprovisioning-featuredeploy-btn").prop("disabled", true).css('opacity', '0.6');
                    $("#" + model.siteContainerId + " [id='Step_Create Site from URL user setting'] .ak-siteprovisioning-featuredeploy-btn").prop("disabled", true).css('opacity', '0.6');
                    $("#" + model.siteContainerId + " [id='Step_Enable Multilingual'] .ak-siteprovisioning-featuredeploy-btn").prop("disabled", true).css('opacity', '0.6');
                    $("#" + model.siteContainerId + " [id='Step_Update Friendly Urls'] .ak-siteprovisioning-featuredeploy-btn").prop("disabled", true).css('opacity', '0.6');
                    $("#" + model.siteContainerId + " [id='Step_Update List Items - Multilang Provisioning'] .ak-siteprovisioning-featuredeploy-btn").prop("disabled", true).css('opacity', '0.6');
                }
                else if ($('input[type=radio][name=select-an-action][value=UpgradeSite]').is(':checked')) {
                    $('#' + model.siteContainerId + " .ak-siteprovisioning-upgrade-btn").hide();
                }
            }
        };

        this.ShowHideMultilingualStep = function () {
            if (_cur.isLanguageEnabled) {
                $("#" + _cur.siteContainerId + " [id='Step_Enable Multilingual']").show();
            }
            else {
                $("#" + _cur.siteContainerId + " [id='Step_Enable Multilingual']").hide();
            }
        };

        this.DisplayDepartmentProperties = function () {
            $("#ak-siteprovisioning-usersetting-Title").parent().show();
            $("#ak-siteprovisioning-usersetting-URL").parent().show();
            $("#ak-siteprovisioning-usersetting-InheritPermissions").parent().show();
            $("#ak-siteprovisioning-usersetting-Image").parent().show();
        };

        this.OnSiteChange = function (model) {
            if (model.siteContainerId == _cur.siteContainerId) {
                    $("#selectActionDiv").show();
                    $("#updateConfigOption").hide();
                    $("#upgradeSiteOption").hide();
            }
        };

        this.GetFeatureName = function (model) {
            BaseGetFeatureName(model, _cur.siteContainerId);
        };
    }
};
```

### UploadFiles
The UploadFiles folder contains all files that we want uploaded to SharePoint file libraries within our site via the UploadFiles.cs step. See [UploadFiles](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components#uploadfiles) for more details.

## Download
You can download the code the for SampleSite project [here](https://github.com/akumina/AkuminaTraining/blob/master/SiteProvisioning.SampleSite/SiteProvisioning.SampleSite.zip)

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Site Definition XML](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-XML)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)