import React, { useState } from "react";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";
import Input from "../../../components/input/Input";

function EmailSection({ onInputData }) {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [pass2, setPass2] = useState("");


	const emailHandle = (e) => {
		e.preventDefault();
		onInputData(name, email, password);
	};

	return (
		<>
			<form action='' onSubmit={emailHandle}>
				<fieldset className='input_box'>
					<legend className='placeholder'>Name</legend>
					<input
						className='input_tag'
						type='name'
						name='name'
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</fieldset>

				<fieldset className='input_box'>
					<legend className='placeholder'>Email</legend>
					<input
						className='input_tag'
						type='email'
						name='email'
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</fieldset>
				<fieldset className='input_box'>
					<legend className='placeholder'>Password</legend>
					<input
						className='input_tag'
						type='password'
						
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</fieldset>
				<fieldset className='input_box'>
					<legend className='placeholder'>Confirm Password</legend>
					<input
						className='input_tag'
						type='password'
				
						required
						onChange={(e) => setPass2(e.target.value)}
					/>
				</fieldset>

				<div className='action-btn'>
					<button type='submit'>
						<span>Next</span> <img className='img1' src={vactor} alt='' />
						<img src={vactor1} alt='' />
					</button>
				</div>
			</form>
		</>
	);
}

export default EmailSection;
