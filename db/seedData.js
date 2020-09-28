const db = require('./index.js');
const Site = require('./Site');
const seed = require('./mockData.js');
const mongoose = require('mongoose');

const dropDb = () => {
  Site.remove({}, (err) => {
    if (err) {
      console.log("here's the problem: ", err);
      throw err;
    }
    console.log("db fresh and clean");
  });
}

const addSampleData = () => {
  Site.create(seed.data)
  .then(() => {
    console.log("db SEEDED ALRIGHT");
    mongoose.connection.close(() => {
      console.log("Mongoose disconnected!")
    });
  })
  .catch((err) => {
    console.log("here's the problem: ", err);
  });
};

dropDb();

addSampleData();