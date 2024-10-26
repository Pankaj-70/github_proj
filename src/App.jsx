import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios
			.get("/jokes")
			.then((response) => {
				setJokes(response.data);
				console.log(respnse.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	return (
		<>
			<h1>HI BERLIN</h1>
			<h4>`Jokes={jokes.length}`</h4>
			{jokes.map((joke, index) => (
				<div key={joke.id}>
					<h5>{joke.desc}</h5>
					<h5>{joke.content}</h5>
				</div>
			))}
		</>
	);
}

export default App;
