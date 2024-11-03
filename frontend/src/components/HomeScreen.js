import React from "react";
import Button from "./Button";
import "../styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-screen">
      <h1>🕹️ Welcome to the Arcade App! 🕹️</h1>
      <Button text="Start Game" />
      <Button text="Options" />
      <Button text="Leaderboard" />
    </div>
  );
}

export default HomeScreen;
