import React, {useState} from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("./backend/register.php", {
                username,
                email,
                password,
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Register error:", error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                method="post"
                onSubmit={handleRegister}
                className="p-8 rounded-lg shadow-md w-96 border border-gray-300"
            >
                <fieldset>
                    <legend className="text-2xl font-semibold text-center mb-4">
                        Create Your Account
                    </legend>

                    {/* Input for Username */}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Input for Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Input for Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Register
                        </button>
                    </div>

                    {/* Link to Login */}
                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600">
                            Log In Here
                        </a>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
