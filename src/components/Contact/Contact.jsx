import React, { useState } from 'react'
import EmailIcon from '../../assets/email_icon.svg'
import FacebookIcon from '../../assets/facebook_icon.svg'
import TwitterIcon from '../../assets/twitter_icon.svg'
import InstagramIcon from '../../assets/instagram_icon.svg'
import LinkedinIcon from '../../assets/linkedin_icon.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
  
          <span className="inline-block text-xl font-semibold tracking-widest uppercase text-slate-500 mb-4">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">Ready to transform your ideas into reality? Our team of experts is here to help you create exceptional digital experiences that drive results.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                    Project Type *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                      placeholder="What type of project are you working on?"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                    Project Details *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-4 focus:ring-slate-500/20 focus:border-slate-500 transition-all duration-200 bg-slate-50/50 hover:bg-white resize-none"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    />
                    <div className="absolute top-4 right-4">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-slate-800 hover:to-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-500/20 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full -translate-y-12 -translate-x-12"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Get in Touch</h3>
                    <p className="text-slate-600">Multiple ways to reach us</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img src={EmailIcon} alt="Email" className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Email Us</h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">hello@company.com</p>
                          <p className="text-slate-500 text-sm">General inquiries</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-slate-600 font-medium">support@company.com</p>
                          <p className="text-slate-500 text-sm">Technical support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Call Us</h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">+1 (555) 123-4567</p>
                          <p className="text-slate-500 text-sm">Main office</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-slate-600 font-medium">+1 (555) 987-6543</p>
                          <p className="text-slate-500 text-sm">Sales team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Visit Us</h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">123 Business Street</p>
                          <p className="text-slate-600 font-medium">Suite 100, City, State 12345</p>
                          <p className="text-slate-500 text-sm">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-100 to-slate-200 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Connect With Us</h3>
                    <p className="text-slate-600">Stay updated on social media</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                    aria-label="Facebook"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Facebook</p>
                      <p className="text-sm text-slate-500">Follow us</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                    aria-label="Twitter"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Twitter</p>
                      <p className="text-sm text-slate-500">Follow us</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                    aria-label="Instagram"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Instagram</p>
                      <p className="text-sm text-slate-500">Follow us</p>
                    </div>
                  </a>
                  
                  <a
                    href="#"
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">LinkedIn</p>
                      <p className="text-sm text-slate-500">Connect with us</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-slate-100 to-slate-200 rounded-full translate-y-14 -translate-x-14"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">When we're available</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">Monday - Friday</span>
                    </div>
                    <span className="font-bold text-slate-900">9:00 AM - 6:00 PM</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">Saturday</span>
                    </div>
                    <span className="font-bold text-slate-900">10:00 AM - 4:00 PM</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">Sunday</span>
                    </div>
                    <span className="font-bold text-slate-900">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-slate-50 rounded-2xl">
                  <p className="text-sm text-slate-600 text-center">
                    <span className="font-semibold">Response Time:</span> We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact