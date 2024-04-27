"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CountDown = () => {
  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const reset = () => {
    setIsActive(false);
    setHour(0);
    setMinutes(0);
    setSeconds(0);
  };

  const addHour = () => {
    setHour((prev) => prev + 1);
  };

  const addMinute = () => {
    if (minutes === 59) {
      setMinutes(0);
      setHour((prev) => prev + 1);
    } else {
      setMinutes((prev) => prev + 1);
    }
  };

  const addSecond = () => {
    if (seconds === 59) {
      if (minutes === 59) {
        setMinutes(0);
        setHour((prev) => prev + 1);
      } else {
        setMinutes((prev) => prev + 1);
      }
      setSeconds(0);
    } else {
      setSeconds((prev) => prev + 1);
    }
  };

  const minusHour = () => {
    if (hour > 0) {
      setHour((prev) => prev - 1);
    }
  };

  const minusMinute = () => {
    if (minutes > 0) {
      setMinutes((prev) => prev - 1);
    }
  };

  const minusSecond = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        console.log(seconds, minutes, hour);
        if (seconds === 0 && minutes === 0 && hour === 0) {
          clearInterval(interval);
          setIsActive(false);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setHour((prevHours) => prevHours - 1);
            setMinutes(59);
          } else {
            setMinutes((prev) => prev - 1);
          }
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, hour, minutes, seconds]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.timerText}>{`${hour < 10 ? `0${hour}` : hour}: ${
        minutes < 10 ? `0${minutes}` : minutes
      }: ${seconds < 10 ? `0${seconds}` : seconds}`}</div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.startButton}
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button className={styles.resetButton} onClick={reset}>
          Reset
        </button>
      </div>
      {!isActive ? (
        <div className={styles.optionWrapper}>
          <div className={styles.option}>
            <div className={styles.optionTitle}>Hour</div>
            <div className={styles.plus} onClick={addHour}>
              +
            </div>
            <div className={styles.plus} onClick={minusHour}>
              -
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.optionTitle}>Minute</div>
            <div className={styles.plus} onClick={addMinute}>
              +
            </div>
            <div className={styles.plus} onClick={minusMinute}>
              -
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.optionTitle}>Second</div>
            <div className={styles.plus} onClick={addSecond}>
              +
            </div>
            <div className={styles.plus} onClick={minusSecond}>
              -
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default CountDown;
