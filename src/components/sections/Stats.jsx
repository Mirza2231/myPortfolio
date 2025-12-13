import React from 'react'

const Stats = () => {
    return (
        <>
            <div className="w-full relative z-30 mt-[-60px]">
                <div className="bg-bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                    <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-20 w-full md:w-auto">
                        <div className="text-center md:text-left">
                            <h3 className="text-4xl lg:text-5xl font-black font-heading text-white">03<span className="text-accent text-2xl">+</span></h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">Months Exp</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-4xl lg:text-5xl font-black font-heading text-white">08<span className="text-accent text-2xl">+</span></h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">Projects</p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-4xl lg:text-5xl font-black font-heading text-white">15<span className="text-accent text-2xl">+</span></h3>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">Skills</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 md:border-l border-white/10 md:pl-10">
                        <span className="text-xs font-bold uppercase text-accent tracking-widest hidden lg:block">Connect</span>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:border-accent hover:scale-110 transition-all duration-300">
                                <i className="fa-brands fa-github text-xl" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:border-accent hover:scale-110 transition-all duration-300">
                                <i className="fa-brands fa-linkedin-in text-xl" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:border-accent hover:scale-110 transition-all duration-300">
                                <i className="fa-brands fa-instagram text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stats
