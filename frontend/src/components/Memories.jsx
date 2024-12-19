import {useState} from "react";
import {boarders} from "../constants";

const Memories = () => {
    const [showFullText, setShowFullText] = useState(
        Array(boarders.length).fill(false)
    );

    // Function to truncate text to a specific number of words
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    const toggleText = (index) => {
        setShowFullText((prev) => {
            const newShowFullText = [...prev];
            newShowFullText[index] = !newShowFullText[index];
            return newShowFullText;
        });
    };

    return (
        <div className="mt-10 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
                Memories Shared by Hostel 2 Boarders
            </h2>
            <div className="flex flex-wrap justify-center">
                {boarders.map((boarder, index) => (
                    <div
                        key={index}
                        className="m-4 p-4 border rounded shadow-lg"
                    >
                        <h3 className="text-xl font-bold">{boarder.name}</h3>
                        <p>
                            {showFullText[index]
                                ? boarder.memory
                                : truncateText(boarder.memory, 20)}
                        </p>
                        <button
                            onClick={() => toggleText(index)}
                            className="text-blue-500 hover:underline"
                        >
                            {showFullText[index] ? "Show Less" : "Show More"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Memories;
