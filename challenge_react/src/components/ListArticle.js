import React from "react";
import axios from "axios";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-13&sortBy=publishedAt&apiKey=a6d1d3afdea84c939e029a436a696b0a"
      )
      .then(response => {
        this.setState({ data: response.data.articles });
        console.log(response);
        console.log(this.state.data);
      })
      .catch(error => {
        console.log("terdapat eror ini :", error);
      });
  };

  render() {
    return (
      <div>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 text-primary">
                <strong>BERITA TERKINI</strong>
              </h6>
              <small className="text-primary">Lihat Semua</small>
            </div>
          </a>
          {this.state.data.map((value, index) => {
            if (index < 4) {
              return (
                <a
                  href={value.url}
                  className="list-group-item list-group-item-action"
                  key={index}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 text-danger">#{index + 1}</h6>
                    <small className="text-muted">
                      {value.publishedAt.slice(0, 10)}
                    </small>
                  </div>
                  <p className="mb-1">
                    <strong>{value.title}</strong>
                  </p>
                </a>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default List;
