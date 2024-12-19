import React, {useState} from "react";

const boarders = [
    {name: "Nitul Das", branch: "CSE", address: "123 ABC St", batch: "2022-26"},
    {
        name: "Debabrat Deka",
        branch: "IE",
        address: "456 XYZ St",
        batch: "2021-25",
    },
];

const Boarders = () => {
    const [sortOrder, setSortOrder] = useState("asc"); // State to track sorting order
    const [sortedBoarders, setSortedBoarders] = useState(boarders); // State to hold sorted boarders

    // Function to handle sorting by batch
    const sortByBatch = () => {
        const sorted = [...boarders].sort((a, b) => {
            // If sorting ascending, compare a.batch and b.batch in ascending order
            if (sortOrder === "asc") {
                return a.batch > b.batch ? 1 : -1;
            }
            // If sorting descending, compare in reverse order
            return a.batch < b.batch ? 1 : -1;
        });
        setSortedBoarders(sorted); // Update the sorted list
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center my-6">
                Boarders List
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                                Name
                            </th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                                Branch
                            </th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                                Address
                            </th>
                            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                                <button
                                    onClick={sortByBatch}
                                    className="text-blue-500 hover:underline"
                                >
                                    Batch {sortOrder === "asc" ? "↑" : "↓"}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedBoarders.map((boarder, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4 text-sm text-gray-900">
                                    {boarder.name}
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-900">
                                    {boarder.branch}
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-900">
                                    {boarder.address}
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-900">
                                    {boarder.batch}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Boarders;
