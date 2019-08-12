import React from "react";
import "../styles/style.css";
import img_dot from "../img/img-dot.png";
import mattew from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row aboutme align-items-center">
            <div className="container">
              <div className="background2">
                <h2>ABOUT ME.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row SettingRow3">
            <div className="col-md-7">
              <div className="content-paragraph">
                <p>
                  Hello! I’m Anne Sullivan, a full-stack engineer based in
                  Malang, IDN who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that
                  provide intuitive, pixel-perfect user interfaces with
                  efficient and modern backends.
                </p>
                <p>
                  Shortly after graduating from Alterra Academy, I joined the
                  engineering team at Alterra where I work on a wide variety of
                  interesting and meaningful projects on a daily basis.
                </p>
                <p>Here’s few technologies I’ve been working with recently :</p>
              </div>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>HTML & CSS</td>
                    <td>Serverless</td>
                    <td>Scrum</td>
                  </tr>
                  <tr>
                    <td>Programming</td>
                    <td>Restful API</td>
                    <td>Test-Driven Dev</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>Javascript</td>
                    <td>Software Testing</td>
                  </tr>
                  <tr>
                    <td>Git & Github</td>
                    <td>Single Page App</td>
                    <td>UI/UX Designer</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-5">
              <div className="imagePicture">
                <img
                  src={img_dot}
                  className="img-fluid image1"
                  alt="Responsive image"
                />
                <img
                  src={mattew}
                  className="img-fluid image2"
                  alt="Responsive image"
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
