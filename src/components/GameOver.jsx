import React from "react";
import '../style/PopUp.css'
import myImage from '../images/cross-round-svgrepo-com.svg';

// A GameOver komponens exportálása, hogy más fájlokban is használható legyen. 
// A komponensnek számos propot adunk át, mint például a resetBoard, winnerPlayer,
//  setIsGameOver, firstPlayer, secondPlayer.
export const GameOver = ({
    resetBoard,
    winnerPlayer,
    setIsGameOver,
    firstPlayer,
    secondPlayer,
}) => {
    // Az első játékos name és symbol értékeit kiszedjük a firstPlayer objektumból,
    //  hogy később felhasználhassuk.
    const { name, symbol } = firstPlayer;
    return (
        <div className="popup">
            <div className='popup-inner'>
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
                    {/* Egy button elem, amely a bezárás gombot reprezentálja. 
                    Az onClick eseménykezelő a setIsGameOver függvényt hívja meg a false paraméterrel,
                     amikor a gombra kattintanak. */}
                </div>
                <h2 className="popup-title-text">
                    Game Over!
                </h2>
                {/* Egy p elem, amely a győztes játékos szövegét tartalmazza. 
                    A winnerPlayer értékétől függően megjeleníti a győztes játékos nevét vagy az 
                    "Its a draw!" szöveget. */}
                <p className="popup-winner-text">
                    {winnerPlayer !== 'draw' && (
                       ` ${winnerPlayer === symbol ? name : secondPlayer.name} won!`
                    )}

                    {winnerPlayer === 'draw' && (
                        'Its a draw!'
                    )}
                </p>
                {/* Egy button elem, amely a "Reset" feliratú gombot reprezentálja. 
                    Az onClick eseménykezelő a resetBoard függvényt hívja meg,
                    amikor a gombra kattintanak. */}
                <button onClick={resetBoard} className="close-button">Reset</button>
            </div>
        </div>
    );
}

// Ez a GameOver komponens egy popup ablakot jelenít meg, amikor a játék véget ér. 
// A győztes játékos neve vagy az "Its a draw!" szöveg jelenik meg a popup ablakban,
// és van egy "Reset" gomb a tábla újrakezdéséhez.