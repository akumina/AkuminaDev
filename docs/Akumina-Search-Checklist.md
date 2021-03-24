## Search Optimization Checklist

| Item | Action |
| -- | -- |
| Page exclusion | Determine which pages to exclude from the search. See "Search Page Exclusion List (Part of Core Site)" at https://community.akumina.com/knowledge-base/foundation-site-installation/|
| Content Exclusion | Determine which sections of the site to exclude, for example the header and footer. See "Excluding Certain Content from Search" at https://community.akumina.com/knowledge-base/configuring-search-for-akumina-widget-content/ |
| Tagging | Determine if and how additional keywords should be added to improve search result findability. See [Tagging](#tagging) |

### Tagging
With items inside SharePoint, keywords can be added in various ways:
* Adding the **Enterprise Keywords** field to the content type
* Adding a seperate keyword field, of type text, note, or managed metadata

The **Enterprise Keywords** field is already mapped to a managed property (Keywords) but if a seperate field is added, then a new managed property would need to be setup. The key for the managed property is the [**Searchable**](https://docs.microsoft.com/en-us/sharepoint/search/search-schema-overview#managed-property-settings-overview) attribute:

> *Enables querying against the content of the managed property.  The content of this managed property is included in the full-text index. For example, if the property is "author", a simple query for "Smith" returns items containing the word "Smith" and items whose author property contains "Smith".*

A managed property with the searchable attribute checked will allow its content to be searched in a normal text search, without having to use a specific field clause in your search query.

### References
* https://docs.microsoft.com/en-us/sharepoint/search/search-schema-overview#managed-property-settings-overview
