import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {" "}
        {/*bg-body-tertiary*/}
        <div className="container-fluid">
          <Link className="navbar-brand" to=".">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/form">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.AboutText}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.Dropdown}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      {props.Action}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      {props.AnotherAction}
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      {props.SomethingElseHere}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  {props.Disabled}
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-1" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-1" type="submit">
                Search
              </button>
            </form>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light"
                  ? "Enable DarkMode"
                  : "Enable LightMode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  Dropdown: PropTypes.string,
  Action: PropTypes.string.isRequired,
  AnotherAction: PropTypes.string,
  SomethingElseHere: PropTypes.string,
  Disabled: PropTypes.bool.isRequired,
};

Navbar.defaultPrpos = {
  title: "TitleHere",
  AboutText: "About",
  // Disabled: false
};
