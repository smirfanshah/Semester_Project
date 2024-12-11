import { Link } from "react-router-dom";

const ListingCard = ({ id, name, images, bedrooms, bathrooms, price }) => (
  <Link 
    to={`/listings/${id}`} 
    className="border rounded-lg overflow-hidden shadow-lg w-full sm:w-64 md:w-80 lg:w-96 mx-auto cursor-pointer"
  >
    <div>
      <img 
        src={images?.picture_url || "path-to-placeholder-image.jpg"} 
        alt={name} 
        className="w-70 h-58 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{bedrooms} BR, {bathrooms} BA</p>
        <p className="text-gray-900 font-semibold">${price} / night</p>
        {/* <p className="text-gray-500">{summary}</p> */}
      </div>
    </div>
  </Link>
);

export default ListingCard;
