import React, { useState } from "react";
import "./Leader_Board.scss";
import GlobalRank from "./leader_Board_Layout/GlobalRank";
import InstituteRank from "./leader_Board_Layout/InstituteRank";
import LeaderBoard from '../../media/fa6-solid_ranking-star.svg';
import WeeklyWin from '../../media/game-icons_podium-winner.png';
import Home from '../../media/flowbite_home-solid.png';


export default function Leader_Board() {

  const [activeDiv, setActiveDiv] = useState('leader_board');

  const [activeSlider, setActiveSlider] = useState('global');

  // const handleDivClick = (divNumber) => {
  //   setActiveDiv(divNumber);
  // };

  return (
    <main>
      <div className="leaderBoard_container">
        {/* side nav div */}

        <div className="leaderBoard_sideNav">
          {/* Leader board div */}
          <div
            onClick={() => setActiveDiv('leader_board')}
            className="sideNav_title"
            style={{ color: activeDiv === 'leader_board' ? "#FFAC07" : "#008894" }}
            role="button"
            tabIndex="0"
          > 
            <img src={LeaderBoard} alt="Leader_Board" className="navIcons" />
            Leader Board
            <hr className="title_hr"/>
          </div>

          {/* Weekly winner div */}
          <div
            onClick={() => setActiveDiv('weekly_winner')}
            className="sideNav_title"
            style={{ color: activeDiv === 'weekly_winner' ? "#FFAC07" : "#008894" }}
            role="button"
            tabIndex="0"
          >
            <img src={WeeklyWin} alt="Weekly_Winners" className="navIcons"/>
            Weekly Winners <hr className="title_hr" />
          </div>

          {/* Home Div */}
          <div
            onClick={() => setActiveDiv('Home')}
            className="sideNav_title"
            style={{ color: activeDiv === 'Home' ? "#FFAC07" : "#008894" }}
            role="button"
            tabIndex="0"
          >
            <img src={Home} alt="Home" className="navIcons"/>
            Home <hr className="title_hr" />
          </div>
        </div>

        {/* center div */}
        <div className="leaderBoard_centerDiv">
          {/* Leader Board: -->  slider div */}

          <div className="leaderBoard_sliderText">
            {/* Global rank part */}

            <div
              className={activeSlider === 'global' ? 'sliderText_title text-yellow' : 'sliderText_title'}
              id="slide-item-1"
              role="button"
              tabIndex="0"
              onClick={() => setActiveSlider("global")}
            >
              Global Rank
            </div>

            {/* Institute rank part */}
            <div
              className={activeSlider === 'institute' ? 'sliderText_title text-yellow' : 'sliderText_title'}

              id="slide-item-2"
              role="button"
              tabIndex="0"
              onClick={() => setActiveSlider("institute")}
            >
              Institute Rank
            </div>
          </div>

            {/*  Leader Board: -->  slider div  */}
            <div className="slider">
              <div className={activeSlider === 'global' ? 'bar active' : 'bar'}></div>
            </div>

          {/* Leader Board: --> center div -->> span text  */}

          <div className="leaderBoard_mainContent">
            <div className="leaderBoard_Text">
              <span>Participate in weekly challenges to get LL points</span>
            </div>
            <div className="leader_border">
              {
                activeSlider ===  "global" ? <GlobalRank/> : <InstituteRank/>
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
