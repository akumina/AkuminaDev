---
id: version-4.5.1-Site-Package-ListDefinitions-Folder
title: ListDefinitions Folder
original_id: Site-Package-ListDefinitions-Folder
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