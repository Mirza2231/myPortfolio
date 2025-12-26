'use client';
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

    const passionSkill = [
        { id: 1, SkillName: "MongoDB" },
        { id: 2, SkillName: "Express.js" },
        { id: 3, SkillName: "React" },
        { id: 4, SkillName: "JavaScript" },
        { id: 5, SkillName: "Tailwind" },
    ]

    return (
        <section id="about" className="py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute inset-0 border-2 border-accent translate-x-4 translate-y-4 rounded-xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                        alt="Profile"
                        className="relative z-10 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[400px]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">About Me</h4>
                    <h2 className="text-4xl md:text-5xl font-black font-heading uppercase mb-6 leading-tight">
                        I am <span className="text-accent underline decoration-wavy underline-offset-2">Passionate</span> <br /> in my
                        work.
                    </h2>
                    <p className="text-text-gray leading-relaxed mb-8 text-sm md:text-base">
                        {/* I am a dedicated developer driven by the challenge of solving real-world problems through code. My expertise
                        lies in the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>. I don't just write code; I build
                        solutions that are scalable, maintainable, and user-friendly. */}
                        I am a Full-Stack Developer specializing in modernizing business workflows. With expertise in React, .NET, and PHP, I bridge the gap between complex business problems and elegant technical solutions. Whether it's building a custom SaaS or a high-converting website, my goal is to deliver measurable value to my clients.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {passionSkill.map((pskill) => (
                            <span key={pskill.id} className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold uppercase border border-white/10 text-white hover:border-accent hover:text-accent transition-colors cursor-default">
                                {pskill.SkillName}
                            </span>
                        ))}
                    </div>

                    <a
                        href="/assets/MirzaFarazAliBaig.pdf"
                        download="MirzaFarazAliBaig(Frontend_Developer).pdf"
                        className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wide border-b border-accent pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        Download CV <i className="fa-solid fa-download" />
                    </a>
                </motion.div>

            </div>
        </section>
    )
}

export default About