import { Link } from "react-router-dom";

const ListingCard = ({ id, image, title, type, guests, price, rating }) => (
  <Link 
    to={`/listings/${id}`} 
    className="border rounded-lg overflow-hidden shadow-lg w-full sm:w-64 md:w-80 lg:w-96 mx-auto cursor-pointer"
  >
    <div>
      <img 
        src={image || "path-to-placeholder-image.jpg"} 
        alt={title} 
        className="w-70 h-58 object-cover" 
      />
      <div className="p-4">
        <p className="flex justify-between space-x-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <span>★ {rating ? rating : "New"}</span>
        </p>
        <p className="text-gray-600">{type} - {guests} guests</p>
        <p className="text-gray-900 font-semibold">${price} / night</p>
      </div>
    </div>
  </Link>
);

export default ListingCard;
