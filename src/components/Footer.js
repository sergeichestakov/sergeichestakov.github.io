import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="mailto:sergei332@gmail.com"
                className="fa fa-envelope-o fa-lg"
              ></a>
            </li>
            <li>
              <a
                href="https://github.com/sergeichestakov"
                className="fab fa-github fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sergeichestakov/"
                className="fab fa-linkedin-in fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/sergeichestakov"
                className="fab fa-twitter fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/sergei332"
                className="fab fa-spotify fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
