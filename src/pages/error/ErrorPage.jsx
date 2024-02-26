// 404Page.jsx
import React from "react";
import "./errorStyle.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404">
            <div className="content">
                <h1>404</h1>
                <p>
                    Oops! Looks like you're lost. Let's get you back on track.
                </p>
                <Link to="/">
                    <button className="btn">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;
