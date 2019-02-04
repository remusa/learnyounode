const filterLS = require('./6-modules')

const filepath = process.argv[2]
const extension = process.argv[3]

filterLS(filepath, extension, (err, list) => {
    if (err) return err

    list.map(file => console.log(file))
})
