#HoeSnelWasIk

Hoesnelwasik will be compoment based work using the modern HTML5 techniques.
With polymer 2 javascript will be writen in ES6/ES2015/ES2016 which will then be
 transpilled backwards to support old browser.

## Tutorials
A view good tutorials to get started
[A singel compoment] https://codelabs.developers.google.com/codelabs/polymer-first-elements/index.html#0
[Intro in polymer-2] https://codelabs.developers.google.com/codelabs/polymer-2-carousel/index.html?index=..%2F..%2Findex#0
[Intro in web-app] https://codelabs.developers.google.com/codelabs/pwa-from-scratch/index.html#0

## Deploy

 The master branch is build automaticly and deployed to beta.hoesnelwasik.nl


### Required compoments

| Compoment       | Status         |Description                 |Issue |
|-----------------|----------------|----------------------------|------|
| Oars            | Completed      |Load image of club          |     -|
| last results    | Completed      |Display last 15 teams       |     -|
| Finish time     | Completed      |Time,disqualified,excluded  |     -|
| Team overview   | Completed      |Team info hover dialog      |     -|
| Headbar         | Completed      |Search,Logo,Breadcrumbs     |     -|
| Menubar         | Completed      |List of matches             |     -|
| View results    | Completed      |List of fields              |     -|
| View toss       | Completed      |List of fields              |     -|
| View clubs      | Completed      |List of clubs               |     -|
| View competitors| Completed      |List of fields              |     -|
| Team list       | Completed      |List of teams               |     -|
| Search element  | Completed      |                            |     -|
| Match overview  | Completed      |Group toss,club,results,com |     -|
| Match I overview| To be started  |Match overview + years      | [#]  |

### Styling

It is required to have a design before it can be fully done
This is about the compoments decided above

| Compoment       | Status         |Description                 |Issue |
|-----------------|----------------|----------------------------|------|
| Oars            | Completed      |                            |     -|
| last results    | Partial        |Requires design             | [#]  |
| Finish time     | Completed      |                            |     -|
| Team overview   | To be started  |Requires design             | [#]  |
| Headbar         | Partial        |Requires design             | [#]  |
| Menubar         | Partial        |Requires design             | [#]  |
| View results    | Partial        |Requires design             | [#]  |
| View toss       | Partial        |Requires design             | [#]  |
| View clubs      | Partial        |Requires design             | [#]  |
| View competitors| Do we want it? |Requires design             | [#]  |
| Team list       | Partial        |Requires design             | [#]  |
| Search element  | To be started  |Requires design             | [#]  |
| Match overview  | Partial        |Group toss,club,results,com | [#]  |
| Match I overview| To be started  |Match overview + years      | [#]  |

### Required logic

| Compoment       | Status         |Description                 |Issue |
|-----------------|----------------|----------------------------|------|
| Routing         | Completed      |Routing with in app         |     -|

### To think about

| What                       |Description                 |Issues        |
|----------------------------|----------------------------|--------------|
| Integration with Paparazzi |Load image of a team        | Webcie       |
| Firebase cloud messaging   |Send notification to users  |             -|


## Polymer

After doing quite some research it was deamed that polymer would be a great choice a framework for hoesnelwasik.nl
Some explantion about polymer and the setup.
Usage of JQeury, bootstrap, react, angular2 is a no go because we want to keep it as small as possible

### Polymer 2

Polymer 2 will be released with in a few moments the target is to fully take advantage off the changes.
Some code has already been written in polymer 2 only with current bugs and missing documentation it made extremely hard.
It is required to write code which can be easly be ported to polymer 2.
Have a look at the new class based syntax and other api changes.

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

    polymer build --html.collapseWhitespace

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    polymer serve build/bundled

### Run tests

NOTE do not know if I want to build tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

### Adding a new view

NOTE at the moment views are not yet integrated in the current pre alpha state of the software

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
and will be included in the `bundled` build.
