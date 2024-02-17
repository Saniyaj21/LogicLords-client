import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div
            style={{
                backgroundColor: "#008894",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1
                style={{
                    color: "#fff",
                    fontSize: "4rem",
                    marginBottom: "1rem",
                }}
            >
                404
            </h1>
            <p
                style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    textAlign: "center",
                }}
            >
                Oops! It looks like you're lost...
            </p>
            <Link
                to="/"
                style={{
                    backgroundColor: "#fff",
                    color: "#008894",
                    padding: "1rem 2rem",
                    fontSize: "1.2rem",
                    marginTop: "2rem",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
