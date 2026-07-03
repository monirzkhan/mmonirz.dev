
import { Link } from 'react-router';
import './navbar.css';
import resumePdf from '../../assets/Mohammad_Moniruzzaman_Europass_CV.pdf';

const Navbar = () => {
    
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
                        <li className="nav-link"><Link to={'/#aboutMe'} className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">About</Link></li>
                        <li className="nav-link">
                           <Link className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Skills</Link>
                        </li>
                        <li className="nav-link"><Link className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Education</Link></li>
                        <li className="nav-link"><Link className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Experience</Link></li>
                        <li className="nav-link"><Link className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Projects</Link></li>
                        <li className="nav-link"><Link className="text-xs sm:text-sm hover:text-white hover:bg-purple-600 transition-all">Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost btn-sm sm:btn-md text-xs sm:text-lg md:text-xl font-bold hover:text-white transition-colors duration-300 hover:drop-shadow-lg">MmonirZ.Dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about" className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">About</a></li>
                        <li>
                           <a href='#skills' className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Skills</a>
                        </li>
                        <li><Link className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Education</Link></li>
                        <li><Link className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Experience</Link></li>
                        <li><Link className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Projects</Link></li>
                        <li><Link className="nav-link text-xs md:text-sm lg:text-base hover:text-white hover:bg-purple-600 transition-all duration-300 rounded px-2 md:px-3">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
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