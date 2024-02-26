import "./googleAuth.scss";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignUp } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";

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
		logIn()
	}, [avatar])
	
	return (
		<>
			<GoogleLogin
				onSuccess={handleSuccess} // Use the handleSuccess function
				onError={() => {
					toast.error("Login Failed! Try again.")
				}}
			/>
			{/* <fieldset className='other_container'>
				<legend>or</legend>
				<p>
					{othersPara}
					<Link to={othersLink} className='login'>
						{othersLinkName}
					</Link>
				</p>

				<div onClick={() => logIn()}>
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							let decoded = jwtDecode(credentialResponse.credential);
							setuser(decoded);
							console.log(decoded);
							console.log(user);
							setuser(decoded);
							setAvatar(decoded.picture);
							setEmail(decoded.email);
							setName(`${decoded.given_name} ${decoded.family_name}`);
							// dispatch(googleSignUp({name, email, avatar}))
							logIn();
						}}
						onError={() => {
							console.log("Login Failed");
						}}
					/>
				</div>
			</fieldset> */}
		</>
	);
}

export default GoogoleAuth;
