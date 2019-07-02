import React from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CompanyIndex from "./components/company/CompanyIndex";
import RewardIndex from "./components/reward/RewardIndex";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/companies"} className="nav-link">
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/rewards"} className="nav-link">
                  Rewards
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/subscribers"} className="nav-link">
                  Subscribers
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <h2>Welcome to Rewards CMS</h2> <br />
        <Switch>
          <Route exact path="/companies" component={CompanyIndex} />
          <Route exact path="/rewards" component={RewardIndex} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
