const fs = require('fs')

// fs.unlink('./test1.txt',function(err){
//     if(err) console.log(err)
//     console.log('async file unlined successfully')
// })
fs.unlinkSync('./test2.txt');
console.log('sync file unliked')