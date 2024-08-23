import {resourcesLinks, platformLinks, communityLinks} from "../constants";
import {monitors} from "../constants";

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-20 text-red-500">
                {/* Platform Section (Left Aligned) */}
                <div className="text-left">
                    <h3 className="text-md font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hostel Superintendent Section (Centered) */}
                <div className="text-center text-neutral-300">
                    <h3 className="text-md font-semibold mb-4 text-red-500">
                        Hostel Superintendent
                    </h3>
                    <p>Dhrubajyoti Baruah</p>
                    <p className="text-sm text-neutral-400">
                        Associate Professor, Masters of Computer Application
                        <br />
                        Jorhat Engineering College
                    </p>
                </div>

                {/* Monitors Section (Right Aligned) */}
                <div className="text-right">
                    <h3 className="text-md font-semibold mb-4">Monitors</h3>
                    <ul className="space-y-2">
                        {monitors.map((monitor, index) => (
                            <li key={index} className="text-neutral-300">
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
            <div className="mt-8 text-center text-neutral-500">
                © {new Date().getFullYear()} Nitul Das. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
