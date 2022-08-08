const parse = require('./parse')

parse('./stubs/2020_03_13.pdf').then(stub => {
    console.log(stub)
}).catch(console.error)
