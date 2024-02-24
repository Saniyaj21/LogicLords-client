import "./googleAuth.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function GoogoleAuth({ othersPara, othersLink, othersLinkName }) {
	const [user, setuser] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");


	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => {
			let decoded = jwtDecode(tokenResponse.credential);
			setuser(decoded);
			setAvatar(decoded.picture)
			setEmail(decoded.email)
			setName(`${decoded.given_name} ${decoded.family_name}`)
			console.log("decode", decoded);
			console.log("tokenResponse", tokenResponse);
			console.log(name);
			console.log(email);
			console.log(avatar);
		},
	});
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
