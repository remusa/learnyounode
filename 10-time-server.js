const net = require('net')
const PORT = Number(process.argv[2])

const server = net.createServer(socket => {
    socket.write(getTime() + '\n')
    socket.end()
})

function getTime() {
    const date = new Date()

    const year = zeroFill(date.getFullYear())
    const month = zeroFill(date.getMonth() + 1)
    const day = zeroFill(date.getDate())
    const hours = zeroFill(date.getHours())
    const minutes = zeroFill(date.getMinutes())

    return `${year}-${month}-${day} ${hours}:${minutes}`
}

function zeroFill(number) {
    return number.toString().split('').length === 1 ? `0${number}` : `${number}`
}

server.listen(PORT || 3000)
