import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Camps from "./pages/Camps";
import Login from "./pages/Login";
import NewCamp from "./pages/NewCamp";
import NavbarComp from "./comps/NavbarComp";
import Details from "./pages/Details";
import { useSelector } from "react-redux";
import { State } from "./store/state.model";

function App() {
  const isLoggedin = useSelector((state: State) => state.isLoggedin);

  return (
    <div className="App">
      <Switch>
        <Route path="/campgrounds" exact>
          <Home />
        </Route>
        <NavbarComp />
      </Switch>
      <Switch>
        <Route path="/campgrounds/campgrounds" exact>
          <Camps />
        </Route>
        <Route path="/campgrounds/details/:camp" exact>
          <Details />
        </Route>
        <Route path="/campgrounds/newcamp">
          {isLoggedin && <NewCamp />}
          {!isLoggedin && <Redirect to="/campgrounds/login" />}
        </Route>
        <Route path="/campgrounds/login">
          <Login />
        </Route>
        <Route path="/campgrounds/*">
          <Redirect to="/campgrounds" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
