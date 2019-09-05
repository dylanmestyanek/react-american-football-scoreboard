import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeTeamPoints, setHomeTeamPoints] = useState(0); 
  const [awayTeamPoints, setAwayTeamPoints] = useState(0); 

  const awayTouchDown = () => {
    setAwayTeamPoints(awayTeamPoints + 7);
  }

  const homeTouchDown = () => {
    setHomeTeamPoints(homeTeamPoints + 7);
  }

  const awayFieldGoal = () => {
    setAwayTeamPoints(awayTeamPoints + 3);
  }

  const homeFieldGoal = () => {
    setHomeTeamPoints(homeTeamPoints + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeTeamPoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeamPoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
