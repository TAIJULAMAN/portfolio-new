import React from 'react';
import Header from '../shared/Header';
import Hero from '../Hero/Hero';
import Quote from '../Quote/Quote';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Footer from '../shared/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <main>
                <Hero />
                <Quote />
                <Projects />
                <Skills />
                <About />
                <Contacts />
            </main>
        </div>
    )
}
