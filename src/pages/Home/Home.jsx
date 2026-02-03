import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import About from '../../components/About/About.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import Footer from '../../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className="home bg-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Cards />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home