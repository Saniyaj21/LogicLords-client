import React, { useDebugValue, useEffect, useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

// import Loading from "../../layout/loader/Loading";
import regImage from "./registration.png";

import { Icon } from "@iconify/react";

import EmailSection from "../components/EmailSection";
import OtpSection from "../components/OtpSection";
import PasswordSection from "../components/PasswordSection";
import GoogoleAuth from "../components/GoogleAuth";

function Register() {
  // const [avatar, setAvatar] = useState(dp);
  const [userName, setUserName] = useState("");
  const [next, setNext] = useState("email");
  const [email, setEmail] = useState("");
  const [name , setName] = useState("");
  const [pass1 , setPass1]=useState("");
  const [pass2 , setPass2] = useState("");
  const [otp , setOtp]=useState();

  const passwordHandle = (pass1, pass2) => {
    
    setPass1(pass1)
    setPass2(pass2)
    console.log(pass1, pass2);
    
  };

  const emailHandle = (name, email) => {
    
    setName(name)
    setEmail(email);
    console.log(name, email);
    
    setNext("otp_section");
  };

  const otpHandle = (otp) => {
    setOtp(otp)
    console.log(otp);

    setNext("password_section");
  };

  const previousHandle = () => {
    setNext("email");
  };

  return (
    <div className="register">
      <div className="register_new_div">
        {/* image container */}
        <div className="image_container">
          <img src={regImage} alt="" id="progress" />
        </div>

        {/* form container */}
        <div className="form_container">
          <h2>Create a new Account</h2>

          {next === "email" ? (
            <>
              {/* name and email container */}
              <EmailSection onInputData={emailHandle} />
            </>
          ) : next === "otp_section" ? (
            <>
              {/* otp container  */}

              <OtpSection
                email={email}
                onInputData={otpHandle}
                onPrevious={previousHandle}
              />
            </>
          ) : (
            <>
              {/* password container  */}
              <PasswordSection onInputData={passwordHandle} />
            </>
          )}

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
