const mongoose = require('mongoose')
books = mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    }
}    
)
module.exports = mongoose.model('Books', books);