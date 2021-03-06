# Getting-Started Node js

## Expose functionality from a Node.js file using exports

Nodejs has a built-in module system.

**When you what to import something**
**_const library = require('./library')_**

**When you what to import something**
Two way of exporting the file

> const car = {
> brand:'Ford',
> model:'Fiesta'
> }
>
> first way of exporting
> **module.exports = car**;

> seond way
> **exports.car = car**

**_difference between module.exports = car and exports.car = car is, in first exposes the object is point to, and in second the properties of object is point to_**

## An introduction to the npm package manager

npm stand for **node package manager**
if you have a package.json file, by running **_npm install_** you can download whatever in package.json and file create in node_module

**install a single package**

> npm install package-name

**flag**

> --save: installs and adds the entry to the package.json file dependencies
> --save-dev: installs and adds the entry to the package.json file devDependencies

**Updating packages**

> npm update package-name

**Running Tasks**

> npm run task-name

## Where does npm install the packages?

> a local install
> a global install

**_in local install package are install in project node_module sub-folder_**
**_in global install package are install in global location of you node_module_**

## How to use or execute a package installed using npm

**_on npm install packagename and by import using require("packagename"), on execution it will put the executable file under the node_modules/.bin/package folder_**.

## The package.json guide

**_The package.json file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where npm and yarn store the names and versions for all the installed packages_**

**difference between ~3.0.0 or ^0.13.0**
~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

## The package-lock.json file

The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.

## Find the installed version of an npm package

> npm list

## Install an older version of an npm package

You can install an old version of an npm package using the @ syntax:

> npm install <package>@<version>
> npm view package versions

## Update all the Node.js dependencies to their latest version

> npm update
