import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "../components/HeaderNews";
import News from "../pages/ListNews";
import Category from "../pages/Category";

const MainRoutes = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/:source_name" component={Category} />
      </Switch>
    </Router>
  );
};

export default MainRoutes;
