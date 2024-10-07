const ListingCard = ({ image, title, type, guests, price, rating }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg w-64"> {/* Set a fixed width */}
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{type} - {guests} guests</p>
      <p className="text-gray-900 font-semibold">${price} / night</p>
      <p className="text-yellow-500">Rating: {rating}</p>
    </div>
  </div>
);

export default ListingCard;
