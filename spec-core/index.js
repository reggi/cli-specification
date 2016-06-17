#!/usr/bin/env node
var pathJoin = require('path').join
var specFileLocation = pathJoin(process.cwd(), './spec.json')
var specFile = require(specFileLocation)
var argv = require('minimist')(process.argv.slice(2))
var _ = require('lodash')

var keys = _.keys(specFile)
var commandPresent = _.includes(keys, argv._[0])

if (!commandPresent) throw new Error("invalid command " + argv._[0])
