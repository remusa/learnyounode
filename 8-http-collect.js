const http = require('http')

http.get(process.argv[2], res => {
    res.setEncoding('utf8')

    const rawData = []

    res.on('data', data => {
        rawData.push(data)
    })
    res.on('error', e => console.error(`Error: ${e.message}`))
    res.on('end', () => {
        console.log(rawData.join('').length)
        console.log(rawData.join(''))
    })
})
