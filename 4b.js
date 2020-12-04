const fs = require('fs')

const colours = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

const rules = {
	byr: (yr) => parseInt(yr, 10) > 1919 && parseInt(yr, 10) < 2003, // (Birth Year) - four digits; at least 1920 and at most 2002.
	iyr: (yr) => parseInt(yr, 10) > 2019 && parseInt(yr, 10) < 2031, // (Issue Year) - four digits; at least 2010 and at most 2020.
	eyr: (yr) => parseInt(yr, 10) > 2019 && parseInt(yr, 10) < 2031, // (Expiration Year) - four digits; at least 2020 and at most 2030.
	hgt: (hgt) => {
		const num = parseInt(hgt.replace(/[a-z]/gi, ''), 10)
		if (hgt.includes('cm')) return (num > 58 && num < 76)
		return (num > 149 && num < 194)
	},
	hcl: (col) => col.length === 7 && col.match(/#[0-9a-f]{6}/), // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
	ecl: (col) => colours.includes(col), // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
	pid: (num) => num.length === 9 && num.match(/[0-9]{9}/), // (Passport ID) - a nine-digit number, including leading zeroes.
}

const allowedFields = Object.keys(rules)

const dataset = fs.readFileSync('./4-inp')
	.toString()
	.split('\n\n')
	.map((dta) => dta.split(/\s/))
	.map((dta) => dta.map((attr) => attr.split(':')))
	.filter((line) => allowedFields.every(([atr]) => line.includes(atr)))
	.filter((line) => line.filter(([atr]) => allowedFields.includes(atr)).every(([atr, val]) => rules[atr](val)))

console.log(dataset.length)
