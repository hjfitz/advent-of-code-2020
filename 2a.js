const fs = require('fs')

const dataset = fs
	.readFileSync('./2-inp')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map((line) => {
		const [minMax, char, pass] = line.replace(':', '').split(' ')
		const [min, max] = minMax.split('-').map((num) => parseInt(num, 10))
		return {
			min,
			max,
			char,
			pass,
		}
	})
	.filter((policy) => {
		const onlyChars = [...policy.pass].filter((chr) => chr === policy.char).join('')
		console.log(onlyChars)
		return (onlyChars.length >= policy.min) && (onlyChars.length <= policy.max)
	})

console.log(`total valid passwords: ${dataset.length}`)
