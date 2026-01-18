import "./Count.css";

function Count({ number }) {
  return (
    <div className="counter-value">
      <h1>{number}</h1>
    </div>
  );
}

export default Count;
