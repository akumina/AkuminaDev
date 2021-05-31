---
id: Site-Package-ContentApps-Folder
title: ContentApps Folder
---
We support 5 types of content Apps which we can add to our site using Site Deployer. We have 5 different Types of .JSON file for each type of content App.We define the Content Apps we want added to our site in the .JSON file within the ContentApps folder. Below are the .JSON file samples

Author.JSON - This JSON file is used for Author Type of App
```json
{
	"AppName": "Calendar_Updated",         // Required Field
	"AppID": "{{newguid}}",                // Required Field
	"AppType": "Author",                   // Required Field
	"AppIcon": "",
	"AuthRoles": [ "", "" ],               // Required Field - Multiple group names can be added as comma seperated value
	"ListName": "",                        // Required Field
	"Links": [
		{
			"LinkType": "",                 //Type can be Link OR Video 
			"ListName": "",
			"FriendlyUrlColumn": ""
		}
	],
	"ImageLibraryName": "",
	"EnableComments": false,
	"HideAddNewItem": false,
	"HideDeleteItem": true,
	"EnableAutoTranslate": true,
	"CheckTitleUniqueness": true,
	"EnableCreatedByFilter": false,
	"EnablePermissionSettings": false,
	"EnableSocialReactions": false,
	"EnablePersonas": false,
	"IsPersonaSettingsRequired": false,
	"EnableContentDistributionSetting": false,
	"Fields": [
		{
			"IsImage": "",                 //If Type of Field is Image - Name, Width and Height should be given
			"Name": "",
			"Width": "",
			"Height": ""
		},
		{
			"IsMetaDataField": "",          //If type of the field is Metadata - Name, IsHidden,IsAutoTranslate and DisplayOrder should be given
			"Name": "",
			"IsVisible":,                   //Boolean Values e.g true / false
			"IsAutoTranslate":,             //It should be true only for TEXT columns (Single Line Of text and Multiple line of text
			"DisplayOrder":                 //It should number
		}
	],
	"Previews": [
		{
			"Name": "",
			"UrlFormat": ""
		}
	]
}
```

Curated.JSON - This JSON file is used for Curated Type of App
```json
{
	"AppName": "CuratedTest",           // Required Field
	"AppID": "{{newguid}}",             // Required Field
	"AppType": "Curated",               // Required Field
	"AppIcon": "",
	"AuthRoles": [ "", "" ],             //Required Field - Multiple group names can be added as comma seperated value
	"ListName": "",                      // Required Field
	"Links": [
		{
			"LinkType": "",               //Type can be Link OR Video 
			"ListName": "",
			"FriendlyUrlColumn": ""
		}
	],
	"Curated": [                          //Required Field - curated content Type, Site URL and CuratedList must be given
		{
			"ContentType": "",
			"SiteURL": "",
			"CuratedList": [ "" ]
		}
	],
	"SortField": "",                       // Required Field - It should be name of the sort field from the mentioned list
	"ActiveField": "",                     // Required Field - It should be name of the active field from the mentioned list
	"ImageLibraryName": "",
	"EnablePersonas": false,
	"IsPersonaSettingsRequired": false,
	"HideDeleteItem": true,
	"Fields": [
		{
			"IsImage": "",                    //If Type of Field is Image - Name, Width and Height should be given
			"Name": "",
			"Width": "",
			"Height": ""
		},
		{
			"IsMetaDataField": "",            //If Type of Field is Metadata - Name, IsHidden,IsAutoTranslate and DisplayOrder should be given
			"Name": "",
			"IsVisible":,                     //Boolean Values e.g true / false
			"IsAutoTranslate":,               //It should be true only for TEXT columns (Single Line Of text and Multiple line of text
			"DisplayOrder":                   //It should be number
		}
	],
	"Previews": [
		{
			"Name": "",
			"UrlFormat": ""
		}
	]
}
```

Slider.JSON - This JSON file is used for Slider Type of App
```json
{
	"AppName": "SliderTest",                      // Required Field
	"AppID": "{{newguid}}",                       // Required Field
	"AppType": "Slider",                          // Required Field
	"AppIcon": "",
	"AuthRoles": [ "", "" ],                      // Required Field- Multiple group names can be added as comma seperated value
	"ListName": "",                               // Required Field
	"Links": [
		{
			"LinkType": "",                        //Type can be Link OR Video
			"ListName": "",
			"FriendlyUrlColumn": ""
		}
	],
	"SortField": "",							    // Required Field - It should be name of the sort field from the mentioned list
	"ActiveField": "",								// Required Field - It should be name of the active field from the mentioned list
	"ImageLibraryName": "",
	"HideDeleteItem": true,
	"EnableAutoTranslate": true,
	"Fields": [
		{
			"IsImage": "",						     //If Type of Field is Image - Name, Width and Height should be given
			"Name": "",
			"Width": "",
			"Height": ""
		},
		{
			"IsMetaDataField": "",				     //If type of the field is Metadata - Name, IsHidden,IsAutoTranslate and DisplayOrder should be given
			"Name": "",
			"IsVisible":,						    //Boolean Values e.g true / false
			"IsAutoTranslate":,					    //It should be true only for TEXT columns (Single Line Of text and Multiple line of text
			"DisplayOrder":						    //It should be number
		}
	],
	"Previews": [
		{
			"Name": "",
			"UrlFormat": ""
		}
	]
}
```

QuickLinks.JSON - This JSON file is used for QuickLinks Type of App
```json
{
	"AppName": "QuickLinkTest",                 // Required Field
	"AppID": "{{newguid}}",                     // Required Field
	"AppType": "QuickLinks",                    // Required Field
	"AppIcon": "",
	"AuthRoles": [ "", "" ],                    // Required Field - Multiple group names can be added as comma seperated value
	"ListName": "",                             // Required Field
	"Links": [
		{
			"LinkType": "",                     //Type can be Link OR Video 
			"ListName": "",
			"FriendlyUrlColumn": ""
		}
	],
	"SortField": "",						     // Required Field - It should be name of the sort field from the mentioned list
	"ImageLibraryName": "",
	"EnablePersonas": false,
	"IsPersonaSettingsRequired": false,
	"LinkRequiredForQuickLinks": false,
	"DeleteConfirmationForQuickLinks": false,
	"Fields": [
		{
			"IsImage": "",					      //If Type of Field is Image - Name, Width and Height should be given
			"Name": "",
			"Width": "",
			"Height": ""
		},
		{
			"IsMetaDataField": "",					//If type of the field is Metadata - Name, IsHidden,IsAutoTranslate and DisplayOrder should be given
			"Name": "",
			"IsVisible":,							//Boolean Values e.g true / false
			"IsAutoTranslate":,						//It should be true only for TEXT columns (Single Line Of text and Multiple line of text
			"DisplayOrder":							//It should be number
		}
	],
	"Previews": [
		{
			"Name": "",
			"UrlFormat": ""
		}
	]
}
```

ImageGallery.JSON - This JSON file is used for ImageGallery Type of App
```json
{
	"AppName": "ImageGalleryTest",                // Required Field
	"AppID": "{{newguid}}",                       // Required Field
	"AppType": "ImageGallery",                    // Required Field
	"AppIcon": "",
	"AuthRoles": [ "", "" ],		             // Required Field- Multiple group names can be added as comma seperated value
	"ListName": "",					             // Required Field
	"Links": [
		{
			"LinkType": "",					     //Type can be Link OR Video 
			"ListName": "",
			"FriendlyUrlColumn": ""
		}
	],
	"ImageLibraryName": "",
	"CustomSettings": [
		{
			"Name": "",
			"Value": "",
			"HelpText": ""
		}
	],
	"Fields": [
		{
			"IsImage": "",						 //If Type of Field is Image - Name, Width and Height should be given
			"Name": "",
			"Width": "",
			"Height": ""
		},
		{
			"IsMetaDataField": "",			     //If type of the field is Metadata - Name, IsHidden,IsAutoTranslate and DisplayOrder should be given
			"Name": "",
			"IsVisible":,						//Boolean Values e.g true / false
			"IsAutoTranslate":,				    //It should be true only for TEXT columns (Single Line Of text and Multiple line of text
			"DisplayOrder":						// It should be number
		}
	],
	"Previews": [
		{
			"Name": "",
			"UrlFormat": ""
		}
	]
}
```

In the JSON file, we have listed all properties of content apps as json tags. For all types of apps "AppName", "AppType" , "AppID", "AuthRole" and "ListName" are mandatory fields. Some apps like curated have some extra fields as a required fields and those are mentioned in json file.

We can perform "ADD" and "UPDATE" operation of content apps. When AppID field has "{{newguid}}" then app step will perform "ADD" operation and when AppID has actual GUID mentioned then app step will perform "UPDATE" operation for mentioned AppID.
"AuthRole" field is for SharePoint Group name, it can be multiple value. We can give tokenized group name for "AuthRole".
e.g. for tokenized group - {Owners}, {Members}, {Visitors}, {Site Collection Name Owners}, {Web Name Owners}.

Inside the "Fields" tag we can mention two types of fields which are Image Field and Other than Image (Metadata) field. Both type of fields have some different properties as mentioned in JSON file.

