// Ez a modul felelős az alkalmazás fő komponensének megjelenítéséért és állapotkezeléséért.
// Az alkalmazás React Router-t használ a különböző oldalak kezeléséhez.
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

// Az alkalmazás fő komponense.
// Kezeli a játéktábla állapotát, a játékosok állapotás,
// ez a komponens ellenőrzi, hogy a 
// játék állását azaz ki a nyertes vagy a játék döntetlen e,
// valmint itt váltakoznak az oldalak.
function App() {
  const winningLength = 5;
  const [board, setBoard] = useState(Array.from(
      { length: 10 }, () => Array(10).fill(null)
    ));
  // Ez a 
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

// Ellenőrzi, hogy van-e győztes a játéktáblán.
// @returns {string|null} A győztes játékos jelkódja ('X', 'O') vagy 'draw', ha döntetlen, vagy null, ha nincs győztes.

  const checkWinner = useCallback(() => {
    if (!board || board.length === 0) {
    return null; // Azt az állapotot kezeli ha, valamilyen hiba miatt a tábla hossza('lenght') undefined lenne
  }
    const rows = board.length;
    const cols = board[0].length;

    let winner = null;

    // Ellenőrzi, hogy valamelyik sorban valamelyik játékosnak kigyűlt-e az 5 egymásmelleti jel.
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

    // Ellenőrzi, hogy valamelyik oszlopban valamelyik játékosnak kigyűlt-e az 5 egymásmelleti jel.
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

// Ellenőrzi, hogy valamelyik átlóban az egyik játékosnak kigyűlt-e az 5 egymásmelleti jel. (bal felső sarokból-ből a jobb-alsó sarokba)
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

// Ellenőrzi, hogy valamelyik átlóban valamelyik játékosnak kigyűlt-e az 5 egymásmelleti jel. (jobb-felső sarokból-ből a bal-alsó sarokba)
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

    // Ellenőrzi a döntetlent
    if (board.every((row) => row.every((value) => value !== null))) {
      return 'draw';
    }
  }, [board, winningLength]);

  // Ez a function kezeli a 
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
    // Ez az if block kezeli a gyöztes nevét kiíró felugró ablak megjelenítését, 
    // hogy ne lehessen új jelet letenni ha van egy gözetes,
    //  valamint az eredmény kijelzését is ez a block kezeli.
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
      {/* A Routes-ban van a többi komponens a tábla a beállítások menüpont('Settings'), 
          valamint a főmenu. Valamint abban az esetben ha probléma lenne
          a Router-el akkor itt jelenik meg a NotFoundPage*/}
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