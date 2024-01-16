const dgram = require('dgram')
const socket = dgram.createSocket('udp4');
const assert = require('assert')
//node event
socket.on('message', function(msg,err){
    if(err){
        // assert.deepEqual(err,null)
        console.log(err)
    }
    console.log('message ', msg)
    console.log('message ', msg.toString())
})
socket.bind(3000)