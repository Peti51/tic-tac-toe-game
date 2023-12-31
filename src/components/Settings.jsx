import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { AnimatedPage } from "./AnimatedPage";
import '../style/Settings.css'
import myImage from '../images/arrow.png';

// Exporting the Settings component to make it usable in other files.
// This component displays the game settings, allowing modification of player names,
// colors, and symbols.
export const Settings = ({
  setSecondPlayer,
  setFirstPlayer,
  firstPlayer,
  secondPlayer,
  resetBoard,
}) => {
  const [firstPlayerName, setFirstPlayerName] = useState('');
  const [secondPlayerName, setSecondplayerName] = useState('');
  const [firstPlayerColor, setFirstPlayerColor] = useState('');
  const [secondPlayerColor, setSecondPlayerColor] = useState('');
  const [firstPlayerSymbol, setFirstPlayerSymbol] = useState('');
  const [secondPlayerSymbol, setSecondPlayerSymbol] = useState('');
  const colors = [
    { name: 'Blue', hexValue: '#33ccff' },
    { name: 'Red', hexValue: '#ff4d4d' },
    { name: 'Black', hexValue: '#000000' },
    { name: 'Purple', hexValue: '#be2edc' },
    { name: 'Green', hexValue: '#30936b' },
    { name: 'Orange', hexValue: '#ff9933' },
  ];
  const symbols = ['x', '?', '$', '#', '&', '@', 'o'];
    
  const handleFirstPlayerEdit = (event) => {
    event.preventDefault();
  
    if (firstPlayerName !== '') {
      setFirstPlayer(prevObject => ({
        ...prevObject,
        name: firstPlayerName
      }));
  
      setFirstPlayerName('');
      resetBoard();
    }
  
    if (firstPlayerColor !== '') {
      setFirstPlayer(prevObject => ({
        ...prevObject,
        color: firstPlayerColor
      }));
  
      resetBoard();
    }
  
    if (firstPlayerSymbol !== '') {
      setFirstPlayer(prevObject => ({
        ...prevObject,
        symbol: firstPlayerSymbol
      }));
  
      resetBoard();
    }
  };

  const handleSecondPlayerEdit = (event) => {
    event.preventDefault();
  
    if (secondPlayerName !== '') {
      setSecondPlayer(prevObject => ({
        ...prevObject,
        name: secondPlayerName
      }));
  
      setSecondplayerName('');
      resetBoard();
    }
  
    if (secondPlayerColor !== '') {
      setSecondPlayer(prevObject => ({
        ...prevObject,
        color: secondPlayerColor
      }));
  
      resetBoard();
    }
  
    if (secondPlayerSymbol !== '') {
      setSecondPlayer(prevObject => ({
        ...prevObject,
        symbol: secondPlayerSymbol
      }));
  
      resetBoard();
    }
  };

  const resetEverything = () => {

    setSecondPlayer({
      name: 'Second player',
      color: '#ff9933',
      symbol: 'O',
    });
  
    setFirstPlayer({
      name: 'First player',
      color: '#33ccff',
      symbol: 'X',
    });
  
    setFirstPlayerSymbol('');
    setFirstPlayerColor('');
    setSecondPlayerColor('');
    setSecondPlayerSymbol('');
  
    resetBoard();

    alert("Everything has been reseted.");
  };

  return (
    <AnimatedPage>
      <div className="settings">
        <div className="setting-container">
          <div className="setting-smaller-container">
            <div className="back-arrow-container">
              <NavLink to="/menu" className="back-arrow">
                <img src={myImage} alt="arrow" />
              </NavLink>
              <h2 className="setting-title">Settings</h2>
              {/* The resetEverything function is responsible for resetting the settings.
              It resets the states and the game board. */}
              <button className="reset" onClick={resetEverything}>
                Reset
              </button>
            </div>
            <div className="setting-box">
              {/* The form for setting player names is represented by a <form> element
              with the className attribute "setting-player-container".
              Inside it, there is a <label> element that displays 
              the value of firstPlayer.name.
              The name can be edited using an <input> element,
              with its value being read from the firstPlayerName state,
              and the changes being handled by the setFirstPlayerName 
              state setter function. */}
              <form className="setting-player-container">
                <label className="setting-title setting-new-margin" name="First-player-name">
                  {firstPlayer.name}
                </label>
                <input
                  type="text"
                  value={firstPlayerName}
                  name="First-player-name"
                  className="setting-player-name"
                  onChange={(event) => {
                    setFirstPlayerName(event.target.value);
                  }}
                />
                <label name="First-player-color" className="setting-color-picker">
                  {/* A játékosok színeinek beállításához a legördülő menüt 
                  a <select> elem biztosítja.
                  A színek a colors tömb alapján jelennek meg,
                  és a firstPlayerColor állapotban tárolt érték határozza 
                  meg a kiválasztott színt.
                  Az aktuális színt a háttérszín alapján jeleníti meg. */}
                  <select
                    name="Second-player-color"
                    onChange={(event) => {
                      setFirstPlayerColor(event.target.value);
                    }}
                    value={firstPlayerColor}
                    className="setting-drop-down"
                  >
                    {colors.map((color) => (
                      color.hexValue !== secondPlayerColor && (
                        <option
                          key={color.hexValue}
                          value={color.hexValue}
                          style={{ backgroundColor: color.hexValue }}
                          className="setting-drop-down"
                        >
                          {color.name}
                        </option>
                      )
                    ))}
                  </select>
                </label>
                <label name="symbols">
                  {/* The dropdown menu for setting player 
                  colors is provided by the <select> element.
                  The colors are displayed based on the colors array,
                  and the selected color is determined by 
                  the value stored in firstPlayerColor state.
                  The current color is displayed based on the background color. */}
                  <select
                    name="Second-player-color"
                    value={firstPlayerSymbol}
                    onChange={(event) => {
                      setFirstPlayerSymbol(event.target.value);
                    }}
                    className="setting-drop-down"
                  >
                    <option disabled className="default-option">
                      Select a symbol
                    </option>
                    {symbols.map((symbol) => (
                      symbol !== secondPlayerSymbol && (
                        <option
                          key={symbol}
                          value={symbol}
                          onClick={() => setSecondPlayerSymbol(symbol)}
                        >
                          {symbol}
                        </option>
                      )
                    ))}
                  </select>
                </label>
                {/* The dropdown menu for setting player 
                symbols is also represented by a <select> element.
                The symbols are displayed based on the symbols array,
                and the selected symbol is determined by the value 
                stored in firstPlayerSymbol state.
                Upon selection, the setFirstPlayerSymbol function 
                is called to set the selected symbol. */}
                <button
                  type="submit"
                  className="submit-button"
                  onClick={(event) => handleFirstPlayerEdit(event)}
                >
                  Set Changes
                </button>
              </form>
              <form className="setting-player-container">
                <label className="setting-title" name="Second-player-name">
                  {secondPlayer.name}
                </label>
                <input
                  type="text"
                  value={secondPlayerName}
                  name="Second-player-name"
                  className="setting-player-name"
                  onChange={(event) => {
                    setSecondplayerName(event.target.value);
                  }}
                />
                <label className="setting-color-picker" name="First-player-color">
                  <select
                    name="Second-player-color"
                    value={secondPlayerColor}
                    onChange={(event) => {
                      setSecondPlayerColor(event.target.value);
                    }}
                    className="setting-drop-down"
                  >
                    {colors.reverse().map((color) => (
                      color.hexValue !== firstPlayerColor && (
                        <option
                          key={color.hexValue}
                          value={color.hexValue}
                          className="setting-colors setting-drop-down"
                          style={{ backgroundColor: color.hexValue }}
                        >
                          {color.name}
                        </option>
                      )
                    ))}
                  </select>
                </label>
                <label name="symbols">
                  <select
                    name="Second-player-color"
                    value={secondPlayerSymbol}
                    onChange={(event) => {
                      setSecondPlayerSymbol(event.target.value);
                    }}
                    className="setting-drop-down setting-drop-down"
                  >
                    {symbols.reverse().map((symbol) => (
                      symbol !== firstPlayerSymbol && (
                        <option
                          key={symbol}
                          value={symbol}
                          className="setting-drop-down"
                          disabled={symbol === firstPlayerSymbol}
                          onClick={() => setSecondPlayerSymbol(symbol)}
                        >
                          {symbol}
                        </option>
                      )
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  className="submit-button"
                  onClick={(event) => handleSecondPlayerEdit(event)}
                >
                  Set Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}


// A Settings component allows for modifying the names, colors, 
// and symbols of the players. The settings can be adjusted using forms, 
// and the changes are applied by updating the 
// states and invoking the appropriate functions.