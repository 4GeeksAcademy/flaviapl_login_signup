import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Home } from "../pages/home";
import { Navigate } from "react-router-dom";
import Login from "./login";

const Private = () => {
    const { store, actions } = useContext(Context);

return (
        <>
            {store.auth == true ?
            <div className="p-5">
                <h1>PRIVATE PAGE</h1>
                <Link to="/">Home</Link>
            </div>
             : 
            <Navigate to = "/"/>}
        </>
)
}

export default Private