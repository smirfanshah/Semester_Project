const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-2xl font-bold">Airbnb</div>
    <ul className="flex space-x-4">
      <li className="cursor-pointer hover:underline">Stays</li>
      <li className="cursor-pointer hover:underline">Experiences</li>
    </ul>
    <div className="flex space-x-4">
      <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Login</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
    </div>
  </nav>
);
export default Navbar;