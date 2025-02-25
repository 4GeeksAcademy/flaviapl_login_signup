import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendData(e) {
    e.preventDefault();
    actions.login(email, password)

    console.log("send data");
    console.log("Email:", email, "Password", password);
    }
    
    // useEffect(() => {
    //     if(store.token){
    //         navigate("/private")
    //     }
    // }, [store.token, navigate]);

    return (
    <>
        <form className="container mt-5" style={{ border: "1px solid lightgrey", padding: "40px", paddingBottom:"40px", width: "420px"}} onSubmit={sendData}>
            <h1 className="mb-4">Login</h1>
            <div className="mb-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="password"/>
            </div>
            <button type="submit" className="btn btn-primary fw-bold w-100">Log in</button>
            <div className="text-center mt-3">
                <p>Don't have an account? <Link to="/signup" className="text-primary fw-bold">Sign up here</Link></p>
            </div>
        </form>
    </>
    )
}


export default Login