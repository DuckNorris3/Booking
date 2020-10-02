const faker = require('faker');
const fs = require('fs');

const makeDates = function(start, end) {
  let obj = {};

  for (let dt = start; dt < end; dt.setDate(dt.getDate() + 1)) {
      let date = new Date(dt).toString().split(' ').slice(0,4).join(' ');
      let available = faker.random.boolean();
      obj[date] = available;
    }
  return obj;
};

const generateSites = function() {
  let sites = [];
  let discounts = [null, .2, .3]
  for (let id = 1; id <= 100; id ++) {
    let availability = makeDates(new Date('2020-10-05'), new Date('2020-12-31'));
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