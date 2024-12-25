import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Categories from '../components/categories';
import ListingCard from '../components/listingCard';
import Footer from '../components/Footer';
// import listingsData from '../data/listings'; // Import mock data

const HomePage = () => {
  const [listings, setListings] = useState([]);

  // Fetch data when component mounts
  // useEffect(() => {
  //   // Simulate fetching data (could be from an API)
  //   setListings(listingsData);
  // }, []);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/listings");
        const data = await response.json();
        console.log("Fetched listings data:", data); // Log the fetched data
        if (Array.isArray(data)) {
          setListings(data); // Ensure `data` is an array
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
  
    fetchListings();
  }, []);
  

  return (
    <div>
      <Navbar />
      <div className="pt-40"> {/* Add padding to the top */}
        <Categories />
        <h1 className="text-2xl font-bold p-4">Past Experiences</h1>
        <div className="flex flex-wrap justify-start gap-3 p-1">
          {listings.map(({ _id, name, images, bedrooms, bathrooms, price, summary }) => (
            <ListingCard
              key={_id}
              id={_id}
              name={name}
              images={images}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              price={price}
              summary={summary}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );};

export default HomePage;
