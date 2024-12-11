const express= require("express");
const cors = require("cors");
const app = express();
const PORT= 5000;
const mongoose = require('mongoose');

//MiddleWare
app.use(cors());
app.use(express.json());
//
//const MONGO_URI = "mongodb+srv://irfanshah0422:mongoair0422@cluster0.5x2a6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI = "mongodb+srv://irfanshah0422:mongoair0422@cluster0.5x2a6.mongodb.net/sample_airbnb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


  const ReviewSchema = new mongoose.Schema({
    reviewer_name: { type: String, required: true }, // Name of the reviewer
    comments: { type: String, required: true }, // Content of the review
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1 and 5
    date: { type: Date, default: Date.now }, // Review submission date
  });
  
  const ListingSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: String,
    summary: String,
    bedrooms: Number,
    bathrooms: Number,
    price: { type: Number, required: true }, // Price per night
    images: {
      picture_url: String,
    },
    amenities: [String], // List of amenities available at the listing
    reviews: [ReviewSchema], // Embedding reviews within the listing
  });
  
  const BookingSchema = new mongoose.Schema({
    guestName: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    roomType: { type: String, required: true },
    guests: { type: Number, required: true }, // Guests count
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true }, // Listing reference
  });
  
const Booking = mongoose.model('Booking', BookingSchema);


const Listing = mongoose.model('Listing', ListingSchema, 'listingsAndReviews');

app.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find().limit(20); 
    console.log(listings);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching listings', details: error.message });

  }
}); 


app.get(`/api/listings/:id`, async (req, res) => { 
  try {
    const { id } = req.params;

    const listing = await Listing.findOne({ _id: id });
    if (!listing) {
      return res.status(404).send('Listing not found');
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching listing', details: error.message });
  }
});


app.post("/api/admin/listings",async(req,res)=>{
  try{
    const newListing= new Listing(req.body);
    const savedListing= await newListing.save();
    res.json(savedListing);
  }catch(error){
    res.status(400).send("Error occured while saving listing");
  }
});

app.delete("/api/admin/listings/:id", async(req,res)=>{
   try{
    const {id}=req.params;
    const deleteListing =await Listing.findByIdAndDelete(id);
    if(!deleteListing){
      return res.status(400).send('Lisitng not Found');
    }
    res.json({message: 'Lisitng Deleted',deleteListing});
   }catch(error){
    res.status(500).send('Error Deleting Listing');
   }
});

app.post("/api/bookings", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "Booking Confirmed", details: savedBooking });
  } catch (error) {
    res.status(400).json({ error: "Error occurred while saving booking", details: error.message });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });