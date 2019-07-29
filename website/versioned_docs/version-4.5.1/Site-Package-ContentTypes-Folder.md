---
id: version-4.5.1-Site-Package-ContentTypes-Folder
title: ContentTypes Folder
original_id: Site-Package-ContentTypes-Folder
---

We define the Content Types we want added to our site in the ContentTypes.xml file within the ContentTypes folder. Below is a sample ContentTypes.xml

```xml
<lists>
	<ContentType ID="0x01200200C25A08D46BE4487A86080142FBFED933" Name="AkuminaDiscussionBoardContentType" Group="Akumina Content Types" Description="Akumina Discussion Board Content Type" Inherits="TRUE" Version="0">
		<FieldRefs >
			<Field ID="{A6828C7D-6754-449A-AB5F-07105080D991}" Name="AttachmentLinks" Type="Note" DisplayName="AttachmentLinks" Group="Akumina Content Types" Required="FALSE" ShowInEditForm="TRUE" ShowInNewForm="TRUE" />
			<Field ID="{2D33BCF0-F6B2-453D-97CD-BD3268967983}" Name="ConfirmArchive" Type="Boolean" DisplayName="ConfirmArchive" Group="Akumina Content Types" Required="FALSE" ShowInEditForm="TRUE" ShowInNewForm="TRUE" />      
		</FieldRefs>
	</ContentType>
</lists>
```
Within the ContentType tag we have multiple attributes of note. The ID attribute is not only the unique identifier for the content type, but it the starting digits are a direct reference to a parent content type. In this case, we are inheriting from 0x012002, which is the SharePoint Discussion content type. The additional digits are random and are used for unique identification. The Name attribute designates the name of the content type. The Group attribute designates the group that the content type belongs to. The Description attribute designates the description associated with the content type. The Inherits attribute designates whether the content type inherits fields from its parent content type. The Version attribute designates the version number.

We nest the fields we are assigning to the content type within the FieldRefs tag. Each individual field is declared with a  Field tag and its attributes determine its properties. The ID attribute is a unique guid we assign to the field for identification. The Name attribute designates the internal name of the field. The Type designates the data type that we are assigning to the field. For more info on data types see the ListDefinitions section. The DisplayName attribute designates the name that will appear in the content type view in SharePoint. The Group attribute designates the group we are assigning the field to. The Required field designates whether or not SharePoint will require data to be entered into that field when an item is created in a list inheriting this content type. The ShowInEditForm attribute designates whether or not the field will appear when we edit list items in a list that inherits this content type. The ShowInNewForm designates whether or not the field will appear when we create new list items in a list that inherits this content type. The Fields will be stored as site columns underneath their assigned group.
