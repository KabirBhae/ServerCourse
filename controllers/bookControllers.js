const bookModel = require('../models/books')

const addBooks = (req,res)=>{
    res.render("addBooks.ejs")
}

const postBooks = (req,res)=>{
    const body = new bookModel({
        bookName : req.fname,
        authorName : req.lname
    }
    )
    body.save().then(()=>{
        console.log("book added")
    })
}

module.exports = {addBooks,postBooks}