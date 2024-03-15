import React from "react";
import ReactPlayer from "react-player/youtube";
import "./video.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";
import Playlist from "./component/Playlist";
import Video from "./component/Videos";
// import Nav from "../../headers/nav/Nav";

import { videoData } from "./videoData.js";

function AllVideo() {
	const { topic } = useParams();
	const [video, setVedio] = useState(videoData[0]);

	const changeVedio = (thumbnail, description, topic , links) => {
		setVedio({ thumbnail: thumbnail, description: description, topic: topic , links:links });
		console.log(thumbnail, description, topic);
	};

	return (
		<>
			{/* <Nav/> */}
			

			<div className='vedio_container'>
				<div className='vedio'>
					<Video
						thumbnail={"https://youtu.be/7wnove7K-ZQ?si=Mbi8-HUzjl73FgyG"}
						description={video.description}
						topic={video.topic}
						links={video.links}
					/>
				</div>

				<div className='playlist'>
					{
                      videoData && videoData.map((ele , index)=>{

						 return( <Playlist
						      index={index}
							  onButtonClick={changeVedio}
							  thumbnail={'https://youtu.be/xwKO_y2gHxQ?si=kO5cXth9-EnMvoPy'}
							  description={ele.description}
							  topic={ele.topic}
							  links={ele.links}
						  />)
					  })
					}
					
				</div>
			</div>
		</>
	);
}

export default AllVideo;
