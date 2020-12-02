const fs = require('fs')

// grim

const SUM_TO_MAKE = 2020

const input = fs.readFileSync('./1-inp')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((num) => parseInt(num, 10))

for (const num1 of input) {
	for (const num2 of input) {
		for (const num3 of input) {
			if (num1 + num2 + num3 === SUM_TO_MAKE) {
				console.log(num1 * num2 * num3)
				return
			}
		}
	}
}
