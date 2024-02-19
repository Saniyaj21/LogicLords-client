import React, { useEffect, useState } from "react";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";
import vactor2 from "../image/Vector2.svg";
import vactor4 from "../image/Vector4.svg";
import Input from "../../../components/input/Input";

import "./otp.scss"

function Otp({email , onPrevious , onInputData}) {
   const [otp , setOtp] = useState()
   const otpHandle = ()=>{
        onInputData(otp)
      
   }
   const previousHandle=()=>{
     onPrevious(otp);
   }

   useEffect(()=>{
    console.log(email);
   },[])

  return (
    <>
      <div>
        <Input name={"otp"} type={"text"} placeholder={"OTP"}  onInputChange={(e)=>setOtp(e.target.value)}/>
      </div>
      <div className="text_container">
        <p>
          Your OTP is sended to your Email id : {email} if not get then check
          spam section otherwise retry for a new OTP
        </p>
      </div>

      <div className="action-btn" id="action_otp">
        <button  onClick={previousHandle}>
          <img src={vactor4} alt="" />
          <img src={vactor2} alt="" className="img2" />
          <span> Previous</span>
        </button>
        <button type="submit" onClick={otpHandle}>
          <span>Next</span> <img className="img1" src={vactor} alt="" />
          <img src={vactor1} alt="" />
        </button>
      </div>
    </>
  );
}

export default Otp;
