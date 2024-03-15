import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

import { videoData } from "../videoData";

function Video({ thumbnail, description, topic , links }) {
  const [more, setMore] = useState(false);
  return (
    <>
      <ReactPlayer
        height={"100%"}
        width={"100%"}
        url={"https://youtu.be/7wnove7K-ZQ?si=Mbi8-HUzjl73FgyG"}
        controls={true}
        playing={true}
      />

      <div className="details">
        <h3>{topic}</h3>
        <span>12d ago</span>
        <p className={more? 'line-clamp-3':""} >
          {description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          deserunt, quas mollitia explicabo eaque et! Nihil, alias aspernatur.
          Commodi odit ipsa perferendis tenetur possimus non quidem quaerat
          sunt? Doloribus, nisi! <br/>
        {
			links.map((link , index)=>{
				return(
					<a key={index} className="mr-3 text-pur flex items-center gap-1 text-blue-800" href={link.linkUrl}>
						{link.linkName}
                        <FiExternalLink/>
					</a>
				)
			 })
		}
        </p>
        <button className="text-blue-800 font-semibold" onClick={() => setMore(!more)}>
          {!more ? "see less " : "see more"}
        </button>

      </div>
    </>
  );
}

export default Video;
