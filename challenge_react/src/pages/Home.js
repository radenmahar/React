import React from "react";
import "../styles/style.css";
import Header from "../components/Header";
import Body from "../components/BodyHome";

function Home() {
  return (
    <div className="body">
      <Header />
      <Body />
    </div>
  );
}

export default Home;
