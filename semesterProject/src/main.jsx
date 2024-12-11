import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'

import HomePage from './pages/homepage.jsx'
import ListingDetails from './components/listingDetails.jsx';
import BookingPage from './pages/bookingpage.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <div className="m-7">
      {/* <App />
      <Navbar/> */
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/listings/:id" element={<ListingDetails/>}/>
        <Route path="/bookings/:id" element={<BookingPage/>}/>
      </Routes>
      }
      </div>
     </Router>
  </StrictMode>,
)



