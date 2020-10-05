/**
* @jest-environment node
*/

const server = require('../server/index.js');
const axios = require('axios');
const db = require('../db/index.js');
const api = axios.create( {baseURL: "http://127.0.0.1:3002"} );
const mongoose = require('mongoose');

beforeAll(() => {
  server.start();
});

afterAll(() => {
  server.close();
});

test("/4 endpoint data for site 4", async () => {
  const { data, status } = await api.get('/4');
  expect(status).toBe(200);
  expect(data[0].siteId).toEqual(4);
});

test("/10 site availability is an array", async () => {
  const { data, status } = await api.get('/10');
  expect(status).toBe(200);
  expect(Array.isArray(data[0].availability)).toBe(true);
});