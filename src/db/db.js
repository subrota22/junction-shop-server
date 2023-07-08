const { default: mongoose } = require("mongoose");

const mongodbDatabase = () => {
// Connect to MongoDB
mongoose.connect(process.env.mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Mongodb connection success"))
.catch(error => console.log(error)) ; 
}
module.exports = {mongodbDatabase} ;