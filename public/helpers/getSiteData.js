import axios from 'axios';

const getSiteData = (id, callback)=> {
  axios.get(`/${id}`)
  .catch(err => {
    console.log(err);
  })
  .then((result) => {
    console.log("received data", result.data[0])
    callback(result.data[0])
  })
}

export default getSiteData;