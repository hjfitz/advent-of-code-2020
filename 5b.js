const fs = require('fs')


function createGetter(lowerInit, upperInit, upperChar) {
	return function getRowOrCol(str, lower = lowerInit, upper = upperInit) {
		const char = str[0]
		const midpoint = ((lower + upper) / 2)
		if (str === char) {
			if (char === upperChar) return lower
			return upper
		}
		const nextStr = str.slice(1)
		if (char === upperChar) return getRowOrCol(nextStr, lower, Math.floor(midpoint)) 
		else return getRowOrCol(nextStr, Math.ceil(midpoint), upper)
	}
}

const getRow = createGetter(0, 127, 'F')
const getCol = createGetter(0, 7, 'L')

// big hack
const seats = Array.from({length: 8}).fill().map(() => Array.from({length: 128}))


console.log(seats)



const allIds = fs.readFileSync('./5-inp')
	.toString()
	.split('\n')
	.filter(Boolean)
	.map(ticket => {
		const rowPath = ticket.slice(0,7)
		const colPath = ticket.slice(7)

		const row = getRow(rowPath)
		const col = getCol(colPath)
		console.log({row, col})
		seats[col][row] = '#'

	})

seats.forEach((col, colIdx) => {
	col.forEach((row, rowIdx) => {
		if (!row) {
			console.log('oi')
			console.log({colIdx, rowIdx})
		}
	})
})
