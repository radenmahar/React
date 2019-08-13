import React from "react";
import Chelsea from "../img/Chelsea.png";
import axios from "axios";

class Toparticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  description() {
    let temp = this.props.data.map((value, index) => {
      if (index === 0) {
        var description = "";
        let b = 50;
        while (true) {
          if (value.description.slice(0, b) === "") {
            b++;
          } else {
            description += value.description.slice(0, b);
            break;
          }
        }
        return description;
      }
    });
    return temp;
  }

  render() {
    return (
      <div>
        {this.props.data.map((value, index) => {
          if (index === 0) {
            return (
              <div className="card mb-3" key={index}>
                <img
                  src={value.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={value.url}>{value.title}</a>
                  </h5>
                  <p className="card-text">{this.description()}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {value.publishedAt.slice(0, 10)}
                    </small>
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Like <i className="icon-heart-empty" />
                        </button>
                      </div>
                      <div className="col-md-4 text-center">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Comment <i className="icon-comments-alt" />
                        </button>
                      </div>
                      <div className="col-md-4 text-right">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Share <i className="icon-share" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Toparticle;
