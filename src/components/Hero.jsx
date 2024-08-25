import photo1 from "../assets/h2Front.jpeg";
import photo2 from "../assets/h2Garden.jpeg";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-10">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Welcome to
                <span className="bg-gradient-to-r from-red-400 to-red-700 text-transparent bg-clip-text">
                    {" "}
                    Hostel 2
                </span>
            </h1>
            <p className="mt-10 text-sm sm:text-lg text-center text-neutral-500 max-w-4xl">
                The walls of our hostel hold not just bricks but the dreams,
                aspirations, and transformations of countless souls from boy to
                man.
            </p>
            <div className="flex justify-center my-8 sm:my-10">
                <a
                    href="#footer"
                    className="bg-gradient-to-r from-red-400 to-red-700 py-3 px-2 sm:px-4 mx-3 rounded-md"
                >
                    Contact Us
                </a>
                <a href="/bh" className="py-3 px-4 mx-3 rounded-md border">
                    Brief History
                </a>
            </div>
            <div className="flex flex-wrap mt-7 sm:mt-10 justify-center">
                <img
                    src={photo1}
                    alt="Hostel 2 at Jorhat Engineering College"
                    className="rounded-lg w-full sm:w-1/3 border border-red-500 shadow-sm shadow-red-300 mb-4 sm:mb-0 sm:mx-3"
                />
                <img
                    src={photo2}
                    alt="Hostel 2 at Jorhat Engineering College"
                    className="rounded-lg w-full sm:w-1/3 border border-red-500 shadow-sm shadow-red-300 mb-4 sm:mb-0 sm:mx-3"
                />
            </div>
        </div>
    );
};

export default HeroSection;
