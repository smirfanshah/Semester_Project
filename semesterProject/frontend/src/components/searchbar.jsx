import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // For the search icon

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Location:", location, "Check In:", checkInDate, "Check Out:", checkOutDate, "Guests:", guests);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex bg-white shadow-md rounded-full overflow-hidden">
        {/* Where (Location) */}
        <div className="flex items-center px-4 border-r border-gray-200">
          <input
            type="text"
            placeholder="Where" 
            className="outline-none text-sm text-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center px-4 border-r border-gray-200">
          <input
            type="date"
            placeholder="Check-in"
            className="outline-none text-sm text-gray-600"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>

        {/* Check-out */}
        <div className="flex items-center px-4 border-r border-gray-200">
          <input
            type="date"
            placeholder="Check-out"
            className="outline-none text-sm text-gray-600"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>

        {/* Who (Guests) */}
        <div className="flex items-center px-4">
          <input
            type="number"
            placeholder="Who"
            className="outline-none text-sm text-gray-600"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white p-3 rounded-full flex items-center justify-center ml-4 hover:bg-red-600"
        >
          <FiSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
