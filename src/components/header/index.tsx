/* eslint-disable @next/next/no-head-element */
"use client";
import styles from "./styles.module.css";
import homeIcon from "../../../public/assests/home.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { logout, login } from "@/reducer/login";
import Head from "next/head";

const Header = () => {
  const isUserLoggedIn = useSelector(
    (state: any) => state.login.isUserLoggedIn
  );
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("Machine Coding");

  useEffect(() => {
    if (pathName === "/") {
      setTitle("Machine Coding");
    } else if (pathName === "/timer") {
      setTitle("Timer");
    } else if (pathName === "/countdown") {
      setTitle("Countdown");
    } else if (pathName === "/throttle") {
      setTitle("Throttle");
    } else if (pathName === "/tictactoe") {
      setTitle("Tic Tac Toe");
    } else if (pathName === "/debounce") {
      setTitle("Debounce");
    } else if (pathName === "/todolist") {
      setTitle("To Do List");
    } else if (pathName === "/login") {
      setTitle("Login");
    } else {
      setTitle("Machine Coding");
    }
  }, [pathName]);

  useEffect(() => {
    if (window.localStorage.getItem("user") === "true") {
      dispatch(login());
    }
  }, [pathName]);

  const loginHandler = () => {
    if (isUserLoggedIn) {
      dispatch(logout());
      window.localStorage.setItem("user", "");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={styles.header}>
      <head>
        <title>{title}</title>
      </head>
      <div>Machine Coding</div>
      <div className={styles.buttonWrapper}>
        <button className={styles.loginButton} onClick={loginHandler}>
          {isUserLoggedIn ? "Logout" : "Login"}
        </button>
        <Link href="/" as="/" className={styles.anchor}>
          <Image src={homeIcon} alt="icon" className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
