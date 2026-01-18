import "./App.css";
import Header from "./components/Header/Header.jsx";
import Meme from "./components/Meme/Meme.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AddItemsNew from "./components/AddItemsNew/AddItemsNew.jsx";
import StateManagement from "./components/StatePractice/State.jsx";
import TernaryWithState from "./components/TernaryWithState/TernaryWithState.jsx";
import AddItems from "./components/AddItems/AddItems.jsx";
import Boxes from "./components/Boxes/Boxes.jsx";

function App() {
  return (
    <div className="container-main">
      <Boxes darkMode={true} />
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <Contact /> */}
      {/* <StateManagement />
      <AddItemsNew />
      <TernaryWithState />
      <AddItems /> */}
    </div>
  );
}

export default App;
