const express = require('express');
const Sites = require('../db/Site.js');
const cors = require('cors');
const PORT = process.env.port || 3002;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//LOAD STATIC SITE
app.use(express.static(__dirname + '/../public/dist'));

//BOOKING DATA REQUEST
app.get('/sites/:id', (req, res) => {
  var site = req.params;
  Sites.find({siteId : site.id}, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(results);
  });
});

app.get('/api/test', async (req, res) => {
  res.json({message: 'pass!'});
});

let server;
const start = () => { server = app.listen(PORT, () => {}) };
const close = server ? server.close : () => {};

module.exports = {
  start,
  close
};
