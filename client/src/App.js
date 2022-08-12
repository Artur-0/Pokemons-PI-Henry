import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/pokemon" component={NavBar} />
      <Route exact path="/pokemon" component={Home} />
    </div>
  );
}

export default App;
