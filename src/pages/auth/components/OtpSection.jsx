import React, { useEffect, useRef, useState } from "react";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";
import vactor2 from "../image/Vector2.svg";
import vactor4 from "../image/Vector4.svg";

import "./otp.scss";

function OtpSection({ email, onPrevious, onInputData }) {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  
  var otp_val = '';

  const otpHandle = (e) => {
    
    e.preventDefault()

    console.log(values);
     values.map((val) => {
      otp_val = otp_val + val;
    });
   
    const otp = parseInt(otp_val , 10)
    onInputData(otp);
  };
  

  useEffect(() => {
    console.log(email);
  }, []);

  const handleChange = (index, event) => {
    let { value } = event.target;
    // Only allow numeric values
    value = value.replace(/\D/, "");
    // Limit to one digit
    value = value.slice(0, 1);
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Clear the input field if the entered value is empty
    if (value.length === 0) {
      inputRefs[index].current.value = "";
    }

    // Focus on the previous input if the current input is empty
    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }

    // Focus on the next input if there's a digit in the current input
    if (value.length === 1 && !isNaN(value) && index < values.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <>
      <form action="" onSubmit={otpHandle}>

        <fieldset className="input_box">
          <legend className="placeholder">OTP</legend>
          {values.map((value, index) => (
            <input
              className="otp_fill"
              key={index}
              type="number"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e)}
              ref={inputRefs[index]}
              required
            />
          ))}
        </fieldset>

        <div className="text_container">
          <p>
            Your OTP is sended to your Email id : {email} if not get then check
            spam section otherwise retry for a new OTP
          </p>
        </div>

        <div className="action-btn" id="action_otp">
          
          <button type="submit">
            <span>Next</span> <img className="img1" src={vactor} alt="" />
            <img src={vactor1} alt="" />
          </button>
        </div>
      </form>
    </>
  );
}

export default OtpSection;
