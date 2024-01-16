const dns = require('dns')
let url = 'www.facebook.com'

dns.lookup(url, function(err, addr, fam){
    if(err) console.log(err)
    console.log('address ',addr)
    console.log('family ',fam)

    dns.lookupService(addr,80,function(err,host,service){
        if(err) console.log(err)
        console.log('host = ', host)
        console.log('service', service);
        // host =  edge-star-mini-shv-01-maa2.facebook.com
        // service http
    })
})

// address  142.250.195.110
// family  4