import React from "react";
import Picture from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "../styles/style.css";

class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="profil-pic">
                <img src={Picture} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="introduce">
                <h5>Hi, my name is</h5>
                <h1>Anne Sulivan</h1>
                <h3>I build things for the web</h3>
                <br />
                <div>
                  <button
                    type="button"
                    className="button btn btn-get btn-rounded"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
