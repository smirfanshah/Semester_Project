import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./context/AuthContext";
import Login from './pages/Login.jsx';
import Signup from './pages/signup.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'

import HomePage from './pages/homepage.jsx'
import ListingDetails from './components/listingDetails.jsx';
import BookingPage from './pages/bookingpage.jsx';
import ProtectedRoute from "./components/protectedRoute.jsx";
import Bookings from './pages/bookings.jsx';
// import Signup from './pages/signup.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <div className="m-7">
      {/* <App />
      <Navbar/> */
      }

      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/listings/:id" element={<ListingDetails/>}/>
          <Route path="/bookings/:id" element={<BookingPage/>}/>
          <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>

      </div>
     </Router>
  </StrictMode>,
)



