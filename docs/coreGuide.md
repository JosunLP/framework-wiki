---
id: coreGuide
title: Framework Core Guide
sidebar_label: Framework Core Guide
---

## Introduction

The core section is the central linchpin of the framework.
The `core /` is divided into different sections. These are in
described and explained in the following paragraphs.

## Loader

Loaders are basically defined according to the scheme `LoaderName.loader.php`.
Its function is to load and provide relevant elements of the framework.
The two most important loaders are the `core.loader.php`, which loads the classes,
Load objects, load the config and the `UI.loader.php` which loads the database connection,
initializes the PHP session, loads the page list, performs the IP check and starts the URL interpreter.

## Database Core

The migrations and migration models are provided in the database core, as well as the provision of the database setup script

## API Core

The APIs that are loaded dynamically are stored in the API core. APIs are defined by the scheme `apiName.API.php`.

## CLI Core

The CLIs that are loaded dynamically are stored in the CLI Core. CLIs are defined by the scheme `cliName.CLI.php`.


You can find more information in the [API & CLI Guide](apiRef.md).