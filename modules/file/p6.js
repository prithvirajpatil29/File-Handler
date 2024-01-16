const fs = require('fs')
const data = '\n \n Next content all file system operations have synchronous, callback and promise based forms and are accessible both commonjs syntax and es6 module (esm)\n'

fs.appendFileSync('./test2.txt',data)
console.log('async appened')