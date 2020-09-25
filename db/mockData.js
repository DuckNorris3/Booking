const faker = require('faker');
const fs = require('fs');

const makeDates = function(start, end) {
  let arr = [];

  for (let dt = start; dt < end; dt.setDate(dt.getDate() + 1)) {
      arr.push({date: new Date(dt), available: faker.random.boolean()});
    }
  return arr;
};

const generateSites = function() {
  let sites = [];
  let discounts = [null, .2, .3]
  debugger;
  for (let id = 1; id <= 100; id ++) {
    let now = new Date();
    let oneYr = new Date();
    oneYr.setYear(now.getFullYear() + 1)
    let availability = makeDates(now, oneYr);
    let price = faker.commerce.price(5, 300);
    let minStay = faker.random.number({min: 1, max: 4});
    let maxGuests = faker.random.number({min: 1, max: 15});
    let discount = discounts[Math.floor(Math.random() * 3)];
    sites.push({
      siteId: id,
      availability: availability,
      weekdayDisc: discount,
      price: price,
      minStay: minStay,
      maxGuests: maxGuests
    })
  }
  return {"data": sites }
}
const seedData = generateSites();

//fs.writeFileSync('data.json', JSON.stringify(seedData))

module.exports = seedData;