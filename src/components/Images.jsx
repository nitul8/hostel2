import React from "react";
import image1 from "../assets/h2Front.jpeg";
import image2 from "../assets/h2Garden.jpeg";

function Carousal({slides}) {
    return (
        <div>
            <div>
                {slides.map((s, index) => {
                    return (
                        <img
                            key={index}
                            src={s.src}
                            alt={s.name}
                            className="w-full"
                        />
                    );
                })}
            </div>
        </div>
    );
}

const Images = () => {
    const slides = [
        {name: "Hostel 2 Front View", src: image1},
        {name: "Hostel 2 Garden", src: image2},
    ];
    return (
        <div>
            <Carousal slides={slides} />
        </div>
    );
};

export default Images;
