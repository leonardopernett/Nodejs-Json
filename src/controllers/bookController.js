const controller  = {}
const fs = require('fs')
const uuid =  require('uuid/v4')

 const jsonBooks = fs.readFileSync('src/books.json', 'utf-8')

let books = JSON.parse(jsonBooks)

controller.index = (req,res,next)=>{
    res.render('index.ejs', {books})
}

controller.add = (req,res,next)=>{
    res.render('newEntry.ejs')
}

controller.save = (req,res,next)=>{
   const {title, author, image, description} = req.body
   if(!title || !author || !image || !description){
       res.status(500).send('entries must have value')
   }
   const newBooks = {
       id: uuid(),
       title:title,
       author:author,
       image:image,
       description:description
   }
   books.push(newBooks)
   

   const json_book = JSON.stringify(books)
   fs.writeFileSync('src/books.json',json_book, 'utf-8')

   res.redirect('/api')
}

controller.delete = (req, res, next)=>{
  
    books =  books.filter(book => book.id != req.params.id)
   const json_book = JSON.stringify(books)
   fs.writeFileSync('src/books.json',json_book, 'utf-8')

     res.redirect('/api')
}



module.exports =  controller