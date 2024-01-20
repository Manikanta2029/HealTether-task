const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { body, output } = require("express-validator");

const { Staff } = require("./staff.model");

const app = express();
const PORT = 4000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/staffdetails", {
    dbName: "staffdata",
      
useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    console.log("Raw Request Body:", req.body);
    next();
  });
  

// Validation 
const validatingDetails = [
  body("staffId").isString().isLength({ max: 255 }).escape(),
  body("firstName").isString().isLength({ max: 255 }).escape(),
  body("lastName").isString().isLength({ max: 255 }).escape(),
  body("specialization").isString().isLength({ max: 50 }).escape(),
  body("isDoctor").isBoolean(),
  body("age").isNumeric().isInt({ min: 1, max: 100 }),
  body("birthday").isISO8601().toDate(),
  body("gender").isString().isLength({ max: 10 }).escape(),
  body("mobile").isString().isLength({ max: 10 }).escape(),
  body("countryCode").isString().isLength({ max: 10 }).escape(),
  body("whatsapp").isString().isLength({ max: 255 }).escape(),
  body("email").isEmail().isLength({ max: 100 }).escape(),
  body("address.house").isString().isLength({ max: 255 }).escape(),
  body("address.street").isString().isLength({ max: 1000 }).escape(),
  body("address.landmarks").isString().isLength({ max: 1000 }).escape(),
  body("address.city").isString().isLength({ max: 500 }).escape(),
  body("address.pincode").isString().isLength({ max: 50 }).escape(),
  body("documentType").isString().isLength({ max: 100 }).escape(),
  body("documentNumber").isString().isLength({ max: 100 }).escape(),
  body("upiId").isString().isLength({ max: 100 }).escape(),
  body("bankName").isString().isLength({ max: 100 }).escape(),
  body("accountName").isString().isLength({ max: 255 }).escape(),
  body("accountNo").isString().isLength({ max: 100 }).escape(),
  body("ifsc").isString().isLength({ max: 50 }).escape(),
  body("isAdmin").isBoolean(),
  body("created.on").isISO8601().toDate(),
  body("created.by.id").isString().isLength({ max: 255 }).escape(),
  body("created.by.name").isString().isLength({ max: 255 }).escape(),
  body("modified.on").isISO8601().toDate(),
  body("modified.by.id").isString().isLength({ max: 255 }).escape(),
  body("modified.by.name").isString().isLength({ max: 255 }).escape(),
  body("profilePic").isString().isLength({ max: 255 }).escape(),
  body("documents.*").isString().isLength({ max: 255 }).escape(),
  body("deleted").isBoolean(),
];


// Save Staff Details
app.post("/staffdetails", validatingDetails, async (req, res) => {
  try {
    const errors = output(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const sanitizedStaffData = { ...req.body };
 

    // Save the staff to the database
    const newStaff = new Staff(sanitizedStaffData);
    await newStaff.save();

    res.status(201).json({ message: "Staff Details Saved Successfully" });
  } catch (error) {
    console.error("Error saving staff:", error);
    res.status(500).json({ error: "Error Occurs" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:4000`);
});
