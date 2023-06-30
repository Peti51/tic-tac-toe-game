import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatedPage } from "./AnimatedPage";
import '../style/Transition.css'
import '../style/MainMenu.css'

// Exporting the MainMenu component to be used in other files.
// The component represents a main menu.
export const MainMenu = () => {
  // Using the useState hook to create an animate state
  // and its state updater function (setAnimate). The default value is true.
  const [animate, setAnimate] = useState(true);

  // Using the useEffect hook to handle the component lifecycle.
  // The empty dependency array ([]) indicates that the side effect
  // is only executed when the component mounts.
  // The hook sets the value of the animate state to true.
  useEffect(() => {
    setAnimate(true);
  }, []);

  // The return value of the component is JSX code wrapped in the AnimatedPage component,
  // which contains the main menu elements.

  // The menu elements are placed inside a div with the class "menu-box".
  // The menu items are represented using the NavLink component,
  // which is assigned to routes (to attribute) and displayed text.
  // The first menu item points to the "/menu/board" route
  // and receives the "fade-enter-active" CSS class if the animate state is true.
  // The second menu item points to the "/menu/settings" route.
  // The third menu item points to the homepage ("/"), symbolizing the logout.
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

// The MainMenu component displays a main menu that contains various menu items
// that the user can navigate between.
// Using the animate state, animations are added to the menu items.
