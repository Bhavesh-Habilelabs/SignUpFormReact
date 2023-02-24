import React, { useState } from "react";
import "./App.css";
import { FormInput } from "./formInput";
import { inputs } from "./inputData"

export const App = () => {
	const [submitted, setSubmitted] = useState('')

	const [values, setValues] = useState({
		fullname: "",
		email: "",
		phone: "",
		pass: "",
		confPass: ""
	});

	const [valid, setValid] = useState({
		fullname: 1,
		email: 1,
		phone: 1,
		pass: 1,
		confPass: 1,
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		Object.values(valid).every((v) => v === true)
			? setSubmitted("Submitted Successfully!") || document.getElementById("myForm").reset()
			: setSubmitted("Error!") ||
			setValid({
				fullname: true,
				email: true,
				phone: true,
				pass: true,
				confPass: true
			})
	}

	
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className="app">
			<form onSubmit={handleSubmit} id="myForm">
				<p>{submitted}</p>

				{inputs.map((input) => (
					<FormInput
						{...input}
						key={input.id}
						value={values[input.name]}
						onChange={handleChange}
						valid={valid}
						setValid={setValid}
					/>
				))}

					<button type="submit">Submit</button>
			</form>
		</div>
	);
};