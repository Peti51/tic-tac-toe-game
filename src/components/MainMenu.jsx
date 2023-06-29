import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import '../style/Transition.css'
import '../style/MainMenu.css'

// A MainMenu komponens exportálása, hogy más fájlokban is használható legyen.
// A komponens egyfajta főmenüt reprezentál.
export const MainMenu = () => {
    // Az useState hook segítségével létrehozunk egy animate állapotot
    // és annak állapotfrissítő függvényét (setAnimate). Az alapértelmezett értéke true.
    const [animate, setAnimate] = useState(true);

    // Az useEffect hook használata a komponens életciklusának kezelésére.
    // Az üres függőséglista ([]) azt jelzi, hogy a mellékhatás csak
    // a komponens mountolásakor hajtódik végre.
    // A hook segítségével a animate állapot értékét true-ra állítjuk.
    useEffect(() => {
        setAnimate(true);
    }, []);

    // A komponens visszatérési értéke az AnimatedPage komponensbe csomagolt JSX kód, amely tartalmazza a főmenü elemeket.

    // A főmenü elemeit egy menu-box nevű div-be helyezzük el.
    // A menüpontokat a NavLink komponenssel reprezentáljuk,
    // amelyeket az útvonalakhoz (to attribútum) és a megjelenített szöveghez rendelünk.
    // Az első menüpont a "/menu/board" útvonalra mutat,
    // és a fade-enter-active CSS osztályt kapja, ha az animate állapot true.
    // A második menüpont a "/menu/settings" útvonalra mutat.
    // A harmadik menüpont a főoldalra ("/") mutat, amely a kijelentkezést szimbolizálja.
    return (
        <AnimatedPage>
            <div className="menu-container">
                <div className="menu-navlink-title-container">
                    <div className="menu-box">
                        <h2 className="menu-title">Main menu</h2>
                        <NavLink 
                            to='/menu/board'
                            className={`menu-navlink ${animate ? "fade-enter-active" : ""}`}
                        >
                            Play
                        </NavLink>
                        <NavLink 
                            to='/menu/settings'
                            className="menu-navlink"
                        >
                            Settings
                        </NavLink>
                        <NavLink 
                            to="/"
                            className="menu-navlink"
                        >
                            Log out
                        </NavLink>
                    </div>
                </div> 
            </div>
        </AnimatedPage>
    )
}

// A MainMenu komponens egy főmenüt jelenít meg, amely tartalmazza a különböző menüpontokat,
// amelyek között a felhasználó navigálhat. 
// Az animate állapotot felhasználva animáció hozzáadása történik a menüpontokhoz.