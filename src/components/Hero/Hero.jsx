import React from 'react'
import group_profile from '../../assets/group_profile.png'
import Hero_image from '../../assets/hero_img.jpg'
import Bg_img from '../../assets/bgImage1.png'

const Hero = () => {
  return (
    <div className='relative min-h-[calc(100vh-4rem)] bg-white overflow-hidden'>
      {/* Animated geometric background */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-200/20 via-transparent to-slate-300/20'></div>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 border border-slate-400/30 rotate-45 animate-spin' style={{animationDuration: '20s'}}></div>
        <div className='absolute bottom-1/4 right-1/4 w-48 h-48 border border-slate-500/30 rotate-12 animate-pulse'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-slate-600/40 rounded-full animate-bounce' style={{animationDuration: '3s'}}></div>
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-2 h-2 bg-slate-400 rounded-full animate-ping'></div>
        <div className='absolute top-40 right-32 w-1 h-1 bg-slate-500 rounded-full animate-ping' style={{animationDelay: '1s'}}></div>
        <div className='absolute bottom-32 left-40 w-3 h-3 bg-slate-600 rounded-full animate-ping' style={{animationDelay: '2s'}}></div>
        <div className='absolute bottom-20 right-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping' style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className='relative z-10 flex flex-col items-center justify-center min-h-full px-6 pt-2.5'>        
        {/* Elegant main heading */}
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-center mb-8 leading-tight'>
          <span className='block text-slate-900 mb-2 tracking-tight'>مركز ال ياسر </span>
          <span className='block bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent'>
            لترميم و تجميل الاسنان
          </span>
        </h1>
        
        {/* Refined subtitle */}
        <div className='relative mb-2 group'>
          <p className='text-lg md:text-xl text-blue-600 text-center max-w-2xl leading-relaxed font-light tracking-wide'>
            ضحك 
            <span className='text-slate-800 font-medium'> و بلاما تحشم</span> 
          </p>
          <div className='absolute -inset-1 bg-gradient-to-r text-slate-800  to-slate-300/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
        
        {/* Sophisticated image presentation */}
        <div className='relative w-full max-w-3xl group'>
          <div className='absolute inset-0 bg-gradient-to-r from-slate-200/40 to-slate-300/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700'></div>
          <div className='relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-2xl'>
            <img 
              src={Bg_img} 
              className='absolute inset-4 w-full h-auto opacity-20 rounded-2xl' 
              alt="Background decoration" 
            />
            <img 
              src={Hero_image} 
              className='relative z-10 w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500' 
              alt="Hero illustration" 
            />
          </div>
        </div>

        {/* Call to action hint */}
        <div className='mt-16 flex items-center gap-2 text-slate-500 text-sm animate-bounce'>
          <span>Scroll to explore</span>
          <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
          <div className='w-1 h-1 bg-slate-500 rounded-full animate-pulse'></div>
          <div className='w-1 h-1 bg-slate-400 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero