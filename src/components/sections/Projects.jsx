import React from 'react'
import Image from 'next/image'
import dashboardImage from '@/assests/Images/dashboardImage.jpg'
import Ecomm from '@/assests/Images/Ecomm.jpg'
import FoodApp from '@/assests/Images/FoodApp.jpg'


const Projects = () => {

const projectsData = [
        {
            id: 1,
            title: "Red Store",
            category: "Full Stack E-Commerce",
            image: Ecomm,
            description: "A complete shopping platform with cart functionality, user authentication, and payment gateway integration.",
            techStack: ["React", "Node", "MongoDB"],
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: 2,
            title: "Admin Dash",
            category: "Analytics Panel",
            image: dashboardImage,
            description: "Real-time data visualization dashboard for tracking sales, user metrics, and performance reports.",
            techStack: ["React.js", "Tailwind"],
            liveLink: "#",
            repoLink: "#"
        },
        {
            id: 3,
            title: "Food Delicious",
            category: "Restaurant Delivery App",
            image: FoodApp,
            description: "A responsive, pixel-perfect UI for a food delivery service with restaurant listings and cart management.",
            techStack: ["Html", "Css","Javascript","Bootstrap"],
            liveLink: "#",
            repoLink: "#"
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
                    <a href="https://github.com/yourusername" target="_blank" className="hidden md:flex items-center gap-2 text-text-gray hover:text-white transition-colors font-bold uppercase text-sm tracking-wider mt-6 md:mt-0">
                        View GitHub <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{projectsData.map(pData=>(

                    <div key={pData.id} className="group bg-bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.1)]">
                        <div className="h-60 overflow-hidden relative">
                            {/* <img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /> */}
                            <Image
                            src={pData.image}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={pData.liveLink} className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" title="View Live"><i className="fa-solid fa-link" /></a>
                                <a href={pData.repoLink} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform" title="View Code"><i className="fa-brands fa-github" /></a>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-white mb-1 group-hover:text-accent transition-colors">{pData.title}</h3>
                                    <p className="text-xs text-text-gray font-bold uppercase tracking-wider">{pData.category}</p>
                                </div>
                            </div>
                            <p className="text-text-gray text-sm mb-6 leading-relaxed">
                                {pData.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {pData.techStack.map((tech,index)=>(

                                <span key={index} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-bold uppercase text-gray-400">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
))}

                  
                </div>
                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-block border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-white hover:text-black transition-colors">
                        View All Projects
                    </a>
                </div>
            </section>

        </>
    )
}

export default Projects
