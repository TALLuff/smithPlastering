import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div id="body">
      <div id="imageContainer">
        <img
          id="mainImg"
          alt="background"
          src={require("./images/highqualitybg.jpg")}
        ></img>
        <div id="imageTitle">
          <div id="imageCompany">
            <img
              id="logo"
              alt="trowelLogo"
              src={require("./images/trowel.png")}
            ></img>
            <h1>
              <span id="smith">Smith</span>
              <span id="plastering">Plastering</span>
            </h1>
          </div>
          <h3 id="tagline">All your Greater Manchester Plastering Needs</h3>
        </div>
      </div>
      <div id="main">
        <div id="about">
          <div className="whiteBoxDesc">
            <h3>About me:</h3>
            <p id="description">
              Hi, I am a fully qualified level NVQ2 plasterer.
              <br />I have been plastering for over ten years now and have
              perfected my craft.
              <br />I am extremely clean, punctual and reliable and leave an
              excellent finish!
              <br />
              Every customer I have had has always been pleased with the results
              so please take the time to read a few of the testimonials at the
              end!
              <br />I pride myself on a quality service at a very competitive
              price.
              <br />I carry all the work out myself and guarantee it is to a
              very high standard - pay is on completion assuming you are happy
              with the job Which I can assure you will be!
              <br />
              Please have a look at examples of my work and contact me for a
              free no obligation no pressure consultation and quote!
              <br />
              <br />
              Many thanks,
              <br />
              Mike Smith
            </p>
          </div>
          <div id="contact" className="blueBox">
            <div>Email: emmesse1@hotmail.co.uk</div>
            <div>Phone: 07960971975</div>
          </div>
        </div>
        <ul id="jobs">
          <Fade right>
            <li>
              <span>Full House Plastering</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Extensions</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Alterations</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Dry Wall</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Damp Proofing</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Float and Skim</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Patch Work / Repairs</span>
              <span className="tick">✓</span>
            </li>
            <li>
              <span>Rendering</span>
              <span className="tick">✓</span>
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
}

export default About;
