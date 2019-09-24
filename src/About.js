import React from "react";

function About() {
  return (
    <div id="main">
      <div id="about">
        <div className="whiteBoxDesc">
          <h3>Reliable:</h3>
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Quality:</h3>
          <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id="contact" className="blueBox">
          <div>Email: test@gmail.com</div>
          <div>Phone: 101010101010</div>
          <div>Facebook: smithPlastering</div>
        </div>
      </div>
      <div id="reviewsAndGuy">
        <div className="guyPictures">
          <img
            alt="face"
            id="plasteringGuy"
            src={require("./images/guy.jpg")}
          ></img>
          <img
            alt="face"
            id="plasteringGuy"
            src={require("./images/guy2.jpg")}
          ></img>
        </div>
        <div className="review">
          <img
            alt="stars"
            id="stars"
            src={require("./images/5stars.jpg")}
          ></img>
          <div>
            <div>-Chris P. Bacon</div>
            <span>"Such precise plastering and friendly customer service"</span>
          </div>
        </div>
        <div className="review">
          <img
            alt="stars"
            id="stars"
            src={require("./images/5stars.jpg")}
          ></img>
          <div>
            <div>-Jesus Doode</div>
            <span>
              "Beep boop good plastering wow what good work and look at how cool
              these walls are"
            </span>
          </div>
        </div>
        <div className="review">
          <img
            alt="stars"
            id="stars"
            src={require("./images/5stars.jpg")}
          ></img>
          <div>
            <div>-Hugh Mungus</div>
            <span>
              "Excellent plastering, can definitely recommend to a friend"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
