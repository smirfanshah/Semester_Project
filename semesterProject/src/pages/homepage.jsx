import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Categories from '../components/categories';
import ListingCard from '../components/listingCard';
import Footer from '../components/Footer';
import listingsData from '../data/listings'; // Import mock data

const HomePage = () => {
  const [listings, setListings] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    // Simulate fetching data (could be from an API)
    setListings(listingsData);
  }, []);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings-grid">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            image={listing.image}
            title={listing.title}
            type={listing.type}
            guests={listing.guests}
            price={listing.price}
            rating={listing.rating}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
