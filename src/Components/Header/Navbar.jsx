
import { Link } from 'react-router';
import './navbar.css';

const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                        <li className="nav-link"><Link to={'/#aboutMe'} className="hover:text-white hover:bg-purple-600 transition-all">About</Link></li>
                        <li className="nav-link">
                           <Link className="hover:text-white hover:bg-purple-600 transition-all">Skills</Link>
                        </li>
                        <li className="nav-link"><Link className="hover:text-white hover:bg-purple-600 transition-all">Education</Link></li>
                        <li className="nav-link"><Link className="hover:text-white hover:bg-purple-600 transition-all">Experience</Link></li>
                        <li className="nav-link"><Link className="hover:text-white hover:bg-purple-600 transition-all">Projects</Link></li>
                        <li className="nav-link"><Link className="hover:text-white hover:bg-purple-600 transition-all">Contact</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg sm:text-xl font-bold hover:text-white transition-colors duration-300">MmonirZ.Dev</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about" className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">About</a></li>
                        <li>
                           <Link className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">Skills</Link>
                        </li>
                        <li><Link className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">Education</Link></li>
                        <li><Link className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">Experience</Link></li>
                        <li><Link className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">Projects</Link></li>
                        <li><Link className="nav-link hover:text-white hover:bg-purple-600 transition-all duration-300 rounded">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white hover:text-white hover:scale-105 transition-transform duration-300">_Init Resume</a>
            </div>
        </div>
    );
};

export default Navbar;