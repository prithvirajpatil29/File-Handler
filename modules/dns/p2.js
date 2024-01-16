const dns = require('dns')
dns.resolve4('www.facebook.com',function(err, data){
    if(err) console.log(err)
    data.forEach(item => {
dns.reverse(item,(err,host) => {
    if(err) console.log(err)
    console.log('reverse dns =', item ,':', JSON.stringify(host))
})
})
})

const dns = require('dns')
dns.resolve6('www.facebook.com',function(err, data){
    if(err) console.log(err)
    data.forEach(item => {
dns.reverse(item,(err,host) => {
    if(err) console.log(err)
    console.log('reverse dns =', item ,':', JSON.stringify(host))
})
})
})