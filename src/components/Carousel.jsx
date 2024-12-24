import React, {useState} from "react";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs";

const Carousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-3/5 mx-auto overflow-hidden">
            {/* Display the current slide */}
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex + 1}`}
                className="w-full h-96 object-cover" // Fixed height for uniformity
            />

            {/* Navigation Buttons */}
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-3xl px-2 text-white">
                <button
                    className="rounded-full p-2 opacity-50 hover:opacity-100"
                    onClick={prevSlide}
                >
                    <BsArrowLeftCircleFill />
                </button>
                <button
                    className="rounded-full p-2 opacity-50 hover:opacity-100"
                    onClick={nextSlide}
                >
                    <BsArrowRightCircleFill />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
