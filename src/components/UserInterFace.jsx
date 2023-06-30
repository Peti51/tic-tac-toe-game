import React from "react";
import { ScoreBoard } from './ScoreBoard';

// Using the ScoreBoard component to display the scoreboard.
// We pass the values of scores, xPlaying, firstPlayer, and secondPlayer
// from the UserInterface component's props to the ScoreBoard component.
export const UserInterFace = ({
  scores,
  xPlaying,
  resetBoard,
  firstPlayer,
  secondPlayer
}) => {
    return (
        <div className='userinterface'>
            {/* Using the ScoreBoard component to display the scoreboard.
                We pass the values of scores, xPlaying, firstPlayer, and secondPlayer
                from the UserInterface component's props to the ScoreBoard component. */}
            <ScoreBoard 
              scores={scores} 
              xPlaying={xPlaying}
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
            />
            {/* The "Reset" button is displayed as a <button> element.
                The button has a className attribute set to "submit-button".
                We assign the onClick event that triggers the resetBoard function on click. */}
            <button
              className='submit-button'
              onClick={resetBoard}
            >
              Reset
            </button>
        </div>
    )
}

// The UserInterface component displays the scoreboard and the "Reset" button.
// It receives the necessary data and functions from the parent component
// through the scores, xPlaying, firstPlayer, and secondPlayer props.
// Clicking on the "Reset" button triggers the onClick event, 
// which calls the resetBoard function.