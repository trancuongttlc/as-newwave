import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ProductsList from "./components/ProductsList";
import OrdersList from "./components/OrdersList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/orders" className="navbar-brand">
          ASSIGNMENT
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/products"} className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/orders"} className="nav-link">
              Orders
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/products"]} component={ProductsList} />
          <Route path="/orders" component={OrdersList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
