const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/tentHop');
const seed = require('./mockData.js')

module.exports.db = db;
