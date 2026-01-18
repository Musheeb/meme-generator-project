import "./Header.css";

function Header() {
  return (
    <header className="container-header">
      <div className="container-header-content">
        <img src="/TrollFace.png" alt="Troll-Face" className="troll-face" />
        <span className="header-text">Meme Generator</span>
      </div>
      <span className="header-text-react">React Course - Project 3</span>
    </header>
  );
}

export default Header;
