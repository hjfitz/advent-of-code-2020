const fs = require('fs')

// grim

const SUM_TO_MAKE = 2020

const input = fs.readFileSync('./day-1.input')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((num) => parseInt(num, 10))

for (const firstNum of input) {
	for (const secondNum of input) {
		for (const thirdNum of input) {
			if (firstNum + secondNum + thirdNum === SUM_TO_MAKE) {
				// console.log('gotem')
				//	console.log({firstNum, secondNum, thirdNum})
				console.log(firstNum * secondNum * thirdNum)
				return
			}
		}
	}
}
// const candidates = input.map((num) => ({
//	num, // number in arr
//	requiredNum: (SUM_TO_MAKE - num), // number that adds to this to make 2020
// })).map((obj, _, orig) => {
//	const match = orig.filter((child) => child.requiredNum === obj.num)
//	console.log(match)
// })

// console.log(candidates)
