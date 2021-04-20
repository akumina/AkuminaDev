## Handlebars helpers in the Akumina Framework

| Helper | Description |
| -- | -- |
| AddSPALink | |
| FoundationFormatDate | Only present in the foundation site |
| FoundationGetJobVacanciesMaxHeight | Only present in the foundation site |
| FoundationGetNewsListImageUrl | Only present in the foundation site |
| FoundationGetProfileAvatar | Only present in the foundation site |
| FoundationGetProfileTitle | Only present in the foundation site |
| FoundationGetSPFieldUrlValue | Only present in the foundation site |
| FoundationNewsListHide | Only present in the foundation site |
| FoundationUnpackMetadataTags | Only present in the foundation site |
| FoundationUnpackMetadataTagsAsString | Only present in the foundation site |
| IsSPALink | |
| SearchResultIcon | |
| WorldClockLowerCase | Only present in the foundation site |
| WorldClockPlaceHolderImage | Only present in the foundation site |
| akdateformat(date,format) | Outputs the date based on the format provided - see [akdateformat](#akdateformat) |
| blockHelperMissing | |
| configurationcontext(param) | Allows access to the Akumina.Digispace.ConfigurationContext object, example: Akumina.Digispace.ConfigurationContext[param] |
| debug | See https://akumina.github.io/docs/Ak-Debugging#debug-in-the-view |
| each | |
| formatTimeRelative | |
| getInitials | |
| getThumb | |
| helperMissing | |
| ifEqual(first,second) | Equivalency comparison |
| log | |
| lookup | |
| pagecontext | Allows access to the Akumina.Digispace.PageContext object, example: Akumina.Digispace.PageContext[param] |
| startnewrow | |
| translate(token) | Allows access to the Akumina.Digispace.Language.GetText function, example: Akumina.Digispace.Language.GetText(token). See https://github.com/akumina/AkuminaTraining/wiki/Multilingual-tokens#tokens-in-views |
| unless | |
| with | |
| workspacecontext | |

## akdateformat
The **akdateformat** helper is used to format dates within a view:

    {{akdateformat PublishDate "date"}}
    
The helper's third parameter uses the options present at **Akumina.Digispace.SiteContext.DateFormat**:
* 12hourformat: "MMM D h:mm A"
* 24hourformat: "D MMM HH:mm"
* date: "DD"
* dateandyear: "D, YYYY"
* dateformat: "mm/dd/yy"
* day: "dddd"
* daymonthdateyear: "dddd, MMMM DD, YYYY"
* daytimeampm: "ddd h:mm:ss A"
* displayformat: "MM/DD/YYYY"
* euroformat: "DD/MM/YY HH:mm"
* hourandmin: "h:mm A"
* languagecode: "en-US"
* momentformat: "MM/DD/YY"
* month: "MMMM"
* monthanddate: "MMMM DD"
* monthdatelongyear: "MMM DD, YYYY"
* monthdateyear: "MMMM DD, Y"
* shortday: "ddd"
* shortmonth: "MMM"
* shortmonthanddate: "MMM DD"
* shortyear: "YY"
* standardformat: "MM/DD/YY h:mm A"
* timeseparator: ":"
* timeseparatorkey: ":"
* year: "YYYY"
* yearmonthdate: "YYYY-MM-DD"
