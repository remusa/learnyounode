const fs = require('fs')
const path = require('path') //extname

const filterLS = (dirpath, extension, callback) => {
    fs.readdir(dirpath, (err, files) => {
        if (err) return callback(err)

        const filtered = files.filter(
            file => path.extname(file) === '.' + extension
        )

        return callback(null, filtered)
    })
}

module.exports = filterLS
