import React from "react";
import news_logo from "../img/logo-ALTA@2x.png";

class Header extends React.Component {
  render() {
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Beranda <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Ekonomi
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Olahraga
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Hukum
                      </a>
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
                        <a className="dropdown-item" href="#">
                          Budaya
                        </a>
                        <a className="dropdown-item" href="#">
                          Sosial
                        </a>
                        <a className="dropdown-item" href="#">
                          Gaya Hidup
                        </a>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Masuk <span class="sr-only">(current)</span>
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
}

export default Header;
