import React from "react";
import Component1 from "../../components/component1/component1";
import Component2 from "../../components/component2/component2";
import { useNavigate } from "react-router";

export default function ListUsers() {
	const navigate = useNavigate();

	const buttonClick = () => {
		navigate("/");
	};

	return (
		<div>
			<Component1 view={"ListUsers"}></Component1>
			<Component2 view={"ListUsers"}></Component2>
			<button onClick={buttonClick} className="btn btn-primary">
				Volver
			</button>
		</div>
	);
}
