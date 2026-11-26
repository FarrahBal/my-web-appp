const assert = require('assert');
const server = require('./app');

assert.ok(server, 'Server instance should be created');
console.log('Basic test passed!');