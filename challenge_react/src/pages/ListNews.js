import React from "react";
import Header from "../components/HeaderNews";
import List from "../components/ListArticle";
import Toparticle from "../components/TopArticle";
import axios from "axios";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      value: []
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ keyword: event.target.value }, () => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" +
            this.state.keyword +
            "&from=2019-07-13&sortBy=publishedAt&apiKey=3b2f07d9271042bdae12b91298a27218"
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
          "&from=2019-07-13&sortBy=publishedAt&apiKey=3b2f07d9271042bdae12b91298a27218"
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
            "&from=2019-07-13&sortBy=publishedAt&apiKey=3b2f07d9271042bdae12b91298a27218"
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
    console.log(this.state.keyword);
    return (
      <div>
        <Header handle={this.handleChange} />
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

export default News;
