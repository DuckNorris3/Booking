const seedData = require('../db/mockData.js');
const getPrice = require('./getSiteDataforTest.js')
const axios = require('axios');
jest.mock(axios);

test('generates an array of objects', () => {
  expect(Array.isArray(seedData.data)).toBe(true);
})

//test server
test('it returns price for site 4', async () => {
  const price = await getPrice();
  expect(price).toEqual()
}