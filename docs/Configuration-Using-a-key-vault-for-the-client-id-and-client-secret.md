---
id: Configuration-Using-a-key-vault-for-the-client-id-and-client-secret
title: Using a key vault for the client id and client secret
---

## Applies to
Akumina 4.1.1901.0110 and later

## Introduction
This article details how to configure the Akumina App Manager to obtain the client id and client secret from a key vault.

## Assumptions
It is assumed that you have the **ClientId** and **ClientSecret** keys from the web.config file.

## Add the client id and secret to the key vault
In the Azure key vault, create a new secret. For the **Value**, set it to be:

    {"ClientId":"<value>","ClientSecret":"<value>"}

>NOTE: This is case sensitive.

With the respective values for **ClientId** and **ClientSecret**.

## Edit the config file
Add the following key into appsettings, using the key vault url as the value:

    <add key="akumina:SpClientIdSecretKeyVaultUri" value="<keyvaulturi>"/>

## Remove the client id and secret values from the web.config
In the **web.config** file, remove the values present in the **ClientId** and **ClientSecret** keys.

    <add key="ClientId" value="" />
    <add key="ClientSecret" value="" />