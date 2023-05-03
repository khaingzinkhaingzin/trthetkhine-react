import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
	const isStartWithUpperCase = str => {
		let initial = str.charAt(0);
		return initial.toUpperCase() === initial;
	};

	const validate = values => {
		console.log('validate', values);
		const errors = {};

		if (!isStartWithUpperCase(values.name)) {
			errors.name = 'Name must start with uppercase';
		}

		if (!values.email) {
			errors.email = 'Required';
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validate,
		onSubmit: (values) => {
			console.log('Form submit ', values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				{formik.errors.name && <div className="alert alert-danger">{formik.errors.name}</div>}
			</div>

			
			<div className="form-group">
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
			</div>

			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	);
};

export default SignupForm