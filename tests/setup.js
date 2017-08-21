require('babel-register')();

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

const exposedProperties = ['window', 'navigator', 'document'];

global.window = document.defaultView;

Object.keys(global.window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = global.window[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};
