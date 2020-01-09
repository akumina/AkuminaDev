---
id: Akumina-Widgets-Overview
title: Akumina Widgets Overview
---


### Overview

The purpose of this article will be to illustrate and elaborate on some of the different kinds of widgets offered by the Akumina Framework. Some of the information presented will link back to other relevant pages, such as the ["Akumina Widget Builder"](/docs/Akumina-Widget-Builder) and the ["React Article"](/docs/Yo-Akumina-React).


### Frameworks

The Akumina Framework currently supports three different frameworks in which to write Widgets. These frameworks are as follows:

* Vanilla Javascript

* Typescript targeting ES5 by default

* ReactJS, targeting versions React V16.7.17 and ReactDOM V16.0.6

The framework can be chosen during the ["Yo Akumina"](/docs/yo-akumina) installation process. The EcmaScript and React versions can be changed at will from your tsconfig.json and package.json files respectively.

It is also worth mentioning that you should avoid mixing and matching Javascript Frameworks in the same project. For instance, a project set up to use React will use the React compiler for all widgets currently in the project. While work-arounds can be made, for ease of portability and maintainability, we do not suggest mixing Frameworks.


### Basic Widget Examples

Samples of bare-bones widget code can be found on the ["AkuminaDev Github"](https://github.com/akumina/AkuminaDev). Each subfolder contains an example of a project structure and a sample widget created through the Yeoman Generator. A general overview of each widget in its respective Framework is explained below.


## Vanilla Javascript Widgets

An example of a Vanilla Javascript widget can be found ["Here"](https://github.com/akumina/AkuminaDev/tree/master/FrontEndSimple).

Widgets created using vanilla Javascript are self-contained. All relevant code to the specifics of the widget, its properties, its functionality, and logic are contained within the widget itself by default. 


## Typescript Widgets

An example of a Typescript widget can be found ["Here"](#). (This is currently in development)

Typescript widgets allow the developer to take full advantage of type-safety and intellisense, as well as more classical OOP paradigms such as easier use of polymorphism, inheritance, etc, by using Typescript targeting ES5 by default. It is worth noting that the Typescript option "use-strict" is defaulted to true.



## React Widgets

An example of a React project can be found ["Here"](https://github.com/akumina/AkuminaDev/tree/master/FrontEndReact) and ["Here"](https://github.com/akumina/AkuminaDev/tree/master/ReactComponentDemo).

Similar to Vanilla Javascript widgets, you'll notice that React widgets are self-contained in a similar way. However, by making use of the React Framework, it is very simple to make widgets more extensible via sub-components. There are more advanced examples included in the repository that are explained more in-depth on the ["Akumina React Widgets"](/docs/Akumina-React-Widgets) page.

Unlike Vanilla Javascript or Typescript widgets, you'll notice that the React widgets do not make use of the view or the Handlebars templating engine. That information is also covered more in-depth on the React page.