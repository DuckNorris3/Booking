const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.port || 3002;

//BOOKING DATA REQUEST
app.get('/:id', (req, res) => {
  var site = req.params;
  console.log(site, "<-----siteid")
  res.send('hi!')
})

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})
