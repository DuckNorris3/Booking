import axios from 'axios';

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

export default getSiteData;