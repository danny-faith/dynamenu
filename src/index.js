import React from 'react';
// import { render } from 'react-dom';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './components/About';
import Restaurant from './components/Restaurant';
import './css/styles.css';

ReactDom.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Restaurant</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Restaurant} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  , document.getElementById('root'));
