const http = require('http')

// http.createServer(function(req,res){
//     res.write('welcome to node js')
//     res.end()
// }).listen(4000,()=>{
//     console.log('server is up running at http://localhost:4000')
// })

// or
let server = http.createServer(function(req,res){
        res.write('welcome to node js')
        res.end()
})
server.listen(4000,()=>{
        console.log('server is up running at http://localhost:4000')
})