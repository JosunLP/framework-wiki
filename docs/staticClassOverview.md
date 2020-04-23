---
id: staticClassOverview
title: Static class Guide
sidebar_label: Static class Guide
---

## Introduction

In this section we are going to cover every static class,
that exists at the time of version 1.5.2 and show some of their methods.
At this point we try to provide a rough overview
to cut the most important areas.

## Main class

The main class provides the core functions of the framework and bundles them.

### - `main` Method

The `main` method is responsible for rendering the content of the website. It generates the page content from the information passed to it.

### - `navigation` Method

The `navigation` method generates for the frontend the navigation and renders it.

### - `getUrlInterpreter` Method

The URL requests are validated and interpreted in the `getUrlInterpreter` method. It returns the name of the page to be loaded.

### - `checkRequest` Method

This method takes care of the validation of `get` and ` post` requests.


## Build class

The build class is responsible for the built in deploy system. It is called via a CLI and is an alternative to deploy using the shell script.

## CLI class

The CLI class contains decorators for building CLIs.

## ConfigLoader class

This class is responsible for loading the configuration.

### - `loadConfig` Method

`loadConfig` is called on the class to load a config file. For this, the relative path of the config is passed to it.

## DatabaseHandler class

This class is responsible for communication with the database.

### - `createSqlRequest` Method

`createSqlRequest` is the method used to create and send database requests. For this, the corresponding values of the method must be transferred: `createSqlRequest($mode, $tableName, $rows, $values, $valueString)`

* `$mode`
    - The mode of the SQL request you want to send. [`insert`,`alter`,`create`,`select`,`update`]
* `$tableName`
    - The name of the table you want to access.
* `$rows`
    - An array of the rows you want to access.
* `$values`
    - An key-value array of the records you want to access.
* `$valueString`
    - An string where you define possible alternative selectors for your requests.

## DatatypeConverter class

This class provides functions to convert file formats like `XML` and `JSON`.

### - `xml2json` Method

In this method, the passed xml string is converted to a json object.

### - `json2xml` Method

In this method, the passed json object is converted to an xml string.

## ErrorHandler class

The ErrorHandler class is responsible for processing and outputting caught errors

### - `FireError` Method

The method fires a custom error popup in the frontend when catching the error.
An error log is created at the same time.

### - `FireWarning` Method

The method fires a custom warning popup in the frontend when catching the error.
An error log is created at the same time.

### - `FireSuccess` Method

The method fires a custom success popup in the frontend and can be used as desired.

### - `CreateError` Method

The `CreateError` method is a more complex variant of creating an error. Both the weighting and the fatality of the error can be defined when firing. In any case, a log is written.

### - `FireJsonError` Method

This error can be triggered with API errors. A log is created and the request is rejected.

### - `FireCLIError` Method

This method was designed for CLI errors. She writes a log and cancels the current action in the CLI.
It also returns the Error details.


## JsonHandler class

### - `FireSimpleJson` Method

This method creates a simple `JSON` object from a simple key-value and renders it.

### - `BuildJson` Method

An array of objects is passed here and the method generates a JSON object from it before returning it.


## Mailer class

The mailer class uses the `createMail` method to send standardized mails from the backend. An installed mail server is required.