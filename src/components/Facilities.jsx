import {facilities} from "../constants";

const Facilities = () => {
    return (
        <div className="relative mt-10 border-b border-neutral-800 min-h-[800px]">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
                Facilities
            </h2>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {facilities.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">
                                    {feature.text}
                                </h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Facilities;
