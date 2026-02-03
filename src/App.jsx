// src/App.jsx
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home/Home"
import OurWork from "./pages/OurWork/OurWork"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </>
  )
}

export default App
