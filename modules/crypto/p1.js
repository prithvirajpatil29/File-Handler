const crypto = require('crypto');
const hash = crypto.createHash('sha256')
let input = 'test@gmail.com'
// let data = hash.update(input).digest('hex'); //hex, binary, base64, base64url
// let data1 = hash.update(input).digest('binary');

const dataBinary = hash.update(input).digest(); // Default is binary
console.log('Binary Digest:', dataBinary);
// const dataBase64 = hash.update(input).digest('base64');
// console.log('Base64 Digest:', dataBase64);
// const dataBase64URL = hash.update(input).digest('base64url');
// console.log('Base64URL Digest:', dataBase64URL);
// let data2 = hash.update(input).digest('base64');
// let data3 = hash.update(input).digest('base64url');

// console.log('final digest ', data)
console.log('final digest ', data1)
// console.log('final digest ', data2)
// console.log('final digest ', data3)

