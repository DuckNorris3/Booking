const server = require('../server/index.js');
const axios = require('axios');

const api = axios.create({ baseURL: "http://127.0.0.1:3002"})

beforeAll(() => {
  server.start()
});

afterAll(() => {
  server.close();
});

test("/4 endpoint data for site 1", async () => {
  const { data, status } = await api.get('/4');
  expect(status).toBe(200);
  expect(data[0].siteId).toEqual(4);
})