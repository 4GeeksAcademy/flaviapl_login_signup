import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, Navigate } from "react-router-dom";
import Login from "../component/login";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello!</h1>
			{store.auth == true ? <Navigate to="/private"/> : <Login/>}
		</div>
	);
};
