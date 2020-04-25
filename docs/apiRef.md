---
id: apiRef
title: API References
sidebar_label: API References
---

## Introduction

The API system of the WAPS framework is based on the `JSON` standard.
Calls are primarily structured using `POST` and` GET` requests.
Like the CLI system, the API system is based on drag and drop. New API's are simply dragged into the `core / API` folder.
They follow the `apiName.API.php` scheme in the naming.

## Addressing an API

An API is called via the `API.php` interface. The prefix of an API serves as the identifier of each API.
Accordingly, a call is made as follows: `/API.php?ApiMode=apiName`

All subsequent parameters are freely variable. However, it is recommended
unless otherwise necessary, set to `POST` requests. This means that less information is sent publicly.

## Create a new API

When creating a new API, you must make sure that it responds to every request with either the expected response or an error message.
Since API's of the framework are based on the `JSON` standard, the answers to the methods of the static class` JsonHandler.class.php` can be used.
Further information can be found in the [Static Class Guide](staticClassOverview.md).