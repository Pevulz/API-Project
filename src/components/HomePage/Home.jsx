import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <input
          className="search"
          type="text"
          name="ign"
          placeholder="Summoner's Name"
        ></input>
        <button>Search</button>
      </div>
    </>
  );
}

export default Home;
