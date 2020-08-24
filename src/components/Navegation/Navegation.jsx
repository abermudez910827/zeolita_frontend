import React, { useState } from "react";

const nav = React.memo((props) => {
  const inputState = useState({ collapsedNav: false });

  const classToggle = ["collapse", "navbar-collapse"];
  if (inputState[0].collapsedNav) {
    classToggle.push("show");
  }

  return (
    <header role="banner">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="index.html">
            Industrial
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={(event) => {
              inputState[1]({ collapsedNav: !inputState[0].collapsedNav });
            }}
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classToggle.join(" ")}>
            <ul className="navbar-nav pl-md-5 ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects.html">
                  Projects
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="services.html"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="services.html">
                    Architectural Design
                  </a>
                  <a className="dropdown-item" href="services.html">
                    Interior
                  </a>
                  <a className="dropdown-item" href="services.html">
                    Building
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <div className="navbar-nav ml-auto"></div>
          </div>
        </div>
      </nav>
    </header>
  );
});

export default nav;
