---
id: Akumina-CKEditor-Update
title: Updating CK Editor
---

### Update App Manager CKEditor

The Akumina AppManager uses the [CKEditor](https://ckeditor.com/) for editing content. This editor has several options available for customization.

**NOTE**: Changes made to the edit files are NOT upgrade-friendly and need to be re applied after patches or upgrades.

## CKEditor Documentation

The CKEditor documentation is located at https://ckeditor.com/docs/ckeditor4/latest/. You can reference the documentation for how to do various customizations.

## File Location

The App Manager editor files are in:

**{AppManager Install path}/Editor/ck**

The Editor files as shown in an FTP client (FileZilla):
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/ckeditor-fileviewer.png)
 
## Key Files

The key files for the CKEditor configuration are the **config.js** file and the plugins directory. An example config.js file is below:
 
![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/ckeditor-configfile.png)

## Common Tasks

There are a few common tasks that can be done, for others please refer to the CKEditor documentation:

* Change the enter key function - https://ckeditor.com/docs/ckeditor4/latest/features/enterkey.html
* Removing a button - https://ckeditor.com/old/forums/Support/How-remove-buttons-new-CK-editor or https://ckeditor.com/latest/samples/old/toolbar/toolbar.html
* Turn on spell check - https://ckeditor.com/docs/ckeditor4/latest/features/spellcheck.html
* Add a plugin - https://ckeditor.com/docs/ckeditor4/latest/guide/dev_plugins.html

## Applying the Changes: Update the app service with new App Manager Files

After you make the required CKEditor changes, applying those changes can be done several ways:

* Via PowerShell
* Via FTP

**NOTE**: this will depend on where the app manager is installed and if you are in Office 365 or On Premise

## Update the app service with new App Manager Files: via PowerShell

**NOTE**: this requires the PowerShell scripts. For more information, see Download files: PowerShell

This is done via the PowerShell command UploadFilesUsingFtp. Example:

```powershell
UploadFilesUsingFtp -appdirectory $appdirectory -username $username -password $password -ftpurl $ftpurl
```

This command accepts the following parameters:

| **Parameter** | **Description** |
| --- | --- |
|appdirectory|The local directory location for the AppManager files. There must be NO trailing slash.Example: C:\temp\4.0.1802.0171-Core-4.0.1802.0157-Sitecreator-4.0.1802.0171-InterChange|
|username|The FTP username value (usually from the publish profile).|
|password|The FTP password value (usually from the publish profile).|
|ftpurl|The URL of the FTP site.|

The script will run and replace any of the files present for upload.

## Update the app service with new App Manager Files: via FTP

Using the local FTP client, copy the new App Manager files from the path to the root of the App Service’s website.

| **Task** | **Completed Yes/No** |
| --- | --- |
|Ftp the new files to the root of the website||