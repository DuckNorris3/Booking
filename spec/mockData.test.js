const seedData = require('../db/mockData.js');

test('generates an array of objects', () => {
  expect(Array.isArray(seedData.data)).toBe(true);
})

