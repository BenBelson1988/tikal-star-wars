import logo from "./pics/TikalLogo.png";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import MainRoute from "./Router/MainRoute";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Navbar />
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
