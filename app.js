rupp = {};
rupp.newrelic = require('newrelic');
// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);
