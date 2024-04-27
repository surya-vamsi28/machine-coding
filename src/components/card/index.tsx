
"use client"

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";


const Card = (props: any) => {
  const router = useRouter();
  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => {
          router.push(props.link, props.link);
        }}
      >
        <div className={styles.title}>{props.title}</div>
      </div>
    </>
  );
};

export default Card;
