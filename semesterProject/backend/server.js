const express= require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const Booking = require("./models/Booking");
const Listing = require("./models/Listing");

const { authenticateToken } = require("./utils/JWTUtility");
const app = express();
const PORT= 5000;


//
//const MONGO_URI = "mongodb+srv://irfanshah0422:mongoair0422@cluster0.5x2a6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const MONGO_URI = "mongodb+srv://irfanshah0422:mongoair0422@cluster0.5x2a6.mongodb.net/sample_airbnb?retryWrites=true&w=majority&appName=Cluster0";



mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
  
  app.use(cors());
  app.use(express.json());

  app.use("/api/auth", authRoutes); // Register auth routes



app.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find().limit(20); 
    // console.log(listings);
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

app.post("/api/bookings", authenticateToken, async (req, res) => {
  console.log("Incoming booking request:", req.body); 

  try {
    // Validate the request body
    const { checkIn, checkOut, roomType, guests, listingId } = req.body;
    if (!checkIn || !checkOut || !roomType || !guests || !listingId) {
      console.error("Missing required fields:", req.body);
      return res.status(400).json({ error: "Missing required fields" });
    }

    const listing = await Listing.findById(req.body.listingId); // Assuming `Listing` is your listing model
    const days = (new Date(req.body.checkOut) - new Date(req.body.checkIn)) / (1000 * 3600 * 24);
    const totalPrice = days * listing.price;
    // Add the authenticated user's ID to the booking
    const newBooking = new Booking({
      ...req.body,
      userId: req.user.id, // Attach userId from token
      listingName: listing.name,
      listingPicture: listing.images, // Assuming the listing has a `picture` field
      totalPrice: totalPrice,
    });

    const savedBooking = await newBooking.save();
    console.log("Booking saved successfully:", savedBooking);

    res.status(201).json({ message: "Booking Confirmed", details: savedBooking });
  } catch (error) {
    console.error("Error saving booking:", error.message);
    res.status(500).json({
      error: "Failed to save booking. Please try again.",
      details: error.message,
    });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });