import React from 'react'
import { Menu,Car, UserPlus, LogIn} from "lucide-react";
import { assets } from '../assets/data.js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Left side */}
                <div className="flex items-center gap-1">
                    {/* Logo */}
                    <img src={assets.logoImg} alt="logo" className="w-12" />
                    <span className="text-xl font-bold text-blue-400">
                        Rentroo
                    </span>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-6 space-x-2 font-semibold text-base">
                    <Link to="/" className="text-gray-600 hover:border-b-2 border-blue-400 transform transition-all duration-300 ease-in-out">
                        Home
                    </Link>
                    <Link to="/cars" className="text-gray-600 hover:border-b-2 border-blue-400 transform transition-all duration-300 ease-in-out">
                        Cars
                    </Link>
                    <Link to="/services" className="text-gray-600 hover:border-b-2 border-blue-400 transform transition-all duration-300 ease-in-out">
                        Services
                    </Link>
                    <Link to="/about" className="text-gray-600 hover:border-b-2 border-blue-400 transform transition-all duration-300 ease-in-out">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-600 hover:border-b-2 border-blue-400 transform transition-all duration-300 ease-in-out">
                        Contact
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Sign Up */}
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-sm px-5 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <UserPlus className="w-4 h-4" />
                        Sign Up
                    </button>

                    {/* Login */}
                    <button className="flex items-center gap-2 border border-blue-500 text-blue-400 text-sm px-5 py-2 rounded-md hover:bg-blue-400 hover:text-white hover:scale-105 transition-all duration-300">
                        <LogIn className="w-4 h-4" />
                        Login
                    </button>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <Menu className="w-6 h-6 text-gray-600" />
                </div>
            </nav>
        </div>
    )
}

export default Nav