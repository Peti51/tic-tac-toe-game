import React from "react";
import '../style/PopUp.css'
import myImage from '../images/cross-round-svgrepo-com.svg';

// Exporting the GameOver component to be used in other files.
// The component is passed several props,
// such as resetBoard, winnerPlayer, setIsGameOver, firstPlayer, secondPlayer.
export const GameOver = ({
  resetBoard,
  winnerPlayer,
  setIsGameOver,
  firstPlayer,
  secondPlayer,
}) => {
  // Extracting the name and symbol values of the first player from the firstPlayer object
  // to use them later.
  const { name, symbol } = firstPlayer;
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-closebutton-container">
          <button
            className="popup-close-button"
            onClick={() => setIsGameOver(false)}
          >
            <img
              src={myImage}
              alt="cross"
              className="popup-close-button-image"
            />
          </button>
          {/* A button element representing the close button.
              The onClick event handler calls the setIsGameOver
              function with the parameter false when the button
              is clicked. */}
        </div>
        <h2 className="popup-title-text">Game Over!</h2>
        {/* A p element containing the text of the winning player.
            Depending on the winnerPlayer value, it displays the 
            name of the winning player or the text "Its a draw!". */}
        <p className="popup-winner-text">
          {winnerPlayer !== "draw" && (
            ` ${winnerPlayer === symbol ? name : secondPlayer.name} won!`
          )}
  
          {winnerPlayer === "draw" && "Its a draw!"}
        </p>
        {/* A button element representing the "Reset" labeled button.
            The onClick event handler calls the resetBoard function
            when the button is clicked. */}
        <button onClick={resetBoard} className="close-button">
          Reset
        </button>
      </div>
    </div>
  );  
}

// This GameOver component displays a popup window when the game is over.
// The name of the winning player or the text "It's a draw!" appears in the popup window,
// and there is a "Reset" button to restart the board.