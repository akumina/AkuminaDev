---
id: Site-Package-PageContent-Folder
title: PageContent Folder
---

The PageContent folder will contain the pages.xml file. The pages.xml file contains the markup that will be deployed to the pages by the AddControlsToPages.cs step. A sample pages.xml file is listed below.
```xml
<pages xmlns:ak="http://www.w3.org/ak">
  <page name="Home.aspx">
	<zone name="WebPartZone1">
		<contenteditor>
        <h2>Sample home page</h2>
		</contenteditor>
	</zone>
	<zone name="WebPartZone2">
		<contenteditor>
      <div class="ak-controls ak-genericlist-widget" id="{{NewGuid}}" ak:listname="" ak:displaytemplateurl="{{SiteUrl}}/Style Library/digitalworkplace/Content/Templates/GenericList/DepartmentList.html" ak:callbackmethod="ShowDepartmentItems" ak:callbacktype="customdataload"> </div>
		</contenteditor>
	</zone>
  </page>
</pages>
```

We designate which page that we’re adding content to with the name attribute of the pages tag. This name must correspond to the name of a page we are provisioning. 
We designate the webpart zone that we want the content deployed to with the name attribute of the zone tag. The name must correspond to the name of the WebPartZone within the page layout that the page inherits from.
The contenteditor tag signifies that we want the Content Editor webpart xml deployed to the page. Any content within the contenteditor tag will be added as inner markup to the Content editor webpart. Content can be simple markup as shown below:
```html
<h2>Sample home page</h2>
```
Or it can be an Akumina widget
```html
<div id="b29505be-b6b4-4eda-af32-7bc2d93d0020" class="ak-widget" rel="HomePage-DeptNews"></div>
```
Additionaly, multiple Content Editor Web Parts can be placed within the same WebPartZone
```xml
<zone name="WebPartZone1">
	<contenteditor>
		  <h2>Sample Multiple Content Editors</h2>
	</contenteditor>	
	<contenteditor>
		  <div id="b29505be-b6b4-4eda-af32-7bc2d93d0020" class="ak-widget" rel="HomePage-DeptNews"></div>
	</contenteditor>
</zone>
```
