const express = require('express');
const Sites = require('../db/Site.js');
const PORT = process.env.port || 3002;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

//Load static site
app.use(express.static(__dirname + '/../public/dist'));
//BOOKING DATA REQUEST
app.get('/:id', (req, res) => {
  var site = req.params;
  Sites.find({siteId : site.id}, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(results);
  })
})

app.get('/api/test', async (req, res) => {
  res.json({message: 'pass!'})
})
let server;
const start = () => { server = app.listen(PORT, () => {})}
const close = server ? server.close : () => {};

module.exports = {
  start,
  close
}
