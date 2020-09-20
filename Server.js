const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const saltRounds = 10;
const Register = require("./Register");
const Schema = mongoose.Schema;
const Product = require("./Product");
const vendor = require("./vendor");
const imageCollect = require("./imagecollect");
const port = 5000 || process.env.port;
const RU = mongoose.model("users", Register);
const RV = mongoose.model("Vendors", vendor);
const RP = mongoose.model("product", Product);
const IC = mongoose.model("imageCollect", imageCollect);
const multer = require("multer");
const shortid = require("shortid");
const imageCollectNID = new Schema({
  image1:{
    type:Buffer,
    required:true,
  },
  imageID:{
    type:String,
    required:true,
  },
});
const ICN = mongoose.model("imageNID", imageCollectNID);
const avatar = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
    return cb(new Error("This is not a correct format of the file"));
    cb(undefined, true);
  },
});
const AddBrand = new mongoose.Schema({
  Brand: {
    type: String,
    required: true,
    unique: true,
  },
});
const BA = mongoose.model("Brand", AddBrand);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Database Model
// Route
// Get
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/ProductPICNID", avatar.single("upload"), (req, res) => {
  const image1 = req.file.buffer;
  const imageID = req.body.upload;
  const imageCollectNID = new ICN({
    image1,
    imageID,
  });
  imageCollectNID.save();
  res.end();
});



app.get("/getuserdata/:id", (req, res) => {
  RU.find({ _id: req.params.id }, function (err, result) {
    if (err) {
    } else {
      res.send(result);
    }
  });
});
app.get("/getvendordata/:id", (req, res) => {
  RV.find({ _id: req.params.id }, function (err, result) {
    if (err) {
    } else {
      res.json(result);
    }
  });
});

app.get("/geTiMagE/:id", (req, res) => {
  IC.find({ imageID: req.params.id }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set("Content-Type", "image/jpeg");
      res.send(result[0].image1);
    }
  });
});
app.get("/geTiMagE2/:id", (req, res) => {
  IC.find({ imageID: req.params.id }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set("Content-Type", "image/jpeg");
      res.send(result[0].image1);
    }
  });
});
app.get("/geTiMagE3/:id", (req, res) => {
  IC.find({ imageID: req.params.id }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set("Content-Type", "image/jpeg");
      res.send(result[0].image2);
    }
  });
});
app.get("/geTiMagE4/:id", (req, res) => {
  IC.find({ imageID: req.params.id }, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.set("Content-Type", "image/jpeg");
      res.send(result[0].image3);
    }
  });
});

app.get("/AllProduct", (req, res) => {
  RP.find({}, function (err, result) {
    if (err) {
      console.log(err, "err in fething product");
    } else {
      res.json(result);
    }
  });
});
app.get("/Product/:id", (req, res) => {
  RP.find({ _id: req.params.id }, function (err, result) {
    if (err) {
      console.log(err, "err in fething product");
    } else {
      res.json(result);
    }
  });
});
app.get("/refferF/:id", (req, res) => {
  RU.find({ _id: req.params.id }, function (err, result) {
    if (err) {
      console.log(err, "err in fething product");
    } else {
      res.json(result);
    }
  });
});
// Post
app.post("/delete/:id", (req, res) => {
  RU.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
  });
});
app.post("/update/:id", (req, res) => {
  const { name, email } = req.body;
  console.log(name);
  RU.updateOne({ _id: req.params.id }, { name, email }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
    }
  });
});
app.post("/updateEarn/:id", (req, res) => {
  const { earn } = req.body;
  RU.updateOne({ _id: req.params.id }, { earn }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
    }
  });
});



// Add Product
app.post("/ProductADD", (req, res) => {
  const {
    iteam,
    price,
    description,
    vendor,
    tags,
    size,
    offer,
    BrandName,
    imageID,
  } = req.body;
  const Product = new RP({
    iteam,
    price,
    description,
    vendor,
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
});
app.post("/ProductPIC", avatar.array("upload", 3), (req, res) => {
  const image1 = req.files[0].buffer;
  const image2 = req.files[1].buffer;
  const image3 = req.files[2].buffer;
  const imageID = req.body.upload;
  const imageCollect = new IC({
    image1,
    image2,
    image3,
    imageID,
  });
  imageCollect.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json(Product);
    }
  });
});
app.post("/ref/:id/:price", (req, res) => {
  const price7 = (req.params.price * 7) / 100;
  const price5 = (req.params.price * 5) / 100;
  RU.find({ _id: req.params.id }, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      RU.find({ ownrefferal: data[0].refferal }, function (err, ref1data) {
        if (ref1data) {
          const earnValue = ref1data[0].earn;
          const updateEarn = earnValue + price7;
          RU.updateOne(
            { _id: ref1data[0]._id },
            { earn: updateEarn },
            function (err, done1) {
              if (done1) {
                RU.find({ownrefferal:ref1data[0].refferal},function(err,data2nd){
                   if(data2nd){
                    const earnValue2 = data2nd[0].earn;
                    const updateEarn2 = earnValue2 + price5;
                    RU.updateOne({_id:data2nd[0]._id},{earn:updateEarn2},function(err,success){
                      if(err){
                        console.log(err);
                      }
                      if(success){
                        res.json(':)');
                      }
                    })
                   }
                })
              }
            }
          );
        }
      });
    }
  });
});
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
          res.json(noerr._id);
        }
        if (error) {
          console.log(error);
        }
      });
    }
  });
});
// Register
app.post("/Register", (req, res) => {
  const { email, name, password, refferal } = req.body;
  const earn = 0;
  const ownrefferal = shortid.generate();
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      res.redirect("/Register");
    } else {
      const Register = new RU({
        email,
        name,
        password: hash,
        refferal,
        ownrefferal,
        earn,
      });
      Register.save();
    }
  });
});
app.post("/Join", (req, res) => {
  const { email, name, password, Address, number } = req.body;
  const access = false
  const vendor = new RV({
    email,
    name,
    password,
    Address,
    access,
    number,
  });
  vendor.save();
});
app.post("/CheckVendor", (req, res) => {
  const { email, password } = req.body;
  RV.findOne({ email, password }, function (err, noerr) {
    if (err) {
      console.log(err);
    }
    if (noerr) {
      res.json(noerr);
    }
  });
});
// Listening
app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb+srv://demo:vuwV6K7Y2dMLX9U@cluster0.wbmpc.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected & App running in port ${port}`);
  } catch {
    console.log(`Database is't Connected & App is't running `);
  }
});
