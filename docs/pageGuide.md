---
id: pageGuide
title: Page Guide
sidebar_label: Page Guide
---

## Page system

The page system is as simple and solid as possible.
In the `page/` folder there are 4 different categories of views: the `view` folder,
in which the view pages are defined, which are used on multi-pages.
In the `open` folder, the page views are defined which are to be automatically indexed.
The navigation of the page is generated from these.
In the `private` folder, views are defined which should not be loaded directly,
but can be reloaded in parts.
In the `static` folder static pages are defined which can be loaded by static calls,
but not indexed.

## Page definition

Each defined view is described with 2 attributes.
On the one hand, the `Title` states
whether a title should be generated
the other is defined in the `master`,
whether the view is an element,
which should be rendered as a sub menu item,
the `master` defines which should be the master item.

        <?php
        
        /*
        PAGEINFO
        Title: true;
        Master: null;
        */
