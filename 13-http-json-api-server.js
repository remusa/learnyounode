const http = require('http')
const url = require('url')
const map = require('through2-map')

const PORT = Number(process.argv[2])

function parseTime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }
}

function unixTime(date) {
    return {
        unixtime: date.getTime(),
    }
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const time = new Date(parsedUrl.query.iso)
    let result = {}

    if (parsedUrl.pathname === '/api/parsetime') {
        result = parseTime(time)
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixTime(time)
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(400)
        res.end()
    }
})

server.listen(PORT)
