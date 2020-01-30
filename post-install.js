'use strict'
var gentlyCopy = require('gently-copy')
var filesToCopy = ['MathJax']
var userPath = process.env.INIT_CWD + '/assets';
gentlyCopy(filesToCopy, userPath);

