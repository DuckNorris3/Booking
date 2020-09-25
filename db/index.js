const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/tentHop');
const seed = require('./mockData.js')
let siteSchema = new mongoose.Schema({
    siteId: Number,
    price: Number,
    weekdayDisc: Number,
    availability: Array,
    minStay: {type: Number, default: 2},
    maxGuests: {type: Number, default: 6},
  })

  let Site = mongoose.model('Site', siteSchema);

  Site.create(seed.data);

module.exports.db = db;
module.exports.Site = Site;