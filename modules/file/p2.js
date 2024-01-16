const fs = require('fs')

// async read
let data = fs.readFileSync('./myfile.txt')
console.log(data)
console.log(data.toString())