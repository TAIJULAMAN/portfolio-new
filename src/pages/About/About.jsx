import React from 'react';
export default function About() {
    return (
        <section id="about-me" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>about-me
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <p className="text-gray-400">Hello, i'm Elias!</p>

                    <p className="text-gray-400">
                        I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch
                        and raise them into modern user-friendly web experiences.
                    </p>

                    <p className="text-gray-400">
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
                        helping various clients to establish their presence online. I always strive to learn about the newest
                        technologies and frameworks.
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
                    <div className="flex justify-center">
                        <div className="w-80 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-900"></div>
                            {/* Simple figure representation */}
                            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-400 rounded-full"></div>
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-700 rounded-t-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
