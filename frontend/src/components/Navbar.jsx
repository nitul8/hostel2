import {Menu, X, CircleUser} from "lucide-react";
import {useState} from "react";
import logo from "../assets/Logo.svg";
import {navItems} from "../constants";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div>
            <nav className="fixed w-full top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-between w-full px-8 py-2">
                            <div className="flex items-center flex-shrink-0">
                                <img
                                    className="h-12 w-12 mr-3"
                                    src={logo}
                                    alt="LOGO"
                                />
                                <span className="text-2xl font-semibold text-white tracking-tight">
                                    Hostel 2
                                </span>
                            </div>

                            <ul className="hidden lg:flex items-center space-x-8">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 rounded-md hover:bg-gradient-to-r from-red-400 to-red-700 transition duration-300 ease-in-out"
                                    >
                                        <Link
                                            to={item.href}
                                            className="text-white"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/login">
                                        <CircleUser className="h-8 w-8 text-white" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className="py-4">
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
