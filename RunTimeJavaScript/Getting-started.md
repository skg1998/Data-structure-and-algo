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
