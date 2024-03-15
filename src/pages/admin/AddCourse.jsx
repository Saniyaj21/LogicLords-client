import React, { useState } from "react";

import { MdPhoto } from "react-icons/md";
import { FaHashtag, FaUser } from "react-icons/fa";

import Sidebar from "./blocks/Sidebar";
import defaultDp from "../../media/default_profile.png";
import { Link } from "react-router-dom";

const AddCourse = () => {
    const [file, setFile] = useState(defaultDp);

    function fileHandle(event) {
        const image = event.target.files[0];

        if (image) {
            const readar = new FileReader();

            readar.addEventListener("load", function () {
                setFile(readar.result);
            });

            readar.readAsDataURL(image);
        }
    }

    return (
        <div className="flex gap-2 ">
            <Sidebar />
            <section className="h-full">
                <div className="container border border-purple-200 px-4 py-3 rounded-md bg-[var(--green1)] mt-1">
                    <div className="grid grid-cols-[1fr,5fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2">
                        <div className="flex items-center gap-1 font-medium">
                            <FaUser /> Title{" "}
                        </div>
                        <input
                            required
                            type="text"
                            placeholder="Title of the Course"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        {/* email  */}
                        <div className="flex items-center gap-1 font-medium">
                            <FaHashtag /> Tag{" "}
                        </div>
                        <input
                            required
                            type="text"
                            placeholder="Tags of the Course"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none lowercase"
                        />

                        <div className="flex items-center gap-1 font-medium">
                            <MdPhoto />
                            Thumbnail{" "}
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <img
                                src={file}
                                alt=""
                                id="image"
                                className="h-96 aspect-video rounded-md"
                            />
                            <input
                                required
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                placeholder="Enter the workers full name"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none hidden"
                                onChange={fileHandle}
                            />
                            <div className="text-left py-2">
                                <label
                                    className="font-medium text-fuchsia-700 relative after:absolute after:h-[2px] after:w-full after:bg-fuchsia-700 after:bottom-0 after:left-0"
                                    htmlFor="imageUpload"
                                >
                                    Click to Upload
                                </label>
                                <span>
                                    &nbsp; png,jpg (max 1920px x 1080px)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[200px] pb-10 border-t-2">
                        <button
                            type="submit"
                            className="flex flex-row items-center justify-center w-full bg-[var(--green)] py-2 px-4 rounded-md text-white gap-2 font-medium transition-all"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddCourse;
