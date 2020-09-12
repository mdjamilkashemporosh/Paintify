const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const path = require('path');
const saltRounds = 10;
const Register = require("./Register");
const Schema = mongoose.Schema;
const Product = require("./Product");
const imageCollect = require("./imageCollect")
const port = 5000;
const RU = mongoose.model("users", Register);
const RP = mongoose.model("product", Product);
const IC = mongoose.model("imageCollect", imageCollect);
const multer  = require('multer')
const avatar = multer({
    limits:{
        fileSize:1000000,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
        return cb(new Error('This is not a correct format of the file'))
        cb(undefined,true)
    }
})
const AddBrand = new mongoose.Schema({
  Brand:{
    type:String,
    required:true,
    unique:true
  }
})
const BA = mongoose.model("Brand", AddBrand );
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Database Model
// Route
// Get
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get("/geTiMagE/:id",(req,res)=>{
  IC.find({imageID:req.params.id},function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set('Content-Type','image/jpeg')
      res.send(result[0].image1);
    }
  });
})
app.get("/geTiMagE2/:id",(req,res)=>{
  IC.find({imageID:req.params.id},function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set('Content-Type','image/jpeg')
      res.send(result[0].image1);
    }
  });
})
app.get("/geTiMagE3/:id",(req,res)=>{
  IC.find({imageID:req.params.id},function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set('Content-Type','image/jpeg')
      res.send(result[0].image2);
    }
  });
})
app.get("/geTiMagE4/:id",(req,res)=>{
  IC.find({imageID:req.params.id},function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set('Content-Type','image/jpeg')
      res.send(result[0].image3);
    }
  });
})

app.get("/AllProduct",(req, res)=>{
  RP.find({},function(err, result) {
    if (err) {
      console.log(err,'err in fething product');
    } else {
      res.json(result);
    }
  });
});
app.get("/Product/:id",(req, res)=>{
  RP.find({_id:req.params.id},function(err, result) {
    if (err) {
      console.log(err,'err in fething product');
    } else {
      res.json(result);
    }
  });
});
// Post
// Add Product
app.post("/ProductADD",(req,res)=>{
  const {iteam, price, description, tags, size, offer,BrandName,imageID} = req.body;
  const Product = new RP({
    iteam,
    price,
    description,
    tags,
    size,
    offer,
    BrandName,
    imageID,
  });
  Product.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json(Product);
    }
  });
})
app.post("/ProductPIC",avatar.array('upload',3),(req, res) => {
   const image1 = req.files[0].buffer;
   const image2 = req.files[1].buffer;
   const image3 = req.files[2].buffer;
   const imageID = req.body.upload;
   const imageCollect = new IC({
     image1,
     image2,
     image3,
     imageID
   });
  imageCollect.save((err) => {
     if (err) {
       console.log(err);
     } else {
       res.status(201).json(Product);
     }
   });
});
app.post('/AddBrand',(req,res)=>{
  const {Brand} = req.body
  const BrandADD = new BA({
    Brand
  });
 BrandADD.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json(Product);
    }
});
})
// Login
app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  RU.findOne({ email: email }, function (err, noerr) {
    if (err) {
      console.log(err);
    }
    if (noerr) {
      bcrypt.compare(password, noerr.password, function (error, result) {
        if (result === true) {
          console.log(noerr);
        }
      });
    }
  });
});
// Register
app.post("/Register", (req, res) => {
  const { email, name, password, address, district, refferal } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.redirect("/Register");
    } else {
      const Register = new RU({
        email,
        name,
        password: hash,
        address,
        district,
        refferal,
      });
      Register.save((err) => {
        if (err) {
          res.redirect("/Register");
        } else {
          res.status(201).json(Register);
        }
      });
    }
  });
});
// Listening
app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/error", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected & App running in port ${port}`);
  } catch {
    console.log(`Database is't Connected & App is't running `);
  }
});
