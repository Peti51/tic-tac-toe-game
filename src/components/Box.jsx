import React from "react";
import '../style/Box.css';

// Exporting the Box component to be used in other files.
// The component is passed several props,
// such as value, handleSelection, isCantMoveAgain, firstPlayer, secondPlayer.
export const Box = ({ 
  value,
  handleSelection,
  isCantMoveAgain,
  firstPlayer,
  secondPlayer,
}) => {
  const { symbol, color } = firstPlayer;
  // Extracting the symbol and color values of the first player from the firstPlayer object
  // to use them later.
  const style = value === symbol ? 'box x' : 'box o';
  // Determine the style of the current box.
  // If the value matches the symbol of the first player (symbol),
  // the style will be 'box x', otherwise 'box o'.

  return (
    // A button element that displays the game box.
    // The className prop sets the style based on the style variable.
    // The onClick event handler invokes the handleSelection function when the box is clicked.
    // The disabled prop determines whether the box is clickable or not.
    // The color property in the style object sets the text color
    // based on whether the value matches the symbol of the first player or not.
    <button 
      className={style} 
      onClick={handleSelection}
      disabled={isCantMoveAgain}
      style={{
        color: value === symbol ? color : secondPlayer.color
      }}
    > 
      {value}
    </button>
  )
}

// A Box komponens a játéktábla egy mezőjét reprezentálja. 
// A mező stílusa és a szövegszíne az aktuális értéktől 
// (value) és az első játékos (firstPlayer) szimbólumától és színétől függ. 
// A handleSelection függvény meghívása az onClick eseménykezelőn keresztül történik,
//  és a isCantMoveAgain prop alapján állítja be a mező kattinthatóságát.