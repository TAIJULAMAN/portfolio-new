import React, { useMemo } from 'react';
import { ProjectCard } from './ProjectCard';

const PROJECTS_DATA = [
    {
        id: 1,
        title: "Craft UI",
        description: "Crafty Soft UI—an all-in-one frontend development toolkit, purpose-built to help you ship faster, design smarter, and code better.",
        tech: ["React", "Tailwind CSS"],
        image: "https://i.ibb.co.com/bM3rKNmc/screencapture-localhost-5174-test-2025-04-22-14-45-28.png",
        liveUrl: "https://craft-soft-ui.vercel.app/",
        gitUrl: "https://github.com/TAIJULAMAN/Craftysoft-Ui",
    },
    {
        id: 2,
        title: "Flight Ticket System",
        description: "FTS is an intuitive online platform for booking flight tickets. It allows users to search for flights, compare prices, and easily make reservations, streamlining the travel planning process.",
        tech: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Express", "Node.js"],
        image: "https://i.ibb.co.com/9hd7jj2/fts.png",
        liveUrl: "https://fts-travo.vercel.app/",
        gitUrl: "https://github.com/TAIJULAMAN/Flight-Ticket-System",
    },
    {
        id: 3,
        title: "Ecommerce Web",
        description: "This e-commerce auction platform offers Pallet, Truckload, and Case products, with options for Auction and Day-wise listings. Users can engage in real-time bidding or purchase products based on daily availability.",
        tech: ["React", "Tailwind CSS", "Redux Toolkit", "Express", "Node.js"],
        image: "https://i.ibb.co.com/GncfZkq/ew.png",
        liveUrl: "https://ecommerce-web-customer-side.vercel.app/",
        gitUrl: "https://github.com/TAIJULAMAN/EcommerceWeb-customerSide",
    },
];



export default function Projects() {
    const projects = useMemo(() => PROJECTS_DATA, []);

    return (
        <section
            className="relative overflow-hidden py-10 md:py-20"
        >
            <div className="container relative mx-auto px-5 md:px-0">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold">
                        <span className="text-purple-400">#</span>projects
                    </h2>
                    <a href="#" className="text-white hover:text-purple-400 transition-colors">
                        View all ~~&gt;
                    </a>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}