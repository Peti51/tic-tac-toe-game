import React from "react";
// Importing React from the "react" module.
// This allows us to use JSX syntax and define React components.
import { AnimatedPage, AnimateBackArrow } from "./AnimatedPage";
// Importing the AnimatedPage and AnimateBackArrow components from the
// "./AnimatedPage" module.
// These components define and use animations.
import { NavLink } from "react-router-dom";
import { Box } from "./Box";
import { GameOver } from "./GameOver";
import { UserInterFace } from "./UserInterFace";
import '../style/App.css'
import '../style/Board.css';
import '../style/App.css';
import '../style/Settings.css'
import myImage from '../images/arrow.png';
// Importing the "../images/arrow.png" image file into the myImage variable, which contains an arrow.

// Exporting the Board component to be used in other files.
// The component is passed several props, such as board,
// handleBoxSelection, isCantMoveAgain, scores, etc.
export const Board = ({
  board,
  handleBoxSelection,
  isCantMoveAgain,
  scores,
  xPlaying,
  resetBoard, 
  firstPlayer,
  secondPlayer,
  isGameOver,
  winnerPlayer,
  setIsGameOver,
}) => {
  return (
    <>
      <div className="Big-board-container">
          <AnimateBackArrow>
            <div className="board-back-arrow-container">
                <NavLink 
                    to='/menu'
                    className="back-arrow"
                >
                    <img src={myImage} alt="arrow" />
                </NavLink>
            </div>
          </AnimateBackArrow>
          <div className='App-main-container'>
            <AnimatedPage>
              <div className="Board">
                {board.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    {row.map((value, colIndex) => (
                      <Box
                        key={colIndex}
                        value={value}
                        handleSelection={() => handleBoxSelection(rowIndex, colIndex)}
                        isCantMoveAgain={isCantMoveAgain}
                        firstPlayer={firstPlayer}
                        secondPlayer={secondPlayer}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </AnimatedPage>
            <AnimatedPage>
              <UserInterFace 
                  scores={scores} 
                  xPlaying={xPlaying}
                  resetBoard={resetBoard}
                  firstPlayer={firstPlayer}
                  secondPlayer={secondPlayer}
              />
            </AnimatedPage>
          </div>
        </div>
        {isGameOver && (
          <GameOver
            resetBoard={resetBoard}
            winnerPlayer={winnerPlayer}
            setIsGameOver={setIsGameOver}
            firstPlayer={firstPlayer}
            secondPlayer={secondPlayer}
          />
        )} 
    </>   
  )
}
