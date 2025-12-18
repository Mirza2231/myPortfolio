'use client' // Required for Framer Motion
import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaPhp, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiMongodb, SiDotnet, SiAdobephotoshop } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbFileTypeSql } from "react-icons/tb";

const TechStack = () => {
  const skillList = [
    { id: 1, Sname: "React", category: "Frontend", Icon: FaReact, hoverColor: "group-hover:text-[#5ED3F3]" },
    { id: 2, Sname: "Express.js", category: "Backend", Icon: SiExpress, hoverColor: "group-hover:text-green-500" },
    { id: 3, Sname: "Next.js", category: "Framework", Icon: RiNextjsFill, hoverColor: "group-hover:text-black" },
    { id: 4, Sname: "MongoDb", category: "Database", Icon: SiMongodb, hoverColor: "group-hover:text-green-400" },
    { id: 5, Sname: "Tailwind", category: "Css Framework", Icon: RiTailwindCssFill, hoverColor: "group-hover:text-cyan-400" },
    { id: 6, Sname: "Javascript", category: "Language", Icon: IoLogoJavascript, hoverColor: "group-hover:text-yellow-400" },
    { id: 7, Sname: "Photoshop", category: "Design", Icon: SiAdobephotoshop, hoverColor: "group-hover:text-[#0BACF5]" },
    { id: 8, Sname: "DotNet", category: "Framework", Icon: SiDotnet, hoverColor: "group-hover:text-[#c599f7]" },
    { id: 9, Sname: "Sql", category: "Database", Icon: TbFileTypeSql, hoverColor: "group-hover:text-[#B82323]" },
    { id: 10, Sname: "Php", category: "Language", Icon: FaPhp, hoverColor: "group-hover:text-[#6D88BC]" },
    { id: 11, Sname: "CSS", category: "Language", Icon: FaCss3, hoverColor: "group-hover:text-blue-500" },
    { id: 12, Sname: "Bootstrap", category: "Framwork", Icon: FaBootstrap, hoverColor: "group-hover:text-[#9C57D5]" },
  ]

  return (
    <section id='skills' className="py-32 border-t border-white/5">
      
      {/* Header Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">My Arsenal</h4>
        <h2 className="text-4xl md:text-5xl font-black font-heading uppercase text-white">
          Technologies <span className="text-accent">&amp;</span> Tools.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillList.map((skills, index) => (

          // 1. OUTER WRAPPER: Handles the "Pop In" Animation
          <motion.div
            key={skills.id}
            initial={{ opacity: 0, y: 20 }} // Start slightly down and invisible
            whileInView={{ opacity: 1, y: 0 }} // Move up and appear
            transition={{ 
                duration: 0.4, 
                delay: index * 0.1 // Fast cascade (0.1s delay per item)
            }}
            viewport={{ once: true }}
          >
            {/* 2. INNER DIV: Handles Hover Effects */}
            <div className="bg-bg-card border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-accent/50 transition-colors group cursor-default">
              <div className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl ${skills.hoverColor} transition-colors`}>
                <skills.Icon />
              </div>
              <div>
                <h4 className="font-bold text-white">{skills.Sname}</h4>
                <p className="text-[10px] text-text-gray uppercase tracking-wider font-bold">{skills.category}</p>
              </div>
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  )
}

export default TechStack