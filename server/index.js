const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = 3002;
//TEST
// app.get('/', (req, res) => {
//   res.send('Booking!');
// })
//BOOKING DATA REQUEST
//BROKEN
app.get('/:id', (req, res) => {
  var site = req.params;
  console.log(site, "<-----siteid")
  //quere db collection where site id === site.id
  res.send('hi!')
})

app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})
