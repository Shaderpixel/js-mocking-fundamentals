const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  // this replaces the getWinner function with a mock jest function. 
  // Only when we write our functions modularly then we can test them like this
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')

  expect(winner).toBe('Kent C. Dodds')

  // utils.getWinner is now wrapped in a Jest function and it exposes what getWinner get's called with
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2) // called twice because its declared two out of three wins inside of thumb-war.js
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
