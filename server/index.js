const express = require('express');
const Sites = require('../db/Site.js')
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.port || 3002;

//BOOKING DATA REQUEST
app.get('/:id', (req, res) => {
  var site = req.params;
  console.log(site.id, "<-----siteid")
  Sites.find({siteId : site.id}, (err, results) => {
    if (err) {
      res.sendStatus(400);
    }
    res.status(200).send(results);
  })
})

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})
