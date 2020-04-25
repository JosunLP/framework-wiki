---
id: cliRef
title: CLI References
sidebar_label: CLI References
---

## Introduction

The modular API system of the framework works according to the drag and drop system. To address existing APIs, the interface `CLI.php` is called via the shell. The individual CLIs can then be addressed via an automatically generated menu.

New CLI's can simply be dragged into the `core / CLI` folder. The framework does everything else.

## Creating a new CLI

When building a new CLI, not many details need to be taken into account. Basically, the naming of a CLI follows the `cliName.CLI.php` scheme.
The content of the CLI is left to the developer, but should of course be based on the common practices of command line development.
Structure elements can be loaded from the existing static `CLI` class. Details can be found in the [Static Class Guide](staticClassOverview.md).

