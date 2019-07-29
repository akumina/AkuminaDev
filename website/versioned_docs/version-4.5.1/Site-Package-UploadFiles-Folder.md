---
id: version-4.5.1-Site-Package-UploadFiles-Folder
title: UploadFiles Folder
original_id: Site-Package-UploadFiles-Folder
---

The UploadFiles folder contains all files that we want uploaded to SharePoint file libraries within our site via the UploadFiles.cs step. We can designate the library that we want our files uploaded to by the name of the subdirectory under our UploadFiles folder. In the example below, we are uploading files into the Documents, Images, Images_AK, and Site Collection Images libraries.

![image 9](https://akumina.azureedge.net/wiki/training/images/site_creator/image9.png)

The UploadFiles.cs step treats these subdirectories as the libraries themselves and copies the file structure underneath into the corresponding SharePoint library. For example, if we wanted to upload the Saturday.docx into the Documents library and the Tuesday.docx into a folder called Weekdays inside of the document library, we would arrange our file structure as shown below

![image 10](https://akumina.azureedge.net/wiki/training/images/site_creator/image10.png)
