const mongoose = require('mongoose');

const dateSchema = new Mongoose.Schema({
  date: Date,
  available: Boolean
})
const siteSchema = new Mongoose.Schema({
  siteId: Number,
  price: Number,
  weekdayDisc: Number,
  availability: [dateSchema],
  minStay: {type: Number, default: 2},
  maxGuests: {type: Number, default: 6},
})