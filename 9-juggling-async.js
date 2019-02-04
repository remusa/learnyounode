const http = require('http')

const urlList = process.argv.slice(2)
let count = 0

const results = []

function getURLData(index) {
    http.get(urlList[index], res => {
        const rawData = []

        res.setEncoding('utf8')

        res.on('data', data => rawData.push(data))
        res.on('error', e => console.error(`Error: ${e.message}`))
        res.on('end', () => {
            results[index] = rawData.join('')
            count++

            if (count === urlList.length) {
                printResults()
            }
        })
    })
}

function printResults() {
    for (let i = 0; i < urlList.length; i++) {
        console.log(results[i])
    }
}

for (let i = 0; i < urlList.length; i++) {
    getURLData(i)
}
