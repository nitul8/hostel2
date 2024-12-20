import React, {useState} from "react";
import {BsFillSunFill, BsMoonFill} from "react-icons/bs";

function ThemeColor() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            } transition duration-300`}
        >
            {isDarkMode ? (
                <BsFillSunFill size={24} />
            ) : (
                <BsMoonFill size={24} />
            )}
        </button>
    );
}

export default ThemeColor;
