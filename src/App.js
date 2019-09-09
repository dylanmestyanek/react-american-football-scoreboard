import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeTeamPoints, setHomeTeamPoints] = useState(0); 
  const [awayTeamPoints, setAwayTeamPoints] = useState(0);
  const [gameQuarter, setGameQuarter] = useState(1); 
  let [quarterTime, setQuarterTime] = useState(900);
  let [quarterSeconds, setQuarterSeconds] = useState(0);
  let [quarterMinutes, setQuarterMinutes] = useState(15)
  let gameTime;

  const changeQuarter = () => {
    setGameQuarter(gameQuarter < 4 ? gameQuarter + 1 : gameQuarter - 3);
  }

  const quarterCountDown = () => {
    clearInterval(gameTime);
    gameTime = setInterval(() => {
      const minutes = Math.floor(quarterTime / 60);
      const seconds = quarterTime % 60;
      setQuarterTime(quarterTime -= 1);
      setQuarterMinutes(quarterMinutes = minutes);
      setQuarterSeconds(quarterSeconds = seconds);
    }, 1000);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeTeamPoints}</div>
          </div>
          <div className="timer">{quarterMinutes}:{quarterSeconds < 10 ? 0 : ''}{quarterSeconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeamPoints}</div>
          </div>
        </div>
        <BottomRow quarter = {gameQuarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeTeamPoints(homeTeamPoints + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeTeamPoints(homeTeamPoints + 3)}>Home Field Goal</button>
        </div>
        <button className="quarterButton" onClick={changeQuarter}>Change Quarter</button>
        <button className="quarterButton" onClick={quarterCountDown}>Start Game</button>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayTeamPoints(awayTeamPoints + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayTeamPoints(awayTeamPoints + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
