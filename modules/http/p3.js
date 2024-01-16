// http.createConnection
const http = require('http')
const agent = new http.Agent({})

const conn = agent.createConnection;
console.log('connection created')
console.log('connection resp', conn)