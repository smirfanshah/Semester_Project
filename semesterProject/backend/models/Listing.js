const mongoose = require('mongoose');

// Review schema for embedding reviews
const ReviewSchema = new mongoose.Schema({
  reviewer_name: { type: String, required: true },
  comments: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
});

// Listing schema
const ListingSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: String,
    summary: String,
    bedrooms: Number,
    bathrooms: Number,
    price: { type: Number, required: true },
    images: {
      picture_url: String,
    },
    amenities: [String],
    reviews: [ReviewSchema], // Embedding reviews within the listing
  },
  { collection: 'listingsAndReviews' } // Correct placement for collection name
);

// Creating the Listing model
const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
