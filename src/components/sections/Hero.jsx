import React from 'react'
import Image from 'next/image'
import profilePic from '@/assests/Images/ProfilePic.png'

const Hero = () => {
    return (
        <>
            <header id="home" className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] relative pt-10">
                <div className="flex-1 z-10 text-center md:text-left">
                    <h3 className="text-lg font-medium mb-4 text-accent">Hello, I'm Faraz</h3>
                    <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-none mb-6 font-heading">
                        CRAFTING <br />
                        <span className="text-accent !-webkit-text-stroke-0">DIGITAL</span> <br />
                        <span className="outline-text">FUTURE.</span>
                    </h1>
                    <p className="text-text-gray max-w-lg mb-8 mx-auto md:mx-0 text-sm md:text-base">
                        Designing innovative web solutions that shape the future of digital interaction. Specialized in MERN Stack and
                        high-end UI/UX.
                    </p>
                    <a href="#contact" className="bg-accent text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-bold inline-flex items-center gap-2 mt-4 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                        Let's Talk <i className="fas fa-arrow-right" />
                    </a>
                </div>
                <div className="flex-1 relative flex justify-center h-[500px] md:h-[600px] mt-10 md:mt-0 w-full">
                    <div className="hidden lg:block absolute w-[350px] h-[450px] border-2 border-white/10 top-12 right-12 z-0" />
                    <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-aura">
                    </div>
                    <Image
                        src={profilePic}
                        alt="Faraz Profile"
                        className="profile-img-fade max-w-full h-auto relative z-10 filter contrast-[1.1] brightness-[1.1] object-contain" style={{ maxHeight: '100%' }}
                        placeholder="blur"

                    />
                </div>
            </header>

        </>
    )
}

export default Hero
