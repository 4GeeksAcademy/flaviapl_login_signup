import React from "react";
import { Link } from "react-router-dom";

const Private = () => {
return (
    <>
        <div className="p-5">
            <h1>PRIVATE PAGE</h1>
            <Link to="/login">Go back to Login page</Link>
        </div>
    </>
)
}

export default Private