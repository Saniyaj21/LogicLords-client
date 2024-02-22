import React, { useState } from 'react'
import './Topbar.scss'
// import SubmitSolution from '../SubmitSolution';

export default function Topbar() {

  const [activeState, setActiveState]=useState("challenge")

  return (
    <>
      <div 
      className= {activeState === 'challenge' ? 'challenges nunito-6 active_challenges' : 'challenges nunito-6'}  
      onClick={() => setActiveState("challenge")}>
        Challenge
      </div>

      <div 
      className={activeState === 'submitSolution' ? 'submit_solution nunito-6 challenges active_challenges' : 'submit_solution nunito-6 challenges'} 
      onClick={() => setActiveState("submitSolution")}>
        Submit Solution
      </div>

    </>
  );
}
