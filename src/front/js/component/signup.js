import React from "react";

const Signup = () => {
    return (
    <>
       <form className="container mt-5" style={{ border: "1px solid lightgrey", padding: "40px", paddingBottom:"40px", width: "420px"}}>
            <h1 className="mb-4">Signup</h1>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
            </div>
            <button type="submit" className="btn btn-primary fw-bold w-100 mt-3">Create new account</button>
        </form>
    </>
    )
}


export default Signup