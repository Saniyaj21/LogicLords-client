import "./login.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import regImage from "../register/registration.png";
import { Icon } from "@iconify/react";
import verify from "./Verify.svg";
import GoogoleAuth from "../components/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginUser, selectUser } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isAuthenticated, status, error, authStatus, user } =
		useSelector(selectUser);

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch(loginUser({email, password}))
	};

	useEffect(() => {
		// dispatch(clearError());
		if (isAuthenticated === true) {
			toast.success(`Login as ${user?.name} `);
			navigate("/");
		}
		if (error) {
			toast.error("This happen on Slow Network.");
		}
	}, [dispatch, isAuthenticated, navigate, error]);

	return (
		// <GoogoleAuth
		// 	othersLink={"/register"}
		// 	othersLinkName={"Register"}
		// 	othersPara={" Don't have an account ?"}
		// />

		<main>
		  <div className="register_new_div">
		    <div className="image_container" id="login_img">
		      <img src={regImage} alt="" id="progress" />
		    </div>

		    {/* form container */}
		    <div className="form_container">
		      <form
		        className="form"
		        encType="multipart/form-data"
		        onSubmit={handleLogin}
		      >
		        <div>
		          <h2>Welcome Back!</h2>
		        </div>

		        <fieldset className="input_box">
		          <legend className="placeholder">Email</legend>
		          <input
		            className="input_tag"
		            type="email"
		            name="email"
		            required
		            onChange={(e) => setEmail(e.target.value)}
		          />
		        </fieldset>

		        <fieldset className="input_box">
		          <legend className="placeholder">Password</legend>
		          <input
		            className="input_tag"
		            type="password"
		            name="password"
		            required
		            onChange={(e) => setPassword(e.target.value)}
		          />
		        </fieldset>

		        <div className="action-btn">
		          <button type="submit">
		             Login
		          </button>
		        </div>
				<p className="nunito-6 forget-password-p">
					Forget password?
					<Link to={'/password/recover'} >
						Recover password.
					</Link>
				</p>
				
		        <GoogoleAuth
		          othersLink={"/register"}
		          othersLinkName={"Register"}
		          othersPara={"Don't have an account?"}
		        />
		      </form>
		    </div>
		  </div>
		</main>
	);
}

export default Login;
