---
id: version-4.5.1-Akumina-Widget-Builder-Skipping-instances
title: Skipping instances
original_id: Akumina-Widget-Builder-Skipping-instances
---

# Skipping Instances in package generation

In the event that you do not want to deploy widget instances during a deployment you can tell the package command to do so. This is great way to avoid making changes to your config.json in source control, but rather dynamically change the behavior through Azure DevOps or other deployment processes.

```bash
npm run package -- --skipInstances=true
```
>**NOTE** - Leave the additional '--' before --skipInstances

This will generate your Widget Package successfully but prevent instances from being output from your config.json

If you want to do this for 1 particular widget only please use the following:

```bash
npm run package MyWidgetPackage -- --skipInstances=true
```

>**NOTE** - Leave the additional '--' before --skipInstances


