const ListingCard = ({ image, title, type, guests, price, rating }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg w-full sm:w-64 md:w-80 lg:w-96 mx-auto"> {/* Use responsive width */}
    <img src={image} alt={title} className="w-70 h-58 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{type} - {guests} guests</p>
      <p className="text-gray-900 font-semibold">${price} / night</p>
      <p className="text-yellow-500">Rating: {rating}</p>
    </div>
  </div>
);

export default ListingCard;
