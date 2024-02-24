import "./googleAuth.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignUp } from "../../../redux/slices/authSlice";

function GoogoleAuth({ othersPara, othersLink, othersLinkName }) {
	const [user, setuser] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	const dispatch = useDispatch()

	console.log(name);
	console.log(email);
	console.log(avatar);

	return (
		<>
			<fieldset className='other_container'>
				<legend>or</legend>
				<p>
					{othersPara}
					<Link to={othersLink} className='login'>
						{othersLinkName}
					</Link>
				</p>

				<div>
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
							dispatch(googleSignUp({name, email, avatar}))


						}}
						onError={() => {
							console.log("Login Failed");
						}}
					/>
				</div>
			</fieldset>
		</>
	);
}

export default GoogoleAuth;
