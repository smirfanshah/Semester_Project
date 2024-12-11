import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BookingPage = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { checkIn, checkOut, guests } = location.state || {};
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/listings/${id}`)
            .then((res) => res.json())
            .then((data) => setListing(data))
            .catch((err) => setError("Error fetching listing"));
    }, [id]);

    const calculateTotal = () => {
        const days = (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24); // Calculate the difference in days
        return days * listing.price; // Total cost = days * price per night
    };

    const handleBooking = () => {
        const bookingData = {
            guestName: "John Doe", // Replace with dynamic user data
            checkIn,
            checkOut,
            roomType: listing.room_type, // Assuming room type is part of the listing data
            guests,
            listingId: listing._id,
        };

        fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })
            .then((res) => res.json())
            .then((data) => {
                // Redirect to a confirmation page or show success message
                navigate(`/confirmation/${data._id}`);
            })
            .catch((err) => setError("Error booking the listing"));
    };

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!listing) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
                {/* Picture and Info Section */}
                <div className="flex-1">
                    <img src={listing.images.picture_url} alt={listing.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <h2 className="text-3xl font-bold text-gray-900">{listing.name}</h2>
                    <p className="text-lg text-gray-700 mt-2">{listing.summary}</p>
                    <div className="mt-4 text-gray-600">
                        <p>{listing.room_type} - {listing.guests} guests</p>
                        <p className="text-yellow-500">Rating: {listing.rating}</p>
                        <p className="font-semibold text-gray-900">${listing.price} / night</p>
                    </div>
                </div>
            </div>

            {/* Reservation Details */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800">Confirm Your Booking</h3>
                <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                    <div className="flex-1">
                        <label htmlFor="checkIn" className="text-gray-700">Check-In Date</label>
                        <input
                            type="date"
                            id="checkIn"
                            name="checkIn"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={checkIn}
                            disabled
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="checkOut" className="text-gray-700">Check-Out Date</label>
                        <input
                            type="date"
                            id="checkOut"
                            name="checkOut"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={checkOut}
                            disabled
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
                            value={guests}
                            disabled
                        />
                    </div>
                </div>

                {/* Total Cost */}
                <div className="mt-6">
                    <p className="font-semibold text-lg">Total: ${calculateTotal()}</p>
                </div>

                <div className="mt-6">
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        onClick={handleBooking}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
