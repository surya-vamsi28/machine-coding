"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
const GridLights = () => {
  const [selected, setSelected] = useState<any[]>([]);

  const reverseTimer = () => {
    let interval: any;
    interval = setInterval(() => {
      setSelected((selectedArray) => {
        const array = [...selectedArray];
        array.pop();
        if (selectedArray.length === 1) {
          clearInterval(interval);
        }
        return [...array];
      });
    }, 1000);
  };

  const blockClickHanlder = (e: any) => {
    setSelected([...selected, e.target.id]);
  };

  useEffect(() => {
    if (selected.length === 8) {
      reverseTimer();
    }
  }, [selected]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnWrapper}></div>
      {Array(3)
        .fill(0)
        .map((_, index1) => (
          <div className={styles.rowWrapper} key={index1}>
            {Array(3)
              .fill(0)
              .map((_, index2) => {
                const value = String(index1 * 3 + index2);
                if (index1 === 1 && index2 === 1) {
                  return <div key={index2} className={styles.box} />;
                }
                return (
                  <div
                    key={index2}
                    className={
                      selected.includes(value)
                        ? styles.hightlighted
                        : styles.box
                    }
                    id={value}
                    onClick={
                      selected.includes(value) ? undefined : blockClickHanlder
                    }
                  />
                );
              })}
          </div>
        ))}
    </div>
  );
};

export default GridLights;
