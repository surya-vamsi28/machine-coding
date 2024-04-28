"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Modal from "@/components/model";

const TicTacToe = () => {
  const displayArray = [
    ["T", "I", "C"],
    ["T", "A", "C"],
    ["T", "O", "E"],
  ];

  const array = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ];

  const [gameStatus, setGameStatus] = useState<string>("start");
  const [currentPlay, setCurrentPlay] = useState<string>("X");
  const [gameplay, setGamePlay] = useState<string[][]>([...displayArray]);
  const [winner, setWinner] = useState<string>("X");
  const [isModelOpen, setModelOpen] = useState<boolean>(false);

  const startButtonHandler = () => {
    setGameStatus("inProgress");
    setCurrentPlay("X");
    setGamePlay([...array]);
  };

  const gridClick = (x: number, y: number) => {
    if (
      gameplay[x][y] !== "X" &&
      gameplay[x][y] !== "O" &&
      gameplay[x][y] === "." &&
      gameStatus === "inProgress"
    ) {
      let tempGrid = [...gameplay];
      tempGrid[x][y] = currentPlay;
      setGamePlay(tempGrid);
      if (currentPlay === "X") {
        setCurrentPlay("O");
      } else {
        setCurrentPlay("X");
      }
    }
  };

  useEffect(() => {
    if (gameStatus === "inProgress") {
      const result = validateGrid();
      if (result) {
        setWinner(result);
        setGameStatus("completed");
        setModelOpen(true);
      }
    }
  }, [gameplay]);

  const validateGrid = () => {
    for (let i = 0; i < 3; i++) {
      const check = gameplay[i][0];
      const check2 = gameplay[0][i];
      for (let j = 1; j < 3; j++) {
        if (gameplay[i][j] !== check) {
          break;
        }
        if (gameplay[i][j] === ".") {
          break;
        }
        if (gameplay[i][j] === check && j === 2) {
          return check;
        }
      }
      for (let j = 1; j < 3; j++) {
        if (gameplay[j][i] !== check2) {
          break;
        }
        if (gameplay[j][i] === ".") {
          break;
        }
        if (gameplay[j][i] === check2 && j === 2) {
          return check2;
        }
      }
    }
    const check3 = gameplay[0][0];
    const check4 = gameplay[0][2];
    for (let i = 1; i < 3; i++) {
      if (
        check3 === "." ||
        gameplay[i][i] === "." ||
        check3 !== gameplay[i][i]
      ) {
        break;
      }
      if (i === 2 && check3 === gameplay[i][i]) {
        return check3;
      }
    }
    for (let i = 1; i < 3; i++) {
      const item1 = gameplay[i][2 - i];
      if (check4 === ".") {
        break;
      }
      if ("." === item1) {
        break;
      }
      if (check4 !== item1) {
        break;
      }
      if (i === 2 && check4 === item1) {
        return check4;
      }
    }

    return false;
  };

  const reset = () => {
    setGameStatus("start");
    setGamePlay([...displayArray]);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.tableWrapper}>
        <Modal isOpen={isModelOpen} onClose={() => setModelOpen(false)}>
          <div className={styles.modalProgressWrapper}>
            <div className={styles.winnerText}>Winner</div>
            <div className={styles.winner}>{winner}</div>
          </div>
        </Modal>
        <div className={styles.rowWrapper}>
          {gameplay.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className={styles.columnWrapper}>
                {row.map((col, colIndex) => {
                  return (
                    <div
                      key={colIndex}
                      className={`${styles.item} ${col === "X" ? styles.xGrid : ""} `}
                      onClick={() => {
                        gridClick(rowIndex, colIndex);
                      }}
                    >
                      {col !== "." ? col : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <button className={styles.resetButton} onClick={reset}>
          Reset
        </button>
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.mainTitle}>TIC TAC TOE</div>
        {gameStatus === "start" ? (
          <button
            type="button"
            className={styles.startButton}
            onClick={startButtonHandler}
          >
            Start
          </button>
        ) : null}
        {gameStatus === "inProgress" ? (
          <div className={styles.progressWrapper}>
            <div className={styles.playerText}>Current Player</div>
            <div className={styles.player}>{currentPlay}</div>
          </div>
        ) : null}
        {gameStatus === "completed" ? (
          <div className={styles.progressWrapper}>
            <div className={styles.winnerText}>Winner</div>
            <div className={styles.winner}>{winner}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TicTacToe;
