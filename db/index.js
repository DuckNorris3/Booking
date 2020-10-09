const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbURI = process.env.MONGOOSE_URI;

const db = mongoose.connect(dbURI);



module.exports.connect = db;
