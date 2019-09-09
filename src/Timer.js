import React, { useState, useEffect } from "react";

function Timer(){
    let [quarterTime, setQuarterTime] = useState(3);
    let [quarterSeconds, setQuarterSeconds] = useState(0);
    let [quarterMinutes, setQuarterMinutes] = useState(15);
    let [timerActive, setTimerActive] = useState(false);
    
    useEffect(() =>{
        let gameTime;
        let timer = document.querySelector('.timer');

        if (timerActive){
            timer.style.color = 'red';
            gameTime = setInterval(() => {
                const minutes = Math.floor(quarterTime / 60);
                const seconds = quarterTime % 60;
                setQuarterTime(quarterTime -= 1);
                setQuarterMinutes(quarterMinutes = minutes);
                setQuarterSeconds(quarterSeconds = seconds);
            }, 1000);
            
            if (quarterTime < 0){
                clearInterval(gameTime);
            }
        } 
        return () => {
            timer.style.color = 'white';
            clearInterval(gameTime);
        }
    }, [timerActive, quarterTime]);
    

    const resetTimer = () => {
        setQuarterTime(900);
        setQuarterMinutes(15);
        setQuarterSeconds(0);
        setTimerActive(false);
    }

    const toggleTimer = () => {
        setTimerActive(!timerActive);
    }

    return (
        <div>
            <div className="timer">{quarterMinutes < 10 ? 0 : ''}{quarterMinutes}:{quarterSeconds < 10 ? 0 : ''}{quarterSeconds}</div>
            <button className="quarterButton" onClick={() => setTimerActive(true)}>Start Game</button>
            <button className="quarterButton" onClick={resetTimer}>Reset Timer</button>
            <button className="quarterButton" onClick={toggleTimer}>Pause Timer</button>
        </div>
    );
}

export default Timer;