import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("./backend/login.php", {
                username,
                password,
            });
            if (response.data.success) {
                setIsSuccess(true);
                setMessage(response.data.message);
            } else {
                setIsSuccess(false);
                setMessage(response.data.message);
            }
        } catch (error) {
            setIsSuccess(false);
            setMessage("An error occurred during login. Please try again.");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="p-8 rounded-lg shadow-md w-96 border border-gray-300">
                {message && (
                    <div
                        className={`p-4 mb-4 text-center rounded-md ${
                            isSuccess
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }`}
                    >
                        {message}
                    </div>
                )}
                {!isSuccess ? (
                    <form
                        method="post"
                        onSubmit={handleLogin}
                        className="space-y-4"
                    >
                        <legend className="text-2xl font-semibold text-center mb-4">
                            Log In to Your ID
                        </legend>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                        >
                            Log In
                        </button>
                        <p className="text-center mt-4">
                            Don't have an account?{" "}
                            <a href="/register" className="text-blue-600">
                                Click Here
                            </a>
                        </p>
                    </form>
                ) : (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Welcome!</h1>
                        <p className="mt-2">{message}</p>
                        <a
                            href="/login"
                            className="text-blue-600 underline mt-4 inline-block"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
