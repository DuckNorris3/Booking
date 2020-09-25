const db = require('./index.js');
const Site = require('./Site');
const seed = require('./mockData.js');

const addSampleData = function() {
  Site.create(seed.data)
}
addSampleData();