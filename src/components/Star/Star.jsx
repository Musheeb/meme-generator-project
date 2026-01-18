import "./Star.css";

function Star(props) {
  const iconResult = props.isFilled ? (
    <i className="fa-solid fa-star"></i>
  ) : (
    <i className="fa-regular fa-star"></i>
  );
  return (
    <div className="star-container" onClick={props.handleClick}>
      {iconResult}
    </div>
  );
}

export default Star;
