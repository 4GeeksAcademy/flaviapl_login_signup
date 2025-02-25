const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			// token: localStorage.getItem("token"),
			auth: false
		},
		actions: {

			login : (email, password) => {
				console.log("login from actions");
				const requestOption = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(
						{
							"email" : email,
							"password" : password
						}

					)
				};
				fetch(process.env.BACKEND_URL+ "/api/login", requestOption)
					.then(response => { 
						console.log(response.status);
						if (response.status == 200) {
							setStore({auth : true}) 
						} else {
							setStore({auth : false});
						}
						return response.json()
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						console.log(data.access_token);
					})
			},


			logout : () => {
				console.log("logout desde actions");
				setStore({auth : false});
				localStorage.removeItem("token");
			},


			signup : (email, password, navigate) => {
				console.log("signup from actions");
				const requestOption = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(
						{
							"email" : email,
							"password" : password
						}

					)
				};
				fetch(process.env.BACKEND_URL + "/api/signup", requestOption)
				.then(response => response.json())
				.then(data => {
					console.log("User created", data);
					navigate("/");
				})
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
