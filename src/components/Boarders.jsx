import {useState} from "react";
import {boarders} from "../constants";

const Boarders = () => {
    // Function to truncate text to a specific number of words
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="mt-10 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
                Boarders of Hostel 2
            </h2>
            <div className="flex flex-wrap justify-center">
                {boarders.map((boarder, index) => {
                    const [showFullText, setShowFullText] = useState(false);

                    return (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
                        >
                            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                                <p>
                                    <span>
                                        {showFullText
                                            ? boarder.text
                                            : truncateText(boarder.text, 20)}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setShowFullText(!showFullText)
                                        }
                                        className="text-red-500 ml-2 text-xs"
                                        style={{display: "inline"}}
                                    >
                                        {showFullText
                                            ? "Show Less"
                                            : "Read More"}
                                    </button>
                                </p>
                                <div className="flex mt-8 items-start">
                                    <img
                                        className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                        src={boarder.image}
                                        alt=""
                                    />
                                    <div>
                                        <h6>{boarder.user}</h6>
                                        <span className="text-sm font-normal italic text-neutral-600">
                                            {boarder.dept}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Boarders;
