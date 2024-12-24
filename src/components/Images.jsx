import React from "react";
import {slides} from "../constants/index";
import Carousel from "./Carousel";

const Images = () => {
    return (
        <div className="w-full mx-auto pt-11">
            <Carousel images={slides} />
        </div>
    );
};

export default Images;
