"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Timer = () => {
  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        console.log(seconds, minutes, hour);
        if (seconds === 59) {
          if (minutes === 59) {
            setHour((prevHours) => prevHours + 1);
            setMinutes(0);
          } else {
            setMinutes((prev) => prev + 1);
          }
          setSeconds(0);
        } else {
          setSeconds((prev) => prev + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, hour, minutes, seconds]);

  const reset = () => {
    setIsActive(false);
    setHour(0);
    setMinutes(0);
    setSeconds(0);
  }
  return (
    <div className={styles.pageWrapper}>
      <div
        className={styles.timerText}
      >{`${hour < 10 ? `0${hour}` : hour}: ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`}</div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.startButton}
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button className={styles.resetButton} onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
