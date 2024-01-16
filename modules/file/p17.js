const fs = require('fs')

fs.stat('./myfile.txt', (err,stats) => {
    if(err) console.log(err)
    console.log('async file stat', stats)
})