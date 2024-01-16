const fs = require('fs')
function getCurrentFilenames(){
    fs.readdirSync(__dirname).forEach(item => {
        console.log(item)
    })
}
getCurrentFilenames()