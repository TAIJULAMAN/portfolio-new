import React from 'react';
export default function About() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>about-me
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <p className="text-gray-400">Hello, i'm Aman!</p>

                    <p className="text-gray-400">
                        I'm a self-taught front-end developer based in Dhaka, Bangladesh, passionate about crafting responsive and interactive websites. I specialize in building modern, user-friendly web experiences from the ground up—focusing on clean code, performance, and seamless user interaction.
                    </p>

                    <p className="text-gray-400">
                        For over 2 years, I’ve been turning ideas into engaging digital experiences through clean, creative, and responsive web development. I’ve helped clients build their online presence from the ground up, and I’m always exploring the latest technologies and frameworks to stay ahead in the ever-evolving web landscape.
                    </p>

                    <button className="border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-white transition-colors">
                        Read more ~~&gt;
                    </button>
                </div>

                <div className="relative">
                    {/* Decorative dots */}
                    <div className="absolute top-0 right-0 grid grid-cols-5 gap-1">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 grid grid-cols-5 gap-1">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        ))}
                    </div>

                    {/* Figure illustration */}
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
            </div>
        </section>
    )
}
