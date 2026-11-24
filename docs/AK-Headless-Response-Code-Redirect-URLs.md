---
id: AK-Headless-Response-Code-Redirect-URLs.md
title: Response Code Redirect URLs
---
## Overview

Response Code Redirect URLs send users to a URL you choose when the headless feature returns an error response code. The redirect applies to any response code from 400 to 599. Each response code can have its own redirect URL.

Use the {previousurl} token in a redirect URL to pass along the URL that triggered the redirect.

## Supported response codes
Redirects apply to response codes from 400 to 599. Codes outside this range do not trigger a redirect.
* 400 to 499: client error codes, such as 400 Bad Request or 404 Not Found
* 500 to 599: server error codes, such as 500 Internal Server Error or 503 Service Unavailable

## Adding a redirect URL
Select Add to create a redirect. The table has two columns, Response Code and Redirect URL.

Each row maps one response code to one redirect URL.

* Response Code: a value from 400 to 599.
* Redirect URL: the URL users are sent to. Add {previousurl} where the triggering URL should appear.

To add a Response Code Redirect

* Go into the headless configuration screen at {headless}/admin/configsettings
* Locate the section Response Code Redirect URLs
* Click Add and fill out
* Response Code
* Redirect URL
* Add others as needed.
* Click Save at the top.

## Get the Error URL with the {previousurl} token

The {previousurl} token inserts the URL that triggered the redirect. Place it in the redirect URL wherever you want that value to appear.

For example, this redirect URL sends users to redirecturl.com with the triggering URL in the previousurl parameter:

    https://redirecturl.com?previousurl={previousurl} 

## Example configuration

This example sends users to a redirect page when a request returns a 404 Not Found.

| Response Code | Redirect URL |
| --- | --- |
| 404 | https://redirecturl.com?previousurl={previousurl} |

If a request to https://example.com/missing-page returns a 404, the user is redirected to https://redirecturl.com?previousurl=https://example.com/missing-page.




 
