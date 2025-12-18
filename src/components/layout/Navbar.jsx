'use client';
import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    // 1. State to handle mobile menu toggle
    const [nav, setNav] = useState(false);

    // 2. Function to toggle the state
    const handleNav = () => {
        setNav(!nav);
    };

    // 3. Close menu when a link is clicked
    const closeNav = () => {
        setNav(false);
    };

    return (
        <nav className="flex justify-between items-center py-8 relative z-50">
            {/* Logo */}
            <div className="text-3xl font-black tracking-tighter uppercase font-heading text-white">
                Faraz<span className="text-accent">.</span>
            </div>

            {/* Desktop Menu (Hidden on Mobile) */}
            <ul className="hidden md:flex gap-10 list-none">
                <li><a href="#" className="text-white text-sm font-medium hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="text-white text-sm font-medium hover:text-accent transition-colors">About</a></li>
                <li><a href="#services" className="text-white text-sm font-medium hover:text-accent transition-colors">Services</a></li>
                <li><a href="#projects" className="text-white text-sm font-medium hover:text-accent transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-white text-sm font-medium hover:text-accent transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-white text-sm font-medium hover:text-accent transition-colors">Contact</a></li>
            </ul>

            {/* Hamburger / Close Icon (Visible on Mobile) */}
            <button onClick={handleNav} className="md:hidden text-2xl text-white z-50 relative">
                {nav ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={
                nav 
                ? "fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl duration-300 md:hidden" 
                : "fixed top-[-100%] left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center gap-8 text-2xl duration-300 md:hidden"
            }>
                <a onClick={closeNav} href="#home" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">Home</a>
                <a onClick={closeNav} href="#about" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">About</a>
                <a onClick={closeNav} href="#services" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">Services</a>
                <a onClick={closeNav} href="#projects" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">Projects</a>
                <a onClick={closeNav} href="#skills" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">Skills</a>
                <a onClick={closeNav} href="#contact" className="text-white hover:text-accent font-bold uppercase tracking-widest transition-colors">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;