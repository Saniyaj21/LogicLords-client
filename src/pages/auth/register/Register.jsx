import { useEffect, useState } from "react";
import "./register.scss";
import regImage from "./registration.png";
import EmailSection from "../components/EmailSection";
import OtpSection from "../components/OtpSection";
import GoogoleAuth from "../components/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	registerUser,
	selectUser,
	verifyEmail,
} from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
	const { isAuthenticated, status, error, authStatus } =
		useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [next, setNext] = useState("email");
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState();

	useEffect(() => {
		dispatch(clearError());
		if (isAuthenticated === true) {
			navigate("/");
		}
		if (authStatus.otpSend === "succeeded") {
			toast.success("OTP sent");
		}
		if (authStatus.otpVerified === "succeeded") {
			toast.success("Registered Successfull");
		}
		if (error) {
			toast.error("Try again");
		}
	}, [dispatch, isAuthenticated, navigate, error, authStatus]);

	const emailHandle = (name, email, password) => {
		console.log(name, email, password);
		setEmail(email);
		dispatch(registerUser({ name, email, password }));

		setNext("otp_section");
	};

	const otpHandle = (otp) => {
		setOtp(otp);
		console.log(otp);
		dispatch(verifyEmail({ otp, email }));

		setNext("password_section");
	};

	return (
		<GoogoleAuth
			othersLink={"/login"}
			othersLinkName={"Login"}
			othersPara={" Already registered?"}
		/>

		// <div className='register'>
		// 	<div className='register_new_div'>
		// 		<div className='image_container'>
		// 			<img src={regImage} alt='' id='progress' />
		// 		</div>

		// 		<div className='form_container'>
		// 			<h2>Create a new Account</h2>

		// 			{next === "email" ? (
		// 				<EmailSection onInputData={emailHandle} />
		// 			) : (
		// 				<OtpSection email={email} onInputData={otpHandle} />
		// 			)}

		// 			<GoogoleAuth
		// 				othersLink={"/login"}
		// 				othersLinkName={"Login"}
		// 				othersPara={" Already registered?"}
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
	);
}
export default Register;
