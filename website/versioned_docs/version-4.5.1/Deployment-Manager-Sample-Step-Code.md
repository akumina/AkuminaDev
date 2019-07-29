---
id: version-4.5.1-Deployment-Manager-Sample-Step-Code
title: Sample Step Code
original_id: Deployment-Manager-Sample-Step-Code
---

# Sample Step Code
This provides an example step for the Deployment Manager.

## Download
You can download the code the for SampleSite project [here](https://github.com/akumina/AkuminaTraining/blob/master/SiteProvisioning.SampleSite/SiteProvisioning.SampleSite.zip)


## SampleService.cs
We will utilize **SampleService** as the service for our Sample Steps
```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteProvisioning.SampleSite.Services
{
    public class SampleService 
    {
        public SampleService()
        {

        }

        public void DoSomething()
        {
            //Wait 3 seconds
            System.Threading.Thread.Sleep(3000);
        }

        public string DoSomethingWithTitle(string title)
        {
            //Wait 2 seconds
            System.Threading.Thread.Sleep(2000);
			//Return Title
			return title;
        }
    }
}
```

## Sample Step Code - No User Inputs

### SampleStep.cs (Step)
A step that calls one method in SampleService and completes

```c#
using Akumina.SiteProvisioning.Common.Models;
using Akumina.SiteProvisioning.Core;
using Akumina.SiteProvisioning.Core.Interfaces;
using Akumina.SiteProvisioning.Core.Services;
using SiteProvisioning.SampleSite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteProvisioning.SampleSite.Steps
{
    public class SampleStep : SiteProvisionerStepBase, ISiteProvisionerStep
    {
        public override string StepName
        {
            get { return "Executing a Sample Step"; }
        }

        public override SiteProvisionerStepResponse Execute()
        {
            var response = new SiteProvisionerStepResponse();

            SampleService sampleService = new SampleService();
            sampleService.AssetDirectory = this.Properties.AssetDirectory;

            try
            {              
                sampleService.DoSomething();
				response.Message = "We did something";
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }

            return response;
        }
    }
}
```
### Example.cs (Inherits SiteProvisionerSiteBase)
Our site deployment will consist of one step, SampleStep.cs
```c#
using Akumina.SiteProvisioning.Core.Interfaces;
using SiteProvisioning.SampleSite.Steps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteProvisioning.SampleSite
{
    public class Example : SiteProvisionerSiteBase
    {
		public override string AssetDirectory
		{
			get { return "Example"; }
		}

		public override string Javascript
		{
			get { return ""; }
		}
		public override string FriendlyName
		{
			get { return "Example Site"; }
		}

        public override List<ISiteProvisionerStep> Steps
        {
            get 
            {
                var _steps = new List<ISiteProvisionerStep>();

                _steps.Add(new SampleStep());

                return _steps;
            }
        }

        public override List<SiteProvisionerSettingsField> UserSettings
        {
            get 
            { 
                return new List<SiteProvisionerSettingsField>(); 
            }
        }	
    }
}
```
Once you integrate your custom site definition with the Deployment Manager App you should be able to see it in the UI
![image 11](https://akumina.azureedge.net/wiki/training/images/site_creator/image11.png)
![image 12](https://akumina.azureedge.net/wiki/training/images/site_creator/image12.png)

## Sample Step Code – With User Inputs
For this example we will reuse the SampleService.cs class from the previous example.

### SampleStepWithUserInputs.cs (Step)
Our new step will utilize a "Title" field for user input
```c#
using Akumina.SiteProvisioning.Common.Models;
using Akumina.SiteProvisioning.Core;
using Akumina.SiteProvisioning.Core.Interfaces;
using Akumina.SiteProvisioning.Core.Services;
using SiteProvisioning.SampleSite.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SiteProvisioning.SampleSite.Steps
{
    public class SampleStepWithUserInputs : SiteProvisionerStepBase, ISiteProvisionerStep
    {
        public override string StepName
        {
            get { return "Executing a Sample Step with User Inputs"; }
        }

        public override SiteProvisionerStepResponse Execute()
        {
            var response = new SiteProvisionerStepResponse();

            SampleService sampleService = new SampleService();
            sampleService.AssetDirectory = this.Properties.AssetDirectory;

            try
            {
                var siteTitle = GetProperty("Title");

                if (string.IsNullOrEmpty(siteTitle))
                {
                    throw new Exception("The Title value is required");
                }
                response.Message = sampleService.DoSomethingWithTitle(siteTitle);
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.Success = false;
            }

            return response;
        }
	}
}
```
### Example.cs (Inherits SiteProvisionerSiteBase)
We will reuse Example.cs from the previous sample, but with a couple modifications. We will add our SampleStepWithUserInputs class to the step list and add an entry to the SiteProvisionerSettingsField list. Changes from the previous version are highlighted.

```c#
using Akumina.Logging;
using Akumina.SiteProvisioning.Common.Models;
using Akumina.SiteProvisioning.Core;
using Akumina.SiteProvisioning.Core.Interfaces;
using SiteProvisioning.SampleSite.Steps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 

namespace SiteProvisioning.SampleSite
{
    public class Example : SiteProvisionerSiteBase
    {
        public override string AssetDirectory
        {
            get { return "Example"; }
        }

	  public override string Javascript
        {
            get { return "~/SiteDefinitions/Example/ProvisionerFiles/js/example.js"; }
        }

        public override string FriendlyName
        {
            get { return "Example Site"; }
        }

        public override string ClassName
        {
			get { return "SiteCreator.Example"; }
        }
        public override List<ISiteProvisionerStep> Steps
        {
            get 
            {
                var _steps = new List<ISiteProvisionerStep>();

                _steps.Add(new SampleStep());

                _steps.Add(new SampleStepWithUserInputs());

                return _steps;
            }
        }

        public override List<SiteProvisionerSettingsField> UserSettings
        {
            get
            {
                var _userSettings = new List<SiteProvisionerSettingsField>();

                _userSettings.Add(
                    new SiteProvisionerSettingsField()
                    {
                        Name = "Title",
                        Description = "This is a Sample Field",
                        DefaultValue = "",
                        Required = true
                    }
                );

                return _userSettings;
            }
        }
    }
}
```

### ~/SiteDefinitions/Example/ProvisionerFiles/js/example.js
Under the SiteDefinitions folder you will need to create the following folder structure.

![image 13](https://akumina.azureedge.net/wiki/training/images/site_creator/image13.png)

And it will contain the example.js file

```javascript
var SiteCreator = SiteCreator ? SiteCreator : {};

if ((typeof SiteCreator.Example) === 'undefined') {
    SiteCreator.Example = function () {
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
After we integrate our project with the Deployment Manager App, we should see our steps and user input appear when we select the Example site within the app.
![image 14](https://akumina.azureedge.net/wiki/training/images/site_creator/image14.png)

## Download
You can download the code the for SampleSite project [here](https://github.com/akumina/AkuminaTraining/blob/master/SiteProvisioning.SampleSite/SiteProvisioning.SampleSite.zip)

## References
To learn how to leverage the Deployment Manager SDK see the following articles:
* [Overview](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Overview)
* [Adding A Custom Site Definition](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Adding-A-Custom-Site-Definition)
* [Core Step Classes](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Core-Step-Classes)
* [Custom Site Definition Components](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Site-Definition-Components)
* [Custom Subsite Definitions](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Custom-Subsite-Definitions)
* [Sample Step Code](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Sample-Step-Code)
* [Supported Tokens](https://github.com/akumina/AkuminaDev/wiki/Deployment-Manager:-Supported-Tokens)
