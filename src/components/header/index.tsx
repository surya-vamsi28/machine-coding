"use client"
import styles from "./styles.module.css";
import homeIcon from "../../../public/assests/home.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    return (
        <div className={styles.header}>
            <div>Machine Coding</div>
            <Link href="/" as='/'>
            <Image src={homeIcon} alt='icon' className={styles.icon}/>
            </Link>
        </div>
    )
}

export default Header