import React, { useState } from "react";

import { IoOptions } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { FaLink, FaPenFancy, FaVideo } from "react-icons/fa6";

import Sidebar from "./blocks/Sidebar";

const AddVideo = () => {
    const [textFields, setTextFields] = useState([
        { id: 1, jobRole: "", capacity: "" },
    ]);
    const [nextId, setNextId] = useState(2);

    // console.log(textFields);

    const handleAddTextField = (e) => {
        e.preventDefault();
        setTextFields([
            ...textFields,
            { id: nextId, jobRole: "", capacity: "" },
        ]);
        setNextId(nextId + 1);
    };

    const handleChange = (id, e) => {
        const updatedTextFields = textFields.map((textField) =>
            textField.id === id
                ? { ...textField, [e.target.name]: e.target.value }
                : textField
        );
        setTextFields(updatedTextFields);
    };

    return (
        <section id="addWorkers" className="w-full flex">
            <Sidebar />
            <form className="pt-5 pl-16">
                <div className="container w-[610px] border border-purple-200 px-4 py-3 rounded-md bg-[var(--green1)] mt-1">
                    <div className="grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2 w-full">
                        <div className="flex items-center gap-1 font-medium">
                            <FaVideo /> Video Title{" "}
                        </div>
                        <input
                            type="text"
                            placeholder="Video Title"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        <div className="flex items-center gap-1 font-medium">
                            <FaPenFancy /> Description
                        </div>
                        <textarea
                            placeholder="Description"
                            className="h-24 resize-none rounded-md border-purple-300 border p-2 outline-none focus:outline-none"
                        />

                        <div className="flex items-center gap-1 font-medium">
                            <FaLink /> Video Link{" "}
                        </div>
                        <input
                            type="text"
                            placeholder="Video Link"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />

                        <div className="flex items-center gap-1 font-medium self-start pt-2">
                            <FaLink /> Related Links
                        </div>
                        <div>
                            {textFields.map((textField) => (
                                <div
                                    className="flex flex-row gap-1"
                                    key={textField.id}
                                >
                                    <input
                                        type="text"
                                        value={textField.jobRole}
                                        name="jobRole"
                                        onChange={(e) =>
                                            handleChange(textField.id, e)
                                        }
                                        placeholder="Enter job role"
                                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none mb-2 w-[70%]"
                                    />
                                    <input
                                        type="number"
                                        value={textField.capacity}
                                        name="capacity"
                                        onChange={(e) =>
                                            handleChange(textField.id, e)
                                        }
                                        placeholder="Capacity"
                                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none mb-2 w-[30%]"
                                    />
                                </div>
                            ))}
                            <button
                                onClick={handleAddTextField}
                                disabled={textFields.some(
                                    (field) =>
                                        field.post === "" ||
                                        field.capacity === ""
                                )}
                                className="disabled:text-slate-400 disabled:cursor-not-allowed cursor-pointer text-purple-800 border border-purple-400 rounded-md px-2 py-1 disabled:border-slate-400"
                            >
                                Add Link
                            </button>
                        </div>

                        <div className="flex items-center gap-1 font-medium">
                            <IoOptions /> Choose Course
                        </div>
                        <select
                            name="status"
                            id="status"
                            className="h-10 outline-none bg-fuchsia-100 px-3 py-2 rounded-md border border-purple-200 w-40 text-purple-800 font-medium"
                        >
                            <option value="active">Active</option>
                            <option value="ictive">Inactive</option>
                            <option value="reserved">Reserved</option>
                        </select>
                    </div>
                </div>

                <div className="flex my-3 mb-7  items-center justify-end container w-[610px]">
                    <button className="flex flex-row items-center justify-center bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all">
                        {" "}
                        Add Video <FiArrowRight />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddVideo;
