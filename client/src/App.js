import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import ByName from "./Components/Pokemon/byName";
import byId from "./Components/Pokemon/byId";
import Create from "./Components/Create";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/pokemon" component={NavBar} />
      <Route exact path="/pokemon" component={Home} />
      <Route exact path="/pokemon/:id" component={byId} />
      <Route exact path="/pokemon/search/:name" component={ByName} />
      <Route exact path="/pokemon/create/newPokemon" component={Create} />
    </div>
  );
}

export default App;
