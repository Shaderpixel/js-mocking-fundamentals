const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

// when we  exported our mocks method so that other files can use the same mock for utils file
// see __mocks__/utils.js Jest will automatically pick up the mocked file
jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
