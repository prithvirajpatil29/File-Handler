// write
const fs = require('fs')
const data = 'ALl file system operations have synchronous,, callback, promise-based form, and are accessible using both common js and es6 modules (esm)'

fs.writeFile('./test1.txt', data, function(err){
    if(err) console.log(err)
    console.log('async file write completed')
})