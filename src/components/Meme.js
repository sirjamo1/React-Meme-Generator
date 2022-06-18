import React from "react";
import pictureFrame from "../images/pictureFrame.png";
import memesData from "../memes.Data.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/emccr.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length + 1);
    setMeme((prevSetMeme) => ({
      ...prevSetMeme,
      randomImage: memesArray[randomNumber].url,
    }));
  }

  return (
    <div className="meme--container">
      <div className="meme--form">
        <input className="meme--input" type="text" placeholder="Top Text" />
        <input className="meme--input" type="text" placeholder="Bottom Text" />
        <button onClick={getMemeImage} className="meme--button">
          <img src={pictureFrame} />
        </button>
      </div>
      <div className="random-image-container">
        <img src={meme.randomImage} />
      </div>
    </div>
  );
}
