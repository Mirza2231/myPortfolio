import React from 'react'
import { FaPaperPlane, FaGithub, FaLinkedin,FaInstagram    } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer id="contact" className="pt-32 pb-10 border-t border-white/5 bg-[#050505]">
                <div className="text-center max-w-4xl mx-auto px-6">
                    <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-6">What's Next?</h4>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading uppercase text-white mb-10 tracking-tight leading-none">
                        Let's Work <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px #ccff00' }}>Together.</span>
                    </h2>
                    <p className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        I'm currently available for freelance projects. If you need a modern website or a powerful web application, let's discuss it.
                    </p>
                    <a href="mailto:contact@faraz.dev" className="group relative inline-flex items-center justify-center gap-3 bg-accent text-black font-black uppercase tracking-widest py-5 px-12 rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(204,255,0,0.4)]">
                        <span className="relative z-10">Say Hello</span>
                        <FaPaperPlane className=" relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">© 2025 Faraz.</p>
                        <p className="text-gray-600 text-xs">Built with Next.js &amp; Tailwind</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-accent text-xl transition-all hover:-translate-y-1"><FaGithub className="fa-brands fa-github" /></a>
                        <a href="#" className="text-gray-400 hover:text-accent text-xl transition-all hover:-translate-y-1"><FaLinkedin className="fa-brands fa-linkedin" /></a>
                        <a href="#" className="text-gray-400 hover:text-accent text-xl transition-all hover:-translate-y-1"><FaInstagram className="fa-brands fa-instagram" /></a>
                        {/* <a href="#" className="text-gray-400 hover:text-accent text-xl transition-all hover:-translate-y-1"><i className="fa-brands fa-twitter" /></a> */}
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
