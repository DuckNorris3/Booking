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

// {
//   "_id" : ObjectId("5f6d5bf12ab45f7151a5aee6"),
//   "availability" : [
//           {
//                   "date" : ISODate("2020-10-05T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-06T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-07T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-08T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-09T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-10T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-11T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-12T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-13T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-14T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-15T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-16T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-17T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-18T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-19T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-20T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-21T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-22T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-23T00:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-24T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-25T00:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-26T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-27T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-28T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-10-29T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-30T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-10-31T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-01T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-02T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-03T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-04T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-05T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-06T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-07T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-08T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-09T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-10T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-11T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-12T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-13T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-14T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-15T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-16T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-17T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-18T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-19T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-20T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-21T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-22T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-23T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-24T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-25T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-26T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-27T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-11-28T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-29T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-11-30T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-01T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-02T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-03T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-04T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-05T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-06T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-07T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-08T01:00:00Z"),
//                   "available" : true
//           },


//           {
//                   "date" : ISODate("2020-12-16T01:00:00Z"),
//                   "available" : true
//           },

//           {
//                   "date" : ISODate("2020-12-23T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-24T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-25T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-26T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-27T01:00:00Z"),
//                   "available" : true
//           },
//           {
//                   "date" : ISODate("2020-12-28T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-29T01:00:00Z"),
//                   "available" : false
//           },
//           {
//                   "date" : ISODate("2020-12-30T01:00:00Z"),
//                   "available" : true
//           }
//   ],
//   "minStay" : 4,
//   "maxGuests" : 8,
//   "siteId" : 1,
//   "weekdayDisc" : 0.3,
//   "price" : 198,
//   "__v" : 0
// }