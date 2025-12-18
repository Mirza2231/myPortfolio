import React from 'react'
import Image from 'next/image'
import dashboardImage from '@/assests/Images/dashboardImage.jpg'
import dumbells from '@/assests/Images/dumbells.jpg'
import FoodApp from '@/assests/Images/FoodApp.jpg'
import { FaArrowRight, FaLink, FaGithub } from "react-icons/fa";


const Projects = () => {

    const projectsData = [
        {
            id: 1,
            title: "Body Mechanic",
            category: "Gym Website",
            image: dumbells,
            description: "A modern, high-energy fitness landing page featuring a fully responsive design, trainer profiles, and membership pricing sections.",
            techStack: ["Html", "Tailwind"],
            liveLink: "https://bodymec.netlify.app/",
            repoLink: "https://github.com/Mirza2231/BodyMechanic"
        },
        {
            id: 2,
            title: "Football Dash",
            category: "Analytics Panel",
            image: dashboardImage,
            description: "Real-time data visualization dashboard for tracking Players, Previous Matches, and team performances.",
            techStack: ["React.js", "Tailwind"],
            liveLink: " https://lighthearted-baklava-c932bd.netlify.app/",
            repoLink: "https://github.com/Mirza2231/Football_Dashboard"
        },
        {
            id: 3,
            title: "Food Delicious",
            category: "Restaurant Delivery App",
            image: FoodApp,
            description: "A responsive, pixel-perfect UI for a food delivery service with restaurant listings and cart management.",
            techStack: ["Html", "Css", "Javascript", "Bootstrap"],
            liveLink: "https://ornate-stardust-40c993.netlify.app/",
            repoLink: "https://github.com/Mirza2231/Restaurant_Web"
        }
    ];

    return (
        <>
            <section id="projects" className="py-32 relative">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">My Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl font-black font-heading uppercase text-white">
                            Selected <span className="text-accent">Works.</span>
                        </h2>
                    </div>
                    <a href="https://github.com/Mirza2231" target="_blank" className="hidden md:flex items-center gap-2 text-text-gray hover:text-white transition-colors font-bold uppercase text-sm tracking-wider mt-6 md:mt-0">
                        View GitHub <FaArrowRight />
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map(pData => (

                        <div key={pData.id} className="group bg-bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.1)]">
                            <div className="h-60 overflow-hidden relative">
                                <Image
                                    alt='Project Image'
                                    src={pData.image}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* DESKTOP OVERLAY (Hidden on Mobile) */}
                                <div className="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
                                    <a href={pData.liveLink} className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" title="View Live" target='_blank'><FaLink /></a>
                                    <a href={pData.repoLink} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" title="View Code" target='_blank'><FaGithub /></a>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold font-heading text-white mb-1 group-hover:text-accent transition-colors">{pData.title}</h3>
                                        <p className="text-xs text-text-gray font-bold uppercase tracking-wider">{pData.category}</p>
                                    </div>
                                    
                                    {/* MOBILE LINKS (Visible ONLY on Mobile) */}
                                    <div className="flex gap-3 md:hidden">
                                        <a href={pData.liveLink} target="_blank" className="w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center"><FaLink size={14} /></a>
                                        <a href={pData.repoLink} target="_blank" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center"><FaGithub size={14} /></a>
                                    </div>

                                </div>
                                <p className="text-text-gray text-sm mb-6 leading-relaxed">
                                    {pData.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pData.techStack.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-bold uppercase text-gray-400">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/Mirza2231" className="inline-block border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors">
                        View All Projects
                    </a>
                </div>
            </section>
        </>
    )
}

export default Projects