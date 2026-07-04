
import { useEffect, useState } from 'react';
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

import './navbar.css';
import resumePdf from '../../assets/Mohammad_Moniruzzaman_Europass_CV.pdf';

const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;

        const savedTheme = window.localStorage.getItem('portfolio-theme');
        if (savedTheme) return savedTheme === 'dark';

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        const nextTheme = isDark ? 'dark' : 'retro';

        root.setAttribute('data-theme', nextTheme);
        root.classList.toggle('dark', isDark);
        root.style.colorScheme = isDark ? 'dark' : 'light';
        window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 transition-all duration-300 px-2 sm:px-4 md:px-6">
            <div className="navbar-start gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm sm:btn-md lg:hidden hover:bg-gray-200 transition-colors active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 sm:w-52 shadow-lg">
                        <li className="nav-link"><a href='#about' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">About</a></li>
                        <li className="nav-link">
                            <a href='#skills' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Skills</a>
                        </li>
                        <li className="nav-link"><a href='#education' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Education</a></li>
                        <li className="nav-link"><a href='#experience' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Experience</a></li>
                        <li className="nav-link"><a href='#projects' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Projects</a></li>
                        <li className="nav-link"><a href='#contact' className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Contact</a></li>
                    </ul>
                </div>
                <img src="/src/assets/logo.png" alt="logo" className='md:h-10 h-5' />
                <a className="btn btn-ghost btn-sm sm:btn-md text-xs sm:text-lg md:text-xl font-bold hover:text-white transition-colors duration-300 hover:drop-shadow-lg">MmonirZ.Dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about" className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">About</a></li>
                    <li>
                        <a href='#skills' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Skills</a>
                    </li>
                    <li><a href='#education' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Education</a></li>
                    <li><a href='#experience' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Experience</a></li>
                    <li><a href='#projects' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Projects</a></li>
                    <li><a href='#contact' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end justify-end gap-3 items-center">
                <button
                    type="button"
                    onClick={() => setIsDark((prev) => !prev)}
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    className={`theme-toggle ${isDark ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
                >
                    <span className="theme-icon">
                        {isDark ? <IoMdSunny /> : <IoMoon />}
                    </span>
                    <span className="theme-label">{isDark ? 'Light' : 'Dark'}</span>
                </button>
                <a
                    href={resumePdf}
                    download="Mohammad_Moniruzzaman_Europass_CV.pdf"
                    className="btn btn-sm sm:btn-md md:btn-lg btn-accent flex items-center gap-1 whitespace-nowrap text-white transition-all duration-300 hover:scale-105 hover:text-white active:scale-95 sm:gap-2"
                >_Resume</a>

            </div>
        </div>
    );
};

export default Navbar;