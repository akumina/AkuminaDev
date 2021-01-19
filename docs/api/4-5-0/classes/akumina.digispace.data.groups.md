---
id: "akumina.digispace.data.groups"
title: "Groups"
sidebar_label: "Groups"
---

[definitely-typed](../index.md) › [Akumina](../modules/akumina.md) › [Digispace](../modules/akumina.digispace.md) › [Data](../modules/akumina.digispace.data.md) › [Groups](akumina.digispace.data.groups.md)

## Hierarchy

* **Groups**

## Index

### Methods

* [GetGraphDataWithFullUrl](akumina.digispace.data.groups.md#getgraphdatawithfullurl)
* [GetGraphUrl](akumina.digispace.data.groups.md#getgraphurl)
* [GetGroupForPage](akumina.digispace.data.groups.md#getgroupforpage)

## Methods

###  GetGraphDataWithFullUrl

▸ **GetGraphDataWithFullUrl**(`url`: string, `param`: any): *Promise‹any›*

*Defined in [index.d.ts:1345](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1345)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`param` | any |

**Returns:** *Promise‹any›*

**Sample Code:** You can utilize the sample code below to make calls to the MS Graph API with mulitple parameters, in this we are calling the Graph Calendar API to get current users Outlook meetings for today - 
```javascript
 this.myMeetings = function() {
                    var data = {
                        todayItems: []
                    };
                    data.Title = _cur.properties.Title;

                    var today = moment().utc();
                    var todayStart = today.toISOString();
                    var todayEnd = today.endOf('day').toISOString();
                    var GraphURL = "https://graph.microsoft.com/v1.0/me/calendarview";
                    var todayGraphApiBaseUrl = GraphURL + "?startdatetime=" + todayStart + "&enddatetime=" + todayEnd + "&$top=" + _cur.properties.MaxItems + "&$select=subject,start,end";
                    var cacheKey = "/users/" + username + "/" + prop;
                    cacheKeyObject = { key: cacheKey, dependencies: [] };

                    new Akumina.Digispace.Data.Groups().GetGraphDataWithFullUrl(todayGraphApiBaseUrl, cacheKeyObject).done(function(response) {
                        data.Title = _cur.properties.Title;
                        var maxCount = _cur.properties.maxitems;
                        if (response.value.length > 0) {
                            for (var i = 0; i < response.value.length; i++) {

                                var currentDate = moment.utc();
                                var meetingStartDate = moment.utc(response.value[i].start.dateTime);
                                var meetingEndDate = moment.utc(response.value[i].end.dateTime);
                                var timeToStart = moment.duration(meetingStartDate.diff(currentDate));
                                var duration = moment.duration(meetingEndDate.diff(meetingStartDate));
                                duration = duration.asMinutes();
                                var timeOffset = moment().utcOffset();

                                var item = {
                                    "Subject": response.value[i].subject,
                                    "StartDate": moment(response.value[i].start.dateTime).add('minutes', timeOffset).format("MM/DD"),
                                    "StartDay": moment(response.value[i].start.dateTime).add('minutes', timeOffset).format("dddd"),
                                    "StartTime": moment(response.value[i].start.dateTime).add('minutes', timeOffset).format("hh:mm A"),
                                    "TimeToStart": timeToStart,
                                    "Duration": duration
                                };

                                data.todayItems.push(item);
                            }

                        } 
                    });
                }
```

___

###  GetGraphUrl

▸ **GetGraphUrl**(`prefix`: string, `query`: string, `filterQuery`: string, `cacheKey`: string): *string*

*Defined in [index.d.ts:1347](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1347)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | string |
`query` | string |
`filterQuery` | string |
`cacheKey` | string |

**Returns:** *string*

___

###  GetGroupForPage

▸ **GetGroupForPage**(`pageId`: string): *JQueryDeferred‹any›*

*Defined in [index.d.ts:1346](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0b97a539e8/types/akumina-core/index.d.ts#L1346)*

**Parameters:**

Name | Type |
------ | ------ |
`pageId` | string |

**Returns:** *JQueryDeferred‹any›*
