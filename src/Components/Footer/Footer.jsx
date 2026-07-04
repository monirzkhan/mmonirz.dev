import { useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import {  FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import "./Footer.css";



const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            setShowScrollTop(scrollTop > documentHeight - 250);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const socialLinks = [
        { label: "GitHub", href: "https://github.com/monirzkhan", icon: <FaGithub size={18} /> , className: "social-link1" },
        { label: "LinkedIn", href: "https://linkedin.com/in/monirzkhan-dev", icon: <FaLinkedin size={18} />, className: "social-link2" },
        { label: "Discord", href: "https://discord.com/users/monirzkhan_12009", icon: <FaDiscord size={18} />, className: "social-link3" },
        { label: "Email", href: "mailto:mmonirz.dev@gmail.com", icon: <GoMail size={18} />, className: "social-link4" },
        { label: "Facebook", href: "https://www.facebook.com/odvut.kabbo", icon: <FaFacebook size={18} />, className: "social-link5" },
        { label: "WhatsApp", href: "https://wa.me/+8801782421132", icon: <FaWhatsapp size={18} />, className: "social-link6" },
    ];

    return (
        <>
            {showScrollTop && (
                <a
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-cyan-600"
                >
                    
                    <FaArrowAltCircleUp size={18}/>
                </a>
            )}

            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 border-t border-base-300  px-6 py-10  shadow-[0_-10px_30px_rgba(0,0,0,0.06)]">
            <nav className="mb-4 grid grid-flow-col gap-4">
                <a href="#about" className="link link-hover">About</a>
                <a href="#skills" className="link link-hover">Skills</a>
                <a href="#experience" className="link link-hover">Experience</a>
                <a href="#projects" className="link link-hover">Projects</a>
                <a href="#contact" className="link link-hover">Contact</a>
            </nav>
            <div className="flex items-center justify-center">
                 <img src="https://i.ibb.co.com/tMhJf2Xy/logo.png" alt="logo" className='md:h-10 h-5' />
                <a className=" btn-sm sm:btn-md  sm:text-lg md:text-xl font-bold hover:text-white transition-colors duration-300 hover:drop-shadow-lg">MmonirZ.Dev
                    
                </a>
            </div>

            <div className="grid grid-flow-col gap-4 social-card" aria-label="Social links">
                {socialLinks.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className={`social-link ${item.className}`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            <aside className="mt-5 text-center text-sm opacity-80">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Mmonirz.Dev</p>
            </aside>
        </footer>
        </>
    );
};

export default Footer;