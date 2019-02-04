const fs = require('fs')
const path = require('path') //extname

const filepath = process.argv[2]
const extension = '.'+process.argv[3]

fs.readdir(filepath, filterLS)

function filterLS(err, files) {
	const filtered = files.filter(file => {
		if (path.extname(file) === extension) {
			return true
		}
		return false
	})

	filtered.map(file => console.log(file))
}
