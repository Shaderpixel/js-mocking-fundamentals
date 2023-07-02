const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Our own implementation of jest fn
function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = { calls: [] }
  // refresher: arrow functions are not hoisted and set up of function declaration happens before it is executed 
  // hence the mockFn object is created first before the mockFn.mock can be accessed
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')

assert.strictEqual(winner, 'Kent C. Dods')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
utils.getWinner = originalGetWinner
