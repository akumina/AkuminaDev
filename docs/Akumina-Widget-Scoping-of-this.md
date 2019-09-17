---
id: Akumina-Widget-Scoping
title: Scoping of 'this' in Typescript widgets
---

# Applies to
All versions of Akumina supporting Typescript

# Overview
The purpose of this article is to outline and remedy some of the nuances and problems of scoping when using Typescript widgets. Unlike plain javascript, creating a class-level variable to capture scope is a bit more tricky due to Typescript's strong typing and mandatory referencing of 'this'.

## Getting Started

It's important to note the current implementation of scoping used in widgets written in plain javascript. Typically, upon opening the .js file of any modern widget, you will find something similar:

```javascript
var CustomWidget = function() {
    var _cur = this;
};
module.exports = CustomWidget
```

This is a very concise, simple, and efficient way of managing scope using plain javascript. Because the var _cur is defined within the function, the value does not become overwritten by changing scopes or other code executing in the same scope from outside the function. All references to [this] are then replaced by [_cur] and it quite literally just works.


## Why this doesn't work in Typescript

Typescript is strongly typed. Because of this, all references to class-level members, properties, and functions, must be strongly typed as well. Taking the previous example, the following would not work:

```typescript
export class CustomWidget {
    private _cur: CustomWidget = this;

    constructor() {}
}
```

It doesn't work for the very simple reason that, because _cur is a class-level property, it must be referenced by [this._cur], thereby defeating the purpose of creating a class-level variable to keep track of the scoping of [this]. If you lost track of the scope of the class, you lost track of the variable responsible for tracking the scope of the class.

Additionally, we're prone to losing scope at certain points which requires a work-around of sorts to be implemented. Take the following function for example, which is present in every modern widget:

```typescript
public Init(props: any): void {
    Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', this.Render, this.properties.SenderId);
}
```

This is effectively the exit point of the widget. Once the subscription is made, the individual widget's processing finishes until the subscription is published via the framework. When the publish is made, the scope switches from the individual widget to the scope of the caller. Therefore, [this] is no longer [CustomWidget] which leads to a load of exceptions being thrown.

Lastly, certain functions can cause loss of scope, such as the following promise:

```typescript
public BindLoadingTemplate() {
    new Akumina.Digispace.AppPart.Data().Templates.ParseTemplate(this.properties.DisplayTemplateUrl, { Loading: true })
        .then(function(html) {
            //Do Work
        });
}
```

When the promise resolves and the .then() function fires, scope is switched from whatever it was previously to the scope of the promise. [this.properties] is undefined and will throw an exception. The instance of [this] is no longer [CustomWidget].


## Typescript Work-arounds

As noted, it is very easy to lose scope in widget code and the vanilla javascript implementation does not work in Typescript. So, what can be done?

The most immediate solution would be Lambda syntax. Lambdas in Typescript transpile down into scope-safe javascript, typically by injecting the line

```javascript
var _this = this;
```

before the Lambda function and replacing the instances of [this] with [_this]. There are some precautions before using lambda expressions, however, mainly whether they're supported in the target browser or not. Lambda functions are, by default, not supported in IE11. The important thing to note, however, is that Typescript is simply an abstraction layer on top of javascript. Typescript is transpiled down into Javascript, so as long as your target ES version is 5 or below, the transpiled Javascript will work in IE11. ES6 and above will not work in IE11.

Taking the [Init] function example from earlier, it can be rewritten as the following:

```javascript
public Init(props: any): void {
    Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', () => { this.Render() }, this.properties.SenderId);
}
```

This uses Lambda syntax in Typescript which is transpiled down into Javascript that solves the scoping problems. Likewise, the BindLoadingTemplate example can be changed in the same manner to produce the desired results:

```javascript
public BindLoadingTemplate() {
    new Akumina.Digispace.AppPart.Data().Templates.ParseTemplate(this.properties.DisplayTemplateUrl, { Loading: true })
        .then((html) => {
            //Do Work
        });
}
```


## Ideas that don't quite work

In the spirit of maintaining the vanilla implementation and just porting over to Typescript, the following idea occurred to me:

```javascript
declare var _cur: CustomWidget;
export class CustomWidget {
    constructor() {
        _cur = this;
    }
}
```

This seems like it works until you have multiple widgets (of the same type is optional) on the same page. Because the variable is declared outside of the class instance, it's prone to be overwritten by other widgets using the same implementation. I'm currently unsure of the scope this variable lives in but there does seem to be overwriting between scopes/instances of multiple widgets.


# More to come