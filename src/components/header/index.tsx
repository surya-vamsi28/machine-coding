"use client"
import styles from "./styles.module.css";
import homeIcon from "../../../public/assests/home.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
        <div className={styles.header}>
            <div>Machine Coding</div>
            <Image src={homeIcon} alt='icon' onClick={() => {router.push('/')}} className={styles.icon}/>
        </div>
    )
}

export default Header