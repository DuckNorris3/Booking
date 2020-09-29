const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the test endpoint', async done => {
  const response = await request.get('/api/test');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
})





