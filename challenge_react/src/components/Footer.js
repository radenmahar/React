import React from "react";
import "../styles/style.css";
import fb from "../img/ic_fb.png";
import twitter from "../img/ic-twitter.png";
import instagram from "../img/ic-instagram.png";
import linkedin from "../img/ic-linkedin.png";
import logo_alta from "../img/logo-ALTA-v2.png";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container-fluid alterrabawah">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="AlterraBawah">
                  <img src={logo_alta} alt="..." class="Responsive image" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="vl">
                  <div class="socialmedia">
                    <p>Social Media</p>
                    <img src={fb} alt="..." className="Responsive image" />
                    <img src={twitter} alt="..." className="Responsive image" />
                    <img
                      src={instagram}
                      alt="..."
                      className="Responsive image"
                    />
                    <img
                      src={linkedin}
                      alt="..."
                      className="Responsive image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="verticaLine">
                  <div className="copyright">Copyright @ 2019 Alterra</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
