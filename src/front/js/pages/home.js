import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="d-flex justify-content-between mx-auto mb-5" style={{width: "500px"}}>
				<Link to="/login">
				<button class="btn btn-outline-primary fw-bolder">Click here for Log in</button>
				</Link>
				<Link to="/signup">
				<button class="btn btn-outline-info fw-bolder">Click here for Sign up</button>
				</Link>
			</div>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};
