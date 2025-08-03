import React from 'react';
import { FaGithub, FaFigma, FaDiscord } from "react-icons/fa"

export default function () {
    return (
        <footer className="border-t border-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-4 h-4 border-2 border-white"></div>
                        <span className="font-bold">Elias</span>
                        <span className="text-gray-400 ml-4">elias@elias-dev.ml</span>
                    </div>

                    <div>
                        <p className="text-gray-400 mb-2">Web designer and front-end developer</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-700">
                    <p className="text-gray-400 text-sm">© Copyright 2022. Made by Elias</p>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span className="text-gray-400">Media</span>
                        <FaGithub className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        <FaFigma className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        <FaDiscord className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    )
}