'use client'
import { motion } from 'framer-motion';
import React from 'react'
import { FaLayerGroup, FaCode, FaDatabase } from "react-icons/fa";

const Services = () => {

    const servicesData = [
        {
            id: 1,
            icon: FaLayerGroup,
            title: "Web Design",
            description: "Crafting captivating, user-friendly websites that align perfectly with your brand essence.",
            delayT: 0.0
        },
        {
            id: 2,
            icon: FaCode,
            title: "Web Development",
            description: "Transforming ideas into powerful, unified solutions with expert coding and robust architecture.",
            delayT: 0.2 // Reduced slightly for snappier feel
        },
        {
            id: 3,
            icon: FaDatabase,
            title: "MERN Stack",
            description: "Full-stack development creating dynamic, high-performance web applications.",
            delayT: 0.4 // Reduced slightly
        },
    ];

    return (
        <section id="services" className="pb-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black mb-2 font-heading uppercase">
                    My <span className="text-accent">Services</span>
                </h2>
                <p className="text-text-gray text-lg">High-end solutions for your business needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    
                    // 1. OUTER WRAPPER: Handles the Entrance Animation ONLY
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.8 }} 
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.5,
                            delay: service.delayT,
                            ease: "easeOut" 
                        }}
                        viewport={{ once: true }}
                    >
                        {/* 2. INNER CARD: Handles CSS Styling & Hover Effects ONLY */}
                        <div className="bg-bg-card border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group h-full">
                            <service.icon className="text-3xl text-white mb-5 transition-colors group-hover:text-accent" />
                            <h3 className="text-2xl font-bold mb-4 font-heading uppercase">{service.title}</h3>
                            <p className="text-text-gray leading-relaxed text-sm">{service.description}</p>
                        </div>
                    </motion.div>

                ))}
            </div>
        </section>
    )
}

export default Services