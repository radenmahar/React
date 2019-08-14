import React from "react";
import Header from "../components/HeaderNews";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  console.log("is_login", is_login);

  if (is_login === null) {
    return <Redirect to={{ pathname: "/masuk" }} />;
  } else {
    return (
      <div>
        <div class="container">
          <div class="row mt-4 justify-content-center">
            <div class="col-md-8 text-center">
              <img
                src="https://i1.sndcdn.com/avatars-000015898945-qu471d-t500x500.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="row mt-4 justify-content-center">
            <div class="col-md-8 text-center">
              <h3>Name : {name}</h3>
              <h3>Email : {email}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
//
{
  /* <p className="card-text">name : {name}</p>

<p className="card-text">Email : {email}</p> */
}
