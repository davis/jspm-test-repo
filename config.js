System.config({
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.5.3",
    "babel-runtime": "npm:babel-runtime@5.5.3",
    "backbone": "npm:backbone@1.2.1",
    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.7",
    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.2",
    "core-js": "npm:core-js@0.9.14",
    "handlebars": "github:components/handlebars.js@3.0.3",
    "hbs": "github:davis/plugin-hbs@master",
    "jquery": "github:components/jquery@2.1.4",
    "marionette": "github:marionettejs/backbone.marionette@2.4.1",
    "underscore": "npm:underscore@1.8.3",
    "github:davis/plugin-hbs@master": {
      "handlebars": "github:components/handlebars.js@3.0.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:backbone@1.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:core-js@0.9.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

