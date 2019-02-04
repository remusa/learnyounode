const args = process.argv
console.log(args)

let sum = 0

for (var i = 2; i < args.length; i++) {
	sum += Number.parseFloat(args[i])
}

console.log(sum)