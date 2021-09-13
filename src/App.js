import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/newcamp"></Route>
        <Route path="/login"></Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
