import React from "react"
export default function AboutPage() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["TypeScript", "JavaScript"],
        },
        {
            title: "Databases",
            skills: ["MongoDB"],
        },
        {
            title: "Tools",
            skills: ["VSCode Figma", "Git", "Canva"],
        },
        {
            title: "Other",
            skills: ["HTML CSS Ant Design", "Tailwind CSS Bootstrap", "Material UI Shadcn UI"],
        },
        {
            title: "Frameworks",
            skills: ["Next.js", "Express.js", "Node.js"],
        },
        {
            title: "Library",
            skills: ["React", " Redux"],
        }
    ]
    const funFacts = [
        "I like winter more than summer",
        "I like pizza and pasta",
        "My favorite movie is Soldier Boy",
        "I am still learning",
        "I love to play cricket",
        "I enjoy coding late at night",
        "I prefer coffee over tea",
        "I prefer beaches over mountains",
        "I like listening to lo-fi music while coding",
        "I am a night owl rather than an early bird",
        "I believe in continuous self-improvement",
        "I love designing creative UI components",
        "I am passionate about frontend development",
        "I love working on personal projects",
        "I find debugging both challenging and fun",
        "I prefer dark mode over light mode",
        "I am fascinated by AI and machine learning",
        "I love helping others through coding"
    ];

    const experiences = [
        {
            role: "Front-end Developer",
            Type: "Full Time",
            company: "SparkTech Agency",
            period: "Jan 2025 — Present",
            details: [
                "Build and maintain responsive UI with React and Next",
                "Collaborate with designers to implement modern, accessible interfaces",
                "Optimize performance and improve Lighthouse scores",
                "Optimized component performance and reduced bundle size"
            ],
            tech: ["React", "Next.js", "Ant Design", "Redux"]
        },
        {
            role: " Jr. Front-end Developer",
            Type: "Project Based",
            company: "Dark Tech",
            period: "May 2023 — Oct 2024",
            details: [
                "Implemented solutions for product features",
                "Integrated APIs and built reusable components",
                "Implemented end-to-end product features from spec to release",
                "Iterated quickly based on client feedback"
            ],
            tech: ["Next.js", "Shadcn", "Redux", "Tailwind"]
        }
    ];


    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <main className="container mx-auto px-5 md:px-0 py-10 md:py-20">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="text-purple-400">/</span>about-me
                    </h1>
                    <p className="text-gray-400">Who am I?</p>
                </div>

                <section className="mb-20 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            <p className="text-gray-400">Hello, i'm MD SHAH AMAN PATWARY!</p>

                            <p className="text-gray-400">
                                I'm a self-taught front-end developer based in Dhaka, Bangladesh, passionate about crafting responsive and interactive websites. Currently, I thrive in my role at SparkTech Agency, where I help create intuitive, engaging interfaces that drive user satisfaction. This role not only honed my technical skills but also broadened my understanding of global standards in web development and the dynamics of remote collaboration.
                            </p>

                            <p className="text-gray-400">
                                For over 2 years, I’ve been turning ideas into engaging digital experiences through clean, creative, and responsive web development. I’ve helped clients build their online presence from the ground up, and I’m always exploring the latest technologies and frameworks to stay ahead in the ever-evolving web landscape.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Figure illustration */}
                            <div className="relative">
                                <div className="relative z-10 flex justify-center">
                                    <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                                        <img
                                            src="/aman.jpg"
                                            alt="Aman's Profile"
                                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-purple-600 opacity-30 mix-blend-multiply" />
                                        {/* Decorative border and overlay */}
                                        <div className="absolute inset-0 border-4 border-purple-400/20 rounded-2xl m-2 transition-all duration-500 group-hover:border-purple-400/40 group-hover:m-1"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20 overflow-hidden">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-purple-400">#</span>skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="border border-gray-600 bg-gray-800">
                                <div className="bg-gray-700 px-4 py-3 border-b border-gray-600">
                                    <h3 className="font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="p-4 space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="text-gray-400 text-sm leading-relaxed">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20 overflow-hidden">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-purple-400">#</span>experience
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 bg-gray-800 p-5 hover:border-purple-400 transition-colors"
                            >
                                <div className="flex items-baseline justify-between mb-2">
                                    <h3 className="font-semibold text-white">{exp.role}</h3>
                                    <span className="text-gray-400 text-sm">{exp.period}</span>
                                </div>
                                <p className="text-purple-300 text-sm mb-3 flex items-center gap-2">
                                    {exp.company}
                                    {exp.Type && (
                                        <span className="text-xs px-2 py-0.5 rounded border border-purple-400/40 text-purple-300 bg-purple-500/10">
                                            {exp.Type}
                                        </span>
                                    )}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-3">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fun Facts Section */}
                <section className="mb-16 overflow-hidden">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-purple-400">#</span>my-fun-facts
                    </h2>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {funFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 bg-gray-800 p-4 hover:border-purple-400 transition-colors group"
                            >
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{fact}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
