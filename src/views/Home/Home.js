import React from "react";
import Component1 from "../../components/component1/component1";
import Component2 from "../../components/component2/component2";
import { useNavigate } from "react-router";

export default function Home() {
	const navigate = useNavigate();

	const buttonClick = () => {
		navigate("/users");
	};

	return (
		<div>
			<Component1 view={"Home"}></Component1>
			<Component2 view={"Home"}></Component2>
			<button onClick={buttonClick} className="btn btn-primary">
				Ir a otra vista
			</button>
		</div>
	);
}
