import React from "react";
import TrollFace from "../images/Troll Face.png";

export default function Header() {
  return (
    <div className="header">
      <div className="trollAndMeme">
        <img className="trollFaceImg" src={TrollFace} />
        <h3>Meme Grenerator</h3>
      </div>
      <h5>React Course - Project 3</h5>
    </div>
  );
}
