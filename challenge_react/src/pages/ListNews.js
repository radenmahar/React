import React from "react";
import Header from "../components/HeaderNews";
import List from "../components/ListArticle";
import Toparticle from "../components/TopArticle";

function News() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <List />
          </div>
          <div className="col-md-9">
            <Toparticle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
