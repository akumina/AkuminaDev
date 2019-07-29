---
id: version-4.5.1-App-Manager-Hide-login-dialog
title: Hide login dialog
original_id: App-Manager-Hide-login-dialog
---

# Applies to
All versions of Akumina

# Overview
Users login to the App Manager via SharePoint; if the user is logged out of the  App Manager, it may be confusing to have the login dialog presented when they arrive at the App Manager URL. This article describes how to hide the login dialog for the App Manager. 

# Steps
Inside the App Manager files, there is a css folder. Inside this folder there is a ak-custom.css - this is where the changes are to be made.

    Interchange\css\ak-custom.css

Inside the file, add the following style that will hide the login dialog on the login page.

    .ak-sign-in-box {
      display:none;
    }

The user/password dialog is now hidden on the page.