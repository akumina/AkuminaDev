---
id: Site-Package-ListDefinitions-Folder
title: ListDefinitions Folder
---

We define the lists we want added to the site in the Lists.xml file within the ListDefinitions folder. Below is a sample Lists.xml file
```xml
<lists>
	<list name="SampleList_AK" templateID="104" contentType="Akumina Sample Type" Enforce="TRUE" noCrawl="TRUE">
		<Field Name="Start_x0020_Date"  DisplayName="Start Date" Type="DateTime" Required="TRUE">
			<Default>[today]</Default>
		</Field>
		<Field Name="AnnouncementTitle"  DisplayName="AnnouncementTitle" Type="Text"  Required="TRUE" />
		<Field Name="Image" DisplayName="Image" Type="URL" Format="Image" Required="FALSE" />
		<Data>
			<Rows>
				<Row>
				  <Field Name="Title">Rogers, Sherk and Maffei taps new leadership in Nashua</Field>
				  <Field Name="AnnouncementTitle">Akumina taps new leadership in Nashua</Field>         
				  <Field Name="Image">{SiteUrl}/Images_AK/Office.jpg</Field>
				  <Field Name="Start_x0020_Date">8/22/2016</Field>
				</Row>      	
			</Rows>
		</Data>
	</list>
</lists>
```
In the sample we define one list. Within the list tag, the name attribute is the name of the SharePoint list to be created. The templateID property value is the list template used, in this case it is an announcement list (104). All list ids can be found at https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.splisttemplatetype.aspx. The contentType attribute specifies the content type the list inherits from. If the list has a content type, it add the content type’s columns to the list. The Enforce attribute determines whether or not the Title field within the list must have unique values. The noCrawl attribute sets the NoCrawl property of the list.
```xml
<list name="SampleList_AK" templateID="104" contentType="Akumina Sample Type" Enforce="TRUE" noCrawl="TRUE">
```
When we define fields we have multiple attributes to take into account. The Name attribute is what the field will be referred to internally, we will use the Name when adding data to the field. The DisplayName attribute is the name of the field will be in the List View. The Type attribute is the datatype of the field. The Required attribute is whether or not the field requires data when a new list item is created. A default value can be assigned to the field by included the <Default> tag. All list attributes can be found at https://msdn.microsoft.com/en-us/library/office/aa979575.aspx.

```xml
<Field Name="Start_x0020_Date"  DisplayName="Start Date" Type="DateTime" Required="TRUE">
	<Default>[today]</Default>
</Field>
```

We define default data within the <Data><Rows> tags. Each list item will be nested within a <Row> tag and data will be added to the necessary fields. When adding a data to a field we reference the field by its Name attribute.

```xml
<Data>
	<Rows>
		<Row>
		  <Field Name="Title">Rogers, Sherk and Maffei taps new leadership in Nashua</Field>
		  <Field Name="AnnouncementTitle">Akumina taps new leadership in Nashua</Field>         
		  <Field Name="Image">{SiteUrl}/Images_AK/Office.jpg</Field>
		  <Field Name="Start_x0020_Date">8/22/2016</Field>
		</Row>      	
	</Rows>
</Data>
```

Note how we also use the **{SiteUrl}** token within one of our fields values above. The **{SiteUrl}** token is replaced with the SharePoint site url when we deploy our lists. We will go into our supported tokens in more detail within the Supported Tokens section.

### Update.xml
The Update.xml indicates items that need to be updated or provisioned within lists after the initial list provisioning. The Update.xml file should be stored within the ListDefinitions folder. The xml format is essentially the same as the List.xml with a couple exceptions. The Update attribute within the row tag designates if the item should be overwritten if it already exists within the list. We also will only designate data within the Update.xml, no additional lists or columns to lists can be defined in here. An example Update.xml is shown below.

```xml
<lists>
  <list name="Forms_AK">
    <Data>
      <Rows>
        <Row Update ="FALSE">
          <Field Name="Title">IT Request</Field>
          <Field Name="SiteId">{SiteId}</Field>
          <Field Name="ReferenceList">ITRequestAK</Field>
          <Field Name="ColumnOrder">first,last,email,location,service-category,comments</Field>
          <Field Name="FormDescription">IT Request description</Field>
          <Field Name="ReferenceListId">{ReferenceListId:ITRequestAK}</Field>
         </Row>
      </Rows>
    </Data>
  </list>
</lists>
```
	
	
### Export
There is also a facility to EXPORT lists. The **exportlists** option is used for this purpose. In the file tools\Akumina.SiteDeployer.exe.config, we specify the lists we want to export in the **exportLists** key:

```xml
    <add key="exportLists" value="Apps_AK,FoundationNews_AK" />
```

This will produce an XML file in the **ListDefinitions** path:

> ListDefinitions\Lists-Export.xml

And inside the file, it will have the output of the list data, example:


```xml
<lists>
  <list name="Apps_AK" noCrawl="TRUE">
    <Field Name="AppId" DisplayName="AppId" Type="Text" />
    <Field Name="AppInstanceId" DisplayName="AppInstanceId" Type="Text" />
    <Field Name="AppIcon" DisplayName="AppIcon" Type="Text" />
    <Field Name="AppRedirectUrl" DisplayName="AppRedirectUrl" Type="Text" />
    <Field Name="AppType" DisplayName="AppType" Type="Text" />
    <Field Name="Enabled" DisplayName="Enabled" Type="Boolean">
      <Default>
      </Default>
    </Field>
    <Field Name="AppAuthorization" DisplayName="AppAuthorization" Type="Note" />
    <Field Name="SiteId" DisplayName="SiteId" Type="Text" />
    <Field Name="AppProperties" DisplayName="AppProperties" Type="Note" />
    <Field Name="_CommentFlags" DisplayName="Comment settings" Type="Lookup" />
    <Field Name="_CommentCount" DisplayName="Comment count" Type="Lookup" />
    <Data>
      <Rows>
        <Row>
          <Field Name="Title">Language Manager</Field>
          <Field Name="AppId">LanguageManager</Field>
          <Field Name="AppInstanceId">4d213ea2-9a80-466b-9661-5bd0006bac11</Field>
          <Field Name="AppIcon">fa fa-cog</Field>
          <Field Name="AppRedirectUrl">/LanguageManager</Field>
          <Field Name="AppType">admin</Field>
          <Field Name="Enabled">True</Field>
          <Field Name="AppAuthorization">Install06 Owners</Field>
          <Field Name="SiteId">1e6d9b75-9dbe-4a74-a096-5eaaa9b36ede</Field>
          <Field Name="AppProperties" />
          <Field Name="_CommentFlags">
          </Field>
          <Field Name="_CommentCount">
          </Field>
        </Row>
        ...
      </Rows>
    </Data>
  </list>
  ...
</lists>
```

### Tokens
The following tokens are available for use in the XML:

| Property | Token(s) | Notes |
| -- | -- | -- |
| Site Collection ID | {SiteCollectionId} | |
| Site Collection Title | {SiteCollectionTitle} | |
| Site Collection URL | {SiteCollectionUrl}	 | |
| Root web Id | {RootWebId} | The root site of the site collection’s Id |
| Root Web Title | {RootWebTitle}	 | |
| Root Web URL | {RootWebUrl}	 | |
| Web Id | {SiteId} | The current site or web’s Id |
| Web Title | {SiteTitle} | |
| Web Url | {SiteUrl} | |
| List Id | {ListId} | |
| Random GUID | {NewGuid} |
| | {NewUniqueGuid} | |
| | {{NewGuidN}} | |
| Default language – 1033 | {DefaultLanguageId}	 | |
| Default language – en-us | {DefaultLanguageCode}	 | |
| Random Hex | {{Hex:44}}	 | |
| Now - Datetime | {{DateTime.Now}}	 | |
| Now - Date | {{DateTime.Now.Date}} | |
| Now - UTC Date | {{DateTime.UtcNow.Date}}	 | |
