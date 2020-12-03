const fs = require('fs')

// open in to 2d arr
const map = fs
	.readFileSync('./3-inp')
	.toString()
	.split('\n')

const X_INC = 3
const Y_INC = 1

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

console.log(collisions)
