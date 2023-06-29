import React from "react";
import { ScoreBoard } from './ScoreBoard';

// Az UserInterface komponens exportálása, hogy más fájlokban is használható legyen.
// Ez a komponens a felhasználói felületet jeleníti meg,
// beleértve a pontszámtáblát és a "Reset" gombot.
export const UserInterFace = ({
  scores,
  xPlaying,
  resetBoard,
  firstPlayer,
  secondPlayer
}) => {
    return (
        <div className='userinterface'>
            {/* Az ScoreBoard komponens használata a pontszámtábla megjelenítéséhez.
                Az UserInterface komponens props-ai közül a scores, xPlaying,
                firstPlayer és secondPlayer értékeit továbbítjuk az ScoreBoard komponensnek. */}
            <ScoreBoard 
              scores={scores} 
              xPlaying={xPlaying}
              firstPlayer={firstPlayer}
              secondPlayer={secondPlayer}
            />
            {/* A "Reset" gombot egy <button> elemként jelenítjük meg.
                A gombnak van egy className attribútuma, amely a "submit-button" értéket kapja.
                A gombhoz hozzárendeljük az onClick eseményt,
                amely a resetBoard függvényt hívja meg a klikkelésre. */}
            <button
              className='submit-button'
              onClick={resetBoard}
            >
              Reset
            </button>
        </div>
    )
}

// Az UserInterface komponens a pontszámtáblát és a "Reset" gombot jeleníti meg.
// A scores, xPlaying, firstPlayer és secondPlayer props-okon keresztül
// kapja meg a szükséges adatokat és funkciókat a szülő komponenstől.
// A "Reset" gombra kattintva az onClick esemény aktiválja a resetBoard függvényt.