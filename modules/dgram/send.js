const dgram = require('dgram')
const socket = dgram.createSocket('udp4');
let msg = Buffer.from('welcome to node.js');
socket.send(msg,3000,'localhost')
console.log('message sent successfully')