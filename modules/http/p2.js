// new Agent()
// default global agent of http, where http is used to create custom agents

// keepAlive => true, false(default)
const http = require('http')
const Agent = require('agentkeepalive')
const keepAliveAgent = new Agent();

const options = {
    host : 'be-practical.com',
    port : 80,
    path : '/',
    method : 'GET',
    agent : keepAliveAgent
}
const req = http.request(options,(res)=> {
    console.log('status = ',res.statusCode)
})
console.log('agent options = ', req.agent.options)
req.end()