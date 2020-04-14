---
id: projectSetup
title: Initial project setup
sidebar_label: Project setup
---

## Download latest copy
A copy of the current version of the framework is 
required for the project setup, which can be downloaded [here](https://gitlab.com/webapp-php-sample/framework).

## Workspace
Next, all files from the download must be copied to the working directory. 
[XAMPP](https://www.apachefriends.org/de/index.html) is suitable as a test environment,
 but a conventional web server can also be used.
 
 ## Database
 
 After preparing the work environment, the database for the app must be created.
 The initial setup script for the database is located under `core / database / setup /`.
 Before the first run, the database user must be set in the `config / config.json` file.
 
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
           },