import React from 'react';
import { FaGithub, FaRegCopyright, FaWhatsapp, FaFacebook } from "react-icons/fa"

export default function () {
    return (
        <footer className="border-t border-gray-700 overflow-hidden">
            <div className="container mx-auto px-5 md:px-0 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-4 h-4 border-2 border-purple-400"></div>
                        <span className="font-bold">Aman</span>
                        <span className="text-gray-400 ml-4">mdshahamanpatwary@gmail.com</span>
                    </div>

                    <div>
                        <p className="text-gray-400 mb-2">Web designer and front-end developer</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-700">
                    <div className="text-gray-400 text-sm flex items-center space-x-2">
                        <FaRegCopyright className="w-5 h-5 text-purple-400" /> <p>Copyright {new Date().getFullYear()}. Made by Aman</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span className="text-gray-400">Media</span>
                        <a href="https://github.com/TAIJULAMAN" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="w-5 h-5 text-purple-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://wa.me/01886606001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="w-5 h-5 text-purple-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.facebook.com/ShahAmAn04/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="w-5 h-5 text-purple-400 cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}