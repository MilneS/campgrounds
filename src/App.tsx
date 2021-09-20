import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Camps from "./pages/Camps";
import Login from "./pages/Login";
import NewCamp from "./pages/NewCamp";
import NavbarComp from "./comps/NavbarComp";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
            <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <NavbarComp />
      </Switch>
      <Switch>
        <Route path="/campgrounds" exact>
          <Camps />
        </Route>
        <Route path="/details/:camp" exact>
          <Details />
        </Route>
        <Route path="/newcamp">
          <NewCamp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
