#! /usr/bin/env node
process.title = 'NODE_RUN';
var shell = require('shelljs');

shell.exec('node build/server.js');
