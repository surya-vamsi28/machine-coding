import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        <Card title={"Debounce"} link={"/debounce"}/>
        <Card title={"ToDo List"} link={"/todolist"}/>
        <Card title={"Throttle"} link={"/throttle"}/>
        <Card title={"Tic Tac Toe"} link={"/tictactoe"}/>
        <Card title={"Timer"} link={"/timer"}/>
        <Card title={"CountDown"} link={"/countdown"}/>
        <Card title={"Comments"} link={"/comments"}/>
        <Card title={"Grid Lights"} link={"/gridlights"}/>
        <Card title={"File System"} link={"/filesystem"}/>
      </div>
    </div>
  );
}
