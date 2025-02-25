import React, { useState ,useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();
        actions.signup(email, password, navigate)

    }


    return (
    <>
       <form className="container mt-5" style={{ border: "1px solid lightgrey", padding: "40px", paddingBottom:"40px", width: "420px"}} onSubmit={sendData}>
            <h1 className="mb-4">Signup</h1>
            <div className="mb-3">
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="password"/>
            </div>
            <button type="submit" className="btn btn-primary fw-bold w-100 mt-3">Create new account</button>
        </form>
    </>
    )
}


export default Signup