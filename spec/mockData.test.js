const seedData = require('../db/mockData.js');

test('generates an array of objects', () => {
  expect(Array.isArray(seedData.data)).toBe(true);
});

test('data entry contains siteId', () => {
  expect(seedData.data[0].siteId).toBe(1);
});

