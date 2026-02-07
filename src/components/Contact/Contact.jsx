import React, { useState } from "react";
import EmailIcon from "../../assets/email_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import InstagramIcon from "../../assets/instagram_icon.svg";
import Map from "./Map";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-24"
    >
      <div className="max-w-8xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xl font-semibold tracking-widest uppercase text-slate-500 mb-4">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            دعنا نبتسم معاً
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            أرسل لنا رسالة أو اتصل بنا مباشرة لطلب موعد أو استفسار.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Social Media Links */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-100 to-slate-200 rounded-full -translate-y-10 translate-x-10"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-600">
                    ابقَ على اطلاع على وسائل التواصل الاجتماعي
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/yassir.widadi.374?rdid=yFukbloVJKiwNqAU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17FbZY7cNS%2F#"
                  className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Facebook</p>
                    <p className="text-sm text-slate-500">Follow us</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/centre_dentaire_yasser"
                  className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Instagram</p>
                    <p className="text-sm text-slate-500">Follow us</p>
                  </div>
                </a>
                <Map />
              </div>
            </div>
          </div>

          {/* Contact Form */}

          {/* Contact Information */}
          <div className="space-y-3">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 ring-1 ring-slate-900/5 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full -translate-y-12 -translate-x-12"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                    <h3 className="text-2xl font-bold text-slate-900">
                      تواصل معنا
                    </h3>
                    <p className="text-slate-600">طرق متعددة للتواصل معنا</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <img src={EmailIcon} alt="Email" className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          أرسل لنا بريدًا إلكترونيًا
                        </h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">
                            yassbidi72@Gmail.com
                          </p>
                          <p className="text-slate-500 text-sm">
                            الاستفسارات العامة
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-7 h-7 text-white"
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
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          اتصل بنا
                        </h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">
                            0777920861
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-7 h-7 text-white"
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
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          قم بزيارتنا
                        </h4>
                        <div className="space-y-1">
                          <p className="text-slate-600 font-medium">
                            الدار البيضاء حي مولي رشيد مشروع الفضل{" "}
                          </p>
                          <p className="text-slate-500 text-sm"> المغرب</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      ساعات العمل
                    </h3>
                    <p className="text-slate-600">متى نكون متاحين</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">
                        الاثنين - الجمعة
                      </span>
                    </div>
                    <span className="font-bold text-slate-900">
                      9:00 - 13:0 , 14:30 - 20:00
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">
                        السبت
                      </span>
                    </div>
                    <span className="font-bold text-slate-900">
                      9:00 - 14:30
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">
                        الأحد
                      </span>
                    </div>
                    <span className="font-bold text-slate-900">مغلق</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-50 rounded-2xl">
                  <p className="text-sm text-slate-600 text-center">
                    <span className="font-semibold">Response Time:</span> نحن
                    نقوم بالرد على الاستفسارات خلال 24 ساعة خلال أيام العمل.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
