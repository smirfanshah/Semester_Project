const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    guestName: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    roomType: { type: String, required: true },
    guests: { type: Number, required: true }, // Guests count
    listingId: { type: String, required: true }, // Listing reference
    listingName: { type: String, required: true }, // Name of the listing
    listingPicture: { type: String, required: true }, // URL of the listing's picture
    totalPrice: { type: Number, required: true }, // Total booking price
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
