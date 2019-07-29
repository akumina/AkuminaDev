---
id: version-4.5.1-Configuration-Edit-the-Redis-cache-timeout
title: Edit the Redis cache timeout
original_id: Configuration-Edit-the-Redis-cache-timeout
---

## Applies to
Akumina 4.1.1901.0110 and later

## Introduction
This article details how to edit the Redis cache timeout.

## Ensure Redis is used for the token store in unity.config
In the **unity.config** file, replace the following key:

    <register type="IRepository[UserToken]" mapTo="AzureTableTokenStore" />

with

    <register type="IRepository[UserToken]" mapTo="RedisTokenStore" />

## Edit the Redis cache timeout settings
In the **interchange.settings.config** file, edit the cache setting. Note this is in seconds:

    <add key="akumina:CacheExpireInSeconds" value="3599" />

## Edit the Redis cache expiration mode
In the **interchange.settings.config** file, locate the following key. If it is not there, then add it:

    <add key="akumina:RedisTokenCacheExpirationMode" value="Sliding" />

Other allowable values are:

    <add key="akumina:RedisTokenCacheExpirationMode" value="Absolute" />

    <add key="akumina:RedisTokenCacheExpirationMode" value="Never" />

## See also
* [Configuring Redis Caching](https://content.akumina.com/learningcenter/Content/ConfiguringRedisCache.htm)