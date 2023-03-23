const router = require("express").Router();
let Book = require("../models/Book");

router.route("/add").post((req,res)=>{

    const bookTitle = req.body.bookTitle;
    const bookCategory = req.body.bookCategory;
    const bookRegNo = req.body.bookRegNo;
    const language = req.body.language;
    const imageUrl = req.body.imageUrl;

    let newBook = new Book();
    newBook.bookTitle = bookTitle;
    newBook.bookCategory = bookCategory;
    newBook.bookRegNo = bookRegNo;
    newBook.language = language;
    newBook.imageUrl = imageUrl;
    
    newBook.save().then(()=>{
        res.json("Book Added")
    }).catch((err)=>{
        console.log(err);
    })

})


router.put("/update/:updateId", async (req, res) => {
    const filter = { bookRegNo: req.params.updateId };
    const options = {
      upsert: true,
      new: true,
    };
    try {
      const result = await Book.findOneAndUpdate(
        filter,
        {

          bookTitle:req.body.bookTitle,
          bookCategory:req.body.bookCategory,
          bookRegNo:req.body.bookRegNo,
          language:req.body.language,
          imageUrl:req.body.imageUrl

        },
        options
      );
      res.status(200).send({ Book: result });
    } catch (error) {
      res.status(400).send({ success: false, msg: error });
    }
  });


router.route("/").get((req,res)=>{
    Book.find().then((Books)=>{
        res.json(Books)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  const data = await Book.findById(filter);

  if (data) {
    return res.status(200).send({ success: true, Book: data });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
}); 

router.route("/delete/:Id").delete(async(req,res)=>{
  let bookRegNo = req.params.Id;

  await Book.findOneAndDelete({ bookRegNo })
  .then (()=>{
      res.status(200).send({status: "Item is Deleted"})
  }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status:"Error with deleting data"});
  })

}) 






module.exports = router;