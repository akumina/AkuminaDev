---
id: version-4.5.1-Site-Package-PageLayouts-Folder
title: PageLayouts Folder
original_id: Site-Package-PageLayouts-Folder
---

When we add new .aspx files to the PageLayouts folder, we need to customize the Elements.xml file, which informs the Deployment Manager App of what layouts to deploy. Below is a sample Elements.xml file.
```xml
<pagelayouts>
  <pagelayout name="DigitalWorkspace1ColumnPageLayout.aspx" folder="" title="Digital   Workspace 1 Column Page Layout" publishingAssociatedContentType=";#AkuminaIgnite;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39002C646921DEB14195B1E318F903889C55;#" />
  <pagelayout name="DigitalWorkspace2ColumnLeftPageLayout.aspx" folder="" title="Digital Workspace 2 Column Left Page Layout" publishingAssociatedContentType=";#AkuminaIgnite;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39002C646921DEB14195B1E318F903889C55;#" />
  <pagelayout name="DigitalWorkspaceDashboardPageLayout.aspx" folder="" title="Digital Workspace Dashboard Layout" publishingAssociatedContentType=";#AkuminaIgnite;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39002C646921DEB14195B1E318F903889C55;#" />
</pagelayouts>
```
We define a page layout and its properties within the page layout tag. The name attribute is the file name of the page layout file, ie DigitalWorkspace1ColumnPageLayout.aspx. The title attribute is the display name, ie Digital Workspace 1 Column Page Layout. The folder attribute indicates the folder that the layout is stored in within the Masterpage Gallery. The publishingAssociatedContentType is the content type associated with the page layout. The value set to this attribute must be of the following format:
```xml
=";#<ContentTypeName>;#<ContentTypeId>;#"
```
The ContentTypeId will be in hexadecimal format.
However, we automatically create the AkuminaIgnite page layout content type with the AddPageLayouts.cs step, so assigning the publishingAssociatedContentType of new page layouts to be AkuminaIgnite will work just fine.
```xml
publishingAssociatedContentType=";#AkuminaIgnite;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39002C646921DEB14195B1E318F903889C55;#"
```
After we add a new page layout to the file we need to add an associated entry to the Elements.xml file. For example, if we add the layout SampleLayout.aspx we will add the following entry to our Elements.xml.
```xml
<pagelayout name="SampleLayout.aspx" folder="" title="Sample Page Layout" publishingAssociatedContentType=";#AkuminaIgnite;#0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39002C646921DEB14195B1E318F903889C55;#" />
```