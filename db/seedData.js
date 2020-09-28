const db = require('./index.js');
const Site = require('./Site');
const seed = require('./mockData.js');
const mongoose = require('mongoose');

const addSampleData = function() {
  //drop db
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
  //close connection
addSampleData();