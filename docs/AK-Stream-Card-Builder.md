---
title: Akumina Stream Card Builder
id: AK-Stream-Card-Builder
---


### Overview

The purpose of this article will be to explain the functionality and processes of, as well as illustrate the usage of, the Akumina Stream Card Builder packaged with the release of Akumina Framework 5.0 featuring the Activity Stream Experience.

## Assumptions

The following assumptions are made in this document:

* Sharepoint Site with Akumina Framework 5.0 or higher

* Project Structure with the latest Akumina Framework NPM Packages

* Activity Stream License enabled

### What is the Stream Card Builder?

The Stream Card Builder is similar to the Widget Builder and Virtual Page Builder - It automates the scaffolding and structure of Stream Cards to allow end developers to jump straight into designing their User Experience, Functionality, and Connectivity.

First, let's define the idea of a Stream Card:

![](picture)

As we can see in the diagram above, the Activity Stream is capable of exposing a variety of data from 3rd parties, Sharepoint, Outlook, and more. The Activity Stream exposes this data through the use of various Stream Cards. Many cards come bundled with the Akumina Installation. However, Akumina also provides end users with the ability to design, create, inject, and connect their own custom cards into the Activity Stream experience.

## Commands 

The Stream Card Builder is available via the following NPM Packages:

```node
npm run cardstub <name>
```

The ***cardstub*** command starts the process of creating a new Stream Card. The ***<name>*** parameter is optional. If supplied, the name parameter will be used as the name of the Stream Card. If not supplied, you will be prompted to enter a name for the Stream Card.

The following prompts are included in the process:

* What is the name of your stream card?
    * If applicable
    * Default: None
* Which namespace would you like your card to be in?
    * Default: Akumina
    * Example: Akumina.StreamCards.CustomCard
* Would you like to enable Comments?
    * Default: true
* Would you like to enable Reactions?
    * Default: true
* Would you like to enable the Card Header?
    * Default: true

***NOTE***: When supplying the name of your new Stream Card, do not suffix the name with "Card". The process will automatically suffix this to your given name. IE - A ***<name>*** parameter of *NewsDocument* will be output as *NewsDocumentCard*.

The process is similar to the following:

![](picture)

The output structure will be similar to the following:

```
root
   └src
      └js
        └streamcards
            └CustomCard
                ├config
                |    └config.json
                └js
                  ├models
                  |     └CustomCardModel.ts
                  └streamcards
                        └CustomCard.tsx
```

```node
npm run cardpkg <name>
```

The ***cardpkg*** command starts the process of packaging your Stream Card(s) for deploy using the Deploy Tool. The ***<name>*** parameter is optional. If supplied, the process will only package the specified Card if it exists. If not supplied, the process will process all folders underneath the *streamcards* directory. The output directory is similar to the normal **Widget Builder Package Command**:

```
root
   └sitedefinitions
            └assetdirectory (Defined in your .env file)
                    └streamcardpackages
```