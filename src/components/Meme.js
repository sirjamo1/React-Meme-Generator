import React from "react";
import pictureFrame from "../images/pictureFrame.png";

// assigns text to be blank on load and default image for on load
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/emccr.jpg",
  });

  // fetches data from website asigns the meme section to allMemeImages(state).
  // To target only the BODY part of the response and to convert it from JSON to javascript, you use res. json().
  //
  const [allMemeImages, setAllMemeImages] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, [allMemeImages.id]); // this stops it looping when there is no difference between this and the state

  // goes through data allMemesImages and choses one at random (1-100) by id
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length + 1);
    setMeme((prevSetMeme) => ({
      ...prevSetMeme,
      randomImage: allMemeImages[randomNumber].url,
    }));
  }

  //get's name, value from the input and assigns new value to what has changed
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div className="meme--container">
      <div className="meme--form">
        <input
          className="meme--input"
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme--input"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="meme--button">
          <img src={pictureFrame} />
        </button>
      </div>
      <div className="random-image-container">
        <img src={meme.randomImage} />
        <h2 className="meme--top-text">{meme.topText}</h2>
        <h2 className="meme--bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
