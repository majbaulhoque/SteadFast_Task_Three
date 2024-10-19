import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black">
            <nav className="flex max-w-7xl mx-auto justify-between items-center py-5 sm:px-4 relative z-40">
                {/* Logo Section */}
                <div className="pl-2">
                    <Logo />
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden mr-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <FiX className="text-2xl text-white" />
                        :
                        <FiMenu className="text-2xl text-white" />}
                </div>
                <ul
                    className={`md:flex absolute md:static bg-black w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
                        } md:block text-white space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0`}
                >
                    <li>
                        <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="hover:text-gray-400">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
