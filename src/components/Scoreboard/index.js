import React from "react";
import "./style.css";

function Scoreboard(props) {
    return <div className="scoreBoardContainer">
        <h1>Click on an image to earn points, but don't click on any more than once!</h1>
        <p className="yourScore">Your Score: </p>
        <p className="highScore">High Score: </p>
    </div>
}

export default Scoreboard;
