import React from 'react';
import Hero from '../Hero/Hero';
import Quote from '../Quote/Quote';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <main>
                <Hero />
                <Quote />
                <Skills />
                <About />
                <Projects />
                <Contacts />
            </main>
        </div>
    )
}
