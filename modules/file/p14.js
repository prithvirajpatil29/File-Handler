const fs = require('fs')

fs.rename('./readme.txt', 'myfile.txt',(err)=>{
    if(err) console.log(err)
    console.log('sync filename changed')
})