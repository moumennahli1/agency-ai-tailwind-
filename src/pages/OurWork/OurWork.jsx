import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import workDashboard from '../../assets/work_dashboard_management.png'
import workFitness from '../../assets/work_fitness_app.png'
import workMobile from '../../assets/work_mobile_app.png'

const OurWork = () => {
  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Real‑time insights with role‑based access, custom charts, and alerts.',
      image: workDashboard,
      tags: ['Dashboard', 'Analytics', 'B2B'],
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      id: 2,
      title: 'Fitness Companion',
      description: 'Personalized workouts, social challenges, and progress tracking.',
      image: workFitness,
      tags: ['Health', 'Social', 'Mobile'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'E‑commerce App',
      description: 'Fast checkout, offline mode, and beautiful product browsing.',
      image: workMobile,
      tags: ['E‑commerce', 'Payments', 'PWA'],
      gradient: 'from-orange-500 to-amber-500',
    },
  ]

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100/50"></div>
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-r from-indigo-200/30 to-violet-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-14 md:mb-20">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                Selected Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
              Our Work
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of recent projects that blend strategy, design, and engineering.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200 p-4 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}></div>

                {/* Screenshot */}
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 p-10 md:p-14 text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Have a project in mind?</h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">We’d love to collaborate. Tell us about your goals and we’ll make a plan.</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors shadow-xl"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Keep footer above background */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default OurWork

