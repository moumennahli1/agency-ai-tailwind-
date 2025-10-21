import React from 'react'
import microsoft_logo from '../../assets/microsoft_logo.png'
import coinbase_logo from '../../assets/coinbase_logo.png'
import zoom_logo from '../../assets/zoom_logo.png'
import rakuten_logo from '../../assets/rakuten_logo.png'
import airbnb_logo from '../../assets/airbnb_logo.svg'

const Help = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-8">
            Trusted by Leading Companies
          </p>
          
          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-center h-12 w-full group">
              <img 
                src={microsoft_logo} 
                alt="Microsoft" 
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-full group">
              <img 
                src={coinbase_logo} 
                alt="Coinbase" 
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-full group">
              <img 
                src={zoom_logo} 
                alt="Zoom" 
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-full group">
              <img 
                src={rakuten_logo} 
                alt="Rakuten" 
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-full group">
              <img 
                src={airbnb_logo} 
                alt="Airbnb" 
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Services/Help Content */}
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-500 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How We Help You Succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            We provide comprehensive digital solutions that drive growth and innovation for businesses of all sizes.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Web Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Custom web applications built with modern technologies for optimal performance and user experience.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Mobile Apps</h3>
              <p className="text-slate-600 leading-relaxed">
                Native and cross-platform mobile applications that engage users and drive business growth.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Digital Strategy</h3>
              <p className="text-slate-600 leading-relaxed">
                Strategic consulting to help you navigate digital transformation and achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help