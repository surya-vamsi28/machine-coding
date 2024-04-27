"use client";
import styles from "./styles.module.css";
import homeIcon from "../../../public/assests/home.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (window.localStorage.getItem("user") === "true") {
      setIsLoggedIn(true);
    }
  }, [pathName]);

  const loginHandler = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      window.localStorage.setItem("user", "");
    } else {
        router.push('/login')
    }
  };

  return (
    <div className={styles.header}>
      <div>Machine Coding</div>
      <div className={styles.buttonWrapper}>
        <button className={styles.loginButton} onClick={loginHandler}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <Link href="/" as="/">
          <Image src={homeIcon} alt="icon" className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
