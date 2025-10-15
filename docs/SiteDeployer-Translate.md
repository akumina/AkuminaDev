## Site Packages: Translate

# Applies to
Site Deployer

# Site Deployer Step
The site deployer step that uses this is **translate**

    options translate

# Capabilities
The *translate* option takes tokens in the source language en-us and translates them to any number of languages.


# Data
The option expects a valid machine translation key (it can be the same as used in the App Manager).
Using the *assetdirectory* value "Translate", the source file will be in:

> sitedefinitions/Translate/Translate/en-us.js

Inside the en-us file, use the default token format as the starting point:

    lang = {
        common: {
            "close": "Close",
            "save": "Save"
        }
    };

To translate into a language, ensure that a folder with the language name is present. For example, to translate into German, add a folder named "de-de":

> sitedefinitions/Translate/Translate/de-de/

For French, add a folder "fr-fr":

> sitedefinitions/Translate/Translate/fr-fr/

Any folder will be matched to a language and have a translation created inside. The translation will have the language as the file name:

> French:
> sitedefinitions/Translate/Translate/fr-fr/fr-fr.js

> German:
> sitedefinitions/Translate/Translate/de-de/de-de.js

The tokens can then either be used in place of or merged into the respective languages.

# Sample usage
The example usage below passes a machine translation key and uses the data in the *Translate* folder. Note, no other values are needed for operation.

    options translate assetdirectory Translate clientid na clientsecret na machinetranslatorkey $(translationkey) spdirectory DigitalWorkplace spurl na
