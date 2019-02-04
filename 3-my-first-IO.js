const fs = require('fs')

const f = fs.readFileSync(process.argv[2])

console.log(f.toString().split('\n').length - 1)