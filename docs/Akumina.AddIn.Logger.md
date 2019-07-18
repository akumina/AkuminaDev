---
id: Akumina-AddIn-Logger
title: Akumina.AddIn.Logger
---

# Applies to
Akumina 3.4 Framework and above

# Akumina.AddIn.Logger
The **Akumina.AddIn.Logger** namespace is used to log various elements within the Akumina framework.

# Errors
To log an error, use the **WriteErrorLog** method:

    Akumina.AddIn.Logger.WriteErrorLog('An error')

this will log a console error: **Akumina Caught Error:  An error**

# Warnings
To log a warning, use the **WriteWarnLog** method:

    Akumina.AddIn.Logger.WriteWarnLog('Warning')

this will log a console warning: **Akumina Caught Warning:  Warning**

# Tracking execution time
To trace the time it takes between 2 points in the code, you will use a trace log. To start the trace log, where "A custom trace log" is the name of the element being traced:

    Akumina.AddIn.Logger.StartTraceLog('A custom trace log');

To end the trace log:

    Akumina.AddIn.Logger.StopTraceLog('A custom trace log');

> Note the names must match to close the trace.

This will log the trace time in the console:

    Akumina A custom trace log: 4427.97900390625ms