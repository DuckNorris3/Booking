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
  console.log(req.params, "request")
  var site = req.params;
  Sites.find({siteId : site.id}, (err, results) => {
    console.log("results", results)
    if (err) {
      console.error(err);
      res.status(404).send('Site not available');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Site not available');
      return;
    }
    res.status(200).send(results);
  });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/../public/dist'})
})

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
