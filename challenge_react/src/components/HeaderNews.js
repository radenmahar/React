import React from "react";
import news_logo from "../img/logo-ALTA@2x.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-md-2">
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                <img
                  src={news_logo}
                  width="80"
                  height="40"
                  className="d-inline-block align-top"
                  alt=""
                />
                Berita
              </a>
            </nav>
          </div>
          <div className="col-md-4 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Beranda <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/economi"
                      className="nav-link"
                      // onClick={props.click}
                    >
                      Ekonomi
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/olahraga"
                      className="nav-link"
                      // onClick={props.value}
                    >
                      Olahraga
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/hukum"
                      className="nav-link"
                      // onClick={props.value}
                    >
                      Hukum
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Lainnya
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link to="/budaya" className="dropdown-item">
                        Budaya
                      </Link>
                      <Link to="/sosial" className="dropdown-item">
                        Sosial
                      </Link>
                      <Link to="/gayahidup" className="dropdown-item">
                        Gaya Hidup
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-4 mt-2">
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Berita"
                  aria-label="Search"
                  onChange={props.handle}
                />
                <button
                  className="button btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
          <div className="col-md-2 mt-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Masuk <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Daftar
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
