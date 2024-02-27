import { useEffect, useState } from "react";
import "./register.scss";
import regImage from "./registration.png";
import GoogoleAuth from "../components/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	registerUser,
	selectUser,
} from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
	const { isAuthenticated, status, error, authStatus } =
		useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [pass2, setPass2] = useState('');

	useEffect(() => {
		dispatch(clearError());
		if (isAuthenticated === true) {
			navigate("/");
		}
		if (password !== pass2) {
			toast.error("Confirm Password again.")
		}
		if (error) {
			toast.error("Try again");
		}
	}, [dispatch, isAuthenticated, navigate, error ]);

	const handleRegister = (e) => {
		e.preventDefault();
		console.log(name, email, password);
		dispatch(registerUser({ name, email, password }));
	};

	return (
		<div className='register'>
			<div className='register_new_div'>
				<div className='image_container'>
					<img src={regImage} alt='' id='progress' />
				</div>

				<div className='form_container'>
					<h2>Create a new Account</h2>

					<form onSubmit={handleRegister}>
						<fieldset className='input_box'>
							<legend className='placeholder'>Name</legend>
							<input
								className='input_tag'
								type='text'
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
							<button type='submit'>Register</button>
						</div>
					</form>
					<GoogoleAuth
						othersLink={"/login"}
						othersLinkName={"Login"}
						othersPara={" Already registered?"}
					/>
				</div>
			</div>
		</div>
	);
}
export default Register;
