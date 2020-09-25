const seedData = require('../db/mockData.js');

test('generates an array of objects', () => {
  expect(Array.isArray(seedData.data)).toBe(true);
})

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// });