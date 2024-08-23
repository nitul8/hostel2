import {Menu, X} from "lucide-react";
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
                        <div className="flex items-center flex-shrink-0">
                            <img
                                className="h-12 w-12 mr-2"
                                src={logo}
                                alt="LOGO"
                            />
                            <span className="text-xl tracking-tight">
                                Hostel2
                            </span>
                        </div>
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="#" className="py-2 px-2 border rounded-md">
                                Sign In
                            </a>
                            <a
                                href="#"
                                className="bg-gradient-to-r from-red-400 to-red-700 px-1 py-2 rounded-md"
                            >
                                Create an Account
                            </a>
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
                            <div className="flex justify-center items-end space-x-6">
                                <a
                                    href="#"
                                    className="py-2 px-2 border rounded-md"
                                >
                                    SignIN
                                </a>
                                <a
                                    href="#"
                                    className="bg-gradient-to-r from-red-400 to-red-700 px-1 py-2 rounded-md"
                                >
                                    Create an Account
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
