const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname,'docs'),(err)=>{
    if(err) console.log(err)
    console.log('new directory created')
})