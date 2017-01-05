# html5app

Base application to start HTML5 based UIs easily. This project provides all neccesary tools to help with development of single page HTML based Client applications with jQuery and bootstrap.

## Getting started

You must install node.js to download dependencies, build and test the project. We are using npm for builds, bower to manage dependencies and grunt to build all HTML, CSS and JS files. Install node.js before your proceed, the rest will be done automatically.

    git clone git@github.com:kuffel/html5app.git
    cd <PROJECT_DIR>
    npm install
    bower install
    grunt
    grunt run


## Project structure

### package.json

This file defines dependencies for tools like bower and grunt. You can get more packages on npm.

To install a package an save it to your package.json

    npm install grunt-cli --save

### bower.json

All frontend css and js dependencies are defined in this file. You can get more packages on bower.io.

To install a package an save it to your bower.json

    bower install bootstrap --save

### Gruntfile.js

Grunt is a JavaScript task runnner that helps to automate repetetive tasks. Some useful tasks are already defined in the projects Gruntfile.

    grunt --help => Show help and available tasks

