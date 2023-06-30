// This module is responsible for displaying and managing the 
// main component of the application.
// The application uses React Router to handle different pages.
import React, { useState, useEffect, useCallback } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import '../style/App.css';
import { Login } from './Login';
import { Board } from './Board';
import { NotFoundPage } from '../components/NotFoundPage.jsx';
import { MainMenu } from './MainMenu.jsx';
import { Settings } from './Settings';

const currentUserName = 'Peti';
const currentPassword = '12345';

// The main component of the application.
// It manages the state of the game board, 
// players, and controls the game progress,
// including checking for a winner or a draw, 
// and switching between pages.
function App() {
  const winningLength = 5;
  const [board, setBoard] = useState(Array.from(
      { length: 10 }, () => Array(10).fill(null)
    ));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCantMoveAgain, setIsCantMoveAgain] = useState(false);
  const [firstPlayer, setFirstPlayer] = useState({
    name: 'First player',
    color: '#33ccff',
    symbol: 'X',
  });
  const [secondPlayer, setSecondPlayer] = useState({
    name: 'Second player',
    color: '#ff9933',
    symbol: 'O',
  });

// Checks if there is a winner on the game board.
// @returns {string|null} The symbol ('X', 'O') of the winning player,
// 'draw' if it's a draw, or null if 
  const checkWinner = useCallback(() => {
    if (!board || board.length === 0) {
    return null; // Handles the case when the length of the board is undefined due to some error.
  }
    const rows = board.length;
    const cols = board[0].length;

    let winner = null;

    // Checks if any player has a winning line of 5 symbols in any row.
    board.forEach((row) => {
      row.forEach((_, col) => {
        if (col < cols - winningLength + 1) {
          let isWinningLine = true;
          const marker = row[col];
          if (!marker) return;

          for (let i = 1; i < winningLength; i++) {
            if (row[col + i] !== marker) {
              isWinningLine = false;
              break;
            }
          }

          if (isWinningLine) {
            winner = marker;
            return;
          }
        }
      });
    });

    // Checks if any player has a winning line of 5 symbols in any column.
    board[0].forEach((_, col) => {
      board.forEach((_, row) => {
        if (row < rows - winningLength + 1) {
          let isWinningLine = true;
          const marker = board[row][col];
          if (!marker) return;

          for (let i = 1; i < winningLength; i++) {
            if (board[row + i][col] !== marker) {
              isWinningLine = false;
              break;
            }
          }

          if (isWinningLine) {
            winner = marker;
            return;
          }
        }
      });
    });

    // Checks if any player has a winning line of 5 symbols in any diagonal (top-left to bottom-right).
    board.forEach((_, row) => {
      board[row].forEach((_, col) => {
        if (row < rows - winningLength + 1 && col < cols - winningLength + 1) {
          let isWinningLine = true;
          const marker = board[row][col];
          if (!marker) return;

          for (let i = 1; i < winningLength; i++) {
            if (board[row + i][col + i] !== marker) {
              isWinningLine = false;
              break;
            }
          }

          if (isWinningLine) {
            winner = marker;
            return;
          }
        }
      });
    });

    // Checks if any player has a winning line of 5 symbols in any diagonal (top-right to bottom-left).
    board.forEach((_, row) => {
      board[row].forEach((_, col) => {
        if (row < rows - winningLength + 1 && col >= winningLength - 1) {
          let isWinningLine = true;
          const marker = board[row][col];
          if (!marker) return;

          for (let i = 1; i < winningLength; i++) {
            if (board[row + i][col - i] !== marker) {
              isWinningLine = false;
              break;
            }
          }

          if (isWinningLine) {
            winner = marker;
            return;
          }
        }
      });
    });

    if (winner) {
      return winner;
    }

    // Checks for a draw
    if (board.every((row) => row.every((value) => value !== null))) {
      return 'draw';
    }
  }, [board, winningLength]);

  // This function handles the placement of the characters in the board.
  const handleBoxClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] === null && !isGameOver) {
      const updatedBoard = board.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((value, cIndex) =>
              cIndex === colIndex
                ? xPlaying
                  ? firstPlayer.symbol
                  : secondPlayer.symbol
                : value
            )
          : row
      );
      setBoard(updatedBoard);
      setXPlaying(!xPlaying);
    }
  };


  // Ez a function expression kezeli a játék újrakezdését.
  const resetBoard = () => {
    setIsGameOver(false);
    setIsCantMoveAgain(false);
    const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
    setBoard(initialBoard);
    setXPlaying(true);
  };

  const winnerPlayer = checkWinner();

  useEffect(() => {
    // This if block handles displaying the popup window with the name of the winner,
    // disabling further moves if there is a winner,
    // and updating the scores.
    const winner = checkWinner();

    if (winner === 'draw') {
      setIsGameOver(true);
      setIsCantMoveAgain(true);
    } else if (winner) {
      setIsGameOver(true);
      setIsCantMoveAgain(true);
      if (winner === secondPlayer.symbol) {
        setScores((prevScores) => ({ ...prevScores, oScore: prevScores.oScore + 1 }));
      } else {
        setScores((prevScores) => ({ ...prevScores, xScore: prevScores.xScore + 1 }));
      }
    }
  }, [board, checkWinner, setScores, firstPlayer, secondPlayer]);

  return (
    <div className="App">
      <>
      {/* The Routes component contains the other components: the game board,
          the settings menu, and the main menu.
          Additionally, if there is an issue with the Router, 
          the NotFoundPage component is rendered. */}
        <Routes>
          <Route path="/" element={<Login currentUserName={currentUserName} currentPassword={currentPassword} />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route
            path="/menu/board"
            element={
              <Board
                board={board}
                handleBoxSelection={handleBoxClick}
                isCantMoveAgain={isCantMoveAgain}
                scores={scores}
                xPlaying={xPlaying}
                resetBoard={resetBoard}
                firstPlayer={firstPlayer}
                secondPlayer={secondPlayer}
                isGameOver={isGameOver}
                winnerPlayer={winnerPlayer}
                setIsGameOver={setIsGameOver}
              />
            }
          />
          <Route
            path="/menu/settings"
            element={
              <Settings
                setSecondPlayer={setSecondPlayer}
                setFirstPlayer={setFirstPlayer}
                firstPlayer={firstPlayer}
                secondPlayer={secondPlayer}
                resetBoard={resetBoard}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;