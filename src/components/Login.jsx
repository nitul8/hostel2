import React, {useState} from "react";

const Login = () => {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setIsOtpSent(true);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Logging in...");
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                method="post"
                action=""
                className="p-8 rounded-lg shadow-md w-96 border border-gray-300"
            >
                <fieldset>
                    <legend className="text-2xl font-semibold text-center mb-4">
                        Log In to Your ID
                    </legend>

                    {/* Input for Phone Number or Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="no"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone Number or Email Address
                        </label>
                        <input
                            type="text"
                            id="no"
                            name="no"
                            placeholder="Enter your phone number or email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Input for OTP */}
                    {isOtpSent && (
                        <div className="mb-4">
                            <label
                                htmlFor="otp"
                                className="block text-sm font-medium text-gray-700"
                            >
                                OTP
                            </label>
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                placeholder="Enter the OTP"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    )}

                    {/* Buttons for OTP submission and Log In */}
                    <div className="flex space-x-4">
                        {!isOtpSent ? (
                            <button
                                type="button"
                                onClick={handleOtpSubmit}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Send OTP
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handleLoginSubmit}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Log In
                            </button>
                        )}
                    </div>

                    {/* Link for creating an account */}
                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-600">
                            Click Here
                        </a>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
