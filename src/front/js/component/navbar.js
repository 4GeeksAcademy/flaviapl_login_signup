import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext (Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				{store.auth == true ? <button className="btn btn-primary" onClick={() => actions.logout()}>Log out</button> : null }   
			</div>
		</nav>
	);
};
