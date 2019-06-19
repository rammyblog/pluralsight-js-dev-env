// THis file isnt transpiled, so mus use CommonJS and S=ES5

//Register babale to transpile before our tests run.

require('babel-register')();


// Disable webpack features that Mocha doesn't understand.

require.extensions['.css'] = function(){};
