import React from "react";

const Maintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
            <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/website-under-maintenance-illustration-download-in-svg-png-gif-file-formats--application-error-network-software-system-pack-design-development-illustrations-3658847.png"
                alt="Maintenance"
                className="w-1/4 mb-8"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Website Under Maintenance
            </h1>
            <p className="text-gray-600 text-center">
                We are currently performing scheduled maintenance. We should be
                back shortly.
                <br />
                Thank you for your patience.
            </p>
        </div>
    );
};

export default Maintenance;
