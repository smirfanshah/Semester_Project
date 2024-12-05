const express= require("express");
const cors = require("cors");
const app = express();
const PORT= 5000;
const mongoose = require('mongoose');

//MiddleWare
app.use(cors());
app.use(express.json());
//
const MONGO_URI = "mongodb+srv://irfanshah0422:mongoair0422@cluster0.5x2a6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const ListingSchema = new mongoose.Schema({
  name: String,
  summary: String,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  images: {
    picture_url: String,
  },
});

const Listing = mongoose.model('Listing', ListingSchema, 'listingsAndReviews');
// const listings = [
//     {
//       id: 1,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY4MTU2OTMzMjYwMTQ5OQ%3D%3D/original/7fe72e51-f9b5-4702-b71c-4b6c2134507b.jpeg?im_w=1440&im_q=highq',
//       title: 'Kahna Villa',
//       type: 'Entire home',
//       guests: 4,
//       price: 150,
//       rating: 4.8,
//       amenities: ['WiFi', 'Pool', 'Kitchen', 'Parking'],
//       bedrooms: 2,
//       bathrooms: 2,
//       location: 'California',
//     },
//     {
//       id: 2,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1440&im_q=highq',
//       title: 'Cozy Cabin',
//       type: 'Private room',
//       guests: 2,
//       price: 85,
//       rating: 4.7,
//       amenities: ['WiFi', 'Heating', 'Kitchen'],
//       bedrooms: 1,
//       bathrooms: 1,
//       location: 'Oregon',
//     },
//     {
//       id: 3,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png?im_w=1440&im_q=highq',
//       title: 'Modern Apartment',
//       type: 'Entire home',
//       guests: 3,
//       price: 120,
//       rating: 4.5,
//       amenities: ['WiFi', 'TV', 'Kitchen'],
//       bedrooms: 1,
//       bathrooms: 1,
//       location: 'New York City',
//     },
//     {
//       id: 4,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=1440&im_q=highq',
//       title: 'Rustic Lodge',
//       type: 'Entire home',
//       guests: 6,
//       price: 200,
//       rating: 4.9,
//       amenities: ['WiFi', 'Fireplace', 'BBQ'],
//       bedrooms: 3,
//       bathrooms: 2,
//       location: 'Colorado',
//     },
//     {
//       id: 5,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1440&im_q=highq',
//       title: 'Charming Studio',
//       type: 'Private room',
//       guests: 2,
//       price: 90,
//       rating: 4.6,
//       amenities: ['WiFi', 'Kitchen', 'Coffee Maker'],
//       bedrooms: 1,
//       bathrooms: 1,
//       location: 'Chicago',
//     },
//     {
//       id: 6,
//       image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=1440&im_q=highq',
//       title: 'Luxury Penthouse',
//       type: 'Entire home',
//       guests: 5,
//       price: 300,
//       rating: 4.7,
//       amenities: ['WiFi', 'Gym', 'Pool', 'Concierge'],
//       bedrooms: 3,
//       bathrooms: 2,
//       location: 'Miami',
//     },
//     {
//       id: 7,
//       image: '/images/property7.jpg',
//       title: 'Countryside Retreat',
//       type: 'Entire home',
//       guests: 8,
//       price: 250,
//       rating: 4.6,
//       amenities: ['WiFi', 'Fireplace', 'BBQ'],
//       bedrooms: 4,
//       bathrooms: 3,
//       location: 'Texas',
//     },
//     {
//       id: 8,
//       image: '/images/property8.jpg',
//       title: 'Downtown Loft',
//       type: 'Entire home',
//       guests: 4,
//       price: 180,
//       rating: 4.8,
//       amenities: ['WiFi', 'TV', 'Kitchen', 'Washer/Dryer'],
//       bedrooms: 2,
//       bathrooms: 1,
//       location: 'San Francisco',
//     },
//     {
//       id: 9,
//       image: '/images/property9.jpg',
//       title: 'Seaside Cottage',
//       type: 'Private room',
//       guests: 3,
//       price: 110,
//       rating: 4.5,
//       amenities: ['WiFi', 'Kitchen', 'Heating'],
//       bedrooms: 1,
//       bathrooms: 1,
//       location: 'Maine',
//     },
//     {
//       id: 10,
//       image: '/images/property10.jpg',
//       title: 'Eco-Friendly Home',
//       type: 'Entire home',
//       guests: 4,
//       price: 130,
//       rating: 4.7,
//       amenities: ['WiFi', 'Solar Panels', 'Kitchen', 'EV Charger'],
//       bedrooms: 2,
//       bathrooms: 2,
//       location: 'California',
//     },
//     {
//       id: 11,
//       image: '/images/property11.jpg',
//       title: 'Ski Resort Cabin',
//       type: 'Entire home',
//       guests: 6,
//       price: 220,
//       rating: 4.9,
//       amenities: ['WiFi', 'Fireplace', 'Ski-in/Ski-out'],
//       bedrooms: 3,
//       bathrooms: 2,
//       location: 'Vermont',
//     },
//     {
//       id: 12,
//       image: '/images/property12.jpg',
//       title: 'Urban Bungalow',
//       type: 'Entire home',
//       guests: 3,
//       price: 160,
//       rating: 4.6,
//       amenities: ['WiFi', 'Parking', 'Kitchen'],
//       bedrooms: 2,
//       bathrooms: 1,
//       location: 'Los Angeles',
//     },
//     {
//       id: 13,
//       image: '/images/property13.jpg',
//       title: 'Mountain View Retreat',
//       type: 'Private room',
//       guests: 2,
//       price: 95,
//       rating: 4.4,
//       amenities: ['WiFi', 'Heating', 'Kitchen'],
//       bedrooms: 1,
//       bathrooms: 1,
//       location: 'Wyoming',
//     },
//     {
//       id: 14,
//       image: '/images/property14.jpg',
//       title: 'Island Paradise',
//       type: 'Entire home',
//       guests: 5,
//       price: 280,
//       rating: 4.8,
//       amenities: ['WiFi', 'Pool', 'Ocean View'],
//       bedrooms: 3,
//       bathrooms: 2,
//       location: 'Hawaii',
//     },
//     {
//       id: 15,
//       image: '/images/property15.jpg',
//       title: 'Historical Mansion',
//       type: 'Entire home',
//       guests: 10,
//       price: 400,
//       rating: 5.0,
//       amenities: ['WiFi', 'Gym', 'Pool', 'Sauna'],
//       bedrooms: 5,
//       bathrooms: 4,
//       location: 'Boston',
//     }
//   ];






// app.get("/api/listings", (req,res)=>res.json(listings));

app.get('api/listings', async(req,res)=>{
  try{
    const listings= await Listing.find().limit(20);
    res.json(listings);
  }catch(error){
    res.status(500).send('Error fetching Listings');
  }
});

app.get("/api/listings/:id", async(req,res)=>{
  try{
    const {id}=req.params;
    const listing= await Listing.findOne({_id:id});
    if(!listing){
      return res.status(404).send('Listing not Found');
    }
    res.json(listing);
  } catch(error){
    res.status(500).send('Error Fetching Listing');
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

app.post("/api/bookings",(req,res)=>{
    const {listingId, checkIn, checkOut, guests}= req.body;
    res.status(200).send({
        message: "Booking Confirmed",
        details: {listingId, checkIn, checkOut, guests},
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });