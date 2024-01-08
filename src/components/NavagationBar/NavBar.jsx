import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navContainer">
        <h1 className="navTitle">League of Legends</h1>
        <ul className="navTabs">
          <li>Home</li>
          <li>Champions</li>
          <li>Status</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
