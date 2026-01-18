import "./Meme.css";
import memeData from "../../memeData";

function Meme() {
  //   const thingsArray = ["thing1", "thing2"];
  const memes = memeData.data.memes;
  function getMemeImage() {
    console.log(memes?.[Math.floor(Math.random() * memes.length)].url);
    // return memes?.[Math.floor(Math.random() * memes.length)].url;
  }
  //   const parsedArray = thingsArray.map((thing) => {
  //     return <p key={thing}>{thing}</p>;
  //   });
  //   console.log(parsedArray);
  //   function addThingInArray() {
  //     const currentArrayLength = thingsArray.length;
  //     thingsArray.push(`things${currentArrayLength + 1}`);
  //     console.log("Things array after updation - ", thingsArray);
  //   }
  return (
    <main className="container-meme">
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
        <img src={memes[0].url} alt="meme-image" className="image" />
      </div>
      {/* <br />
      <button onClick={addThingInArray}>Add Item</button>
      {parsedArray} */}
      {/* <div className="container-meme-inputs">
        <input type="text" placeholder="Top text" className="inputs" />
        <input type="text" placeholder="Bottom text" className="inputs" />
      </div>
      <button className="button">Get a new meme image 🖼️</button> */}
    </main>
  );
}

export default Meme;
