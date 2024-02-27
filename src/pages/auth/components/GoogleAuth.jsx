import "./googleAuth.scss";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignUp } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function GoogoleAuth({ othersPara, othersLink, othersLinkName }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	const dispatch = useDispatch();

	const logIn = () => {
		if (name && email && avatar) {
			dispatch(googleSignUp({ name, email, avatar }));
		}
	};

	const handleSuccess = (credentialResponse) => {
		let decoded = jwtDecode(credentialResponse.credential);
		setAvatar(decoded.picture);
		setEmail(decoded.email);
		setName(`${decoded.given_name} ${decoded.family_name}`);
	};
	useEffect(() => {
		logIn();
	}, [avatar]);

	return (
		<>
			<div className="google-container">
				<p className="nunito-6">
					{othersPara}
					<Link to={othersLink} className='login'>
						{othersLinkName}
					</Link>
				</p>
				<div className="or-container">
					<div className="bar-line"></div>
					<div className="nunito-6">OR</div>
					<div className="bar-line"></div>
				</div>

				<div className="google-button-container">
					<p className="nunito-6">Continue With Google</p>
					<GoogleLogin
						onSuccess={handleSuccess}
						onError={() => {
							toast.error("Login Failed! Try again.");
						}}
					/>
				</div>
			</div>
		</>
	);
}

export default GoogoleAuth;
