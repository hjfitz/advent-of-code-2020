const fs = require('fs')

const SUM_TO_MAKE = 2020

const input = fs.readFileSync('./1-inp')
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
