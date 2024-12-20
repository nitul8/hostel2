import React, {useState} from "react";
import {slides} from "../constants";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs";

function Carousel({slides, isActive}) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div
            className={`overflow-hidden relative transition-transform duration-300 ${
                isActive ? "z-20 scale-105" : "z-10 scale-90 opacity-80"
            }`}
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{transform: `translateX(-${100 * current}%)`}}
            >
                {slides.map((s, index) => (
                    <img
                        key={index}
                        src={s.src}
                        alt={s.name}
                        className="w-full object-cover"
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div
                className={`absolute top-0 h-full w-full flex justify-between items-center text-3xl px-2 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                }`}
            >
                <button
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    onClick={previousSlide}
                >
                    <BsArrowLeftCircleFill />
                </button>
                <button
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    onClick={nextSlide}
                >
                    <BsArrowRightCircleFill />
                </button>
            </div>
        </div>
    );
}

const Images = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="w-4/5 mx-auto pt-11 grid grid-cols-3 gap-4">
            {slides.map((_, index) => (
                <div
                    key={index}
                    className={`transition-transform duration-300 ${
                        index === activeIndex ? "cursor-pointer" : ""
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                >
                    <Carousel
                        slides={slides}
                        isActive={index === activeIndex}
                    />
                </div>
            ))}
        </div>
    );
};

export default Images;
