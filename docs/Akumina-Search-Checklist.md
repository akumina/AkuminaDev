---
id: Search-Checklist
title: Search Checklist
---

## Search Checklist

| Item | Action |
| -- | -- |
| Configure Search | Validate PageData_AK list and set up managed properties; see https://community.akumina.com/knowledge-base/configuring-search-for-akumina-widget-content/ |
| Page exclusion | Determine which pages to exclude from the search. See "Search Page Exclusion List (Part of Core Site)" at https://community.akumina.com/knowledge-base/foundation-site-installation/|
| Content Exclusion | Determine which sections of the site to exclude, for example the header and footer. See "Excluding Certain Content from Search" at https://community.akumina.com/knowledge-base/configuring-search-for-akumina-widget-content/ |
| Scope | Determine the scope of what search results you want. See [Scope](#scope) |
| Tagging | Determine if and how additional keywords should be added to improve search result findability. See [Tagging](#tagging) |
| Modern Search | Setup Office 365 Modern search to properly display results from an Akumina site; see https://community.akumina.com/knowledge-base/modern-search/ |
| Ranking | Boost the rank of items based on certain conditions. See [Ranking](#ranking) |


### Scope
The scope of the search is controlled by the KQL query that is executed, similar to the way it works in SharePoint. The query is executed by the GenericSearchListWidget, and by default is similar to the below.
```
{searchboxquery}* {QueryString.scope} (SPSiteURL:{SiteCollection} (((FileExtension:zip OR FileExtension:txt OR FileExtension:doc OR FileExtension:docx OR FileExtension:xls OR FileExtension:xlsx OR FileExtension:ppt OR FileExtension:pptx OR FileExtension:pdf)(IsDocument:"True")) OR (contentclass:"STS_ListItem" Path:"{SiteCollection}/Lists/PageData_AK/*" {AkLanguageId:{Site.LanguageId}})))
```
The clause **SPSiteURL:{SiteCollection}** requires the items to be in the current site collection. To search other locations, you can modify the query:
* Remove the clause to search all site collections.
* Add another clause to search other site collection(s)
  * **(SPSiteURL:{SiteCollection} OR SPSiteURL:http://tenant.sharepoint.com/sites/central)**
* or Add another KQL clause to search other data
  * **(SPSiteURL:{SiteCollection} OR ContentType:CustomArticle)**
* Or a combination of the above

### Tagging
With items inside SharePoint, keywords can be added in various ways:
* Adding the **Enterprise Keywords** field to the content type
* Adding a seperate keyword field, of type text, note, or managed metadata

The **Enterprise Keywords** field is already mapped to a managed property (Keywords) but if a seperate field is added, then a new managed property would need to be setup. The key for the managed property is the [**Searchable**](https://docs.microsoft.com/en-us/sharepoint/search/search-schema-overview#managed-property-settings-overview) attribute:

> *Enables querying against the content of the managed property.  The content of this managed property is included in the full-text index. For example, if the property is "author", a simple query for "Smith" returns items containing the word "Smith" and items whose author property contains "Smith".*

A managed property with the searchable attribute checked will allow its content to be searched in a normal text search, without having to use a specific field clause in your search query.

### Ranking
Through the usage of the **XRANK** operator, it is possible to have dynamic control over ranking. This can easily be added to any query by wrapping it with one or more XRANK operators. 

**( [original query] XRANK(cb=100) SPSiteURL:{SiteCollection})**

An example full query
```
({searchboxquery}* {QueryString.scope} (SPSiteURL:{SiteCollection} (((FileExtension:zip OR FileExtension:txt OR FileExtension:doc OR FileExtension:docx OR FileExtension:xls OR FileExtension:xlsx OR FileExtension:ppt OR FileExtension:pptx OR FileExtension:pdf)(IsDocument:"True")) OR (contentclass:"STS_ListItem" Path:"{SiteCollection}/Lists/PageData_AK/*" {AkLanguageId:{Site.LanguageId}}))) XRANK(cb=100) ContentType=Item)
```

Examples:
* This example will boost items in the current site collection
* **( [original query] XRANK(cb=100) SPSiteURL:{SiteCollection})**
* This example will boost PDF files with a filename matching the search term
* **( [original query] XRANK(cb=100) (?filename:{searchboxquery} and ?filetype:pdf))**
* This example will boost items whose site title matches the search term
* **( [original query] ?SiteTitle:{searchboxquery})**
* You can also reduce the rank of items - This example will decrease items with the keyword "Something"
* **( [original query] XRANK(cb=-10000) keywords:Something)**

### References
* https://docs.microsoft.com/en-us/sharepoint/search/search-schema-overview#managed-property-settings-overview
* https://docs.microsoft.com/en-us/openspecs/sharepoint_protocols/ms-kql/36b3c22e-2f24-4096-99df-919f40d16864
