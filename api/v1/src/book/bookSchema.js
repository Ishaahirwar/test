const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema(
    {
       name:{ type:String,
        required:true,
        trim :true}
    }
);
module.exports = mongoose.model('book',bookSchema)