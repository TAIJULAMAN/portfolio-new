import React from 'react';
import { FaDiscord, FaFigma, FaGithub } from "react-icons/fa";

export default function () {
    return (
        <header className="border-b border-gray-700">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white"></div>
                        <span className="font-bold text-white">Elias</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-purple-400 transition-colors">
                            <span className="text-purple-400">#</span>home
                        </a>
                        <a href="#works" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <span className="text-purple-400">#</span>works
                        </a>
                        <a href="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <span className="text-purple-400">#</span>projects
                        </a>
                        <a href="#about-me" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <span className="text-purple-400">#</span>about-me
                        </a>
                        <a href="#contacts" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <span className="text-purple-400">#</span>contacts
                        </a>
                        <select className="bg-transparent text-white border-none outline-none">
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </nav>
            </div>

            {/* Side navigation */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-4">
                <div className="w-px h-32 bg-gray-600"></div>
                <FaGithub className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <FaDiscord className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <FaFigma className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
        </header>
    )
}