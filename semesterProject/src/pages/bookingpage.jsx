import { useParams } from "react-router-dom";
import { useState } from "react";

const BookingPage = () => {
    const {id}=useParams();
    const [formData, setFormData]= useState({
        checkIn:"",
        checkOut:"",
        guests:1,
    });

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        fetch("http://localhost:5000/api/bookings",{
            method: POST,
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({...formData,listingId:id}),
        })
        .then((res)=>res.json())
        .then((data)=>alert(data.message));
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Booking for Listing {id}</h1>
            <input 
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
             />
             <input 
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
             />
             <input 
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                required
             />
             <button type="submit">Confirm Booking</button>
        </form>
    );
};
export default  BookingPage;