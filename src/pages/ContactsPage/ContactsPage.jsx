import React from "react"
import { FaGithub, FaDiscord, FaFigma, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="text-purple-400">/</span>contacts
                    </h1>
                    <p className="text-gray-400">Who am I?</p>
                </div>

                {/* Decorative dots - left side */}
                <div className="absolute left-4 top-96 grid grid-cols-3 gap-1">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>

                {/* Main Contact Section */}
                <section className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm interested in freelance opportunities. However, if you have other request or question, don't
                                hesitate to contact me
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Support Section */}
                            <div className="border border-gray-600 bg-gray-800 p-6 hover:border-purple-400 transition-colors">
                                <h3 className="font-semibold text-white mb-4">Support me here</h3>
                                <p className="text-gray-400 font-mono text-sm">4149500120690030</p>
                            </div>

                            {/* Message Section */}
                            <div className="border border-gray-600 bg-gray-800 p-6 hover:border-purple-400 transition-colors">
                                <h3 className="font-semibold text-white mb-4">Message me here</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <FaDiscord className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-400">Elias#1234</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-400">elias@elias-dev.ml</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Media Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">
                        <span className="text-purple-400">#</span>all-media
                    </h2>

                    <div className="flex flex-wrap gap-6">
                        <a
                            href="https://twitter.com/elias"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaTwitter className="w-6 h-6" />
                            <span>@elias</span>
                        </a>
                        <a
                            href="https://twitter.com/elias"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            <FaTwitter className="w-6 h-6" />
                            <span>@elias</span>
                        </a>
                    </div>
                </section>

                {/* Decorative elements */}
                <div className="absolute right-8 bottom-40">
                    <div className="relative">
                        <div className="w-16 h-16 border-2 border-purple-400 bg-transparent"></div>
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-purple-400 bg-transparent"></div>
                    </div>
                </div>

                {/* Bottom decorative dots */}
                <div className="absolute right-4 bottom-32 grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    ))}
                </div>
            </main>
        </div>
    )
}
