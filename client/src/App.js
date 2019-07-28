import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import Pizzas from "./Pizzas";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pizzas!</h1>
        <Switch>
          <Route exact path="/" component={Pizzas} />
          <Route exaxt path="/Login" component={Login}>
            <Link to="/login">Login</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
