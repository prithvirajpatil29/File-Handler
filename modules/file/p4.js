const fs = require('fs')
const data = 'ALl file system operations have synchronous,, callback, promise-based form, and are accessible using both common js and es6 modules (esm)'
fs.writeFileSync('./test2.txt',data)
console.log('sync file write completed')