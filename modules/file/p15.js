const fs = require('fs')

fs.rmdir('docs', (err)=>{
    if(err) console.log(err)
    console.log('async removed folder')
})