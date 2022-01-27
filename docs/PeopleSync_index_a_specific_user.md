## PeopleSync: index a specific user

### Overview

When using the Akumina PeopleSync, users will change their property information. There is a latency between when the user profile information is changed and when change reflect in the people directory, which is synchronized from the user store.

The use case where a user changes some properties that do not reset the user modified flag, hence the user is not re synced in a timely manner, would be addressed by this guidance.

This synchronization can be forced for a given user, which would re sync their record. The following javascript should be called:

````Javascript
new Akumina.Digispace.Data.Interchange().ResyncUser(currentUserAccountName);
````

The user is then added to the queue to be re synced.
