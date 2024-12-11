import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className="text-2xl font-bold p-4">Available Listings</h1>
    <Listings />
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </div>
  )
}

export default App
