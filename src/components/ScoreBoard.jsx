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
      {/* Az első <div> elem tartalmazza az aktuális játékos nevét, 
      amikor ő következik a játékban. 
      A szöveg színe a color változó alapján áll be, amely a firstPlayer
      objektum tulajdonságai közé tartozik. 
      A className attribútumának értéke a "firstplayer-current-player-text",
      és opcionálisan a "fade-in" osztályt is tartalmazhatja. */}
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

// A ScoreBoard komponens jeleníti meg a játékosok pontszámait 
// és a soron következő játékos nevét. 
// A stílusokat és osztályokat a kapott adatok alapján állítja be,
// hogy megfelelően jelenítse meg a játék aktuális állapotát.