const http = require('http')

http.get(process.argv[2], res => {
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', e => {
        console.error(`Error: ${e.message}`)
    })
})
