import React from "react";
import { Link } from "react-router-dom";

class Default extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row mt-4 mb-2 justify-content-center">
            <div class="col-md-8 text-center">
              <img
                src="https://res.cloudinary.com/tia-img/image/fetch/t_company_avatar/https%3A%2F%2Fcdn.techinasia.com%2Fdata%2Fimages%2F3alC4cHrPwxaZLcHXaVdtIrdZg1AipfkSizMSAzL.jpeg"
                alt=""
              />
            </div>
          </div>
          <div class="row mt-5 justify-content-center">
            <div class="col-md-8 text-center">
              <Link to="/masuk" class="btn btn-primary" href="#" role="button">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
