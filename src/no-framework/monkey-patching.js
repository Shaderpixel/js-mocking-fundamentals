const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// mocking out and replacing the getWinner function to avoid calling it directly 
// store a copy of the original getWinner utils function to restore later in the test cleanup portion
const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds');

// test cleanup
utils.getWinner = originalGetWinner
