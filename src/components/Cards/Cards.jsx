import React from "react";
import CodingImage from "../../assets/coding.png";

const Cards = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            الخدمات المهنية
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions designed to elevate your
            business and drive meaningful results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Graphic Design */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 relative overflow-hidden">
            {/* Number Badge */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">01</span>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              علاج الأسنان
            </h3>
            <p className="text-slate-600 leading-relaxed">
              نقدم علاجات متكاملة للحفاظ على صحة أسنانك، من التشخيص إلى العلاج
              بأحدث التقنيات.
            </p>
          </div>

          {/* Card 2 - Website Development */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 relative overflow-hidden">
            {/* Number Badge */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">02</span>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img src={CodingImage} alt="Coding Icon" className="w-6 h-6" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              تبييض الأسنان
            </h3>
            <p className="text-slate-600 leading-relaxed">
              ابتسامة أكثر إشراقًا مع تقنيات تبييض آمنة وفعّالة تحت إشراف طبي.
            </p>
          </div>

          {/* Card 3 - UI/UX Design */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 relative overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Number Badge */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">03</span>
            </div>

            {/* Icon */}
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              تقويم الأسنان
            </h3>
            <p className="text-slate-600 leading-relaxed">
              حلول حديثة لتقويم الأسنان للأطفال والبالغين، لتحسين الشكل
              والوظيفة.
            </p>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              مهتم ؟ اتصل بنا
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              نحن متخصصون في جعل اسنانك تبدو بشكل جيد
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  اتصل بنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
