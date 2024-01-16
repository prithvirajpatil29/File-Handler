//cipher.final()

const crypto = require('crypto')

// algo => aes
const algo = 'aes-192-cbc'
const password = 'test123'

const key = crypto.scryptSync(password,'salt',24)

// static iv
const iv = Buffer.alloc(16,0)
let cipher = crypto.createCipheriv(algo,key,iv)

let value = cipher.final('hex')
console.log('output ', value)