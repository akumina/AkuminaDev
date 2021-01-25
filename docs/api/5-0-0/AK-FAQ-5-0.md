---
id: AK-FAQ-5-0.md
title: Akumina Framework Version 5-0 FAQ & Nuances
---

### Overview

The purpose of this article is to provide expanded information, nuances, one-offs, gotcha's, etc, into the various functional components of the Akumina Version 5.0 Front-end and Back-end Framework. This is a general purpose article containing information for the 5.0 Version of the framework. 

### Akumina.Digispace.ConfigurationContext.UseEncryption

The EncryptData / DecryptData functions call the /api/connector endpoints only when **Akumina.Digispace.ConfigurationContext.UseEncryption** is set to true.

If set to false, these functions fallback to base64 encode/decode. 

The way to set **Akumina.Digispace.ConfigurationContext.UseEncryption** to true is to add a key **UseEncryption** in **DigispaceConfigurationIDS_AK** with value true and refresh configuration cache. 

Refreshing configuration cache can be done either from DWP Debug Dialog or Site creator “Update Configuration Settings” action under “Digital Workplace Core Site” option.

For additional information, please see the [Configuration Context](/docs/AK-Configuration-Context) article.