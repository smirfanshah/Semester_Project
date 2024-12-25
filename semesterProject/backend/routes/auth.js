const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utils/JWTUtility");
const User = require("../models/User");  // If you had a separate models folder
const Booking = require("../models/Booking"); // Importing Booking model
const Listing = require('../models/Listing');

const router = express.Router();
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;



router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Enter a valid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) return res.status(400).json({ error: "User already exists" });

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = new User({ name, email, password: hashedPassword, role: role || "user", });
            await user.save();

            const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
            res.status(201).json({ token });
        } catch (error) {
            console.error("Registration error:", error); // Log the error to the console
            res.status(500).json({ error: "Server error" });
        }
    }
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").exists().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: "Invalid email or password" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

      const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

router.get("/bookings", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ userId });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings." });
  }
});

// Fetch all listings
router.get('/admin/listings', authenticateToken, (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
}, async (req, res) => {
  const listings = await Listing.find();
  res.status(200).json({ listings });
});


// Add a new listing
router.post('/admin/listings', authenticateToken, async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json({ message: "Listing added", listing: savedListing });
  } catch (error) {
    res.status(400).json({ error: "Failed to add listing" });
  }
});

// Remove a listing
router.delete('/admin/listings/:id', authenticateToken, async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);
    if (!deletedListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.status(200).json({ message: "Listing removed", listing: deletedListing });
  } catch (error) {
    res.status(400).json({ error: "Failed to remove listing" });
  }
});

router.get('/admin/bookings', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId').populate('listingId');
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});


router.get("/test", (req, res) => {
  res.send("Auth route is working!");
});

module.exports = router;
