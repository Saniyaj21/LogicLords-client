import React, { useEffect, useState } from "react";
import "./login.scss";
// import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";

import regImage from "../register/registration.png";
import Input from "../../../components/input/Input";
import { Icon } from "@iconify/react";
import verify from "./Verify.svg";
import GoogoleAuth from "../components/GoogleAuth";

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
                <img src={verify} alt="" /> &nbsp; Login
              </button>
            </div>
            <GoogoleAuth
              othersLink={"/register"}
              othersLinkName={"Register"}
              othersPara={" Don't have an account ?"}
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
