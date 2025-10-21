import React from 'react'
import AboutImage from '../../assets/about.jpg'
import AirbnbLogo from '../../assets/airbnb_logo.svg'
import GoogleLogo from '../../assets/google_logo.svg'
import MicrosoftLogo from '../../assets/microsoft_logo.png'
import ZoomLogo from '../../assets/zoom_logo.png'
import CoinbaseLogo from '../../assets/coinbase_logo.png'
import RakutenLogo from '../../assets/rakuten_logo.png'

const About = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-500">About</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">A trusted partner for modern product teams</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We align strategy, design, and engineering to deliver business outcomes with clarity, speed, and reliability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Focused on outcomes. Backed by experience.</h3>
            <p className="mt-4 text-slate-600 leading-7">Our multidisciplinary teams work as an extension of yours—turning validated ideas into scalable products. We bring senior expertise, clear communication, and a pragmatic approach to every engagement.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
                <span className="text-slate-700">Research‑driven discovery and prioritization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
                <span className="text-slate-700">Design systems, accessibility, and usability at scale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
                <span className="text-slate-700">Robust full‑stack engineering and delivery</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Start a project</a>
              <a href="#process" className="text-slate-700 hover:text-slate-900 font-medium">Our process</a>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-t border-slate-200 pt-4">
                <dt className="text-sm text-slate-600">Projects delivered</dt>
                <dd className="text-xl font-semibold text-slate-900">250+</dd>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <dt className="text-sm text-slate-600">Client satisfaction</dt>
                <dd className="text-xl font-semibold text-slate-900">98%</dd>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <dt className="text-sm text-slate-600">Avg. time to launch</dt>
                <dd className="text-xl font-semibold text-slate-900">6–12 weeks</dd>
              </div>
            </dl>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img src={AboutImage} alt="Team collaborating in a modern workspace" className="relative w-full h-auto rounded-2xl shadow-xl ring-1 ring-slate-900/10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About