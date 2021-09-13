import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/camps' exact></Route>
      <Route path='/camps/newcamp' ></Route>
      <Route path='/camps/login' ></Route>
      <Route path='/camps/*'>
        <Redirect to='/camps' />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
