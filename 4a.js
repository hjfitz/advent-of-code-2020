const fs = require('fs')

const allowedFields = [
	'byr',
	'iyr',
	'eyr',
	'hgt',
	'hcl',
	'ecl',
	'pid',
]

const dataset = fs.readFileSync('./4-inp')
	.toString()
	.split('\n\n')
	.map((dta) => dta.split(/\s/))
	.map((dta) => dta.map((attr) => attr.split(':')[0]))
	.filter((line) => allowedFields.every((val) => line.includes(val)))

console.log(dataset.length)
