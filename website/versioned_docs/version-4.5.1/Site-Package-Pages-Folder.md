---
id: version-4.5.1-Site-Package-Pages-Folder
title: Pages Folder
original_id: Site-Package-Pages-Folder
---

The Pages folder contains an Elements.xml file that designates that pages that are deployed to the Pages Library. An example Elements.xml file that adds 3 pages to the site is shown below:
```xml
<pages>
  <page name="CompanyCalendar.aspx" layout="DigitalWorkspace1ColumnPageLayout.aspx" title="Company Calendar Page"/>
  <page name="Dashboard.aspx" layout="DigitalWorkspaceDashboardPageLayout.aspx" title="My Dashboard Page"/>
  <page name="Departments.aspx" layout="DigitalWorkspace1ColumnPageLayout.aspx" title="Department Listing Page"/>
</pages>
```

A Page is defined within the page tag. The name attribute is the file name of the page (this will be a aspx file). The layout attribute is the page layout that the page is inheriting. The title attribute is the display name. Now if we wanted to create a Sample.aspx page using our SampleLayout.aspx described in the previous section, we would add the following entry to our Elements.xml
```xml
<page name="Sample.aspx" layout="SampleLayout.aspx" title="Sample Page"/>
```