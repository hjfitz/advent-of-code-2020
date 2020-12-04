const fs = require('fs')

const colours = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

const rules = {
	byr: (yr) => parseInt(yr, 10) > 1919 && parseInt(yr, 10) < 2003, // (Birth Year) - four digits; at least 1920 and at most 2002.
	iyr: (yr) => parseInt(yr, 10) > 2009 && parseInt(yr, 10) < 2031, // (Issue Year) - four digits; at least 2010 and at most 2020.
	eyr: (yr) => parseInt(yr, 10) > 2019 && parseInt(yr, 10) < 2031, // (Expiration Year) - four digits; at least 2020 and at most 2030.
	hgt: (hgt) => {
		const num = parseInt(hgt.replace(/[a-z]/gi, ''), 10)
		if (hgt.includes('in')) return (num > 58 && num < 76)
		return (num > 149 && num < 194)
	},
	hcl: (col) => col.length === 7 && /#[0-9a-f]{6}/.test(col), // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
	ecl: (col) => colours.includes(col), // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
	pid: (num) => num.length === 9 && /[0-9]{9}/.test(num), // (Passport ID) - a nine-digit number, including leading zeroes.
	cid: () => true,
}

const allowedFields = Object.keys(rules)

const dataset = fs.readFileSync('./4-inp')
	.toString()
	.split('\n\n')
	.map((dta) => dta.split(/\s/))
	.map((dta) => dta.map((attr) => attr.split(':')))
	.filter((line) => {
		const fieldsToCheck = line.map((ln) => ln[0])
		return allowedFields.every((val) => fieldsToCheck.includes(val))
	})
	.filter((line) => {
		console.log(line)
		return line.every(([atr, val]) => {
			console.log({atr, val})
			console.log(atr in rules, rules[atr], rules[atr](val))

			if (atr in rules) return rules[atr](val)
			console.log('wut')
			return false
		})
	})

console.log(dataset.length)
