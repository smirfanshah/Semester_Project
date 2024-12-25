import { useState } from "react";
import SearchBar from "./searchbar";
import { FiMenu, FiUser } from 'react-icons/fi'; // For the search icon
import { Link } from 'react-router-dom';
import ProtectedRoute from "./protectedRoute";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen]=  useState(false);
  // const [isAuthenticated, setAuthenticated]= useState(false);
  const { isAuthenticated, login, logout } = useAuth();
  const toggleDropdown=()=>{
    setDropdownOpen(!isDropdownOpen);
  }

  const handleLogout=()=>{
    logout(true);
  }
  return(
  <div className="m-7">
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">fake airbnb</div>
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:underline ">Stays</li>
          <li className="cursor-pointer hover:underline">Experiences</li>
        </ul>

        <button onClick={toggleDropdown} className="flex items-center space-x-4 p-3 border-2 border-gray-300 rounded-full ">
          <FiMenu /> 
            <div className="flex items-center justify-center bg-gray-600 text-white rounded-full p-1">
            {/* border-2 border-gray-800 rounded-full */}
              <FiUser /> 
            </div>
        </button>
        {isDropdownOpen &&(
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-md py-2 w-40 z-20">
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200">Sign Up</Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                <Link to="/bookings" className="block px-4 py-2 hover:bg-gray-200">Bookings</Link>
                <button onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-200 text-left w-full">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
      <SearchBar />
    </nav>
  </div>

  );

};
export default Navbar;