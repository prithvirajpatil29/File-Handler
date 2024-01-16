//read file operation
const fs = require('fs')

// async read
fs.readFile('./myfile.txt',function(err,data){
    if(err) console.log(err)
    console.log('async read ', data) //buffer
    console.log('async read = ', data.toString()) //string
})

/* read file
   readFileSync

   writeFile
   writeFileSync

   appendFile
   appendFileSync

   uplink
   unlinkSync
   
   readStream
   writeStream

*/