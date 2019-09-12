const hooks = require('require-extension-hooks');

// Set up a virtual browser environment.
require('jsdom-global')();
window.Date = Date;

// Setup `.vue` files to be processed by `require-extension-hooks-vue`.
hooks('vue').plugin('vue').push();
// Setup `.vue` and `.js` files to be processed by `require-extension-hooks-babel`.
hooks(['vue', 'js']).plugin('babel').push()

// Without the webpack config then any aliases will need to be set up here
var module = require('module-alias');
module.addAlias('@', __dirname + '/src');
