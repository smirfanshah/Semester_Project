import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Assuming you have AuthContext

const Bookings = () => {
  const { isAuthenticated } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      setError("You must be logged in to view bookings.");
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/bookings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is correct
          },
        });
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        console.log("Data received:", data);
        if (response.ok) {
          setBookings(data.bookings);
        } else {
          setError(data.error || "Failed to fetch bookings.");
        }
      } catch (err) {
        console.error("Error fetching bookings:", err.message);
        setError("An error occurred while fetching bookings.");
      }
    };

    console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      fetchBookings();
    }
  }, [isAuthenticated]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Bookings</h1>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id} className="border p-2 my-2 rounded shadow">
              {booking.listingPicture && (
                <img
                  src={booking.listingPicture}
                  alt={booking.listingName}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <h2 className="font-bold">{booking.listingName}</h2>
              <p>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</p>
              <p>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</p>
              <p>Guests: {booking.guests}</p>
              <p>Total: ${booking.totalPrice}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default Bookings;
