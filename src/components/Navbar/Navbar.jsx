import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu_icon.svg'
import closeIcon from '../../assets/close_icon.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Our Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                to="/" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="relative bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <img src={closeIcon} alt="Close menu" className="h-6 w-6" />
              ) : (
                <img src={menuIcon} alt="Open menu" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
          <Link
            to="/"
            className="text-slate-700 hover:text-slate-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-slate-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/our-work"
            className="text-slate-700 hover:text-slate-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Our Work
          </Link>
          <Link
            to="/contact"
            className="text-slate-700 hover:text-slate-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <div className="px-3 py-2">
            <Link to="/contact" onClick={closeMenu}>
              <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar