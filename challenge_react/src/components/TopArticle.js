import React from "react";
import Chelsea from "../img/Chelsea.png";

class Toparticle extends React.Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <img src={Chelsea} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Kemenangan atas Chelsea, Hadiah bagi United yang Berani Ambil
              Risiko
            </h5>
            <p className="card-text">
              Menang 4-0 atas Chelsea, seperti itulah cara Manchester United
              mengawali Premier League 2019/20.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 days ago</small>
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <button type="button" className="btn btn-outline-primary">
                    Like <i className="icon-heart-empty" />
                  </button>
                </div>
                <div className="col-md-4 text-center">
                  <button type="button" className="btn btn-outline-primary">
                    Comment <i className="icon-comments-alt" />
                  </button>
                </div>
                <div className="col-md-4 text-right">
                  <button type="button" className="btn btn-outline-primary">
                    Share <i className="icon-share" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toparticle;
