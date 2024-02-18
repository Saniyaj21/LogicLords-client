import React from "react";
import "./InstituteRank.scss";

// img add
import Image from '../../../media/images.png'
import Logo from '../../../media/Logo.png'

export default function InstituteRank() {
  return (
    <main>
      <div className="leaderBoard_mainDiv">
        <span className="User_SN">1.</span>
        <img src={Image} alt="User_Img" className="User_Img" />
        <span className="user_Name">
          User Name
          <br />
          <span className="user_Institute">Institute Name</span>
        </span>
        <img src={Logo} alt="LL_Logic" className="LL_logo" />
        <span className="user_coin">1200</span>
      </div>

      <div className="leaderBoard_mainDiv">
        <span className="User_SN">1.</span>
        <img src={Image} alt="User_Img" className="User_Img" />
        <span className="user_Name">
          User Name
          <br />
          <span className="user_Institute">Institute Name</span>
        </span>
        <img src={Logo} alt="LL_Logic" className="LL_logo" />
        <span className="user_coin">1200</span>
      </div>
    </main>
  );
}
