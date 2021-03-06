# Grunt Workflow v0.1.0

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## About Grunt Workflow

Grunt Workflow is a framework for front-end development using the Grunt task manager. The goal is to speed up development and automate repetitive tasks.

## Using Grunt as a taskrunner

- Dependencies: node, sass, grunt, bower
- To install run npm install
- run bower install to use any bower dependencies (optional)
- Type grunt in your terminal to build the site and watch files

The directory structure is as follows:

- app/
- build/
- dist/

**app:** contains all the files for developing the app/website

**build:** contains the output dev files creating your development environment

**dist:** contains the output production files once ready for release

## Grunt Tasks

The following commands are currently used for this workflow.

**grunt** - default task creates files in a build directory to mimick a production environment.

**grunt build** - creates a dist/ directory to deliver production code.

**grunt clean** - cleans/deletes the build/ dist/ directories.


### Changelog

Releases follow [Semantic Versioning](http://semver.org) MMP (Major, Minor, Patch). Date is in YYYY-MM-DD format.

- 2015-12-30 : v0.1.0  : initial commit

