import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
                document.body.style.overflow = 'auto';
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/", text: "home" },
        { to: "/projects", text: "projects" },
        { to: "/about", text: "about-me" },
        { to: "/contacts", text: "contacts" },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            />

            <header className="border-b border-gray-700 bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50 overflow-hidden">
                <div className="container mx-auto px-5 md:px-0 py-3">
                    <nav className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center space-x-2 group z-50"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <div className="w-4 h-4 border-2 border-purple-400 group-hover:bg-purple-400 transition-colors duration-300"></div>
                            <span className="font-bold text-white text-lg sm:text-xl">AMAN</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.to}
                                    className={`px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 ${isActive(link.to)
                                        ? 'text-white bg-gray-800'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                        }`}
                                >
                                    <span className="text-purple-400">#</span> {link.text}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 -mr-2 text-gray-400 hover:text-white focus:outline-none transition-colors duration-200 z-50"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </nav>
                </div>

                {/* Mobile Navigation - Side Menu */}
                <div
                    className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="h-full flex flex-col pt-24 px-6 space-y-4 overflow-y-auto">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className={`px-4 py-3 text-lg rounded-md transition-all duration-200 transform hover:translate-x-1 ${isActive(link.to)
                                    ? 'text-white bg-gray-800 font-medium'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                    }`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <span className="text-purple-400">#</span> {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}