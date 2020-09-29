const axios = require('axios');

async function getPrice() {
  const response = await axios.get('/4');
  return response.data[0].price;
}

module.exports.getPrice = getPrice;