import React from 'react';
export default function Projects() {
    const projects = [
        {
            title: "Craft UI",
            description: "Crafty Soft UI—an all-in-one frontend development toolkit, purpose-built to help you ship faster, design smarter, and code better.",
            tech: "React Tailwind CSS",
            image: "https://i.ibb.co.com/bM3rKNmc/screencapture-localhost-5174-test-2025-04-22-14-45-28.png",
            liveUrl: "https://craft-soft-ui.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/Craftysoft-Ui",
        },
        {
            title: "Flight Ticket System",
            description: "FTS is an intuitive online platform for booking flight tickets. It allows users to search for flights, compare prices, and easily make reservations, streamlining the travel planning process. The user-friendly interface enhances the overall booking experience.",
            tech: "Next.js Tailwind CSS Redux Toolkit Express Node.js",
            image: "https://i.ibb.co.com/9hd7jj2/fts.png",
            liveUrl: "https://fts-travo.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/Flight-Ticket-System",
        },
        {
            title: "Ecommerce Web",
            description: "This e-commerce auction platform offers Pallet, Truckload, and Case products, with options for Auction and Day-wise listings. Users can engage in real-time bidding or purchase products based on daily availability, creating a versatile shopping experience. The responsive design ensures seamless navigation and interactions across all devices.",
            tech: "React Tailwind CSS Redux Toolkit Express Node.js",
            image: "https://i.ibb.co.com/GncfZkq/ew.png",
            liveUrl: "https://ecommerce-web-customer-side.vercel.app/",
            gitUrl: "https://github.com/TAIJULAMAN/EcommerceWeb-customerSide",
        },
    ]
    return (
        <section id="works" className="container mx-auto px-5 md:px-0 py-10 md:py-16">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold">
                    <span className="text-purple-400">#</span>projects
                </h2>
                <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    View all ~~&gt;
                </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-600 bg-gray-800">
                        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="text-sm text-gray-400 mb-2">{project.tech}</div>
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        className="border border-purple-400 text-purple-400 px-4 py-2 text-sm hover:bg-purple-400 hover:text-white transition-colors"
                                    >
                                        Live &lt;~&gt;
                                    </a>
                                )}
                                {project.gitUrl && (
                                    <a
                                        href={project.gitUrl}
                                        className="border border-gray-400 text-gray-400 px-4 py-2 text-sm hover:bg-gray-400 hover:text-black transition-colors"
                                    >
                                        Github &gt;
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}