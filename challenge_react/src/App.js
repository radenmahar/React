import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./main_routes/MainRoutes";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;
