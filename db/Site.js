 const mongoose = require('mongoose');
 const db = require('./index.js');
mongoose.Promise = global.Promise;

const siteSchema = new mongoose.Schema({
  siteId: Number,
  price: Number,
  weekdayDisc: Number,
  availability: Array,
  minStay: {type: Number, default: 2},
  maxGuests: {type: Number, default: 6},
})

 const Site = mongoose.model('Site', siteSchema);
 module.exports = Site;