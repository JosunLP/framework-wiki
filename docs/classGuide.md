---
id: classGuide
title: Class Guide
sidebar_label: Class Guide
---

## Class system

The framework's class system is essentially based on static classes,
which are loaded dynamically from the `class /` folder at app start. These provide the functions for the framework and the logic is defined in them.
A class has to be defined in a certain way for the framework. The name of the class file must be structured according to the following pattern `ClassName.class.php`.
The namespace in which the classes are defined is `webapp_php_sample_class`.

        <?php
        
        
        namespace webapp_php_sample_class;
        
        class Main
        {

