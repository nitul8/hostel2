import {Menu, X, CircleUser} from "lucide-react";
import {useState} from "react";
import logo from "../assets/Logo.svg";
import {navItems} from "../constants";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen((prev) => !prev);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-opacity-90 backdrop-blur-md h-20 flex items-center">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        className="h-8 w-8 mr-2"
                        src={logo}
                        alt="Hostel Logo"
                    />
                    <span className="text-lg font-semibold text-black dark:text-white">
                        Hostel 2
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className="text-base text-black dark:text-white hover:bg-gradient-to-r from-red-400 to-red-700 px-2 py-1 rounded-md transition ease-in-out duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/login">
                        <CircleUser className="h-6 w-6 text-black dark:text-white hover:text-red-500 transition duration-300" />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleNavbar}
                    className="lg:hidden text-black dark:text-white focus:outline-none"
                    aria-label="Toggle navigation"
                >
                    {mobileDrawerOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileDrawerOpen && (
                <div className="fixed inset-0 bg-neutral-900 bg-opacity-95 flex flex-col items-center justify-center z-40 lg:hidden">
                    <ul className="space-y-3 text-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    className="text-white text-base hover:text-red-400 transition duration-300"
                                    onClick={toggleNavbar}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/login" onClick={toggleNavbar}>
                                <CircleUser className="h-8 w-8 text-white hover:text-red-400 transition duration-300" />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
