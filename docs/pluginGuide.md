---
id: pluginGuide
title: Plugin Guide
sidebar_label: Plugin Guide
---

## Plugin introduction

The framework was built with the idea that it can also be expanded with third-party plugins. These simply have to be dragged into the appropriate folder. In the following paragraphs we will focus on the creation and structure of plugins.

## Set up

Each plugin is loaded from the `custom / plugin /` folder.
Accordingly, this must be taken into account when building paths,
  when it comes to plugin own resources.
Every plugin has a constant basic structure:

		manifest.php
			||
			 > config > config.json

The config file is structured like the main config and the values are also generated as php constant in uppercase.

