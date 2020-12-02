const fs = require('fs')

const dataset = fs
	.readFileSync('./2inp')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((line) => {
		const [positions, char, pass] = line.replace(':', '').split(' ')
		const [pos1, pos2] = positions.split('-').map((num) => parseInt(num, 10) - 1)
		return {
			pos1,
			pos2,
			char,
			pass,
		}
	})
	.filter((policy) => {
		const isInPos1 = policy.pass[policy.pos1] === policy.char
		const isInPos2 = policy.pass[policy.pos2] === policy.char

		return isInPos1 ^ isInPos2
	})

console.log(`total valid passwords: ${dataset.length}`)
