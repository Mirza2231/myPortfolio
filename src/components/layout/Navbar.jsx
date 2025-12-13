import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-8">
                <div className="text-3xl font-black tracking-tighter uppercase font-heading">Faraz<span className="text-accent">.</span>
                </div>
                <ul className="hidden md:flex gap-10 list-none">
                    <li><a href="#home" className="text-white text-sm font-medium hover:text-accent transition-colors">Home</a></li>
                    <li><a href="#about" className="text-white text-sm font-medium hover:text-accent transition-colors">About</a></li>
                    <li><a href="#services" className="text-white text-sm font-medium hover:text-accent transition-colors">Services</a>
                    </li>
                    <li><a href="#projects" className="text-white text-sm font-medium hover:text-accent transition-colors">Projects</a>
                    </li>
                    <li><a href="#contact" className="text-white text-sm font-medium hover:text-accent transition-colors">Contact</a>
                    </li>
                </ul>
                <button className="md:hidden text-2xl text-white"><i className="fas fa-bars" /></button>
            </nav>

        </>
    )
}

export default Navbar
