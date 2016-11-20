import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory,browserHistory } from "react-router";


import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Home}></IndexRoute>
      <Route path="blog" name="blog" component={Blog}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
     
    </Route>
  </Router>,
app);
