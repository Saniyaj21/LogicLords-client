import React from "react";
import "./GlobalRank.scss";

// img add
import Image from '../../../media/images.png'
import Logo from '../../../media/Logo.png'

export default function GlobalRank() {
  return (
    <main>
      <div className="leaderBoard_mainDiv">
        <span className="User_SN">1.</span>
        <img src={Image} alt="User_Img" className="User_Img" />
        
        <div className="User_Info">
          <span className="user_name">Shuvra patra</span>
          <span className="Inst_Name">Institute name</span>
        </div>
        
        {/* </span> */}
        <img src={Logo} alt="LL_Logic" className="LL_logo" />
        <span className="user_coin">1200</span>
      </div>

      
    </main>
  );
}
