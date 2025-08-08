import React from 'react';
export default function Hero() {
  return (
    <section className="container mx-auto px-5 md:px-0 py-10 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Aman is a <span className="text-purple-400">web designer</span> and{" "}
            <span className="text-purple-400">front-end developer</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            I specialize in creating visually stunning, high-performance websites that not only look beautiful but also deliver seamless user experiences. With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean, maintainable code and intuitive interfaces that engage users and drive results.
          </p>

          <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors">
            Contact me !!
          </button>
        </div>

        <div className="relative">
          <div className="relative z-10 flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
              <img
                src="/aman.jpg"
                alt="Aman's Profile"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-purple-600 opacity-30 mix-blend-multiply" />
              {/* Decorative border and overlay */}
              <div className="absolute inset-0 border-4 border-purple-400/20 rounded-2xl m-2 transition-all duration-500 group-hover:border-purple-400/40 group-hover:m-1"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}