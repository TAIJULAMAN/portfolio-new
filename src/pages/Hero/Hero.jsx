import React from 'react';
export default function Hero() {
    return (
        <section id="home" className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Elias is a <span className="text-purple-400">web designer</span> and{" "}
            <span className="text-purple-400">front-end developer</span>
          </h1>

          <p className="text-gray-400 text-lg">He crafts responsive websites where technologies meet creativity</p>

          <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors">
            Contact me !!
          </button>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 border-2 border-gray-600"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-gray-600"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-2 border-gray-600"></div>

          {/* Dots pattern */}
          <div className="absolute top-20 right-20 grid grid-cols-5 gap-1">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
            ))}
          </div>

          {/* Main figure */}
          <div className="relative z-10 flex justify-center">
            <div className="w-80 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg relative overflow-hidden">
              {/* Hooded figure silhouette */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-900"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="absolute bottom-4 right-4 bg-gray-800 border border-purple-400 px-3 py-1 text-sm">
            <span className="text-purple-400">◆</span> Currently working on{" "}
            <span className="text-white font-semibold">Portfolio</span>
          </div>
        </div>
      </div>
    </section>
    )
}