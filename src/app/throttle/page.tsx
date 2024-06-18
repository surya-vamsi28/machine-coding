"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./style.module.css";
import { throttleMaker } from "../../utils/utils";
import Head from "next/head";

const Search = () => {
  const [clicked, setClicked] = useState<string[]>([]);

  const updateArray = () => {
    setClicked((clicked) => [...clicked, "clicked"]);
  };

  const throttledFn = useCallback(throttleMaker(updateArray, 3000), [])
  
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={throttledFn} className={styles.button}>
        Click Me
      </button>
      <div className={styles.textWrapper}>
        <div className={styles.description}>Click :</div>
        {clicked.map((click: string, index: number) => (
          <div key={index} className={styles.textEntered}>
            {click}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
