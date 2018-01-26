# HoeSnelWasIk

Hoesnelwasik will be component based work using the modern HTML5 techniques.

## Tutorials
A view good tutorials to get started

[A single component](https://codelabs.developers.google.com/codelabs/polymer-first-elements/index.html#0)

[Intro in polymer-2](https://codelabs.developers.google.com/codelabs/polymer-2-carousel/index.html?index=..%2F..%2Findex#0)

[Intro in web-app](https://codelabs.developers.google.com/codelabs/pwa-from-scratch/index.html#0)

## Deploy

 The master branch is build automatically and deployed to beta.hoesnelwasik.nl


### Wishfull thinking

| What                       |Description                 |Issues        |
|----------------------------|----------------------------|--------------|
| Integration with Paparazzi |Load image of a team        | Webcie       |
| Firebase cloud messaging   |Send notification to users  |             -|


## Polymer 2

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open

Add --hostname 0.0.0.0 as parameter to be able to navigate to the app from a different client while developing    

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    polymer build --add-service-worker --css-minify --html-minify  --js-minify

For or stupid browsers:

    polymer build --bundle --css-minify --html-minify  --js-minify --js-compile


### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test