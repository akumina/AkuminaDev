---
id: AK-Virtual-Page-Builder-Custom-Layouts
title: Creating a Custom Layout
---

# Applies to

Akumina Framework 5.5+

## Overview

In the event you want to load custom layouts in the page builder to provide different html,css.. (see ContainerLayouts_AK) [Making a Custom Layout](https://akumina.github.io/docs/AK-Row-Editing-Custom-Layout)

With the performance improvements introduced in 5.5 the use of seperate container view layouts (.html) have been deprecated with inline pre-compiled views

### Usage

Existing container layout .html should be run through the [JSX Compiler](https://akumina.github.io/docs/ReactViews-JSX-Compiler) (CTRL+UP, choose JSX Compiler on the left menu)

```html
<div class="one-z-sm12 row">
  <div class="cell small-12 medium-12 columns col-12" key="1">
    {(showZoneTitle) ?
    <h1 class="ak-zone-heading">
      {Akumina.Digispace.Language.TryGetText("pagebuilder.column1")}
    </h1>
    : ("")} {validateZone(children[0])}
  </div>
</div>
```

Place the results of the ouput below in your switch statement that matches your custom zonelayoutid

This code will most likely be placed in a digitalworkplace.custom.js file - but feel free to put where ever your custom code is loaded from

```js
window.AkCustomZoneLayoutCallback = function (zoneLayoutId) {
  var ret = null;

  switch (zoneLayoutId) {
    case "one-z-sm12": //your custom zone defined in CustomLayouts_AK (LayoutId Column)
      ret = `React.createElement("div",
    { "class": "one-z-sm12 row" },
    React.createElement(
        "div",
        { "class": "cell small-12 medium-12 columns col-12", key: "1" },
        showZoneTitle ? React.createElement(
            "h1",
            { "class": "ak-zone-heading" },
            Akumina.Digispace.Language.TryGetText("pagebuilder.column1")
        ) : "",
        validateZone(children[0])
    )
)`;
      break;
  }

  return ret;
};
```
