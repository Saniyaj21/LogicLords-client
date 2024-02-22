import React, { useState } from 'react'
import  './Challenge.scss'
import Topbar from './blocks/Topbar'
import Details from './blocks/Details';
import Output from './blocks/Output';

export default function Challenge() {


  const [toggleActive, setActiveToggle]=useState('details');

  const ContentArray = [
		{
      detsilsDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem quam eveniet sint earum assumenda quas inventore vero doloremque corporis aliquid exercitationem labore libero unde suscipit, ea, dolorem itaque. Repellendus molestiae officiis, rerum hic reprehenderit laboriosam culpa est dolore natus? Voluptas assumenda eaque officiis possimus, ipsum molestiae deleniti sit dolor earum ab incidunt, autem adipisci officia aspernatur! Exercitationem, reiciendis quasi voluptatibus totam modi id dolorem minima itaque deserunt nobis excepturi commodi unde aliquam non nisi nulla molestiae numquam debitis consequatur consequuntur, repellat, magnam eaque. Magni officiis et laudantium explicabo, eius nesciunt dolorum deleniti dicta eaque assumenda esse quia soluta. Quam?",
      design: "https://res.cloudinary.com/dlkaxk4dm/image/upload/v1705551327/CloudGallery/hbntlahbhtaqehn9rnwl.jpg",
      liveUrl:'https://www.github.com/shuvra442',
		}
	];


  return (
    <section id="challenge">
      <div className="challengs_container">
        {/* Top Navbar */}
        <div 
        className="topbar"> 
          <Topbar />
        </div>
        {/* slider bar */}
        <div className="slider_bar">
          <div className="primary_bar active"></div>
        </div>

        {/* button section */}
        <div className="C_but_sec">
          <div
            className={
              toggleActive === "details" ? "details active_output" : "details"
            }
            onClick={() => setActiveToggle("details")}
          >
            Details
          </div>

          <div
            className={toggleActive === "output" ? "output active_output" : "details"}
            onClick={() => setActiveToggle("output")}>

            Output
          </div>

        </div>

        <div className="details_content">
          
          { 
          toggleActive === "details" ?
          ContentArray.map((item, index) => {
            return <Details item={item} index={index} /> 
            
          }) : <Output/> } 
          
          
        </div>
       
      </div>
    </section>
  );
}
