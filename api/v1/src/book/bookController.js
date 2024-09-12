const book = require('./bookSchema')

exports.add = async(req,res) =>{
console.log ("in-----------------------------s")

   let add = book.add({name:"Life is journey"})
}