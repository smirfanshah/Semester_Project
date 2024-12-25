import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => setError("Error fetching listing"));
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!listing) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      {/* Picture and Info Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <div className="flex-1">
          <img
            src={listing.images?.picture_url || "/default-image.jpg"}
            alt={listing.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">{listing.name}</h2>
          <p className="text-lg text-gray-700 mt-2">{listing.summary}</p>
          <div className="mt-4 text-gray-600">
            <p>{listing.room_type} - {listing.accommodates} guests</p>
            <p className="text-yellow-500">Rating: {listing.review_scores?.rating || "N/A"}</p>
            <p className="font-semibold text-gray-900">${listing.price} / night</p>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">What this place offers:</h3>
        <div className="mt-4 flex flex-wrap justify-center">
          {listing.amenities && listing.amenities.map((amenity, index) => (
            <button key={index} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 mb-2">{amenity}</button>
          ))}
        </div>
      </div>

      {/* Reservation Section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Reserve Your Stay</h3>
        <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex-1">
            <label htmlFor="checkIn" className="text-gray-700">Check-In Date</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="checkOut" className="text-gray-700">Check-Out Date</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="guests" className="text-gray-700">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              className="w-full p-2 border border-gray-300 rounded-lg"
              defaultValue={1}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            onClick={() =>
              navigate(`/bookings/${id}`, {
                state: {
                  checkIn: document.getElementById("checkIn").value,
                  checkOut: document.getElementById("checkOut").value,
                  guests: document.getElementById("guests").value,
                  listing,
                },
              })
            }
            
          >
            Reserve Now
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800">Top Reviews:</h3>
        <div className="mt-4 space-y-4">
          {listing.reviews && listing.reviews.length > 0 ? (
            listing.reviews.slice(0, 5).map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-gray-900 font-semibold">{review.reviewer_name}</p>
                <p className="text-gray-600 text-ellipsis overflow-hidden whitespace-normal h-12">{review.comments}</p>
                <p className="text-sm text-gray-500">Reviewed on {formatDate(review.date)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews yet</p>
          )}
        </div>  
      </div>
    </div>
  );
};

export default ListingDetails;
