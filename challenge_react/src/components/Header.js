import React from "react";
import header_logo from "../img/logo-ALTA@2x.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/style.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container toppage">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="header-logo">
                  <a className="logo-navigasi pull-left" href="#">
                    <img src={header_logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-8 topnav" id="myTopnav">
                <div className="text-right wordtopright">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li className="pageSekarang">
                      <Link to="/About">ABOUT</Link>
                    </li>
                    <Link to="#">
                      <li>EXPERIENCE</li>
                    </Link>
                    <Link to="/Contact">
                      <li>CONTACT</li>
                    </Link>
                    <Link to="#" className="icon" onclick="myFunction()">
                      <i className="fa fa-bars" />
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
