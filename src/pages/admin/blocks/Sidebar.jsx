import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { FaCircleUser } from "react-icons/fa6";
import { RiHomeFill, RiUserAddFill } from "react-icons/ri";

const Sidebar = () => {
    const location = useLocation().pathname;
    console.log(location);
    const [activeLocation, setActiveLocation] = useState(location);

    return (
        <div className="w-[14rem] bg-white h-screen px-7 py-2 border border-purple-100 shadow-md flex flex-col justify-between items-center">
            <div className="flex flex-col gap-7 w-full">
                <div className="url_container w-full">
                    <ul className="flex flex-col gap-1 w-full">
                        {/* **dont remove this this is for the future use  */}

                        {/* <Link
                            className={
                                activeLocation === "/admin"
                                    ? "text-[var(--green)] font-medium bg-[var(--green1)] rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal  w-full px-4 py-3 rounded-full hover:bg-[var(--green1)] transition-all"
                            }
                            to="/admin"
                            onClick={() => setActiveLocation("/admin")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiHomeFill /> Dashboard
                            </li>
                        </Link> */}
                        <Link
                            className={
                                activeLocation === "/admin"
                                    ? "text-[var(--green)] font-medium bg-[var(--green1)] rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal  w-full px-4 py-3 rounded-full hover:bg-[var(--green1)] transition-all"
                            }
                            to="/admin"
                            onClick={() => setActiveLocation("/admin")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiUserAddFill /> Add Video
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/admin/add-course"
                                    ? "text-[var(--green)] font-medium bg-[var(--green1)] rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal  w-full px-4 py-3 rounded-full hover:bg-[var(--green1)] transition-all"
                            }
                            to="/admin/add-course"
                            onClick={() =>
                                setActiveLocation("/admin/add-course")
                            }
                        >
                            <li className="flex gap-2 items-center">
                                <FaCircleUser /> Add Course
                            </li>
                        </Link>
                    </ul>
                </div>
                <hr className="border border-slate-200" />
            </div>
        </div>
    );
};

export default Sidebar;
