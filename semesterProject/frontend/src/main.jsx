import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import HomePage from './pages/homepage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <div className="m-7">
      {/* <App />
      <Navbar/> */
      <HomePage/>}
      </div>
     </BrowserRouter>
  </StrictMode>,
)



