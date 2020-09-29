const app = require('./index.js');
const PORT = process.env.port || 3002;
app.listen(PORT, ()=> {
  console.log(`listening on ${PORT}`);
})