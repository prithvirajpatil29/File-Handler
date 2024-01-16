const fs = require('fs')

let status = fs.existsSync('./myfile.txt')
console.log(status)
console.log('status ', status ? 'Found' : 'Not found')