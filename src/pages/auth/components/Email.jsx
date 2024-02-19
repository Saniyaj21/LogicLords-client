import React, { useState } from "react";
import vactor from "../image/Vector.svg";
import vactor1 from "../image/Vector1.svg";
import Input from "../../../components/input/Input";


function Email({onInputData}) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const emailHandle =()=>{
       onInputData(name , email)
    }

  return (
    <>
      <div>
        <Input
          name={"name"}
          placeholder={"Name"}
          type={"name"}
          onInputChange={(e)=>setName(e.target.value)}
          
          // placeBgColor={"green"}
          // placeColor={"red"}
          // inputBorderColor={"black"}
        />
      </div>
      <div>
        <Input
          name={"email"}
          placeholder={"Email"}
          type={"email"}
         
          onInputChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="action-btn">
        <button type="submit" onClick={emailHandle}>
          <span>Next</span> <img className="img1" src={vactor} alt="" />
          <img src={vactor1} alt="" />
        </button>
      </div>
    </>
  );
}

export default Email;
