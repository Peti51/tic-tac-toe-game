import React from "react";
import '../style/ScoreBoard.css'

export const ScoreBoard = ({
  scores,
  xPlaying,
  firstPlayer,
  secondPlayer,
}) => {
    const {xScore, oScore} = scores;
    const { name, color } = firstPlayer;
    return (
      <>
      {/* The first <div> element contains the name of the current player
          when it is their turn in the game.
          The color of the text is set based on the color variable, which is
          one of the properties of the firstPlayer object.
          The value of the className attribute is "firstplayer-current-player-text",
          and it may optionally include the "fade-in" class. */}
      <div 
        className='firstPlayer-main-container'
      >
        {xPlaying && (
          <div
            style={{ color: color }}
            className={`firstplayer-current-player-text ${xPlaying ? "fade-in" : ""}`}
          >
            <p>
              {name} move
            </p>
          </div> 
        )}   
        <div 
          style={{ color: color }}
          className={`scoreboard ${!xPlaying && 'pluss-margin'}`}
        >
            <span
              style={{ color: color }}
              className="scoreboard-title"
            >
              {name}
            </span>
            <div className="scoreboard-players">
              <span 
                style={{ color: color }}
                className={`score x-score ${!xPlaying && 'inactive'}`}
              >
                  {xScore}
              </span>
            </div>
        </div>
      </div>
      <div className='firstPlayer-main-container'>
        {!xPlaying && (
          <div className={`firstplayer-current-player-text ${!xPlaying ? "fade-in" : ""}`}>
            <p style={{ color: secondPlayer.color }}>
              {secondPlayer.name} move
            </p>
          </div>
        )}
        <div className={`scoreboard ${xPlaying && 'pluss-margin'}`}>
            <span 
              style={{ color: secondPlayer.color }}
              className={`scoreboard-title score ${xPlaying && 'inactive'}`}
            >
              {secondPlayer.name}
            </span>
            <div className="scoreboard-players">
              <span 
                className={`score o-score ${xPlaying && 'inactive'}`}
                style={{ color: secondPlayer.color }}
              >
                {oScore}
              </span>
            </div>
        </div>
      </div> 
      </>
    );
}

// The ScoreBoard component displays the players' scores
// and the name of the next player.
// It sets the styles and classes based on the received data
// to properly represent the current state of the game.
