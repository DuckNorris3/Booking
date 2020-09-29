const getSiteData = (id, callback)=> {
  axios.get(`/${id}`)
  .catch(err => {
    console.log(err);
  })
  .then(res => {
    console.log("received data", res.data[0])
    callback(res.data[0])
  })
}

getPrice = getSiteData(4, (siteData) => {
  return siteData.price
})

module.exports = getPrice;