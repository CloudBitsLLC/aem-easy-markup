# Easy Markup

Easy Markup is a collaboration tool for Adobe Experience Manager. It was created to speed up the creation of the markups on a running AEM instance.

## Background

Web designers usually create markups for components using external tools. It means, the final approved markup mostly doesn't fit the project styles and sometimes requires rework and extra effort to get it working properly (in extreme cases, the entire markup needs to be rewritten at all by the front end developers).

## Why aemfed is not enough?

Aemfed is a great tool for AEM front end developers. But for marketers, it means they need to have a local AEM instance with all the content, templates, assets, etc, taken from an integration environment (STAGE, DEV or even PROD) to start working, plus, they need the project source code in their local environment (probably more than one repository), build it and configure AEM. This is a huge setup just to create markups.

## How Easy Markup can help?

Easy Markup package adds a new editing mode to the AEM page editor. This new mode allows the author to add markups to any responsive grid of any page, coming from any project, without any modification of the original source code. The markup allows the user to edit the HTML, CSS and JS code of the markup in a very straightforward way, using the left side panel (AEM standard panel of the editor).

## How I can install it?

Getting Easy Markup working on AEM is very simple:
1 - Download the package or build it from github.
2 - Install it on an author environment (DEV or STAGE, we strongly don't recommend to install any extra package on a PROD environment).
3 - Grant access to the instance to your markup web designers.
4 - Let them create pages with the new markups!

## What about style system?

Easy Markup comes with another extra feature: adds a toolbar button on each component (text component, carousel, teaser, etc), that creates a copy of the component, with Easy Markup features enabled.
This allows the author to create a new style for that component, by editing the CSS section of the markup. Once the web designer finishes the style edition, the new styles should be added to the source code and to the style system, as a visual variation of the existing component.

## Easy Markup will affect the overall Author performance?

Easy Markup is a lightweight plugin of AEM. It's a small and fast library for markup creation using AEM javascript hooks of the authoring interface. The only external dependency is ACE (https://ace.c9.io/) and it's loaded in the only case when the Easy Markup layer is activated (it doesn't affect the normal authoring experience of AEM).

## Building

This project uses Maven for building. Common command:
From the root directory, run ``mvn -PautoInstallPackage clean install`` to build the content package and install to a CQ instance.

## Compatibility

Developed and Tested on AEM 6.5, but it should works on 6.3 & 6.4 without any issue.
