#HoeSnelWasIk

Hoesnelwasik will be compoment based work using the modern HTML5 techniques.
The javascript will be ES6/ES2015/ES2016 which will be transpilled backwards to support old browser.

### Required compoments

| Compoment       | Status         |Description                 |Issue |
|-----------------|----------------|----------------------------|------|
| Oars            | Completed      |Load image of club          |     -|
| last results    | Completed      |Display last 15 teams       |     -|
| Finish time     | Completed      |Time,disqualified,excluded  |     -|
| Team overview   | Completed      |Team info hover dialog      |     -|
| Headbar         | In progress    |Search,Logo,Breadcrumbs     | [#]  |
| Menubar         | Completed      |List of matches             |     -|
| View results    | To be started  |List of fields              | [#]  |
| View toss       | To be started  |List of fields              | [#]  |
| View clubs      | Completed      |List of clubs               |     -|
| View competitors| Do we want it? |List of fields              | [#]  |
| Team list       | To be started  |List of teams               | [#]  |
| Search element  | To be started  |                            | [#]  |

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
| View results    | To be started  |Requires design             | [#]  |
| View toss       | To be started  |Requires design             | [#]  |
| View clubs      | Started        |Requires design             | [#]  |
| View competitors| Do we want it? |Requires design             | [#]  |
| Team list       | To be started  |Requires design             | [#]  |
| Search element  | To be started  |Requires design             | [#]  |

### Required logic

| Compoment       | Status         |Description                 |Issue |
|-----------------|----------------|----------------------------|------|
| Routing         | Started        |Routing with in app         | [#]  |

### To think about

| What                       |Description                 |Issues        |
|----------------------------|----------------------------|--------------|
| Integration with Paparazzi |Load image of team          | HTTPS,Webcie |


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
