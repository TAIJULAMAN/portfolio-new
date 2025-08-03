import React from 'react';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';
export default function Contacts() {
    return (
        <section id="contacts" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>contacts
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-400 mb-8">
                        I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to
                        contact me
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="border border-gray-600 p-4">
                        <h3 className="font-semibold mb-4">Message me here</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <FaDiscord className="w-4 h-4" />
                                <span className="text-gray-400">!Elias#3519</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope className="w-4 h-4" />
                                <span className="text-gray-400">elias@elias.me</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}