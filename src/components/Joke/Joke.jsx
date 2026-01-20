import "./Joke.css";

function Joke(props) {
  const punchLineButtonText = props.isShown ? "Hide" : "Show";
  return (
    <div className="joke-container">
      <h4 className="joke-joke">{props.joke}</h4>
      {props.isShown && <p className="joke-punchLine">{props.punchLine}</p>}
      <button className="joke-button" onClick={props.flipPunchLine}>
        {punchLineButtonText} PunchLine
      </button>
      <hr />
    </div>
  );
}

export default Joke;
