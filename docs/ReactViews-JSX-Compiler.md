---
id: ReactViews-JSX-Compiler
title: Working with custom JSX Views
---

With the removal of Babel.js in the latest major version of 5.5 and also removed from the latest 5.0 patch an additional step will be required to inject custom JSX views into OOB React based widgets.

The primary reason for the removal of Babel.js was performance. Especially on under powered client machines.

Take a look at this capture using the Chrome Performance tool - this is an extreme example (very slow machine - 6x slowdown)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/JSX/SlowJSXClient.PNG)

As of today this affects the following areas when wanting to make customizations.

* Virtual Master Page

Views being used by these widgets:

* SummaryLinksWidget
* ActivityCommentsWidget
* ActivityNotificationsWidget
* ActivityStreamWidget
* UserActivityWidget
* SocialMediaPostWidget

The Akumina debugger has been updated to provide easy conversion using a UI. There will be developer tools made available to provide this conversion at build time.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/JSX/Debugger-JSXCompiler.PNG)

To use the tool, simply paste in your existing raw JSX code and it will be converted to compiled React code. This compilation process will no longer need to be run by the client machine when rendering Akumina pages.

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/JSX/Debugger-JSXCompiler-Example.PNG)