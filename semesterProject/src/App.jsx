import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
     <Router> {/* Wrap your entire app with BrowserRouter */}
       <Navbar />
      </Router>
    </AuthProvider>
  );
}


export default App
