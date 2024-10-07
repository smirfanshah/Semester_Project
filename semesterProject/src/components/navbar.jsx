import SearchBar from "./searchbar";
const Navbar = () => (

  <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-red-500">fake airbnb</div>
      <ul className="flex space-x-4">
        <li className="cursor-pointer hover:underline ">Stays</li>
        <li className="cursor-pointer hover:underline">Experiences</li>
      </ul>
      <div className="flex space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Login</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
      </div>
    </div>
    <SearchBar />
  </nav>
);
export default Navbar;