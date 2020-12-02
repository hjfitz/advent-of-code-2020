const fs = require('fs')

// grim

const SUM_TO_MAKE = 2020

const input = fs.readFileSync('./day-1.input')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((num) => parseInt(num, 10))

function findSumNumbers(goal, numbers, totalNums) {
	const candidates = input.map((num) => ({
		num,
		requiredNum: (SUM_TO_MAKE - num),
	})).filter((obj) => input.includes(obj.requiredNum))
}

findSumNumbers(SUM_TO_MAKE, [], 3)
