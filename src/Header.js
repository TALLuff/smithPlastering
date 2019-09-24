import React from "react";

function Header() {
  return (
    <div id="header">
      <span id="headerCont">
        <img
          id="logo"
          alt="trowelLogo"
          src={require("./images/trowel.png")}
        ></img>
        <h1>
          <span id="smith">Smith</span>
          <span id="plastering">Plastering</span>
        </h1>
      </span>
      <h2 id="tagline">Get your quote today!</h2>
    </div>
  );
}

export default Header;
