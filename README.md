# geOrchestra Datafeeder-UI

<div align="center">
  <img src="https://github.com/georchestra/georchestra/blob/master/georchestra-logo.svg" alt="geOrchestra Logo" width="300"/>
  <h3>Import and share SHP or CSV with ease.</h3>
</div>

<p align="center">
  <a href="https://github.com/georchestra/datafeeder-ui/actions"><img src="https://github.com/georchestra/datafeeder-ui/actions/workflows/build.yml/badge.svg" alt="Build Status"></a>
  <!--<a href="https://docs.georchestra.org/datafeeder-ui/"><img src="https://img.shields.io/badge/docs-latest-blue" alt="Documentation"></a>-->
  <a href="https://github.com/georchestra/datafeeder-ui/blob/main/LICENSE.txt"><img src="https://img.shields.io/github/license/georchestra/datafeeder-ui" alt="License"></a>
</p>

## Overview

Datafeeder is a web application that allows users to upload datasets in formats such as SHP or CSV and publish them to GeoServer and GeoNetwork in a single step.
It provides a user-friendly interface for managing data imports and sharing geospatial datasets.

Backend is available in the [datafeeder repo](https://github.com/georchestra/datafeeder).

## Getting started

Launch docker composition in `support-services/` directory:

Run `npm install` to fetch all dependencies of the project.

Run `npm start` to start the datahub app in a dev server.

Once started the application is available at `http://localhost:4200/`.

[The contributing guide](CONTRIBUTING.md) explains the structure of the project and how to work with it.

If you would like to contribute code, please follow our [style guide](STYLEGUIDE.md).

## About maven project here

This directory contains a maven project to build a WAR with the frontend part
for the datafeeder.

This project uses Java 11.

Note: the docker image makes use of an Nginx, which makes more sense to serve
static resources as a web ui, but since this leads to make several assumptions
on the targeted infrastructure (Do we have a webserver ? Which port is it
supposed to listen on ? Where is the document root ? Which webserver to begin
with ? Which sample configuration to provide ?), is has been preferred to
provide this UI as another webapp, as we know that at least one servlet
container will be available.

## Compilation

```
mvn clean package
```

This will result in a `import.war` in the `target/` subdirectory.
