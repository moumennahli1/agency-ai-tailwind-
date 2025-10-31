import React from 'react'
import './Services.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Product Strategy",
      description: "Discovery, roadmapping, and prioritization to align business goals with user needs and market opportunities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      number: "01"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Wireframes, prototypes, and design systems for delightful, accessible interfaces that users love.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      number: "02"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern React frontends with robust APIs, performance optimization, and industry best practices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      number: "03"
    },
    {
      id: 4,
      title: "Mobile Apps",
      description: "Cross‑platform experiences with clean architecture, smooth animations, and intuitive UX.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      number: "04"
    },
    {
      id: 5,
      title: "Growth & Analytics",
      description: "Instrumentation, funnels, and experiments to learn fast, iterate quickly, and grow sustainably.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-violet-500",
      bgGradient: "from-indigo-50 to-violet-50",
      number: "05"
    },
    {
      id: 6,
      title: "DevOps & QA",
      description: "CI/CD pipelines, comprehensive testing, and monitoring to keep releases reliable and fast.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-rose-500 to-red-500",
      bgGradient: "from-rose-50 to-red-50",
      number: "06"
    }
  ]

  return (
    <div className="services bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100/50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-slate-300/30 rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
      </div>

      <Navbar />
      <main className="relative z-10 pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <header className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                What We Offer
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-6 leading-tight">
              <span className="block text-slate-900 mb-2 tracking-tight">Our Services</span>
              <span className="block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Built for Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
              We help startups and teams design, build, and scale
              <span className="text-slate-800 font-medium"> high‑quality digital products</span>
              {' '}that make a lasting impact.
            </p>
          </header>

          {/* Services Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Number Badge */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-bl-3xl rounded-tr-3xl flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-500`}>
                  <span className="text-white font-bold text-xl">{service.number}</span>
                </div>

                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  <svg className={`w-6 h-6 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-10 rounded-tr-full transition-opacity duration-500`}></div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 p-12 md:p-16 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and bring your vision to life with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="relative bg-slate-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group overflow-hidden"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/"
                  className="relative bg-white text-slate-900 px-8 py-4 rounded-full text-base font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-slate-200"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Services