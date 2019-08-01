import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
