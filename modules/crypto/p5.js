const crypto = require('crypto');

const algo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encryptData(data){
    let cipher = crypto.createCipheriv(algo,Buffer.from(key),iv)
    let res1 = cipher.update(data)
    res1 = Buffer.concat([res1,cipher.final()])
    return {
        iv : iv.toString('hex'),
        out : res1.toString('hex')
    }
}

function decryptData(data){
    let iv1 = Buffer.from(data.iv,'hex')
    let inp = Buffer.from(data.out,'hex')
    let input = Buffer.from(data.out,'hex')
    let dec = crypto.createDecipheriv(algo,Buffer.from(key),iv1)
    let decOut = dec.update(inp)
    decOut = Buffer.concat([decOut, dec.final()])
    return decOut.toString()
}

let out1 = encryptData('Be-practical')
console.log(out1)

let out2 = decryptData(out1)
console.log(out2)