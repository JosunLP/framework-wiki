---
id: configGuide
title: Config Guide
sidebar_label: Config Guide
---

## Introduction

The config system of the framework is based on the simple strategy,
that PHP uppercase constants are generated from the individual values.
For this reason, care must be taken in the notation that words are separated by underscores.

## Config File Head

The config file head is mainly used to define the project information.
Here it is defined that it is a config file, the version of the app and the name of the app.
It makes sense to use the repository name. Within the area `framework_info:` are the
Information about the framework, including the current version.

        "head": {
            "title": "configFile",
            "version": "1.0.0",
            "app_name": "Example Web App",
            "framework_info": {
              "framework_name": "WAPS-Framework",
              "framework_version": "1.5.2",
              "framework_repository": "https://gitlab.com/webapp-php-sample/framework"
            }
          }
          
## Meta Data

In the Meta Data area, the information that is required for the Head page and important basic functions is defined.
Here you will find, among other things, the definition of the domain, the charset and the author.

        "metaData": {
            "charset": "utf8",
            "language": "de_DE",
            "description": "Example Web App",
            "keywords": "PHP,HTMl,XML,JavaScript,CSS,APP",
            "author": "Max Mustermann",
            "page_title": "Web Application PHP",
            "copyright": "WAPS-Team",
            "fav_icon": "/content/img/fav.ico",
            "logo": "/content/img/fav.svg",
            "domain": "localhost"
          }
          
## Database connection

In this section the database connection is defined.
You should always set up a database user specially set up for the app who only has the required rights.

        "database": {
            "mysql_host": "localhost:3306",
            "mysql_database": "webapp_php_sample",
            "mysql_user": "root",
            "mysql_keyword": "",
            "database_table_list": [
              "iplogg",
              "usr",
              "passwd"
            ]
          }
          
## Mail Unit config

Here the email prefixes are defined which are required for the different mail templates.

        "mailConfig": {
            "infoMail": "info",
            "autoMail": "auto",
            "supportMail": "support"
          }
          
## Default value config

In this area, default values for testing sections are defined.

        "defaultConfig": {
            "default_string": "DEFAULT",
            "default_int": 42,
            "default_bool": true,
            "default_array": [
              "1",
              2,
              true
            ]
            
## Default file filter

Here the default file filter is defined, which is used when scanning folders

        "default_file_filter": [
              ".",
              "..",
              ".gitkeep"
            ]
            
## Migration config

Here is the config for the CLI migration module

        "migrationConfig": {
            "migration_path": "./core/database/migrations/"
          }