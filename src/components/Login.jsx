import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("./backend/login.php", {
                username,
                password,
            });
            alert(response.data.message);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                method="post"
                onSubmit={handleLogin}
                className="p-8 rounded-lg shadow-md w-96 border border-gray-300"
            >
                <fieldset>
                    <legend className="text-2xl font-semibold text-center mb-4">
                        Log In to Your ID
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
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Log In Button */}
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Log In
                        </button>
                    </div>

                    {/* Link for creating an account */}
                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <a href="/register" className="text-blue-600">
                            Click Here
                        </a>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;
