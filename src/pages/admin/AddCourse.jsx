import React, { useEffect, useState } from "react";

import { MdPhoto } from "react-icons/md";
import { FaHashtag, FaUser } from "react-icons/fa";

import Sidebar from "./blocks/Sidebar";
import defaultDp from "../../media/default_profile.png";
import { Link } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
    clearError,
    createCourse,
    getAllCourse,
    selectCourse,
} from "../../redux/slices/courseSlice";
import IsLoading from "../../components/loading/IsLoading";
import Skeleton from "../../components/skeletons/Skeleton";

const AddCourse = () => {
    const [imageData, setImageData] = useState();
    const [imgPreview, setImgPreview] = useState(defaultDp);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const dispatch = useDispatch();
    const { status, error } = useSelector(selectCourse);

    const handleImageUpload = async (event) => {
        const imageFile = event.target.files[0];
        console.log(imageFile);
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log(compressedFile);

            const reader = new FileReader();

            reader.onload = function (e) {
                // Set the result of the FileReader to the state variable
                setImageData(e.target.result);
                setImgPreview(e.target.result);
            };

            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.info("Course Uploading!", {
            autoClose: 2000,
        });
        const myForm = new FormData();
        myForm.set("thumbnail", imageData);
        myForm.append("title", title);
        myForm.append("description", description);
        myForm.append("tag", tag);

        console.log(myForm);

        dispatch(createCourse(myForm));

        // if (status === "succeeded") {
        // 	navigate("/");
        // }
    };

    useEffect(() => {
        dispatch(getAllCourse());
        dispatch(clearError());
        if (status.createCourse === "succeeded") {
            toast.success("Course Added!", {
                autoClose: 2000,
            });
            setDescription("");
            setTag("");
            setTitle("");
            setImgPreview(defaultDp);
        }
        if (error) {
            toast.error("try again", {
                autoClose: 2000,
            });
        }
    }, [dispatch, status.createCourse]);

    return (
        <div className="flex gap-2 ">
            <Sidebar />
            <section className="h-full">
                <form
                    onSubmit={handleSubmit}
                    className="container border border-purple-200 px-4 py-3 rounded-md bg-[var(--green1)] mt-1"
                >
                    <div className="grid grid-cols-[1fr,5fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2">
                        <div className="flex items-center gap-1 font-medium">
                            <FaUser /> Title{" "}
                        </div>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            type="text"
                            value={title}
                            placeholder="Title of the Course"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        {/* email  */}
                        <div className="flex items-center gap-1 font-medium">
                            <FaHashtag /> Tag{" "}
                        </div>
                        <input
                            required
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            type="text"
                            placeholder="Tags of the Course"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none lowercase"
                        />
                        <div className="flex items-center gap-1 font-medium">
                            <FaHashtag /> Description{" "}
                        </div>
                        <textarea
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            placeholder="Tags of the Course"
                            className="h-24 resize-none rounded-md border-purple-300 border px-2 outline-none focus:outline-none lowercase"
                        />

                        <div className="flex items-center gap-1 font-medium">
                            <MdPhoto />
                            Thumbnail{" "}
                        </div>
                        <div className="flex flex-col gap-2 items-start">
                            <img
                                src={imgPreview}
                                alt=""
                                id="image"
                                className="h-96 aspect-video rounded-md"
                            />
                            <input
                                // required
                                // id='imageUpload'
                                type="file"
                                accept="image/*"
                                // className='h-9 rounded-md border-purple-300 border px-2 outline-none  hidden'
                                onChange={handleImageUpload}
                            />
                            <div className="text-left py-2">
                                <button
                                    type="submit"
                                    className="font-medium text-fuchsia-700 relative after:absolute after:h-[2px] after:w-full after:bg-fuchsia-700 after:bottom-0 after:left-0"
                                    htmlFor="imageUpload"
                                >
                                    Click to Upload
                                </button>
                                <span>
                                    &nbsp; png,jpg (max 1920px x 1080px)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[200px] pb-10 border-t-2">
                        <IsLoading loading={status.createCourse}>
                            {{
                                onLoading: (
                                    <Skeleton
                                        width={100}
                                        height={40}
                                        borderRadious={10}
                                    ></Skeleton>
                                ),
                                notLoading: (
                                    <button
                                        type="submit"
                                        className="flex flex-row items-center justify-center w-full bg-[var(--green)] py-2 px-4 rounded-md text-white gap-2 font-medium transition-all"
                                    >
                                        Create Course
                                    </button>
                                ),
                            }}
                        </IsLoading>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCourse;
