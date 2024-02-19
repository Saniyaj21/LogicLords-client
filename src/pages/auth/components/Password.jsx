import React, { useState } from "react";
import Input from "../../../components/input/Input";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";

function Password({onInputData}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordHandle =()=>{
    onInputData(password , confirmPassword)
  }

  return (
    <>
      <div>

        <Input
         type={"password"} 
         name={"password"} 
         placeholder={"Password"} 
         onInputChange={(e)=>setPassword(e.target.value)}
         />

      </div>
      <div>
        <Input
          type={"password"}
          name={"confirm password"}
          placeholder={"Confirm Password"}
         onInputChange={(e)=>setConfirmPassword(e.target.value)}

        />
      </div>

      <div className="action-btn">
        <button type="submit" onClick={passwordHandle}>
          <span>Next</span> <img className="img1" src={vactor} alt="" />
          <img src={vactor1} alt="" />
        </button>
      </div>
    </>
  );
}

export default Password;
