import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/logo.png";
import FacebookIcon from "../../assets/facebook_icon.svg";
import TwitterIcon from "../../assets/twitter_icon.svg";
import InstagramIcon from "../../assets/instagram_icon.svg";
import LinkedinIcon from "../../assets/linkedin_icon.svg";
import EmailIcon from "../../assets/email_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logoDark} alt="Company Logo" className="h-18 w-auto" />
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group"
                aria-label="Facebook"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors group"
                aria-label="Instagram"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/our-work"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <img src={EmailIcon} alt="Subscribe" className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <img src={EmailIcon} alt="Email" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-white">yassbidi72@Gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="text-white">0777920861</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Address</p>
                <p className="text-white">morocco, مديونة 20670</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
