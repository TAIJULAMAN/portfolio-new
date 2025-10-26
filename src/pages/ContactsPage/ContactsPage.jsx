import React from "react"
import { FaGithub, FaDiscord, FaFigma, FaTwitter, FaEnvelope, FaPhone, FaWhatsapp, FaFacebook } from "react-icons/fa"

export default function ContactsPage() {
    return (
        <div className="h-[calc(100vh-20rem)] bg-gray-900 text-white">
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
                                I am here for you around the clock, ready to support and propel your success to new heights. Reach out to me anytime, day or night, and let us collaborate to skyrocket our dreans!
                            </p>
                        </div>

                         <div className="space-y-4">
                                            <div className="border border-gray-600 p-4">
                                                <h3 className="font-semibold mb-4">Contact me here</h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-center space-x-2">
                                                        <FaPhone className="w-4 h-4" />
                                                        <span className="text-gray-400">01886606001</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <FaEnvelope className="w-4 h-4" />
                                                        <span className="text-gray-400">mdshahamanpatwary@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </section>

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
