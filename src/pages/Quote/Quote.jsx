import React from 'react';
export default function Quote() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
                <blockquote className="border border-gray-600 p-8 relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-white">"</div>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-white">"</div>
                    <p className="text-xl text-center mb-4">With great power comes great electricity bill</p>
                    <cite className="block text-right text-gray-400">- Dr. Who</cite>
                </blockquote>
            </div>
        </section>
    )
}