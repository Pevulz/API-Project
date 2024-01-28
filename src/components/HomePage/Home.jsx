import React from "react";
import "./Home.css";
import { useState } from "react";
import axios from "axios";
import { DataDragon } from "data-dragon";

function Home() {
  const [summonerName, setSummonerName] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-dbb95b01-ee87-4a55-ace4-22f6f4f9d7c4";
  const dragon = new DataDragon("14.2.1");

  console.log(dragon.champions);

  function searchPlayer(e) {
    e.preventDefault();
    //Set up correct API call
    let APILink = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
    const uri = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${API_KEY}`;

    //Handle the API call

    fetch(APILink).then((response) =>
      response
        .json()
        .then((data) => setPlayerData(data))
        .catch((error) => console.error(error))
    );
    console.log(playerData);

    /*
    axios
      .get(APILink)
      .then(function (response) {
        console.log(response.data);
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  }

  return (
    <>
      <div className="homeContainer">
        <div className="logo">
          <img src="https://meta-static.op.gg/logo/image/232b567b4256a6667c5161fe8949a5e8.png?image=q_auto,f_webp,w_auto,h_448&amp;v=1705466001567"></img>
        </div>
        <form className="search" onSubmit={searchPlayer}>
          <input
            onChange={(e) => setSummonerName(e.target.value)}
            type="text"
            name="playerName"
            placeholder={`Player's Name`}
          ></input>
          <button type="submit">Search</button>
        </form>

        <div className="dataDisplay">
          {JSON.stringify(playerData) != "{}" ? (
            <>
              <p>{playerData.name}</p>
              <p>{playerData.summonerLevel}</p>
            </>
          ) : (
            <p>Nothing Here</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
