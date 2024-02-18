import React from "react";
import "./GlobalRank.scss";

// img add
import Image from "../../../media/images.png";
import Logo from "../../../media/Logo.png";

export default function GlobalRank() {
  return (
    <main>
      <div className="leaderBoard_mainDiv">
        <div className="User_SN">1.</div>
        <div className="User_Info">
          <img src={Image} alt="User_Img" className="User_Img" />

          <div className="info">
            <div className="user_name">Shuvra patra</div>
            <div className="Inst_Name">Institute name</div>
          </div>
        </div>

        
        <div className="Rank_info">
          <img src={Logo} alt="LL_Logic" className="LL_logo" />
          <span className="user_coin">1200</span>
        </div>
      </div>
    </main>
  );
}
