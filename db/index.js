const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/tentHop');

module.exports.db = db;
