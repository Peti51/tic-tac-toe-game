import React from "react";
import '../style/Box.css';

// A Box komponens exportálása, hogy más fájlokban is használható legyen. 
// A komponensnek számos propot adunk át, 
// mint például a value, handleSelection, isCantMoveAgain, firstPlayer, secondPlayer.
export const Box = ({ 
    value,
    handleSelection,
    isCantMoveAgain,
    firstPlayer,
    secondPlayer,
}) => {
    const { symbol, color } = firstPlayer;
    // Az első játékos symbol és color értékeit kiszedjük a firstPlayer objektumból,
    //  hogy később felhasználhassuk.
    const style = value === symbol ? 'box x' : 'box o';
    // Az aktuális mező stílusát határozzuk meg. 
    // Ha az érték megegyezik az első játékos szimbólumával (symbol),
    // akkor a stílus "box x" lesz, különben "box o".
    return (
        // Egy button elem, amely megjeleníti a játékmezőt. 
        // A className prop segítségével a stílusát állítjuk be a style változó alapján. 
        // Az onClick eseménykezelő a handleSelection függvényt hívja meg, amikor a mezőre kattintanak.
        // A disabled prop alapján pedig beállítjuk, hogy a mező kattintható-e vagy sem. 
        // Az style objektumban a color tulajdonság alapján állítjuk be a szöveg színét, 
        // attól függően, hogy az érték megegyezik-e az első játékos szimbólumával vagy sem.
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