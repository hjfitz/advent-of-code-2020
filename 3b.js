const fs = require('fs')

// open in to 2d arr
const map = fs
	.readFileSync('./3-inp')
	.toString()
	.split('\n')

function checkCollisionsWithInc(X_INC, Y_INC) {
	const pointer = {x: 0, y: 0}

	let collisions = 0

	let shouldContinue
	do {
		shouldContinue = map?.[pointer.y]?.[pointer.x]
		if (shouldContinue === '#') collisions += 1
		pointer.x += X_INC
		pointer.x %= map[0].length
		pointer.y += Y_INC
	} while (shouldContinue)

	return collisions
}

const ans = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]].reduce(
	(total, cur) => total *= checkCollisionsWithInc(...cur),
	1,
)

console.log({ans})
