import "./Meme.css";
import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImageUrl: "https://i.imgflip.com/30b1gx.jpg",
  });
  console.log(meme);
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    console.log("Effect rendered");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data?.data?.memes);
        setAllMemes(data?.data?.memes);
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(function (prevMemeObject) {
      return {
        ...prevMemeObject,
        [event.target.name]:
          name === "memeImageUrl"
            ? allMemes?.[Math.floor(Math.random() * allMemes.length)].url
            : value,
      };
    });
  }
  return (
    <main className="container-meme">
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          className="form-button"
          onClick={handleChange}
          name="memeImageUrl"
        >
          Get a new meme image 🖼️
        </button>
        <div className="meme">
          <img
            src={meme.memeImageUrl}
            alt="meme-image"
            className="meme-image"
          />
          <h4 className="meme-text top">{meme.topText}</h4>
          <h4 className="meme-text bottom">{meme.bottomText}</h4>
        </div>
      </div>
    </main>
  );
}

export default Meme;
