import React from "react";
import Header from "../components/HeaderNews";
import List from "../components/ListArticle";
import Toparticle from "../components/TopArticle";
import axios from "axios";
import { Redirect } from "react-router-dom";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      value: []
    };
  }

  handleSignOut = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/default");
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ keyword: event.target.value }, () => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.state.keyword +
            "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
        )
        .then(response => {
          this.setState({ value: response.data.articles });
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log("terdapat eror ini :", error);
        });
    });
  };

  componentDidMount = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          this.props.value +
          "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
      )
      .then(response => {
        this.setState({ value: response.data.articles });
        console.log(response);
        // console.log(this.state.data);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.value !== this.props.value) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.props.value +
            "&from=2019-08-14&sortBy=publishedAt&apiKey=1590e425439643439774a03fafdc7f06"
        )
        .then(response => {
          this.setState({ value: response.data.articles });
          console.log(response);
          // console.log(this.state.data);
        })
        .catch(error => {
          console.log("terdapat eror ini :", error);
        });
    }
  };

  render() {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    if (is_login === null) {
      return <Redirect to={{ pathname: "/masuk" }} />;
    } else {
      console.log(this.state.keyword);
      return (
        <div>
          <Header
            handle={this.handleChange}
            handleSignOut={this.handleSignOut}
          />
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-3">
                <List data={this.state.value} />
              </div>
              <div className="col-md-9">
                <Toparticle data={this.state.value} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default News;
