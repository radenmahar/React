import React from "react";
import imglogo from "../img/logo-ALTA-v2.png";
import "../styles/style.css";

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="background-image">
              <div className="box-color">
                <div className="logo">
                  <img src={imglogo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact">
              <h3>Contact Us</h3>
              <br />
              <form action="" method="post">
                <div>
                  <label for="fullname">
                    Full Name<span className="asterisk">*</span>
                  </label>
                  <br />
                  <input
                    className="form-layout"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label for="email">
                    Email Address<span class="asterisk">*</span>
                  </label>
                  <br />
                  <input
                    className="form-layout"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@domail.com"
                    required
                  />
                </div>
                <div>
                  <label for="phone">
                    Phone Number<span className="asterisk">*</span>
                  </label>
                  <br />
                  <input
                    className="form-layout"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="08543890****"
                    required
                  />
                </div>
                <div>
                  <label for="nationality">Nationality</label>
                  <br />
                  <select
                    className="nationality-layout"
                    name="nationality"
                    id="nationality"
                  >
                    <option>Selected ...</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Singaporean">Singaporean</option>
                    <option value="Malaysian">Malaysian</option>
                    <option value="Australian">Australian</option>
                  </select>
                </div>
                <div>
                  <label for="message">Message</label>
                  <br />
                  <input
                    className="message-layout"
                    type="text"
                    name="message"
                    id="message"
                  />
                  <br />
                </div>
                <div>
                  <button type="button" className="btn btn-submit btn-rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
