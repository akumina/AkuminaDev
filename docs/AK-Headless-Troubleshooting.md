---
title: Headless Troubleshooting
id: AK-Headless-Troubleshooting
---

# Headless: Troubleshooting

## Overview

This article provides problem resolutions to common issues in Akumina Headless.

## The master page is not rendering
The site displays a message **Virtual master Page Error** and **Your master page is not compiled, this is a requirement in this version of the framework**.

The virtual master page is obtained via a web request to the headless site. Frist check for the presence of the file. Example assuming VirtualMasterPageFoundation.html as the master page:

    {{headless}}/akumina%20library/digitalworkplace/content/templates/masterpage/VirtualMasterPageFoundation.html

Also check the headless log for the following message: 

    SitePropertiesClient.GetVirtualMasterpage

This will indicate if there is a problem downloading the master page.
