---
id: AK-Personas-Code-Examples
title: Personas - Code Examples
---

# Applies to
Akumina version 4.5 or higher

# Overview

The purpose of this page will be to discuss and illustrate some of the features of the Persona Management System. This will be a lower level article compared to others that will run code directly on a Sharepoint site through the debugger. There is no setup required aside from the Akumina 4.5 (or higher) Framework being present.

## Personas

Personas can be thought of as a bucket of users. It is important to make the distinction that they are not similar to groups or user groups. Another way to imagine Personas is to think of them as a collection of users. The users under a persona have similarities, such as Department, and these similarities are used to assign Personas to users.

Personas take a moderately more programmatic approach to this ideal while also retaining flexibility and extensibility. Furthermore, Personas allow admins to tailor experiences towards users sharing common traits. An example use-case would be News widgets. Let’s say there is a generic News widget that shows News Articles. However, being the wonderful administrator you are, you’d like to tailor this news experience to be more relevant to each user. To this end, you would create Personas based on City and/or State to show only the news that is relevant to the current user’s location. The wonderful part of all of this is that it can be done with a single widget instance.

### How do they work?

Personas work on two different fronts: User Context data and List-specific data.

#### User Context Data

User Context Data is modified through Impersonation. From the UI, select Impersonation and select a persona to impersonate. This will “impersonate” the persona by using the User Context values defined on the persona as your own. For instance, my user account is in the Human Resources department. Following the example from earlier, I’d only see the News tagged with the Human Resources metadata type. If I wanted to see IT related news, I’d Impersonate a persona with that department set. It’s just that easy!
One thing to keep in mind is that the widget must be able to support User Context tokens in its widget properties. {{UserDepartment}} is the token we’d use in this example. It will not work without this support.

For example, we have the Breaking News Widget which supports {{UserDepartment}} tokenization:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-breakingnewsprops.PNG)

The account I'm testing with is set to Human Resources. Therefore, the only news I'll be seeing will have the Human Resources category. If I wanted to see how this looked from the perspective of someone else, I could impersonate the Persona of another department to see what items appear under that Department. Additionally, you can verify the impersonated User Context properties through the debug menu.

#### List-Specific Data

List-Specific data is defined on the list itself and handled via the framework. A list can be enabled to allow Persona filtering by adding the AkuminaPersona content type to the list. This will add the Persona field to the list. If the List has an associated Content App through App Manager, it will be placed on the list of Persona Enabled Lists. Being on this list will automatically handle persona filtering without the need for the [enforcePersonaFiltering] flag detailed below. 

It is worth noting that both of these are automatically handled by the framework and do not require any developer intervention. 
However… what if it could?


### How do I Check?

There are a few ways to check Persona data, each is outlined below:

1. Debug Panel

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-debugpanel.PNG)

The Debug Panel shows the following information:
* User Personas - The Personas currently active on your user. This will include impersonated Personas as well.
* All Personas - This displays all active Personas on the site.
* Persona Enabled Lists - This displays the Lists currently registered to enforce persona filtering. These are automatically added when a Content App is created for the associated list.

2. Akumina.Digispace.UserContext.userPersonas

The above command, when used in the console or any Javascript executing within the scope of the Akumina Framework, will display the Personas associated with the currently logged in user.

3. Akumina.Digispace.ConfigurationContext.PersonaEnabledLists

Similar to the Debug Panel, the above command, when used in the console or any Javascript executing within the scope of the Akumina Framework, will display the lists currently registered to enforce persona filtering.



### Request Parameters

There are three request parameters to be aware of:

* skipPersonaFiltering

Pretty self explanatory, this flag will tell the framework to ignore persona filtering if the parameters are present. Please note that this will not override mandatory persona filtering.

* enforcePersonaFiltering

This property will enable persona filtering on a list that is not currently registered in the Persona Enabled Lists array. 


### Examples

For this demo, I created a list on an Akumina 4.5 Patch 2 site. This is a stock Sharepoint list with only the default fields and the AkuminaPersona content type, giving it the Persona field we'll need. This list is also not on the list of mandatory persona filtering, making persona-related filtering entirely optional:

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona_demolist.png)

As you can see above, I have 3 items in the list. Two of which have the [All] persona and one with a new, custom Persona: [Testsona].

Let's make a very basic call to the list without setting any parameters:

```javascript
var request = {};
request.listName = 'Demo_SG';
new Akumina.Digispace.Data.DataFactory(true).GetList(request).then(function(x) {
	var enumerator = x.response.listItems.getEnumerator();
	var itemArr = [];
	while(enumerator.moveNext()) {
		itemArr.push(enumerator.get_current());
    }
	console.log('Items found for this persona: ' + itemArr.length);
});
```

The output of this snippet is: 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-firstquery.PNG) 

This is entirely expected, as we've defined no filters on our request object, we're simply getting everything back that exists in the list. Wonderful!

Now, suppose we wanted to filter on our current Persona. The account I'm using to test is not associated with any specific Persona. Therefore, it has the [All] Persona by default. If we enable persona filtering by adding the below line to the snippet:

```javascript
request.enforcePersonaFiltering = true;
```

And run the snippet again, our output is: 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-secondquery.PNG) 

This is also expected. We have not defined any filtering on our request object. However, because persona filtering is now enabled, our query is decoratd with the persona filtering from the framework. Because my user account is in the [All] persona, it filters based on that persona giving us 2 results.

Moving on to Impersonation, if I were to impersonate Testsona, our test Persona, and run the snippet of code again, our output would change to: 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-impersonate.PNG)

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-thirdquery.PNG)

This may seem like undesired behavior but it is entirely accurate. As previously stated, my user account has no specific persona and is therefore in the [All] persona. We just impersonated the [Testsona] persona. The [All] persona does not go away, all users have it. So when we impersonate, we're appending the impersonated persona to our currently registered personas. So, when we run the above snippet, we're looking for all items where the Personas are in [Testsona] or [All]. Resulting in all items being returned.

To further illustrate this, let's expand our testing a little bit:

* I've created a new Persona through App Manager's Persona Builder: Other Testsona
* I've added a new entry to the Demo_SG list: [Other Testsona] with a persona value of [Other Testsona]

Running the above snippet one more time, our output is 3 items found. Which is congruent with how the system is expected to work. Fantastic!
If you were to impersonate [Other Testsona] instead and run the same snippet, your output would still be 3 items found: 2 for [All] and 1 for [Other Testsona].


Moving on, let's try to skip persona filtering. Setting the following property on the request object:

```javascript
request.skipPersonaFiltering = true;
```

and running the above snippet produces an output of: 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-fourthquery.PNG)

skipPersonaFiltering and enforcePersonaFiltering cannot both be true at the same time as these are contradictory properties. If the framework detects both of these values are set to true, it will throw an exception and refuse to process the request object.
So, simply turn off enforcePersonaFiltering or omit the property entirely and run the query once again. Our output is: 

![](https://akuminadownloads.blob.core.windows.net/wiki/AkuminaDev/akpersona-fifthquery.PNG) 

It will return all of the items in the list regardless of your currently impersonated persona.

## Coming soon

Stay tuned for updates!