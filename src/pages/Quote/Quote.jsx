import React from 'react';

export default function Quote() {
    return (
        <section className="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxNzYsIDExOSwgMjU1LCAwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]" />
            </div>
            <div className="container mx-auto px-5 md:px-0">
                <div className="max-w-3xl mx-auto px-6 py-8 md:px-10 md:py-12 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-700/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <svg 
                            className="absolute -top-3 -left-3 md:-top-4 md:-left-4 text-purple-400 w-16 h-16 md:w-24 md:h-24 -rotate-12 opacity-70" 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            aria-hidden="true"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-xl md:text-2xl lg:text-3xl font-light text-center text-gray-100 leading-relaxed mb-6 md:mb-8 relative z-10 px-4 md:px-0">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                                With great power comes great electricity bill
                            </span>
                        </p>
                        <div className="flex items-center justify-center md:justify-end">
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent flex-1 mr-4 hidden md:block"></div>
                            <cite className="text-base md:text-lg font-medium text-purple-300 not-italic">- Dr. Who</cite>
                        </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/5 rounded-full filter blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}