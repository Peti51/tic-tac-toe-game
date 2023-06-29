// Ez a modul felelős az animált oldal és visszagyűrűző nyíl komponensek megjelenítéséért.
// A komponensek az Framer Motion könyvtárra épülnek.
import React from "react";
import { motion } from 'framer-motion';

// Animáció definíció
const animation = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
}

export const AnimatedPage = ({ children }) => {
    return (
        <motion.div 
            variants={animation} 
            initial='initial'
            animate='animate'
            exit='exit'>
            {children}
        </motion.div>
    )
}

export const AnimateBackArrow = ({ children }) => {
    return (
        <motion.div 
            className="back-arrow-container"
            variants={animation} 
            initial='initial'
            animate='animate'
            exit='exit'>
            {children}
        </motion.div>
    )
}

// A modul két komponenst exportál: `AnimatedPage` és `AnimateBackArrow`. 
// Mindkét komponens az Framer Motion könyvtárra épül, és animációt alkalmaz a child elemekre.
// A komponensek az `animation` objectet használják az animáció leírásához, 
// melyben meghatározható az elemek kezdeti állapota (`initial`),
// az animáció (`animate`), valamint az elemek távozási állapota (`exit`).
// A dokumentáció az `@module`, `@param`, `@returns` 
// és az `@example` JSDoc tagok segítségével ad információt a modul,
// komponensek, propertik és visszatérési értékek jellemzőiről. 
// A dokumentációban hangsúlyt kell fektetni a komponens funkciójára, 
// a propertikra vonatkozó információkra, valamint a komponens JSX elemének leírására.