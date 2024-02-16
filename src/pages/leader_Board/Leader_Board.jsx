import React from "react";
import "./Leader_Board.scss";

// add image 
import Image from "../../media/images.png";
import Logo from "../../media/Logo.png";

export default function Leader_Board() {
  return (
    <main>
      <div className="leaderBoard_container">
        {/* side nav div */}
        <div className="leaderBoard_sideNav">
          <div className="sideNav_title">
            Leader <hr className="title_hr" />
          </div>
          <div className="sideNav_title">
            Weekly Winners <hr />
          </div>
          <div className="sideNav_title">
            Home <hr />
          </div>
        </div>

        {/* center div */}
        <div className="leaderBoard_centerDiv">
          {/* Leader Board: -->  slider div */}
          <div className="leaderBoard_sliderText">
            <div className="sliderText_title">Global Rank</div>
            <div className="sliderText_title">Institute Rank</div>
          </div>

          {/*  Leader Board: -->  slider div  */}
          <div class="slider">
            <div class="bar"></div>
          </div>

          {/* Leader Board: --> center div -->> span text  */}
          <div className="leaderBoard_mainContent">
            <div className="leaderBoard_Text">
              <span>Participate in weekly challenges to get LL points</span>
            </div>

            {/* stident details div */}
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
          </div>
        </div>
      </div>
    </main>
  );
}
