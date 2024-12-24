import {platformLinks} from "../constants";
import {monitors} from "../constants";
import image1 from "../assets/dui_mane_jui2.png";

const Footer = () => {
    return (
        <footer
            className="mt-20 border-t py-10 border-neutral-700 text-lg"
            id="footer"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-20 text-red-500">
                {/* Platform Section (Left Aligned on Large Screens, Centered on Small Screens) */}
                <div className="text-center lg:text-left">
                    <h3 className="text-md font-semibold mb-4">Platforms</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-gray-700 dark:text-neutral-300 hover:text-red-500"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hostel Superintendent Section (Centered on All Screens) */}
                <div className="text-center text-gray-700 dark:text-neutral-300">
                    <h3 className="text-md font-semibold mb-4 text-red-500">
                        Hostel Superintendent
                    </h3>
                    <p className="font-semibold">Dhrubajyoti Baruah</p>
                    <p className="text-sm text-neutral-400">
                        Associate Professor
                        <br />
                        Masters of Computer Application
                        <br />
                        Jorhat Engineering College
                    </p>
                </div>

                {/* Monitors Section (Right Aligned on Large Screens, Centered on Small Screens) */}
                <div className="text-center lg:text-right">
                    <h3 className="text-md font-semibold mb-4">Monitors</h3>
                    <ul className="space-y-2">
                        {monitors.map((monitor, index) => (
                            <li
                                key={index}
                                className="text-gray-700 dark:text-neutral-300"
                            >
                                <span className="font-semibold">
                                    {monitor.name}
                                </span>
                                <span className="text-sm text-neutral-400">
                                    {" "}
                                    ({monitor.designation})
                                </span>
                                <br />
                                {monitor.contact}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <img
                src={image1}
                alt="dui mane jui"
                className="w-40 h-auto mx-auto flex justify-center items-center" // Adjusted size and centering
            />

            <div className="text-center text-neutral-500 text-sm">
                © {new Date().getFullYear()} Nitul Das. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
