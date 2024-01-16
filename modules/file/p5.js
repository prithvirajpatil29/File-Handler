const fs = require('fs')
    const data = '\n \n Next content all file system operations have synchronous, callback and promise based forms and are accessible both commonjs syntax and es6 module (esm)\n'

fs.appendFile('./test1.txt',data, function(err){
    if(err) console.log(err)
    console.log('file append completed')
})