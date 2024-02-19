import React, { useEffect, useState } from "react";
import "./login.scss";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";


import regImage from "../register/registration.png";
import Input from "../../../components/input/Input";
import { Icon } from "@iconify/react";
import verify from "./Verify.svg"


function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
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

            <div>
              <Input
                name={"email"}
                placeholder={"Email"}
                type={"email"}
                onInputChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <Input
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                onInputChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="action-btn">
              
              <button type="submit" >
                <img src={verify} alt="" /> &nbsp;
                Login</button>
            </div>
            
              <fieldset className="other_container">
                <legend>or</legend>
                <p>
				         Don't have an account ?
                  <br />
				          <Link to={"/register"} className="link"> Register</Link>
                </p>
                <button>
                  {" "}
                  <span>contineu with</span>{" "}
                  <Icon className="google_logo" icon="logos:google-icon" />
                </button>
              </fieldset>
            
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
