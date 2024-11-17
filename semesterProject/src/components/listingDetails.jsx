import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ListingDetails =()=>{
    const {id} = useParams(null);
    const [listing, setListing]=useState(null);
    const [error, setError]=useState(null);
    const navigate=useNavigate();

    
    useEffect(() => {
    // console.log("Listing ID:", id); // Check the id value
    fetch(`http://localhost:5000/api/listings/${id}`)
        .then((res) => res.json())
        .then((data) => setListing(data))
        .catch((err) => console.error("Error fetching listing:", err));
        console.log(listing);
    }, [id]);

    

    if(error){return <div>{error}</div>};
    if(!listing){return <div>Loading... </div>}
    return(
        <div>
            <h3 className="text-lg font-bold">{listing.title}</h3>
            <p className="text-gray-600">{listing.type} - {listing.guests} guests</p>
            <p className="text-gray-900 font-semibold">${listing.price} / night</p>
            <p className="text-yellow-500">Rating: {listing.rating}</p>
            <button onClick={()=>navigate(`/book/${id}`)}>Book Now</button>
        </div>  
    );
}
export default ListingDetails;