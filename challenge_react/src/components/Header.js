import React from "react";
import header_logo from "../img/logo-ALTA@2x.png";
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
                    <a href="#">
                      <li>HOME</li>
                    </a>
                    <a href="#">
                      <li className="pageSekarang">ABOUT</li>
                    </a>
                    <a href="#">
                      <li>EXPERIENCE</li>
                    </a>
                    <a href="#">
                      <li>CONTACT</li>
                    </a>
                    <a href="#" className="icon" onclick="myFunction()">
                      <i className="fa fa-bars" />
                    </a>
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
