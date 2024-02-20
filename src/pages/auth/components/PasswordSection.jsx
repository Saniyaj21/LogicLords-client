import React, { useState } from "react";
import Input from "../../../components/input/Input";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";

function PasswordSection({ onInputData }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordHandle = (e) => {
    e.preventDefault();
    onInputData(password, confirmPassword);
  };

  return (
    <>
      <form action="" onSubmit={passwordHandle}>
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

        <fieldset className="input_box">
          <legend className="placeholder">Confirm Password</legend>
          <input
            className="input_tag"
            type="password"
            name="confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </fieldset>

        <div className="action-btn">
          <button type="submit">
            <span>Next</span> <img className="img1" src={vactor} alt="" />
            <img src={vactor1} alt="" />
          </button>
        </div>
      </form>
    </>
  );
}

export default PasswordSection;
