import React from "react";
import ReactPlayer from "react-player";

function Playlist({ thumbnail, description, topic,links, index, onButtonClick }) {
  return (
    <div
      key={index}
      onClick={() => onButtonClick(thumbnail, description, topic , links)}
    >
      <div className="details">
        <h3>{topic}</h3>
        <span>12d ago</span>
        <p>{description} </p>
      </div>
    </div>
  );
}

export default Playlist;
