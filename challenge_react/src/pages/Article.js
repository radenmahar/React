import React from "react";
import Header from "../components/HeaderNews";
import List from "../components/ListArticle";
import Toparticle from "../components/TopArticle";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../initial/Initial";

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = () => {
    this.props.setLogin(false);
    console.log("ini login", this.props.is_login);
    this.props.history.push("/");
  };

  handleChange = event => {
    event.preventDefault();
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          event.target.value +
          "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        this.props.setValue(response.data.articles);
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  componentDidMount = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.props.endpoint +
          "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        this.props.setValue(response.data.articles);
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.endpoint !== this.props.endpoint) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.endpoint +
            "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
        )
        .then(response => {
          this.props.setValue(response.data.articles);
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log("terdapat eror ini :", error);
        });
    }
  };

  render() {
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/masuk" }} />;
    } else {
      console.log(this.props.keyword);
      return (
        <div>
          <Header
            handle={this.handleChange}
            handleSignOut={this.handleSignOut}
          />
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
  }
}

export default connect(
  "email, name, is_login, values, keyword",
  actions
)(News);

// data={this.props.values}
// data={this.props.values}
