import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import "./Footer.css";

const Footer = () => {
    const socialLinks = [
        { label: "GitHub", href: "#", icon: <FaGithub size={18} /> , className: "social-link1" },
        { label: "LinkedIn", href: "#", icon: <FaLinkedin size={18} />, className: "social-link2" },
        { label: "Discord", href: "#", icon: <FaDiscord size={18} />, className: "social-link3" },
        { label: "Email", href: "#", icon: <GoMail size={18} />, className: "social-link4" },
        { label: "Facebook", href: "#", icon: <FaFacebook size={18} />, className: "social-link5" },
        { label: "WhatsApp", href: "#", icon: <FaWhatsapp size={18} />, className: "social-link6" },
    ];

    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded-t-3xl border-t border-base-300 px-4 py-8 shadow-[0_-10px_30px_rgba(0,0,0,0.06)] sm:px-6 sm:py-10">
            <nav className="mb-4 flex flex-wrap justify-center gap-2 text-sm sm:gap-4 sm:text-base">
                <a href="#about" className="link link-hover">About</a>
                <a href="#skills" className="link link-hover">Skills</a>
                <a href="#experience" className="link link-hover">Experience</a>
                <a href="#projects" className="link link-hover">Projects</a>
                <a href="#contact" className="link link-hover">Contact</a>
            </nav>

            <div className="social-card" aria-label="Social links">
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

            <aside className="mt-5 max-w-xl px-2 text-center text-xs leading-relaxed opacity-80 sm:text-sm">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Mmonirz.Dev</p>
            </aside>
        </footer>
    );
};

export default Footer;