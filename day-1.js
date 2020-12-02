const fs = require('fs')

const SUM_TO_MAKE = 2020

const input = fs.readFileSync('./day-1.input')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((num) => parseInt(num, 10))
	.filter((num) => num < SUM_TO_MAKE)

const candidates = input.map((num) => ({
	num,
	requiredNum: (SUM_TO_MAKE - num),
})).filter((obj) => input.includes(obj.requiredNum))

console.log(candidates)
const [candidate] = candidates
console.log(candidate.num * candidate.requiredNum)
