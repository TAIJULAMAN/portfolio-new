import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
export default function Contacts() {
    return (
        <section id="contacts" className="container mx-auto px-5 md:px-0 py-10 md:py-16 overflow-hidden">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>contacts
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-400 mb-8">
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
    )
}