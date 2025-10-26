import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
    return (
        <section className="container mx-auto px-5 md:px-0 py-10 md:py-16 overflow-hidden">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>about-me
            </h2>

            <div className="space-y-8">
                <p className="text-gray-400 leading-relaxed">
                    I'm a self-taught front-end developer based in Dhaka, Bangladesh, passionate about crafting responsive and interactive websites.
                </p>


                {/* Experience Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-purple-400/30 p-6 rounded-lg hover:border-purple-400 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <h4 className="text-xl font-semibold text-white">Current Role</h4>
                        </div>
                        <p className="text-gray-400">
                            I thrive in my role at SparkTech Agency, where I help create intuitive, engaging interfaces that drive user satisfaction. This role has honed my technical skills and broadened my understanding of global standards in web development.
                        </p>
                    </div>

                    <div className="border border-purple-400/30 p-6 rounded-lg hover:border-purple-400 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <h4 className="text-xl font-semibold text-white">Experience</h4>
                        </div>
                        <p className="text-gray-400">
                            For over 2 years, I've been turning ideas into engaging digital experiences through clean, creative, and responsive web development. I'm always exploring the latest technologies and frameworks to stay ahead.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start pt-4">
                    <Link onClick={() => window.location.href = "/about"} className="border border-purple-400 text-purple-400 px-8 py-3 rounded hover:bg-purple-400 hover:text-white transition-all duration-300 font-medium">
                        Read more ~~&gt;
                    </Link>
                </div>
            </div>
        </section>
    )
}
