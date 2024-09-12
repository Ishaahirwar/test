const mongoose = require('mongoose');
const mongoDberrors = require('mongoose-mongodb-errors');
const dotenv = require("dotenv");
dotenv.config();


mongoose.Promise = Promise;
mongoose.plugin(mongoDberrors);
 mongoose.connect(process.env.mongoUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
 }).then(async(result)=>{
console.log("database connected successfully.")
console.log("connected successfully.")
 }).catch((err)=>{
    console.log(err);
 })

