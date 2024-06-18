"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { debounceMaker } from "../../utils/utils";
import Head from "next/head";

let timeout: any;
const Search = () => {
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (e: any) => {
    setSearchText(e.target.value);
  };

  const debounceFn = debounceMaker(updateSearchText, 250);

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={debounceFn} className={styles.textBox} />
      <div className={styles.textWrapper}>
        <div className={styles.description}>Text Entered :</div>
        <div className={styles.textEntered}>{searchText}</div>
      </div>
    </div>
  );
};

export default Search;
