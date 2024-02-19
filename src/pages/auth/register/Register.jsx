import React, { useDebugValue, useEffect, useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

// import Loading from "../../layout/loader/Loading";
import regImage from "./registration.png";

import { Icon } from "@iconify/react";
import Password from "../components/Password";
import Otp from "../components/Otp";
import Email from "../components/Email";

function Register() {
  // const [avatar, setAvatar] = useState(dp);
  const [userName, setUserName] = useState("");
  const [next, setNext] = useState("email");
  const [email , setEmail] =useState("")

  // progress bar logic(mobile)
  // const viewportWidth = window.innerWidth;
  // const progress = document.getElementById("progress");
  // if (viewportWidth < 800) {
  //   if (next === "email") {
  //     progress.style.border = "solid 5px #EBEBEB";
  //   } else if (next === "otp_section") {
  //     progress.style.borderLeft = "solid 5px #008894";
  //   } else if (next === "password_section") {
  //     progress.style.borderTop = "solid 5px #008894";
  //   }
  // }


  const passwordHandle=(pass1 , pass2)=>{
     console.log(pass1, pass2);
     
  }

  const emailHandle =(name , email)=>{
    console.log(name , email);
    setEmail(email)
    setNext("otp_section");
  }

  const otpHandle = (otp )=>{
    console.log(otp);
    setNext("password_section");
  }

  const previousHandle =(otp)=>{
    setNext("email");
  }

  console.log(name);
  return (
    <div className="register">
      <div className="register_new_div">
        {/* image container */}
        <div className="image_container">
          <img src={regImage} alt="" id="progress" />
        </div>

        {/* form container */}
        <div className="form_container">
          <form className="form" encType="multipart/form-data">
            <div>
              <h2>Create a new Account</h2>
            </div>

            {next === "email" ? (
              <>
                {/* name and email container */}
               <Email onInputData={emailHandle}/>
              </>
            ) : next === "otp_section" ? (
              <>
                {/* otp container  */}
            
               <Otp email={email} onInputData={otpHandle} onPrevious={previousHandle} />      
              </>
            ) : (
              <>
                {/* password container  */}
                <Password  onInputData={passwordHandle}/>
              </>
            )}


            <div>
              <fieldset className="other_container">
                <legend>or</legend>
                <p>
                  Already registered?
                  <br />
                  <Link to={"/login"} className="login">
                    {" "}
                    Login{" "}
                  </Link>
                </p>
                <button>
                  {" "}
                  <span>contineu with</span>{" "}
                  <Icon className="google_logo" icon="logos:google-icon" />
                </button>
              </fieldset>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
